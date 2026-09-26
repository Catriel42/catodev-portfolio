import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home').then(m => m.Home) },
  { path: 'articles', loadComponent: () => import('./articles/articles-list').then(m => m.ArticlesList) },
  { path: 'articles/:slug', loadComponent: () => import('./articles/article-detail').then(m => m.ArticleDetail) },
  { path: 'talks/ia-en-aws', loadChildren: () => import('./talks/ia-en-aws/talk.routes').then(m => m.TALK_ROUTES) },
  { path: '**', redirectTo: '' }
];
