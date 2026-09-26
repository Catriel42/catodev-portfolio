import { Component } from '@angular/core';
import { LucideTerminal, LucideZap, LucideCheck } from '@lucide/angular';

@Component({
  selector: 'app-slide-agentcore-harness',
  imports: [LucideTerminal, LucideZap, LucideCheck],
  template: `
    <!-- recortable si el tiempo aprieta -->
    <div class="harness-wrapper">
      <div class="header-section">
        <div class="pill-badge font-mono">OPCIONAL · RUNTIME VS HARNESS</div>
        <h2 class="main-heading">¿Cuándo usar Runtime vs Harness?</h2>
        <p class="subtitle">Dos caminos complementarios según el nivel de control o velocidad de entrega.</p>
      </div>

      <div class="comparison-grid">
        <!-- Runtime Card -->
        <div class="comp-card">
          <div class="card-header">
            <div class="icon-box">
              <svg lucideTerminal class="header-icon text-muted"></svg>
            </div>
            <div>
              <div class="card-tag font-mono">MODO CUSTOM CONTENEDOR</div>
              <h3 class="card-title">AgentCore Runtime</h3>
            </div>
          </div>

          <p class="card-desc">
            Subes tu propia imagen de contenedor. Control granular absoluto sobre el loop, dependencias y librerías.
          </p>

          <ul class="bullet-list">
            <li>
              <svg lucideCheck class="bullet-icon text-muted"></svg>
              <span>Control total del loop de razonamiento y estado</span>
            </li>
            <li>
              <svg lucideCheck class="bullet-icon text-muted"></svg>
              <span>Cualquier stack: Strands, LangChain, Java o C#</span>
            </li>
            <li>
              <svg lucideCheck class="bullet-icon text-muted"></svg>
              <span>Ideal para arquitecturas multi-agente complejas</span>
            </li>
          </ul>
        </div>

        <!-- Harness Card -->
        <div class="comp-card highlight">
          <div class="card-header">
            <div class="icon-box accent-box">
              <svg lucideZap class="header-icon text-accent"></svg>
            </div>
            <div>
              <div class="card-tag font-mono text-accent">MODO MANAGED SERVERLESS</div>
              <h3 class="card-title text-accent">AgentCore Harness</h3>
            </div>
          </div>

          <p class="card-desc">
            Solo envías configuración declarativa (modelo, prompt, tools) y AWS ejecuta el loop por ti.
          </p>

          <ul class="bullet-list">
            <li>
              <svg lucideCheck class="bullet-icon text-accent"></svg>
              <span>Cero contenedores y cero gestión de infraestructura</span>
            </li>
            <li>
              <svg lucideCheck class="bullet-icon text-accent"></svg>
              <span>Deploy y experimentación en cuestión de segundos</span>
            </li>
            <li>
              <svg lucideCheck class="bullet-icon text-accent"></svg>
              <span>Ideal para agentes directos de consulta o soporte</span>
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

    .harness-wrapper {
      width: 100%;
      max-width: 1300px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: clamp(1.75rem, 3.5vh, 3rem);
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
      font-size: clamp(2.2rem, 4vw, 3.6rem);
      font-weight: 800;
      line-height: 1.15;
      letter-spacing: -0.03em;
      color: var(--fg);
      margin: 0;
    }

    .subtitle {
      font-size: clamp(1.05rem, 1.6vw, 1.3rem);
      color: var(--fg-muted);
      margin: 0;
    }

    .comparison-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: clamp(1.5rem, 3vw, 2.5rem);
      align-items: stretch;
    }

    @media (max-width: 820px) {
      .comparison-grid { grid-template-columns: 1fr; }
    }

    .comp-card {
      background: var(--bg-surface);
      border: 1px solid var(--surface-border-bright);
      border-radius: 20px;
      padding: clamp(2rem, 3.5vw, 2.75rem);
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      transition: all 0.25s ease;
    }

    .comp-card:hover {
      border-color: rgba(255, 255, 255, 0.25);
      transform: translateY(-3px);
    }

    .comp-card.highlight {
      border-color: rgba(255, 153, 0, 0.4);
      background: linear-gradient(180deg, var(--bg-surface) 0%, rgba(255, 153, 0, 0.05) 100%);
      box-shadow: 0 20px 48px rgba(0, 0, 0, 0.5), 0 0 24px rgba(255, 153, 0, 0.08);
    }

    .card-header {
      display: flex;
      align-items: center;
      gap: 1.25rem;
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
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.12);
      flex-shrink: 0;
    }

    .accent-box {
      background: rgba(255, 153, 0, 0.12);
      border-color: rgba(255, 153, 0, 0.35);
      box-shadow: 0 0 16px var(--accent-glow);
    }

    .header-icon {
      width: 1.85rem;
      height: 1.85rem;
    }

    .card-tag {
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--fg-muted);
      letter-spacing: 0.08em;
      margin-bottom: 0.25rem;
    }

    .card-title {
      font-size: clamp(1.4rem, 2vw, 1.85rem);
      font-weight: 700;
      color: var(--fg);
      margin: 0;
    }

    .card-desc {
      font-size: clamp(1rem, 1.4vw, 1.15rem);
      line-height: 1.55;
      color: var(--fg);
      margin: 0;
    }

    .bullet-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 0.85rem;
      flex-grow: 1;
    }

    .bullet-list li {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      font-size: clamp(0.95rem, 1.3vw, 1.1rem);
      line-height: 1.45;
      color: var(--fg-muted);
    }

    .bullet-icon {
      width: 1.2rem;
      height: 1.2rem;
      flex-shrink: 0;
      margin-top: 0.15rem;
    }
  `],
})
export class SlideAgentcoreHarness {}
