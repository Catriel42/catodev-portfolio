import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-titulo',
  template: `
    <div class="slide-layout">
      <!-- Left Column: Title & Info -->
      <div class="hero-container">
        <div class="title-block">
          <h1 class="main-title">
            <span class="title-tech">IA en AWS: De la idea a los agentes</span>
            <span class="title-sub">De las ideas a los agentes</span>
          </h1>
          
          <p class="abstract">
            Una introducción a la inteligencia artificial generativa y los agentes de IA en AWS.
          </p>
        </div>

        <div class="author-card">
          <div class="avatar-dot">CP</div>
          <div>
            <div class="author-name">Catriel Pereira</div>
            <div class="author-role">AWS AI User Group Bolivia Leader</div>
          </div>
        </div>
      </div>

      <!-- Right Column: Generic Architecture Preview Diagram -->
      <div class="diagram-container">
        <svg viewBox="0 0 760 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagrama genérico de arquitectura de agente">
          <defs>
            <marker id="arrow-hero" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#6B7280" />
            </marker>
            <marker id="arrow-hero-orange" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#FF9900" />
            </marker>
          </defs>

          <!-- 1. Usuario -->
          <rect x="15" y="85" width="115" height="70" rx="10" fill="#121620" stroke="rgba(255,255,255,0.2)" stroke-width="1" />
          <text x="72" y="118" text-anchor="middle" fill="#F3F4F6" font-size="14" font-weight="700" font-family="var(--font-sans)">Usuario</text>
          <text x="72" y="137" text-anchor="middle" fill="#9CA3AF" font-size="11" font-family="var(--font-mono)">prompt</text>

          <!-- Arrow: Usuario → Agent -->
          <line x1="130" y1="110" x2="168" y2="110" stroke="#6B7280" stroke-width="1.5" marker-end="url(#arrow-hero)" />

          <!-- Arrow: Agent → Usuario (respuesta) -->
          <line x1="175" y1="135" x2="137" y2="135" stroke="#10B981" stroke-width="1.5" marker-end="url(#arrow-hero)" />
          <text x="156" y="150" text-anchor="middle" fill="#10B981" font-size="9" font-weight="600" font-family="var(--font-mono)">resp.</text>

          <!-- 2. AgentCore Runtime Outer Container -->
          <rect x="162" y="45" width="175" height="145" rx="12" fill="#0E121A" stroke="rgba(255,255,255,0.18)" stroke-width="1.5" stroke-dasharray="4 4" />
          <text x="250" y="65" text-anchor="middle" fill="#9CA3AF" font-size="10" font-weight="600" font-family="var(--font-mono)">AgentCore Runtime</text>

          <!-- Inner rect: Agente -->
          <rect x="175" y="78" width="150" height="95" rx="10" fill="#1A202C" stroke="#00D2FF" stroke-width="2" />
          <text x="250" y="123" text-anchor="middle" fill="#F3F4F6" font-size="15" font-weight="700" font-family="var(--font-sans)">Agente</text>
          <text x="250" y="142" text-anchor="middle" fill="#00D2FF" font-size="11" font-family="var(--font-mono)">(Strands)</text>

          <!-- Arrow: Agent → Gateway -->
          <line x1="325" y1="110" x2="378" y2="110" stroke="#FF9900" stroke-width="1.5" marker-end="url(#arrow-hero-orange)" />
          <text x="352" y="100" text-anchor="middle" fill="#FF9900" font-size="9" font-weight="600" font-family="var(--font-mono)">tools</text>

          <!-- Arrow: Gateway → Agent -->
          <line x1="385" y1="140" x2="332" y2="140" stroke="#FF9900" stroke-width="1.5" marker-end="url(#arrow-hero-orange)" />
          <text x="358" y="156" text-anchor="middle" fill="#FF9900" font-size="9" font-weight="600" font-family="var(--font-mono)">res.</text>

          <!-- 3. Gateway -->
          <rect x="385" y="78" width="120" height="95" rx="10" fill="#1C1812" stroke="#FF9900" stroke-width="2" />
          <text x="445" y="130" text-anchor="middle" fill="#FF9900" font-size="15" font-weight="700" font-family="var(--font-sans)">Gateway</text>

          <!-- Arrow: Gateway → Tool 1 -->
          <path d="M 505 110 C 540 110, 545 55, 577 55" fill="none" stroke="#6B7280" stroke-width="1.5" marker-end="url(#arrow-hero)" />

          <!-- Arrow: Gateway → Tool 2 -->
          <path d="M 505 140 C 540 140, 545 175, 577 175" fill="none" stroke="#6B7280" stroke-width="1.5" marker-end="url(#arrow-hero)" />

          <!-- 4. Tool 1 -->
          <rect x="585" y="25" width="160" height="55" rx="8" fill="#121620" stroke="rgba(255,255,255,0.15)" stroke-width="1" />
          <text x="665" y="50" text-anchor="middle" fill="#F3F4F6" font-size="13" font-weight="600" font-family="var(--font-sans)">Tool 1</text>
          <text x="665" y="67" text-anchor="middle" fill="#9CA3AF" font-size="10" font-family="var(--font-mono)">(API / Lambda)</text>

          <!-- 5. Tool 2 -->
          <rect x="585" y="150" width="160" height="55" rx="8" fill="#121620" stroke="rgba(255,255,255,0.15)" stroke-width="1" />
          <text x="665" y="175" text-anchor="middle" fill="#F3F4F6" font-size="13" font-weight="600" font-family="var(--font-sans)">Tool 2</text>
          <text x="665" y="192" text-anchor="middle" fill="#9CA3AF" font-size="10" font-family="var(--font-mono)">(Base de Datos / KB)</text>

          <!-- 6. Amazon Bedrock -->
          <rect x="175" y="245" width="150" height="65" rx="10" fill="#121620" stroke="#A855F7" stroke-width="1.5" />
          <text x="250" y="274" text-anchor="middle" fill="#A855F7" font-size="14" font-weight="700" font-family="var(--font-sans)">Amazon Bedrock</text>
          <text x="250" y="294" text-anchor="middle" fill="#9CA3AF" font-size="10" font-family="var(--font-mono)">(Modelo / LLM)</text>

          <!-- Arrow: Agent → Bedrock -->
          <line x1="225" y1="173" x2="225" y2="238" stroke="#A855F7" stroke-width="1.5" marker-end="url(#arrow-hero)" />

          <!-- Arrow: Bedrock → Agent -->
          <line x1="275" y1="245" x2="275" y2="180" stroke="#A855F7" stroke-width="1.5" marker-end="url(#arrow-hero)" />
        </svg>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-height: 70vh;
    }

    .slide-layout {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: clamp(2rem, 4vw, 4rem);
      align-items: center;
      width: 100%;
    }

    @media (max-width: 900px) {
      .slide-layout {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }

    .hero-container {
      display: flex;
      flex-direction: column;
      gap: clamp(2rem, 4vh, 3.5rem);
    }

    .title-block {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .main-title {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      font-size: clamp(2.4rem, 4.5vw, 4.4rem);
      font-weight: 800;
      line-height: 1.05;
      letter-spacing: -0.035em;
      margin: 0;
    }

    .title-tech {
      color: var(--fg);
    }

    .title-sub {
      background: linear-gradient(135deg, var(--accent) 0%, #FFB84D 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .abstract {
      font-size: clamp(1rem, 1.8vw, 1.35rem);
      color: var(--fg-muted);
      line-height: 1.5;
      margin: 0;
      font-weight: 400;
    }

    .author-card {
      display: inline-flex;
      align-items: center;
      gap: 0.85rem;
      padding: 0.65rem 1.25rem 0.65rem 0.75rem;
      background: var(--bg-surface);
      border: 1px solid var(--surface-border-bright);
      border-radius: 9999px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
      width: fit-content;
    }

    .avatar-dot {
      width: 2.25rem;
      height: 2.25rem;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--accent) 0%, #FFB84D 100%);
      color: #090B0E;
      font-weight: 800;
      font-size: 0.8rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-mono);
      box-shadow: 0 0 12px var(--accent-glow);
    }

    .author-name {
      font-weight: 700;
      font-size: 0.95rem;
      color: var(--fg);
      line-height: 1.2;
    }

    .author-role {
      font-size: 0.75rem;
      color: var(--fg-muted);
      font-family: var(--font-mono);
      margin-top: 0.1rem;
    }

    .diagram-container {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    svg {
      width: 100%;
      max-width: 760px;
      height: auto;
      filter: drop-shadow(0 16px 36px rgba(0, 0, 0, 0.45));
    }
  `],
})
export class SlideTitulo {}
