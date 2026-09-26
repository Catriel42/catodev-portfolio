import { Component, input, signal, effect, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type EmbudoStage = 'idea' | 'modelo' | 'agente' | 'produccion' | null;

@Component({
  selector: 'app-embudo-diagram',
  host: { class: 'embudo-diagram' },
  template: `
    <svg viewBox="0 0 920 240" xmlns="http://www.w3.org/2000/svg"
         role="img" aria-label="Pipeline diagram: Idea, Modelo, Agente, Producción">
      <defs>
        <!-- Arrowhead marker -->
        <marker id="arrowhead" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
          <polygon points="0 0, 10 4, 0 8" fill="#6B7280"/>
        </marker>
        <marker id="arrowhead-active" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
          <polygon points="0 0, 10 4, 0 8" fill="#FF9900"/>
        </marker>
      </defs>

      <!-- Connecting arrows -->
      @for (i of [0, 1, 2]; track i) {
        <line
          [attr.x1]="200 + i * 230"
          y1="90"
          [attr.x2]="222 + i * 230"
          y2="90"
          stroke="rgba(255, 255, 255, 0.25)"
          stroke-width="2"
          stroke-dasharray="4 4"
          marker-end="url(#arrowhead)"
          [class.reveal-arrow]="animate()"
          [style.animation-delay]="(i + 1) * 0.12 + 's'"/>
      }

      <!-- Stage boxes -->
      @for (stage of stages; track stage.id; let i = $index) {
        <g [class.reveal-box]="animate()"
           [style.animation-delay]="i * 0.12 + 's'">
          
          <!-- Step indicator badge -->
          <rect
            [attr.x]="20 + i * 230"
            y="20"
            width="32"
            height="22"
            rx="6"
            [attr.fill]="highlightStage() === stage.id ? 'rgba(255, 153, 0, 0.2)' : 'rgba(255, 255, 255, 0.05)'"
            [attr.stroke]="highlightStage() === stage.id ? '#FF9900' : 'rgba(255, 255, 255, 0.15)'"
            stroke-width="1"/>
          
          <text
            [attr.x]="36 + i * 230"
            y="35"
            text-anchor="middle"
            [attr.fill]="highlightStage() === stage.id ? '#FF9900' : '#9CA3AF'"
            font-size="11"
            font-weight="700"
            font-family="var(--font-mono)">
            0{{ i + 1 }}
          </text>

          <!-- Main Box Card -->
          <rect
            [attr.x]="20 + i * 230"
            y="48"
            width="180"
            height="84"
            rx="12"
            [attr.fill]="highlightStage() === stage.id ? '#1A1918' : '#121620'"
            [attr.stroke]="highlightStage() === stage.id ? '#FF9900' : 'rgba(255, 255, 255, 0.12)'"
            [attr.stroke-width]="highlightStage() === stage.id ? '2' : '1'"/>


          <!-- Stage Title -->
          <text
            [attr.x]="110 + i * 230"
            y="98"
            text-anchor="middle"
            [attr.fill]="highlightStage() === stage.id ? '#FF9900' : '#F3F4F6'"
            font-size="18"
            font-weight="700"
            font-family="var(--font-sans)">
            {{ stage.label }}
          </text>

          <!-- Service Label Pill below -->
          @if (stage.service) {
            <rect
              [attr.x]="55 + i * 230"
              y="148"
              width="110"
              height="26"
              rx="13"
              [attr.fill]="highlightStage() === stage.id ? 'rgba(255, 153, 0, 0.15)' : 'rgba(255, 255, 255, 0.04)'"
              [attr.stroke]="highlightStage() === stage.id ? 'rgba(255, 153, 0, 0.4)' : 'rgba(255, 255, 255, 0.08)'"
              stroke-width="1"/>
            
            <text
              [attr.x]="110 + i * 230"
              y="165"
              text-anchor="middle"
              [attr.fill]="highlightStage() === stage.id ? '#FFB84D' : '#9CA3AF'"
              font-size="12"
              font-weight="600"
              font-family="var(--font-mono)">
              {{ stage.service }}
            </text>
          }
        </g>
      }
    </svg>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
      max-width: var(--embudo-max-width, 920px);
      margin: 0 auto;
    }

    svg {
      width: 100%;
      height: auto;
      filter: drop-shadow(0 12px 24px rgba(0, 0, 0, 0.3));
    }

    .reveal-box {
      opacity: 0;
      animation: revealBox 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }

    .reveal-arrow {
      opacity: 0;
      animation: revealBox 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }

    @keyframes revealBox {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .reveal-box,
      .reveal-arrow {
        animation: none !important;
        opacity: 1;
      }
    }
  `],
})
export class SlideEmbudoDiagram {
  readonly highlightStage = input<EmbudoStage>(null);
  readonly animate = signal(false);

  private readonly platformId = inject(PLATFORM_ID);

  readonly stages = [
    { id: 'idea' as const, label: 'Idea', service: '' },
    { id: 'modelo' as const, label: 'Modelo', service: 'Bedrock' },
    { id: 'agente' as const, label: 'Agente', service: 'Strands' },
    { id: 'produccion' as const, label: 'Producción', service: 'AgentCore' },
  ];

  constructor() {
    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        requestAnimationFrame(() => this.animate.set(true));
      }
    });
  }
}
