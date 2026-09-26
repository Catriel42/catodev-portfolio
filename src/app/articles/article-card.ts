import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Article } from '../models';
import { LucideArrowRight, LucideBookOpen } from '@lucide/angular';

@Component({
  selector: 'app-article-card',
  imports: [RouterLink, DatePipe, LucideArrowRight, LucideBookOpen],
  template: `
    <article class="group relative bg-app-card border border-app-border rounded-lg overflow-hidden hover:border-primary/50 transition-all flex flex-col h-full">
      <a [routerLink]="article().linkUrl ?? ['/articles', article().slug]" class="block h-44 sm:h-48 overflow-hidden relative cursor-pointer">
        <img [src]="article().imageUrl" [alt]="article().title" class="w-full h-full object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-500 md:group-hover:scale-105" />
        <div class="absolute inset-0 bg-gradient-to-t from-app-bg to-transparent opacity-60"></div>
        
        <div class="absolute top-3 sm:top-4 left-3 sm:left-4">
          @if (article().type === 'talk') {
            <span class="px-2.5 sm:px-3 py-1 text-[9px] sm:text-[10px] font-black uppercase tracking-widest rounded bg-[#FF9900] text-zinc-950 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]">
              TALK &amp; SLIDES
            </span>
          } @else {
            <span class="px-2.5 sm:px-3 py-1 text-[9px] sm:text-[10px] font-black uppercase tracking-widest rounded bg-primary text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]">
              {{ article().type }}
            </span>
          }
        </div>

        <div class="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 flex gap-1.5 sm:gap-2 flex-wrap">
          @for (tag of article().tags; track tag) {
            <span class="px-2 py-0.5 sm:py-1 text-[9px] sm:text-[10px] bg-app-card/90 border border-app-border rounded font-bold uppercase text-app-muted">
              {{ tag }}
            </span>
          }
        </div>
      </a>
      
      <div class="p-5 sm:p-6 flex flex-col flex-grow gap-3 sm:gap-4">
        <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-app-muted">
          <svg lucideBookOpen class="w-4 h-4"></svg>
          <time>{{ article().date | date:'mediumDate' }}</time>
        </div>

        <h3 class="text-xl sm:text-2xl font-bold tracking-tight text-app-fg group-hover:text-primary transition-colors">
          <a [routerLink]="article().linkUrl ?? ['/articles', article().slug]">
            {{ article().title }}
          </a>
        </h3>
        
        <p class="text-app-muted text-sm leading-relaxed flex-grow">
          {{ article().excerpt }}
        </p>
        
        <div class="pt-4 border-t border-app-border">
          <a [routerLink]="article().linkUrl ?? ['/articles', article().slug]" class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:text-primary-light transition-colors group/link">
            @if (article().type === 'talk') {
              Read Talk
            } @else {
              Read More
            }
            <svg lucideArrowRight class="w-4 h-4 group-hover/link:translate-x-1 transition-transform"></svg>
          </a>
        </div>
      </div>
    </article>
  `
})
export class ArticleCard {
  article = input.required<Article>();
}
