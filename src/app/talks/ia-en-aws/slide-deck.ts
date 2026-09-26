import {
  Component,
  signal,
  computed,
  inject,
  OnInit,
  OnDestroy,
  PLATFORM_ID,
  HostListener,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { SlideTitulo } from './slides/slide-01-titulo';
import { SlideGancho } from './slides/slide-02-gancho';
import { SlideEmbudo } from './slides/slide-03-embudo';
import { SlideBedrock } from './slides/slide-04-bedrock';
import { SlideModeloVsAgente } from './slides/slide-05-modelo-vs-agente';
import { SlideStrands } from './slides/slide-06-strands';
import { SlideStrandsFeatures } from './slides/slide-07-strands-features';
import { SlideAclaracion } from './slides/slide-08-aclaracion';
import { SlideTransicion } from './slides/slide-09-transicion';
import { SlideAgentcoreRuntime } from './slides/slide-10-agentcore-runtime';
import { SlideAgentcoreGateway } from './slides/slide-11-agentcore-gateway';
import { SlideAgentcoreHarness } from './slides/slide-12-agentcore-harness';
import { SlideEcosistema } from './slides/slide-13-ecosistema';
import { SlideCasoDeUso } from './slides/slide-14-caso-de-uso';
import { SlideCasoDeUso2 } from './slides/slide-15-caso-de-uso-2';
import { SlidePanorama } from './slides/slide-16-panorama';
import { SlideCierre } from './slides/slide-17-cierre';

const SLIDE_TITLES = [
  'IA en AWS: De las ideas a los agentes',
  'El gancho',
  'El mapa: Idea → Modelo → Agente → Producción',
  'Capa Modelo: Amazon Bedrock',
  'Por qué un modelo no es un agente',
  'Strands Agents: qué es',
  'Strands Agents: features',
  'Aclaración rápida',
  'La transición a producción',
  'AgentCore Runtime',
  'AgentCore Gateway',
  'AgentCore Harness',
  'El resto del ecosistema',
  'Caso de uso: agente de soporte',
  'Caso de uso: flujo completo',
  'Panorama rápido',
  'Cierre',
];

@Component({
  selector: 'app-slide-deck',
  imports: [
    SlideTitulo,
    SlideGancho,
    SlideEmbudo,
    SlideBedrock,
    SlideModeloVsAgente,
    SlideStrands,
    SlideStrandsFeatures,
    SlideAclaracion,
    SlideTransicion,
    SlideAgentcoreRuntime,
    SlideAgentcoreGateway,
    SlideAgentcoreHarness,
    SlideEcosistema,
    SlideCasoDeUso,
    SlideCasoDeUso2,
    SlidePanorama,
    SlideCierre,
  ],
  host: { class: 'slide-deck' },
  styleUrl: './slide-deck.css',
  template: `
    <!-- Progress bar -->
    <div class="slide-progress"
         [style.width.%]="progressPercent()"
         role="progressbar"
         [attr.aria-valuenow]="current() + 1"
         [attr.aria-valuemin]="1"
         [attr.aria-valuemax]="total"></div>

    <!-- Slide viewport -->
    <div class="slide-viewport"
         (touchstart)="onTouchStart($event)"
         (touchend)="onTouchEnd($event)">
      <section class="slide"
               role="region"
               [attr.aria-label]="'Slide ' + (current() + 1) + ' of ' + total + ': ' + slideTitle()">
        @switch (current()) {
          @case (0) { <app-slide-titulo /> }
          @case (1) { <app-slide-gancho /> }
          @case (2) { <app-slide-embudo /> }
          @case (3) { <app-slide-bedrock /> }
          @case (4) { <app-slide-modelo-vs-agente /> }
          @case (5) { <app-slide-strands /> }
          @case (6) { <app-slide-strands-features /> }
          @case (7) { <app-slide-aclaracion /> }
          @case (8) { <app-slide-transicion /> }
          @case (9) { <app-slide-agentcore-runtime /> }
          @case (10) { <app-slide-agentcore-gateway /> }
          @case (11) { <app-slide-agentcore-harness /> }
          @case (12) { <app-slide-ecosistema /> }
          @case (13) { <app-slide-caso-de-uso /> }
          @case (14) { <app-slide-caso-de-uso-2 /> }
          @case (15) { <app-slide-panorama /> }
          @case (16) { <app-slide-cierre /> }
        }
      </section>
    </div>

    <!-- Navigation controls -->
    <nav class="slide-nav" aria-label="Slide navigation">
      <button (click)="prev()"
              [disabled]="current() === 0"
              aria-label="Previous slide">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
      </button>
      <span class="slide-counter" aria-live="polite">
        {{ current() + 1 }}<span class="text-muted"> / {{ total }}</span>
      </span>
      <button (click)="next()"
              [disabled]="current() === total - 1"
              aria-label="Next slide">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </button>
    </nav>
  `,
})
export class SlideDeck implements OnInit, OnDestroy {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);

  readonly total = 17;
  readonly current = signal(0);
  readonly slideTitle = computed(() => SLIDE_TITLES[this.current()] ?? '');
  readonly progressPercent = computed(() => ((this.current() + 1) / this.total) * 100);

  private touchStartX = 0;
  private touchStartY = 0;

  constructor() {
    this.route.paramMap.pipe(takeUntilDestroyed()).subscribe(params => {
      const raw = params.get('slide');
      const idx = raw != null ? parseInt(raw, 10) : 0;
      if (!isNaN(idx) && idx >= 0 && idx < this.total) {
        this.current.set(idx);
      } else {
        this.navigateTo(0);
      }
    });
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.add('slide-deck-active');
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.remove('slide-deck-active');
    }
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    // Don't intercept if modifier keys are pressed (browser shortcuts)
    if (event.ctrlKey || event.metaKey || event.altKey) return;

    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
      case ' ':
      case 'PageDown':
        event.preventDefault();
        this.next();
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
      case 'PageUp':
        event.preventDefault();
        this.prev();
        break;
      case 'Home':
        event.preventDefault();
        this.navigateTo(0);
        break;
      case 'End':
        event.preventDefault();
        this.navigateTo(this.total - 1);
        break;
    }
  }

  onTouchStart(event: TouchEvent): void {
    const touch = event.touches[0];
    this.touchStartX = touch.clientX;
    this.touchStartY = touch.clientY;
  }

  onTouchEnd(event: TouchEvent): void {
    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - this.touchStartX;
    const deltaY = touch.clientY - this.touchStartY;

    // Only trigger if horizontal swipe is dominant and exceeds threshold
    if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
      if (deltaX < 0) {
        this.next();
      } else {
        this.prev();
      }
    }
  }

  next(): void {
    if (this.current() < this.total - 1) {
      this.navigateTo(this.current() + 1);
    }
  }

  prev(): void {
    if (this.current() > 0) {
      this.navigateTo(this.current() - 1);
    }
  }

  private navigateTo(index: number): void {
    this.router.navigate(['..', index], { relativeTo: this.route });
  }
}
