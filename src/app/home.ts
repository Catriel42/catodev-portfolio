import { Component, inject } from '@angular/core';
import { Hero } from './hero/hero';
import { Projects } from './projects/projects';
import { Experience } from './experience/experience';
import { ArticlesPreview } from './articles/articles-preview';

@Component({
  selector: 'app-home',
  imports: [Hero, Projects, Experience, ArticlesPreview],
  template: `
    <app-hero />
    <app-projects />
    <app-experience />
    <app-articles-preview />
  `,
})
export class Home {}
