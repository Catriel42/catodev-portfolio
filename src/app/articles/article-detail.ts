import { Component, inject, signal, effect } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Data } from '../data';
import { Article } from '../models';
import { marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import markedAlert from 'marked-alert';
import hljs from 'highlight.js';
import { LucideArrowLeft, LucideCalendar, LucideTag } from '@lucide/angular';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

marked.use(markedHighlight({
  emptyLangClass: 'hljs',
  langPrefix: 'hljs language-',
  highlight(code, lang) {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext';
    return hljs.highlight(code, { language }).value;
  }
}));

marked.use(markedAlert());

@Component({
  selector: 'app-article-detail',
  imports: [RouterLink, DatePipe, LucideArrowLeft, LucideCalendar, LucideTag],
  template: `
    <article class="max-w-3xl mx-auto py-12 animate-fade-in">
      <a routerLink="/articles" class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-app-muted hover:text-primary transition-colors mb-12 group">
        <svg lucideArrowLeft class="w-4 h-4 group-hover:-translate-x-1 transition-transform"></svg>
        Back to Articles
      </a>

      @if (article()) {
        <header class="mb-12">
          <div class="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-app-muted mb-6 flex-wrap">
            <span class="px-3 py-1 bg-primary text-white rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]">
              {{ article()?.type }}
            </span>
            <div class="flex items-center gap-2">
              <svg lucideCalendar class="w-4 h-4"></svg>
              <time>{{ article()?.date | date:'longDate' }}</time>
            </div>
          </div>

          <h1 class="text-4xl md:text-5xl font-black tracking-tight text-app-fg mb-6">
            {{ article()?.title }}
          </h1>

          <div class="flex items-center gap-2 flex-wrap">
            <svg lucideTag class="w-4 h-4 text-app-muted"></svg>
            @for (tag of article()?.tags; track tag) {
              <span class="px-2 py-1 text-[10px] bg-app-card border border-app-border rounded font-bold uppercase text-app-muted">
                {{ tag }}
              </span>
            }
          </div>
        </header>

        @if (article()?.imageUrl) {
          <div class="w-full h-[400px] rounded-xl overflow-hidden mb-12 border border-app-border shadow-[8px_8px_0px_0px_var(--color-app-border)]">
            <img [src]="article()?.imageUrl" [alt]="article()?.title" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
        }

        <div class="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary-light prose-img:rounded-xl prose-img:border prose-img:border-app-border"
             [innerHTML]="htmlContent()">
        </div>
      } @else {
        <div class="text-center py-20">
          <h2 class="text-2xl font-bold text-app-fg mb-4">Article not found</h2>
          <p class="text-app-muted mb-8">The article or workshop you are looking for does not exist.</p>
          <a routerLink="/" class="px-6 py-3 bg-primary text-white font-bold rounded uppercase text-sm tracking-widest hover:bg-primary-light transition-colors">Go Home</a>
        </div>
      }
    </article>
  `,
  styles: [`
    .animate-fade-in {
      animation: fadeIn 0.5s ease-out forwards;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class ArticleDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly data = inject(Data);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly http = inject(HttpClient);

  public readonly article = signal<Article | undefined>(undefined);
  public readonly htmlContent = signal<SafeHtml>('');

  constructor() {
    effect(() => {
      const current = this.article();
      if (!current) return;

      if (current.contentUrl) {
        // Fetch markdown from file
        this.http.get(current.contentUrl, { responseType: 'text' }).subscribe({
          next: (content) => this.parseAndSetHtml(content),
          error: (err) => {
            console.error('Failed to load markdown', err);
            this.htmlContent.set(this.sanitizer.bypassSecurityTrustHtml('<p>Failed to load content.</p>'));
          }
        });
      } else if (current.content) {
        // Use inline markdown
        this.parseAndSetHtml(current.content);
      }
    });

    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      if (slug) {
        const found = this.data.articles().find(a => a.slug === slug);
        if (found) {
          this.article.set(found);
        } else {
          this.article.set(undefined);
        }
      }
    });
  }

  private parseAndSetHtml(markdown: string) {
    const parsed = marked.parse(markdown);
    if (typeof parsed === 'string') {
       this.htmlContent.set(this.sanitizer.bypassSecurityTrustHtml(parsed));
    } else {
       parsed.then(res => this.htmlContent.set(this.sanitizer.bypassSecurityTrustHtml(res)));
    }
  }
}
