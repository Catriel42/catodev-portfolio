import { Component, inject, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Data } from '../data';
import { ArticleCard } from './article-card';

@Component({
  selector: 'app-articles-preview',
  imports: [RouterLink, ArticleCard],
  template: `
    <section id="articles" class="py-16 sm:py-20 border-t border-app-border">
      <div class="flex items-center justify-between mb-8 sm:mb-12">
        <div class="flex items-center gap-3 sm:gap-4 flex-grow">
          <h2 class="text-2xl sm:text-4xl font-black uppercase tracking-tighter text-app-fg">Writing & Workshops</h2>
          <div class="h-[2px] flex-grow bg-app-border mr-2 sm:mr-4"></div>
        </div>
        <a routerLink="/articles" class="hidden md:block text-xs font-bold uppercase tracking-widest text-primary hover:text-primary-light transition-colors">
          View All
        </a>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        @for (article of latestArticles(); track article.id) {
          <app-article-card [article]="article" />
        }
      </div>

      <div class="mt-8 text-center md:hidden">
        <a routerLink="/articles" class="inline-block px-6 py-3 border border-app-border hover:border-primary transition-all rounded bg-app-card shadow-[4px_4px_0px_0px_var(--color-app-border)] active:translate-x-1px active:translate-y-1px active:shadow-none text-xs font-bold uppercase tracking-widest text-app-fg hover:text-primary">
          View All Articles
        </a>
      </div>
    </section>
  `
})
export class ArticlesPreview {
  private readonly data = inject(Data);
  // Get only the first 3 articles for the preview
  public readonly latestArticles = computed(() => this.data.articles().slice(0, 3));
}
