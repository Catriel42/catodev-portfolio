import { Routes } from '@angular/router';
import { Home } from './home';
import { ArticlesList } from './articles/articles-list';
import { ArticleDetail } from './articles/article-detail';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'articles', component: ArticlesList },
  { path: 'articles/:slug', component: ArticleDetail },
  { path: '**', redirectTo: '' }
];
