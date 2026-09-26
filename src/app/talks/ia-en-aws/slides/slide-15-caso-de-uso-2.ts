import { Component } from '@angular/core';
import { SlideEmbudoDiagram } from './slide-embudo';
import { LucideCpu, LucideWorkflow, LucideShieldCheck } from '@lucide/angular';

@Component({
  selector: 'app-slide-caso-de-uso-2',
  imports: [SlideEmbudoDiagram, LucideCpu, LucideWorkflow, LucideShieldCheck],
  template: `
    <div class="resumen-wrapper">
      <div class="header-section">
        <div class="pill-badge font-mono">RESUMEN INTEGRADO</div>
        <h2 class="main-heading">Las tres capas, juntas</h2>
        <p class="subtitle">La tríada moderna para construir y desplegar inteligencia agéntica en AWS.</p>
      </div>

      <div class="diagram-wrapper">
        <app-embudo-diagram />
      </div>

      <div class="layers-grid">
        <!-- Layer 1: Bedrock -->
        <div class="layer-card layer-model">
          <div class="card-top">
            <div class="icon-box icon-model">
              <svg lucideCpu class="card-icon text-model"></svg>
            </div>
            <span class="layer-tag font-mono model-tag">CAPA 01 · MODELO</span>
          </div>
          <h3 class="card-title">Amazon Bedrock</h3>
          <p class="card-desc">
            Razonamiento fundacional avanzado (Claude Opus 5.5, GPT-6 Sol/Luna, Nova) vía una API serverless unificada y segura.
          </p>
          <div class="badge-pill font-mono">Foundation Models &amp; LLMs</div>
        </div>

        <!-- Layer 2: Strands -->
        <div class="layer-card layer-agent">
          <div class="card-top">
            <div class="icon-box icon-agent">
              <svg lucideWorkflow class="card-icon text-agent"></svg>
            </div>
            <span class="layer-tag font-mono agent-tag">CAPA 02 · AGENTE</span>
          </div>
          <h3 class="card-title text-agent">Strands Agents</h3>
          <p class="card-desc">
            Orquesta el loop de decisión, gestiona topologías multi-agente, ejecuta tools y aprovecha el protocolo MCP de forma nativa.
          </p>
          <div class="badge-pill font-mono agent-pill">Orquestación &amp; Loop MCP</div>
        </div>

        <!-- Layer 3: AgentCore -->
        <div class="layer-card layer-prod">
          <div class="card-top">
            <div class="icon-box icon-prod">
              <svg lucideShieldCheck class="card-icon text-prod"></svg>
            </div>
            <span class="layer-tag font-mono prod-tag">CAPA 03 · PRODUCCIÓN</span>
          </div>
          <h3 class="card-title text-prod">AgentCore</h3>
          <p class="card-desc">
            Aísla el agente en microVMs Firecracker efímeras, unifica tools mediante Gateway y escala de forma elástica con observabilidad.
          </p>
          <div class="badge-pill font-mono prod-pill">MicroVMs &amp; Gateway Seguro</div>
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

    .resumen-wrapper {
      width: 100%;
      max-width: 1350px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: clamp(1.25rem, 2.5vh, 2rem);
      --embudo-max-width: 1100px;
    }

    .header-section {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
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
      font-size: clamp(2.2rem, 3.8vw, 3.4rem);
      font-weight: 800;
      line-height: 1.15;
      letter-spacing: -0.03em;
      color: var(--fg);
      margin: 0;
    }

    .subtitle {
      font-size: clamp(1.05rem, 1.5vw, 1.25rem);
      color: var(--fg-muted);
      margin: 0;
    }

    .diagram-wrapper {
      width: 100%;
      background: var(--bg-surface);
      border: 1px solid var(--surface-border-bright);
      border-radius: 20px;
      padding: clamp(1rem, 2vw, 1.5rem);
      box-shadow: 0 14px 36px rgba(0, 0, 0, 0.35);
    }

    .layers-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: clamp(1rem, 2vw, 1.5rem);
      align-items: stretch;
    }

    @media (max-width: 960px) {
      .layers-grid {
        grid-template-columns: 1fr;
      }
    }

    .layer-card {
      background: var(--bg-surface);
      border: 1px solid var(--surface-border-bright);
      border-radius: 18px;
      padding: clamp(1.25rem, 2vw, 1.75rem);
      display: flex;
      flex-direction: column;
      gap: 0.85rem;
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
      transition: all 0.25s ease;
    }

    .layer-card:hover {
      transform: translateY(-3px);
    }

    .layer-model:hover { border-color: rgba(0, 210, 255, 0.4); }
    .layer-agent:hover { border-color: rgba(255, 153, 0, 0.4); }
    .layer-prod:hover { border-color: rgba(168, 85, 247, 0.4); }

    .card-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .icon-box {
      width: 3.2rem;
      height: 3.2rem;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .icon-model {
      background: rgba(0, 210, 255, 0.1);
      border: 1px solid rgba(0, 210, 255, 0.3);
    }

    .icon-agent {
      background: rgba(255, 153, 0, 0.12);
      border: 1px solid rgba(255, 153, 0, 0.35);
    }

    .icon-prod {
      background: rgba(168, 85, 247, 0.12);
      border: 1px solid rgba(168, 85, 247, 0.35);
    }

    .card-icon {
      width: 1.6rem;
      height: 1.6rem;
    }

    .text-model { color: #00D2FF; }
    .text-agent { color: #FF9900; }
    .text-prod { color: #A855F7; }

    .layer-tag {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      padding: 0.25rem 0.65rem;
      border-radius: 6px;
    }

    .model-tag { background: rgba(0, 210, 255, 0.12); color: #00D2FF; }
    .agent-tag { background: rgba(255, 153, 0, 0.12); color: #FF9900; }
    .prod-tag { background: rgba(168, 85, 247, 0.12); color: #A855F7; }

    .card-title {
      font-size: clamp(1.3rem, 1.8vw, 1.6rem);
      font-weight: 700;
      color: var(--fg);
      margin: 0;
      line-height: 1.2;
    }

    .card-desc {
      font-size: clamp(0.9rem, 1.2vw, 1rem);
      line-height: 1.6;
      color: var(--fg-muted);
      margin: 0;
      flex-grow: 1;
    }

    .badge-pill {
      font-size: 0.75rem;
      color: var(--fg-muted);
      background: rgba(255, 255, 255, 0.04);
      padding: 0.35rem 0.75rem;
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 0.08);
      width: fit-content;
      margin-top: 0.35rem;
    }

    .agent-pill {
      color: #FFB84D;
      background: rgba(255, 153, 0, 0.08);
      border-color: rgba(255, 153, 0, 0.25);
    }

    .prod-pill {
      color: #C084FC;
      background: rgba(168, 85, 247, 0.08);
      border-color: rgba(168, 85, 247, 0.25);
    }
  `],
})
export class SlideCasoDeUso2 {}
