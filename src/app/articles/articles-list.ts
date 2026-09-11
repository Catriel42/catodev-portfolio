import { Component, inject } from '@angular/core';
import { Data } from '../data';
import { ArticleCard } from './article-card';

@Component({
  selector: 'app-articles-list',
  imports: [ArticleCard],
  template: `
    <div class="animate-fade-in py-12">
      <div class="mb-12">
        <h1 class="text-5xl font-black uppercase tracking-tighter text-app-fg mb-4">Writing & Workshops</h1>
        <p class="text-app-muted text-lg max-w-2xl">
          Thoughts on software engineering, front-end architecture, and guides for my workshops.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        @for (article of articles(); track article.id) {
          <app-article-card [article]="article" />
        }
      </div>
    </div>
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
export class ArticlesList {
  private readonly data = inject(Data);
  public readonly articles = this.data.articles;
}
