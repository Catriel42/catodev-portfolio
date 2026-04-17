import { Component, inject } from '@angular/core';
import { Data } from '../data';
import { LucideCode, LucideExternalLink } from '@lucide/angular';

@Component({
  selector: 'app-projects',
  imports: [LucideCode, LucideExternalLink],
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
                  <svg lucideCode class="w-4 h-4"></svg>
                  Repository
                </a>
                
                @if (project.deployUrl) {
                  <a [href]="project.deployUrl" target="_blank" class="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:text-primary-light transition-colors">
                    <svg lucideExternalLink class="w-4 h-4"></svg>
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
