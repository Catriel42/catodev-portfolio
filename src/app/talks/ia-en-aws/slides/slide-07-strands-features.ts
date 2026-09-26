import { Component } from '@angular/core';
import { LucideNetwork, LucidePlug, LucideZap } from '@lucide/angular';

@Component({
  selector: 'app-slide-strands-features',
  imports: [LucideNetwork, LucidePlug, LucideZap],
  template: `
    <div class="features-wrapper">
      <div class="header-section">
        <div class="pill-badge font-mono">CAPA 02 · AGENTE</div>
        <h2 class="main-heading">Strands: Features Principales</h2>
        <p class="subtitle">Diseñado desde cero para la nueva generación de flujos agénticos en producción.</p>
      </div>

      <div class="features-grid">
        <!-- Feature 1 -->
        <div class="feature-card">
          <div class="card-top">
            <div class="icon-box">
              <svg lucideNetwork class="card-icon text-accent"></svg>
            </div>
            <span class="card-tag font-mono">PATRONES AVANZADOS</span>
          </div>

          <h3 class="card-title">Orquestación Multi-Agente</h3>
          <p class="card-desc">
            Soporte nativo para topologías <strong>Graph</strong> y <strong>Swarm</strong>. Coordina múltiples agentes especializados con handover dinámico y consenso.
          </p>

          <div class="badge-pill font-mono">Graph &amp; Swarm Topology</div>
        </div>

        <!-- Feature 2 -->
        <div class="feature-card highlight">
          <div class="card-top">
            <div class="icon-box accent-box">
              <svg lucidePlug class="card-icon text-accent"></svg>
            </div>
            <span class="card-tag font-mono text-accent">ESTÁNDAR ABIERTO</span>
          </div>

          <h3 class="card-title text-accent">Soporte Nativo de MCP</h3>
          <p class="card-desc">
            Integración directa con el <strong>Model Context Protocol</strong> desde el día uno. Conecta cualquier servidor de herramientas MCP local o remoto sin escribir adaptadores.
          </p>

          <div class="badge-pill font-mono highlight-pill">Model Context Protocol Ready</div>
        </div>

        <!-- Feature 3 -->
        <div class="feature-card">
          <div class="card-top">
            <div class="icon-box">
              <svg lucideZap class="card-icon text-accent"></svg>
            </div>
            <span class="card-tag font-mono">PORTABILIDAD TOTAL</span>
          </div>

          <h3 class="card-title">Corre en Cualquier Lado</h3>
          <p class="card-desc">
            Mismo código en cualquier destino: <strong>AWS Lambda, EKS, ECS, tu laptop local</strong> o directamente en Node.js/navegador sin lock-in de infraestructura.
          </p>

          <div class="badge-pill font-mono">Zero Lock-In Runtime</div>
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

    .features-wrapper {
      width: 100%;
      max-width: 1350px;
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
      font-size: clamp(2.4rem, 4.2vw, 3.8rem);
      font-weight: 800;
      line-height: 1.1;
      letter-spacing: -0.03em;
      color: var(--fg);
      margin: 0;
    }

    .subtitle {
      font-size: clamp(1.1rem, 1.8vw, 1.4rem);
      color: var(--fg-muted);
      margin: 0;
      max-width: 65ch;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: clamp(1.5rem, 2.5vw, 2.25rem);
      align-items: stretch;
    }

    @media (max-width: 960px) {
      .features-grid {
        grid-template-columns: 1fr;
      }
    }

    .feature-card {
      background: var(--bg-surface);
      border: 1px solid var(--surface-border-bright);
      border-radius: 20px;
      padding: clamp(1.75rem, 2.5vw, 2.5rem);
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      transition: all 0.25s ease;
    }

    .feature-card:hover {
      border-color: rgba(255, 255, 255, 0.25);
      transform: translateY(-4px);
    }

    .feature-card.highlight {
      border-color: rgba(255, 153, 0, 0.4);
      background: linear-gradient(180deg, var(--bg-surface) 0%, rgba(255, 153, 0, 0.05) 100%);
      box-shadow: 0 20px 48px rgba(0, 0, 0, 0.5), 0 0 24px rgba(255, 153, 0, 0.08);
    }

    .card-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .icon-box {
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.12);
    }

    .accent-box {
      background: rgba(255, 153, 0, 0.12);
      border-color: rgba(255, 153, 0, 0.35);
      box-shadow: 0 0 16px var(--accent-glow);
    }

    .card-icon {
      width: 1.85rem;
      height: 1.85rem;
    }

    .card-tag {
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--fg-muted);
      letter-spacing: 0.08em;
    }

    .card-title {
      font-size: clamp(1.4rem, 2vw, 1.8rem);
      font-weight: 700;
      color: var(--fg);
      margin: 0;
      line-height: 1.2;
    }

    .card-desc {
      font-size: clamp(1rem, 1.4vw, 1.15rem);
      line-height: 1.6;
      color: var(--fg-muted);
      margin: 0;
      flex-grow: 1;
    }

    .badge-pill {
      font-size: 0.75rem;
      color: var(--fg-muted);
      background: rgba(255, 255, 255, 0.04);
      padding: 0.4rem 0.85rem;
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 0.08);
      width: fit-content;
      margin-top: 0.5rem;
    }

    .highlight-pill {
      color: var(--accent-light);
      background: rgba(255, 153, 0, 0.08);
      border-color: rgba(255, 153, 0, 0.25);
    }
  `],
})
export class SlideStrandsFeatures {}
