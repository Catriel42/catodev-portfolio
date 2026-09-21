import { Component, inject } from '@angular/core';
import { Data } from '../data';

@Component({
  selector: 'app-experience',
  template: `
    <section id="experience" class="py-16 sm:py-20 border-t border-app-border mb-16 sm:mb-20">
      <div class="flex items-center gap-3 sm:gap-4 mb-10 sm:mb-16">
        <h2 class="text-2xl sm:text-4xl font-black uppercase tracking-tighter text-app-fg">Experience</h2>
        <div class="h-[2px] flex-grow bg-app-border"></div>
        <span class="text-primary font-mono text-xs sm:text-sm font-bold">[PATH]</span>
      </div>
      
      <div class="space-y-10 sm:space-y-12">
        @for (item of experience(); track item.id; let last = $last) {
          <div class="relative pl-10 sm:pl-12">
            <!-- Timeline Line -->
            @if (!last) {
              <div class="absolute left-[15px] sm:left-[19px] top-8 sm:top-10 bottom-[-40px] sm:bottom-[-48px] w-0.5 bg-app-border"></div>
            }
            
            <!-- Timeline Indicator -->
            <div class="absolute left-0 top-0 w-8 h-8 sm:w-10 sm:h-10 border-2 border-app-border bg-app-bg flex items-center justify-center rounded group hover:border-primary transition-colors">
              <div class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-sm"></div>
            </div>
            
            <div class="flex flex-col md:flex-row md:items-baseline justify-between gap-1.5 sm:gap-2 mb-3 sm:mb-4">
              <div>
                <h3 class="text-lg sm:text-2xl font-bold uppercase tracking-tight text-app-fg">{{ item.role }}</h3>
                <p class="text-primary font-bold text-xs sm:text-sm uppercase tracking-widest mt-0.5 sm:mt-1">{{ item.company }}</p>
              </div>
              <span class="text-app-muted font-mono text-xs sm:text-sm px-2.5 py-0.5 sm:px-3 sm:py-1 border border-app-border bg-app-card rounded self-start md:self-auto mt-1 md:mt-0">
                {{ item.period }}
              </span>
            </div>
            
            <p class="text-app-muted max-w-3xl leading-relaxed bg-app-card/40 p-4 sm:p-6 rounded-lg border border-app-border shadow-[3px_3px_0px_0px_var(--color-app-border)] sm:shadow-[4px_4px_0px_0px_var(--color-app-border)] text-sm sm:text-base">
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
