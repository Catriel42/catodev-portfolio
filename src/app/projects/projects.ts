import { Component, inject, signal, computed } from '@angular/core';
import { Data } from '../data';
import { LucideCode, LucideExternalLink } from '@lucide/angular';

export type ProjectArea = 'All' | 'Full-Stack & Web' | 'Backend & Cloud' | 'AI & Algorithms';

@Component({
  selector: 'app-projects',
  imports: [LucideCode, LucideExternalLink],
  template: `
    <section id="projects" class="py-16 sm:py-20 border-t border-app-border">
      <div class="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
        <h2 class="text-2xl sm:text-4xl font-black uppercase tracking-tighter text-app-fg">Selected Projects</h2>
        <div class="h-[2px] flex-grow bg-app-border"></div>
        <span class="text-primary font-mono text-xs sm:text-sm font-bold">
          [{{ filteredProjects().length < 10 ? '0' + filteredProjects().length : filteredProjects().length }}]
        </span>
      </div>

      <!-- Area Filter Chips -->
      <div class="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10">
        @for (area of availableAreas; track area) {
          <button
            type="button"
            (click)="selectedArea.set(area)"
            [class]="selectedArea() === area
              ? 'px-3 py-1.5 sm:px-4 sm:py-2 bg-primary text-white font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider rounded border border-primary shadow-[3px_3px_0px_0px_var(--color-primary-shadow)] translate-x-[1px] translate-y-[1px] transition-all'
              : 'px-3 py-1.5 sm:px-4 sm:py-2 bg-app-card hover:bg-app-bg text-app-muted hover:text-app-fg font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider rounded border border-app-border hover:border-primary/40 shadow-[2px_2px_0px_0px_var(--color-app-border)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all'">
            {{ area }}
            <span class="ml-1 opacity-75">({{ getCount(area) }})</span>
          </button>
        }
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        @for (project of filteredProjects(); track project.id) {
          <article class="group relative bg-app-card border border-app-border rounded-lg overflow-hidden hover:border-primary/50 transition-all flex flex-col shadow-[4px_4px_0px_0px_var(--color-app-border)] hover:shadow-[6px_6px_0px_0px_var(--color-primary-shadow)]">
            <div class="h-48 sm:h-64 overflow-hidden relative">
              <img [src]="project.imageUrl" [alt]="project.title" class="w-full h-full object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-500 md:group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-app-bg to-transparent opacity-60"></div>
              
              <div class="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 flex flex-wrap gap-1.5 sm:gap-2 pr-3 sm:pr-4">
                @for (tag of project.tags; track tag) {
                  <span class="px-2 py-0.5 sm:py-1 text-[9px] sm:text-[10px] bg-app-card/90 border border-app-border rounded font-bold uppercase text-app-muted">
                    {{ tag }}
                  </span>
                }
              </div>
            </div>
            
            <div class="p-5 sm:p-6 flex flex-col flex-grow gap-3 sm:gap-4">
              <h3 class="text-xl sm:text-2xl font-bold tracking-tight text-app-fg group-hover:text-primary transition-colors">
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

  public readonly availableAreas: ProjectArea[] = [
    'All',
    'Full-Stack & Web',
    'Backend & Cloud',
    'AI & Algorithms'
  ];

  public readonly selectedArea = signal<ProjectArea>('All');

  public readonly filteredProjects = computed(() => {
    const area = this.selectedArea();
    if (area === 'All') {
      return this.projects();
    }
    return this.projects().filter(project => project.areas?.includes(area));
  });

  public getCount(area: ProjectArea): number {
    if (area === 'All') {
      return this.projects().length;
    }
    return this.projects().filter(p => p.areas?.includes(area)).length;
  }
}
