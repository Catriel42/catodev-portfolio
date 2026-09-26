import { Component } from '@angular/core';
import { SlideEmbudoDiagram } from './slide-embudo';
import { LucideZap, LucideShield, LucideBrain, LucideKeyRound, LucideSparkles } from '@lucide/angular';

@Component({
  selector: 'app-slide-transicion',
  imports: [SlideEmbudoDiagram, LucideZap, LucideShield, LucideBrain, LucideKeyRound, LucideSparkles],
  template: `
    <div class="transicion-wrapper">
      <div class="diagram-wrapper">
        <app-embudo-diagram highlightStage="produccion" />
      </div>

      <div class="copy-section">
        <div class="pill-badge font-mono">CAPA 03 · PRODUCCIÓN</div>
        <h2 class="main-heading">Tu agente ya funciona… en tu laptop.</h2>
        <p class="lead-text">
          La distancia real entre un script experimental y un agente autónomo empresarial en producción.
        </p>

        <!-- 4 Production Questions Grid -->
        <div class="questions-grid">
          <div class="q-card">
            <div class="q-icon-box">
              <svg lucideZap class="q-icon text-accent"></svg>
            </div>
            <div>
              <div class="q-title">¿Quién lo escala?</div>
              <div class="q-desc">Concurrencia elástica sin servidores ociosos</div>
            </div>
          </div>

          <div class="q-card">
            <div class="q-icon-box">
              <svg lucideShield class="q-icon text-accent"></svg>
            </div>
            <div>
              <div class="q-title">¿Quién lo aísla?</div>
              <div class="q-desc">Sandbox seguro en microVMs independientes</div>
            </div>
          </div>

          <div class="q-card">
            <div class="q-icon-box">
              <svg lucideBrain class="q-icon text-accent"></svg>
            </div>
            <div>
              <div class="q-title">¿Quién le da memoria?</div>
              <div class="q-desc">Persistencia de contexto y memoria de sesión</div>
            </div>
          </div>

          <div class="q-card">
            <div class="q-icon-box">
              <svg lucideKeyRound class="q-icon text-accent"></svg>
            </div>
            <div>
              <div class="q-title">¿Quién audita las tools?</div>
              <div class="q-desc">Políticas IAM, secret management y rate limits</div>
            </div>
          </div>
        </div>

        <div class="welcome-banner">
          <svg lucideSparkles class="banner-icon text-accent"></svg>
          <span>Bienvenido a <strong>Amazon Bedrock AgentCore</strong> — la plataforma de producción para agentes autónomos.</span>
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

    .transicion-wrapper {
      width: 100%;
      max-width: 1300px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: clamp(1.5rem, 3vh, 2.5rem);
    }

    .diagram-wrapper {
      width: 100%;
    }

    .copy-section {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
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
      font-size: clamp(2rem, 3.8vw, 3.2rem);
      font-weight: 800;
      line-height: 1.15;
      letter-spacing: -0.03em;
      color: var(--fg);
      margin: 0;
    }

    .lead-text {
      font-size: clamp(1.05rem, 1.6vw, 1.3rem);
      color: var(--fg-muted);
      margin: 0;
      max-width: 65ch;
    }

    .questions-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.25rem;
      margin-top: 0.5rem;
    }

    @media (max-width: 1024px) {
      .questions-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 600px) {
      .questions-grid {
        grid-template-columns: 1fr;
      }
    }

    .q-card {
      background: var(--bg-surface);
      border: 1px solid var(--surface-border-bright);
      border-radius: 16px;
      padding: 1.25rem 1.4rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      box-shadow: 0 10px 28px rgba(0, 0, 0, 0.35);
      transition: all 0.2s ease;
    }

    .q-card:hover {
      border-color: rgba(255, 153, 0, 0.3);
      transform: translateY(-2px);
    }

    .q-icon-box {
      width: 2.75rem;
      height: 2.75rem;
      border-radius: 10px;
      background: rgba(255, 153, 0, 0.1);
      border: 1px solid rgba(255, 153, 0, 0.25);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .q-icon {
      width: 1.4rem;
      height: 1.4rem;
    }

    .q-title {
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--fg);
      margin-bottom: 0.35rem;
    }

    .q-desc {
      font-size: 0.85rem;
      color: var(--fg-muted);
      line-height: 1.4;
    }

    .welcome-banner {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem 1.5rem;
      background: linear-gradient(90deg, rgba(255, 153, 0, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%);
      border: 1px solid rgba(255, 153, 0, 0.25);
      border-radius: 12px;
      font-size: clamp(0.95rem, 1.4vw, 1.15rem);
      color: var(--fg);
      margin-top: 0.5rem;
    }

    .banner-icon {
      width: 1.4rem;
      height: 1.4rem;
      flex-shrink: 0;
    }
  `],
})
export class SlideTransicion {}
