import { Component } from '@angular/core';
import { LucidePlug, LucideShieldCheck } from '@lucide/angular';

@Component({
  selector: 'app-slide-agentcore-gateway',
  imports: [LucidePlug, LucideShieldCheck],
  template: `
    <div class="gateway-wrapper">
      <div class="header-section">
        <div class="pill-badge font-mono">AGENTCORE · GATEWAY</div>
        <h2 class="main-heading">AgentCore Gateway</h2>
        <p class="subtitle">Convierte cualquier infraestructura existente en tools utilizables sin reescribir código.</p>
      </div>

      <div class="diagram-card">
        <svg viewBox="0 0 880 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="AgentCore Gateway architecture flow">
          <defs>
            <marker id="arrowhead-gateway" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#00D2FF" />
            </marker>
            <marker id="arrowhead-agent" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#FF9900" />
            </marker>
          </defs>

          <!-- Source boxes (left) -->
          <g class="source-group">
            <rect x="25" y="25" width="180" height="52" rx="10" fill="#121620" stroke="rgba(255,255,255,0.18)" stroke-width="1" />
            <text x="115" y="56" text-anchor="middle" fill="#F3F4F6" font-size="14" font-weight="700" font-family="var(--font-sans)">AWS Lambda</text>

            <rect x="25" y="94" width="180" height="52" rx="10" fill="#121620" stroke="rgba(255,255,255,0.18)" stroke-width="1" />
            <text x="115" y="125" text-anchor="middle" fill="#F3F4F6" font-size="14" font-weight="700" font-family="var(--font-sans)">REST / GraphQL API</text>

            <rect x="25" y="163" width="180" height="52" rx="10" fill="#121620" stroke="rgba(255,255,255,0.18)" stroke-width="1" />
            <text x="115" y="194" text-anchor="middle" fill="#F3F4F6" font-size="14" font-weight="700" font-family="var(--font-sans)">Servidores MCP</text>
          </g>

          <!-- Arrows to Gateway -->
          <line x1="205" y1="51" x2="348" y2="95" stroke="#00D2FF" stroke-width="2" stroke-dasharray="4 4" marker-end="url(#arrowhead-gateway)" />
          <line x1="205" y1="120" x2="348" y2="120" stroke="#00D2FF" stroke-width="2" stroke-dasharray="4 4" marker-end="url(#arrowhead-gateway)" />
          <line x1="205" y1="189" x2="348" y2="145" stroke="#00D2FF" stroke-width="2" stroke-dasharray="4 4" marker-end="url(#arrowhead-gateway)" />

          <!-- Gateway Box (center) -->
          <rect x="360" y="60" width="190" height="120" rx="14" fill="#1A1815" stroke="#FF9900" stroke-width="2" />
          <text x="455" y="118" text-anchor="middle" fill="#FF9900" font-size="18" font-weight="800" font-family="var(--font-sans)">Gateway</text>
          <text x="455" y="142" text-anchor="middle" fill="#9CA3AF" font-size="12" font-weight="600" font-family="var(--font-mono)">Protocol Bridge</text>

          <!-- Arrow to Agent -->
          <line x1="550" y1="120" x2="652" y2="120" stroke="#FF9900" stroke-width="2" marker-end="url(#arrowhead-agent)" />
          <text x="601" y="110" text-anchor="middle" fill="#FF9900" font-size="10" font-weight="700" font-family="var(--font-mono)">tools unificadas</text>

          <!-- Agent Box (right) -->
          <rect x="660" y="60" width="195" height="120" rx="14" fill="#121620" stroke="rgba(255,255,255,0.22)" stroke-width="1.5" />
          <text x="757" y="118" text-anchor="middle" fill="#F3F4F6" font-size="18" font-weight="700" font-family="var(--font-sans)">Tu agente</text>
          <text x="757" y="142" text-anchor="middle" fill="#00D2FF" font-size="12" font-family="var(--font-mono)">(Loop de decisión)</text>
        </svg>
      </div>

      <!-- 2 Takeaway Cards -->
      <div class="cards-grid">
        <div class="info-card">
          <div class="card-icon-box">
            <svg lucidePlug class="card-icon text-accent"></svg>
          </div>
          <div>
            <div class="card-title">Estandarización de Tools</div>
            <p class="card-text">
              Convierte lo que ya tienes en tools estandarizadas, sin que el agente necesite saber cómo autenticarse o hablarle a cada API individual.
            </p>
          </div>
        </div>

        <div class="info-card">
          <div class="card-icon-box">
            <svg lucideShieldCheck class="card-icon text-accent"></svg>
          </div>
          <div>
            <div class="card-title">Seguridad &amp; Governance</div>
            <p class="card-text">
              Políticas IAM unificadas, inyección segura de credenciales y auditoría de llamadas a herramientas en CloudWatch de forma centralizada.
            </p>
          </div>
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

    .gateway-wrapper {
      width: 100%;
      max-width: 1350px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: clamp(1.5rem, 3vh, 2.5rem);
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

    .diagram-card {
      background: var(--bg-surface);
      border: 1px solid var(--surface-border-bright);
      border-radius: 20px;
      padding: clamp(1.5rem, 3vw, 2.5rem);
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    svg {
      width: 100%;
      height: auto;
    }

    .cards-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }

    @media (max-width: 768px) {
      .cards-grid { grid-template-columns: 1fr; }
    }

    .info-card {
      display: flex;
      align-items: flex-start;
      gap: 1.25rem;
      padding: 1.25rem 1.5rem;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid var(--surface-border-bright);
      border-radius: 16px;
      box-shadow: 0 10px 24px rgba(0, 0, 0, 0.3);
      transition: all 0.2s ease;
    }

    .info-card:hover {
      border-color: rgba(255, 153, 0, 0.35);
      transform: translateY(-2px);
    }

    .card-icon-box {
      width: 3rem;
      height: 3rem;
      border-radius: 12px;
      background: rgba(255, 153, 0, 0.1);
      border: 1px solid rgba(255, 153, 0, 0.25);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .card-icon {
      width: 1.5rem;
      height: 1.5rem;
    }

    .card-title {
      font-size: 1.15rem;
      font-weight: 700;
      color: var(--fg);
      margin-bottom: 0.35rem;
    }

    .card-text {
      font-size: 0.95rem;
      line-height: 1.5;
      color: var(--fg-muted);
      margin: 0;
    }
  `],
})
export class SlideAgentcoreGateway {}
