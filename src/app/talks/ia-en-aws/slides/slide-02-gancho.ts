import { Component } from '@angular/core';
import { LucideLightbulb } from '@lucide/angular';

@Component({
  selector: 'app-slide-gancho',
  imports: [LucideLightbulb],
  template: `
    <div class="gancho-wrapper">

      <h2 class="quote-text">
        Todos usamos ChatGPT o Claude.
        <br/>
        <span class="highlight-line">¿Cuántos tienen algo así corriendo solo, tomando decisiones, <span class="text-accent">en producción</span>?</span>
      </h2>

      <div class="takeaway-card">
        <svg lucideLightbulb class="icon-bulb text-accent"></svg>
        <p>
          La distancia entre <strong>usar un modelo</strong> y <strong>tener un agente autónomo en producción</strong> es lo que vamos a recorrer hoy.
        </p>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }

    .gancho-wrapper {
      max-width: 850px;
    }

    .quote-text {
      font-size: clamp(1.8rem, 3.8vw, 3.1rem);
      line-height: 1.25;
      margin-bottom: 2.5rem;
      font-weight: 600;
    }

    .highlight-line {
      color: var(--fg);
      display: block;
      margin-top: 0.5rem;
    }

    .takeaway-card {
      display: flex;
      align-items: center;
      gap: 1.25rem;
      padding: 1.25rem 1.75rem;
      background: var(--bg-surface);
      border: 1px solid var(--surface-border-bright);
      border-left: 4px solid var(--accent);
      border-radius: 12px;
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
    }

    .icon-bulb {
      width: 2rem;
      height: 2rem;
      flex-shrink: 0;
    }

    .takeaway-card p {
      margin: 0;
      font-size: clamp(1rem, 1.6vw, 1.2rem);
      color: var(--fg);
    }
  `],
})
export class SlideGancho {}
