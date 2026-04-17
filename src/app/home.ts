import { Component, inject } from '@angular/core';
import { Hero } from './hero/hero';
import { Projects } from './projects/projects';
import { Experience } from './experience/experience';

@Component({
  selector: 'app-home',
  imports: [Hero, Projects, Experience],
  template: `
    <app-hero />
    <app-projects />
    <app-experience />
  `,
})
export class Home {}
