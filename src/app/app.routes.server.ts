import { inject } from '@angular/core';
import { RenderMode, ServerRoute } from '@angular/ssr';
import { Data } from './data';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'articles/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const data = inject(Data);
      return data.articles().map((article) => ({ slug: article.slug }));
    },
  },
  {
    path: 'talks/ia-en-aws',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'talks/ia-en-aws/:slide',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return Array.from({ length: 19 }, (_, i) => ({ slide: String(i) }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
