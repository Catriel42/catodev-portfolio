import { Component, inject } from '@angular/core';
import { Data } from '../data';

@Component({
  selector: 'app-experience',
  template: `
    <section id="experience" class="py-20 border-t border-app-border mb-20">
      <div class="flex items-center gap-4 mb-16">
        <h2 class="text-4xl font-black uppercase tracking-tighter text-app-fg">Experience</h2>
        <div class="h-[2px] flex-grow bg-app-border"></div>
        <span class="text-primary font-mono text-sm font-bold">[PATH]</span>
      </div>
      
      <div class="space-y-12">
        @for (item of experience(); track item.id; let last = $last) {
          <div class="relative pl-12">
            <!-- Timeline Line -->
            @if (!last) {
              <div class="absolute left-[19px] top-10 bottom-[-48px] w-0.5 bg-app-border"></div>
            }
            
            <!-- Timeline Indicator -->
            <div class="absolute left-0 top-0 w-10 h-10 border-2 border-app-border bg-app-bg flex items-center justify-center rounded group hover:border-primary transition-colors">
              <div class="w-2 h-2 bg-primary rounded-sm"></div>
            </div>
            
            <div class="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-4">
              <div>
                <h3 class="text-2xl font-bold uppercase tracking-tight text-app-fg">{{ item.role }}</h3>
                <p class="text-primary font-bold text-sm uppercase tracking-widest mt-1">{{ item.company }}</p>
              </div>
              <span class="text-app-muted font-mono text-sm px-3 py-1 border border-app-border bg-app-card rounded">
                {{ item.period }}
              </span>
            </div>
            
            <p class="text-app-muted max-w-3xl leading-relaxed bg-app-card/40 p-6 rounded-lg border border-app-border shadow-[4px_4px_0px_0px_var(--color-app-border)]">
              {{ item.description }}
            </p>
          </div>
        }
      </div>
    </section>
  `,
})
export class Experience {
  private readonly data = inject(Data);
  public readonly experience = this.data.experience;
}
