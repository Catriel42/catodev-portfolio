import { Component, inject } from '@angular/core';
import { Data } from '../data';

@Component({
  selector: 'app-projects',
  template: `
    <section id="projects" class="py-20 border-t border-app-border">
      <div class="flex items-center gap-4 mb-12">
        <h2 class="text-4xl font-black uppercase tracking-tighter text-app-fg">Selected Projects</h2>
        <div class="h-[2px] flex-grow bg-app-border"></div>
        <span class="text-primary font-mono text-sm font-bold">[0{{ projects().length }}]</span>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        @for (project of projects(); track project.id) {
          <article class="group relative bg-app-card border border-app-border rounded-lg overflow-hidden hover:border-primary/50 transition-all flex flex-col">
            <div class="h-64 overflow-hidden relative">
              <img [src]="project.imageUrl" [alt]="project.title" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-app-bg to-transparent opacity-60"></div>
              
              <div class="absolute bottom-4 left-4 flex gap-2">
                @for (tag of project.tags; track tag) {
                  <span class="px-2 py-1 text-[10px] bg-app-card/90 border border-app-border rounded font-bold uppercase text-app-muted">
                    {{ tag }}
                  </span>
                }
              </div>
            </div>
            
            <div class="p-6 flex flex-col flex-grow gap-4">
              <h3 class="text-2xl font-bold tracking-tight text-app-fg group-hover:text-primary transition-colors">
                {{ project.title }}
              </h3>
              
              <p class="text-app-muted text-sm leading-relaxed flex-grow">
                {{ project.description }}
              </p>
              
              <div class="flex gap-4 pt-4 border-t border-app-border">
                <a [href]="project.repoUrl" target="_blank" class="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-app-muted hover:text-app-fg transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  Repository
                </a>
                
                @if (project.deployUrl) {
                  <a [href]="project.deployUrl" target="_blank" class="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:text-primary-light transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    Live Demo
                  </a>
                }
              </div>
            </div>
          </article>
        }
      </div>
    </section>
  `,
})
export class Projects {
  private readonly data = inject(Data);
  public readonly projects = this.data.projects;
}
