import { Component } from '@angular/core';
import { LucideBrain, LucideBot, LucideArrowRight, LucideMinus } from '@lucide/angular';

@Component({
  selector: 'app-slide-modelo-vs-agente',
  imports: [LucideBrain, LucideBot, LucideArrowRight, LucideMinus],
  template: `
    <div class="slide-wrapper">
      <div class="header-section">
        <div class="pill-badge font-mono">CONCEPTOS CLAVE</div>
        <h2 class="main-heading">¿Por qué un modelo no es un agente?</h2>
      </div>

      <div class="comparison-grid">
        <!-- Left: Modelo -->
        <div class="card model-card">
          <div class="card-header">
            <div class="icon-box model-icon">
              <svg lucideBrain class="header-icon"></svg>
            </div>
            <div>
              <div class="card-type font-mono">LLM TRADICIONAL</div>
              <h3 class="card-title">Modelo</h3>
            </div>
          </div>

          <ul class="feature-list">
            <li>
              <svg lucideMinus class="bullet-icon text-muted"></svg>
              <span>Recibe texto ➔ Responde texto</span>
            </li>
            <li>
              <svg lucideMinus class="bullet-icon text-muted"></svg>
              <span>Sin memoria de ejecuciones pasadas</span>
            </li>
            <li>
              <svg lucideMinus class="bullet-icon text-muted"></svg>
              <span>Sin capacidad de ejecutar acciones en el mundo real</span>
            </li>
            <li>
              <svg lucideMinus class="bullet-icon text-muted"></svg>
              <span>Una sola interacción (Request / Response pasivo)</span>
            </li>
          </ul>
        </div>

        <!-- Right: Agente -->
        <div class="card agent-card">
          <div class="card-header">
            <div class="icon-box agent-icon">
              <svg lucideBot class="header-icon"></svg>
            </div>
            <div>
              <div class="card-type font-mono text-accent">SISTEMA AUTÓNOMO</div>
              <h3 class="card-title text-accent">Agente de IA</h3>
            </div>
          </div>

          <ul class="feature-list">
            <li>
              <svg lucideArrowRight class="bullet-icon text-accent"></svg>
              <span><strong>Loop continuo</strong> de razonamiento (ReAct / Plan & Execute)</span>
            </li>
            <li>
              <svg lucideArrowRight class="bullet-icon text-accent"></svg>
              <span>Usa <strong>herramientas</strong> activas (APIs, Lambdas, Bases de Datos)</span>
            </li>
            <li>
              <svg lucideArrowRight class="bullet-icon text-accent"></svg>
              <span>Mantiene <strong>memoria</strong> persistente de contexto y estado</span>
            </li>
            <li>
              <svg lucideArrowRight class="bullet-icon text-accent"></svg>
              <span>Evalúa resultados intermedios y <strong>decide cuándo parar</strong></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-height: 75vh;
      width: 100%;
    }

    .slide-wrapper {
      width: 100%;
      max-width: 1250px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: clamp(2rem, 4vh, 3.5rem);
    }

    .header-section {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .pill-badge {
      display: inline-flex;
      align-items: center;
      padding: 0.35rem 0.95rem;
      border-radius: 9999px;
      background: rgba(255, 153, 0, 0.12);
      border: 1px solid rgba(255, 153, 0, 0.35);
      color: var(--accent);
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      width: fit-content;
    }

    .main-heading {
      font-size: clamp(2.2rem, 4.2vw, 3.8rem);
      font-weight: 800;
      line-height: 1.1;
      letter-spacing: -0.03em;
      color: var(--fg);
      margin: 0;
    }

    .comparison-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: clamp(1.75rem, 3.5vw, 3rem);
      align-items: stretch;
    }

    @media (max-width: 820px) {
      .comparison-grid {
        grid-template-columns: 1fr;
      }
    }

    .card {
      background: var(--bg-surface);
      border: 1px solid var(--surface-border-bright);
      border-radius: 20px;
      padding: clamp(2rem, 3.5vw, 3rem);
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
      display: flex;
      flex-direction: column;
      transition: all 0.25s ease;
    }

    .card:hover {
      border-color: rgba(255, 255, 255, 0.25);
      transform: translateY(-3px);
    }

    .agent-card {
      border-color: rgba(255, 153, 0, 0.4);
      background: linear-gradient(180deg, var(--bg-surface) 0%, rgba(255, 153, 0, 0.05) 100%);
      box-shadow: 0 20px 48px rgba(0, 0, 0, 0.5), 0 0 24px rgba(255, 153, 0, 0.08);
      position: relative;
    }

    .agent-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 2rem;
      right: 2rem;
      height: 3px;
      background: linear-gradient(90deg, transparent, var(--accent), transparent);
      border-radius: 2px;
    }

    .card-header {
      display: flex;
      align-items: center;
      gap: 1.25rem;
      margin-bottom: clamp(1.5rem, 3vh, 2.25rem);
      padding-bottom: 1.25rem;
      border-bottom: 1px solid var(--surface-border);
    }

    .icon-box {
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .model-icon {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.12);
      color: var(--fg-muted);
    }

    .agent-icon {
      background: rgba(255, 153, 0, 0.12);
      border: 1px solid rgba(255, 153, 0, 0.35);
      color: var(--accent);
      box-shadow: 0 0 16px var(--accent-glow);
    }

    .header-icon {
      width: 1.85rem;
      height: 1.85rem;
    }

    .card-type {
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--fg-muted);
      letter-spacing: 0.08em;
      margin-bottom: 0.25rem;
    }

    .card-title {
      font-size: clamp(1.6rem, 2.4vw, 2.2rem);
      font-weight: 700;
      margin: 0;
      color: var(--fg);
      line-height: 1.15;
    }

    .feature-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: clamp(1rem, 2vh, 1.4rem);
    }

    .feature-list li {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      font-size: clamp(1.05rem, 1.6vw, 1.35rem);
      line-height: 1.45;
      color: var(--fg);
    }

    .bullet-icon {
      width: 1.35rem;
      height: 1.35rem;
      flex-shrink: 0;
      margin-top: 0.2rem;
    }
  `],
})
export class SlideModeloVsAgente {}
