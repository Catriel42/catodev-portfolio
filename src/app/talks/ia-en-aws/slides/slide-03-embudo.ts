import { Component } from '@angular/core';
import { SlideEmbudoDiagram } from './slide-embudo';

@Component({
  selector: 'app-slide-embudo',
  imports: [SlideEmbudoDiagram],
  template: `
    <div class="slide-center-wrapper">
      <h2 class="subtitle">
        Cuatro capas esenciales: desde la idea de negocio hasta el agente aislado en producción.
      </h2>

      <div class="diagram-container">
        <app-embudo-diagram />
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      min-height: 70vh;
      text-align: center;
    }

    .slide-center-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      max-width: 1250px;
      margin: 0 auto;
    }

    .subtitle {
      font-size: clamp(1.6rem, 3.2vw, 2.6rem);
      font-weight: 700;
      line-height: 1.25;
      color: var(--fg);
      text-align: center;
      max-width: 820px;
      margin: 0 auto clamp(2.5rem, 6vh, 4rem);
      letter-spacing: -0.02em;
    }

    .diagram-container {
      width: 100%;
      display: flex;
      justify-content: center;
      --embudo-max-width: 1180px;
    }
  `],
})
export class SlideEmbudo {}
