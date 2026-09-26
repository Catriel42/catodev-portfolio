import { Component } from '@angular/core';
import {
  LucideBrain,
  LucideKeyRound,
  LucideActivity,
  LucideGlobe,
  LucideTerminal,
  LucideShieldCheck,
  LucideCreditCard,
  LucideLightbulb,
} from '@lucide/angular';

@Component({
  selector: 'app-slide-ecosistema',
  imports: [
    LucideBrain,
    LucideKeyRound,
    LucideActivity,
    LucideGlobe,
    LucideTerminal,
    LucideShieldCheck,
    LucideCreditCard,
    LucideLightbulb,
  ],
  template: `
    <div class="ecosistema-wrapper">
      <div class="header-section">
        <div class="pill-badge font-mono">AGENTCORE · EXTENSIBILIDAD</div>
        <h2 class="main-heading">El resto del ecosistema AgentCore</h2>
        <p class="subtitle">Servicios satélite nativos diseñados para resolver los desafíos más duros de agentes en producción.</p>
      </div>

      <div class="services-grid">
        <!-- Memory -->
        <div class="service-card">
          <div class="card-header">
            <div class="icon-box">
              <svg lucideBrain class="card-icon text-accent"></svg>
            </div>
            <span class="card-tag font-mono">CONTEXTO</span>
          </div>
          <h3 class="card-title">Memory</h3>
          <p class="card-desc">Memoria episódica y semántica a largo plazo para persistir contexto y preferencias entre sesiones.</p>
        </div>

        <!-- Identity -->
        <div class="service-card">
          <div class="card-header">
            <div class="icon-box">
              <svg lucideKeyRound class="card-icon text-accent"></svg>
            </div>
            <span class="card-tag font-mono">SEGURIDAD</span>
          </div>
          <h3 class="card-title">Identity</h3>
          <p class="card-desc">Identidad unificada para agentes con roles IAM delegados y emisión de credenciales temporales mínimas.</p>
        </div>

        <!-- Observability -->
        <div class="service-card">
          <div class="card-header">
            <div class="icon-box">
              <svg lucideActivity class="card-icon text-accent"></svg>
            </div>
            <span class="card-tag font-mono">TELEMETRÍA</span>
          </div>
          <h3 class="card-title">Observability</h3>
          <p class="card-desc">Trazabilidad distribuida paso a paso, métricas de latencia de herramientas y debugging visual en tiempo real.</p>
        </div>

        <!-- Browser -->
        <div class="service-card">
          <div class="card-header">
            <div class="icon-box">
              <svg lucideGlobe class="card-icon text-accent"></svg>
            </div>
            <span class="card-tag font-mono">AUTOMATIZACIÓN</span>
          </div>
          <h3 class="card-title">Browser</h3>
          <p class="card-desc">Navegación web headless en la nube, rendering interactivo y extracción estructurada de contenido web.</p>
        </div>

        <!-- Code Interpreter -->
        <div class="service-card">
          <div class="card-header">
            <div class="icon-box">
              <svg lucideTerminal class="card-icon text-accent"></svg>
            </div>
            <span class="card-tag font-mono">SANDBOX</span>
          </div>
          <h3 class="card-title">Code Interpreter</h3>
          <p class="card-desc">Entornos efímeros y blindados para generación y ejecución segura de código Python/Bash al vuelo.</p>
        </div>

        <!-- Policy -->
        <div class="service-card">
          <div class="card-header">
            <div class="icon-box">
              <svg lucideShieldCheck class="card-icon text-accent"></svg>
            </div>
            <span class="card-tag font-mono">GOVERNANCE</span>
          </div>
          <h3 class="card-title">Policy</h3>
          <p class="card-desc">Guardrails granulares, validación de schemas de entrada/salida y políticas de cumplimiento empresarial.</p>
        </div>

        <!-- Payments -->
        <div class="service-card highlight-card">
          <div class="card-header">
            <div class="icon-box">
              <svg lucideCreditCard class="card-icon text-accent"></svg>
            </div>
            <span class="card-tag font-mono text-accent">FINTECH &amp; APIS</span>
          </div>
          <h3 class="card-title text-accent">Payments</h3>
          <p class="card-desc">Integración nativa con pasarelas transaccionales y flujos con autorización humana (Human-in-the-Loop).</p>
        </div>
      </div>

      <div class="takeaway-banner">
        <div class="banner-icon-box">
          <svg lucideLightbulb class="banner-icon text-accent"></svg>
        </div>
        <div class="banner-content">
          <span class="banner-highlight">Foco de la sesión:</span>
          <span>"Cada una de estas piezas merece su propia charla técnica profunda — hoy nos concentramos en las tres piezas centrales de la arquitectura (<strong>Bedrock + Strands + Runtime/Gateway</strong>)."</span>
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

    .ecosistema-wrapper {
      width: 100%;
      max-width: 1350px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: clamp(1.25rem, 2.5vh, 2rem);
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
      max-width: 75ch;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: clamp(0.85rem, 1.5vw, 1.25rem);
    }

    @media (max-width: 1100px) {
      .services-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 640px) {
      .services-grid {
        grid-template-columns: 1fr;
      }
    }

    .service-card {
      background: var(--bg-surface);
      border: 1px solid var(--surface-border-bright);
      border-radius: 16px;
      padding: 1.25rem 1.4rem;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      box-shadow: 0 10px 24px rgba(0, 0, 0, 0.3);
      transition: all 0.2s ease;
    }

    .service-card:hover {
      border-color: rgba(255, 255, 255, 0.25);
      transform: translateY(-3px);
    }

    .highlight-card {
      background: linear-gradient(180deg, var(--bg-surface) 0%, rgba(255, 153, 0, 0.05) 100%);
      border-color: rgba(255, 153, 0, 0.35);
    }

    .card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .icon-box {
      width: 2.85rem;
      height: 2.85rem;
      border-radius: 10px;
      background: rgba(255, 153, 0, 0.1);
      border: 1px solid rgba(255, 153, 0, 0.25);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .card-icon {
      width: 1.4rem;
      height: 1.4rem;
    }

    .card-tag {
      font-size: 0.68rem;
      font-weight: 700;
      color: var(--fg-muted);
      letter-spacing: 0.08em;
    }

    .card-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--fg);
      margin: 0;
      line-height: 1.2;
    }

    .card-desc {
      font-size: 0.88rem;
      line-height: 1.5;
      color: var(--fg-muted);
      margin: 0;
    }

    .takeaway-banner {
      display: flex;
      align-items: center;
      gap: 1.25rem;
      padding: 1.2rem 1.75rem;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid var(--surface-border-bright);
      border-radius: 16px;
      font-size: clamp(0.95rem, 1.4vw, 1.1rem);
      color: var(--fg);
      box-shadow: 0 10px 24px rgba(0, 0, 0, 0.3);
    }

    .banner-icon-box {
      width: 2.8rem;
      height: 2.8rem;
      border-radius: 10px;
      background: rgba(255, 153, 0, 0.12);
      border: 1px solid rgba(255, 153, 0, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .banner-icon {
      width: 1.4rem;
      height: 1.4rem;
    }

    .banner-content {
      line-height: 1.55;
    }

    .banner-highlight {
      color: var(--accent);
      font-weight: 700;
      margin-right: 0.35rem;
    }
  `],
})
export class SlideEcosistema {}
