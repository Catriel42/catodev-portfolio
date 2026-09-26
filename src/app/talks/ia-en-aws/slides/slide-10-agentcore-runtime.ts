import { Component } from '@angular/core';
import { LucideShieldCheck, LucideZap, LucideLayers } from '@lucide/angular';

@Component({
  selector: 'app-slide-agentcore-runtime',
  imports: [LucideShieldCheck, LucideZap, LucideLayers],
  template: `
    <div class="runtime-wrapper">
      <div class="header-section">
        <div class="pill-badge font-mono">AGENTCORE · RUNTIME</div>
        <h2 class="main-heading">AgentCore Runtime</h2>
        <p class="subtitle">MicroVMs elásticas de baja latencia: tu agente seguro y completamente aislado.</p>
      </div>

      <!-- Main Wide Architecture Diagram Card -->
      <div class="diagram-card">
        <svg viewBox="0 0 1020 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="AgentCore Runtime diagram">
          <defs>
            <marker id="arrowhead-inv" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#00D2FF" />
            </marker>
            <marker id="arrowhead-ping" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#9CA3AF" />
            </marker>
            <marker id="arrowhead-out" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#10B981" />
            </marker>
          </defs>

          <!-- Left: Standard Endpoints -->
          <g class="endpoints-group">
            <rect x="25" y="70" width="165" height="46" rx="10" fill="rgba(0, 210, 255, 0.12)" stroke="rgba(0, 210, 255, 0.4)" stroke-width="1.5" />
            <text x="107" y="99" text-anchor="middle" fill="#00D2FF" font-family="var(--font-mono)" font-size="14" font-weight="700">/invocations</text>
            <line x1="190" y1="93" x2="272" y2="93" stroke="#00D2FF" stroke-width="2" marker-end="url(#arrowhead-inv)" />
            <text x="231" y="83" text-anchor="middle" fill="#00D2FF" font-family="var(--font-mono)" font-size="10" font-weight="700">POST</text>

            <rect x="25" y="145" width="165" height="46" rx="10" fill="rgba(255, 255, 255, 0.05)" stroke="rgba(255, 255, 255, 0.18)" stroke-width="1.5" />
            <text x="107" y="174" text-anchor="middle" fill="#9CA3AF" font-family="var(--font-mono)" font-size="14" font-weight="700">/ping</text>
            <line x1="190" y1="168" x2="272" y2="168" stroke="#6B7280" stroke-width="2" marker-end="url(#arrowhead-ping)" />
            <text x="231" y="158" text-anchor="middle" fill="#9CA3AF" font-family="var(--font-mono)" font-size="10" font-weight="700">GET</text>
          </g>

          <!-- Center: Outer Container microVM (Firecracker) -->
          <rect x="280" y="25" width="460" height="220" rx="16" fill="#0A0E17" stroke="rgba(255,255,255,0.22)" stroke-width="1.5" stroke-dasharray="6 6" />
          <text x="310" y="55" fill="#9CA3AF" font-size="12" font-weight="700" font-family="var(--font-mono)">microVM aislada (Firecracker)</text>
          
          <rect x="620" y="40" width="105" height="22" rx="6" fill="rgba(0, 210, 255, 0.12)" stroke="rgba(0, 210, 255, 0.3)" stroke-width="1" />
          <text x="672" y="55" text-anchor="middle" fill="#00D2FF" font-size="10" font-weight="700" font-family="var(--font-mono)">&lt; 50ms Boot</text>

          <!-- Inner Agent Container -->
          <rect x="310" y="75" width="400" height="145" rx="12" fill="#141924" stroke="#FF9900" stroke-width="2" />
          <text x="510" y="130" text-anchor="middle" fill="#F3F4F6" font-size="19" font-weight="800" font-family="var(--font-sans)">Contenedor del agente</text>
          <text x="510" y="156" text-anchor="middle" fill="#00D2FF" font-size="12" font-weight="600" font-family="var(--font-mono)">(Strands / LangChain / C# / Custom)</text>
          <text x="510" y="186" text-anchor="middle" fill="#9CA3AF" font-size="11" font-family="var(--font-mono)">Memoria y estado efímero aislado</text>

          <!-- Right: Responses & Stream -->
          <g class="output-group">
            <line x1="740" y1="135" x2="812" y2="135" stroke="#10B981" stroke-width="2" marker-end="url(#arrowhead-out)" />
            <text x="776" y="125" text-anchor="middle" fill="#10B981" font-family="var(--font-mono)" font-size="10" font-weight="700">tokens</text>

            <rect x="820" y="75" width="175" height="120" rx="12" fill="#121620" stroke="rgba(255,255,255,0.18)" stroke-width="1.5" />
            <text x="907" y="120" text-anchor="middle" fill="#F3F4F6" font-size="15" font-weight="700" font-family="var(--font-sans)">Respuesta</text>
            <text x="907" y="145" text-anchor="middle" fill="#10B981" font-size="12" font-weight="600" font-family="var(--font-mono)">Streaming / JSON</text>
            <text x="907" y="168" text-anchor="middle" fill="#9CA3AF" font-size="10" font-family="var(--font-mono)">baja latencia</text>
          </g>
        </svg>
      </div>

      <!-- 3 Takeaway Cards -->
      <div class="features-grid">
        <div class="feature-card">
          <div class="card-icon-box">
            <svg lucideShieldCheck class="card-icon text-accent"></svg>
          </div>
          <div>
            <div class="card-title">Aislamiento por Hardware</div>
            <p class="card-text">Cada agente se ejecuta en su propia microVM Firecracker dedicada, garantizando aislamiento estricto sin vecinos ruidosos.</p>
          </div>
        </div>

        <div class="feature-card">
          <div class="card-icon-box">
            <svg lucideZap class="card-icon text-accent"></svg>
          </div>
          <div>
            <div class="card-title">Arranque Instantáneo</div>
            <p class="card-text">Latencias de inicio en milisegundos para responder al tráfico de forma elástica sin incurrir en cold-starts prolongados.</p>
          </div>
        </div>

        <div class="feature-card">
          <div class="card-icon-box">
            <svg lucideLayers class="card-icon text-accent"></svg>
          </div>
          <div>
            <div class="card-title">Agnóstico de Código</div>
            <p class="card-text">A AWS no le importa si adentro hay <strong>Strands, LangChain o Java plano</strong> — solo le habla a los dos endpoints estándar.</p>
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

    .runtime-wrapper {
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
      padding: clamp(1.5rem, 3vw, 2.25rem);
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    svg {
      width: 100%;
      height: auto;
      filter: drop-shadow(0 10px 24px rgba(0, 0, 0, 0.35));
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.25rem;
    }

    @media (max-width: 900px) {
      .features-grid {
        grid-template-columns: 1fr;
      }
    }

    .feature-card {
      display: flex;
      align-items: flex-start;
      gap: 1.15rem;
      padding: 1.25rem 1.4rem;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid var(--surface-border-bright);
      border-radius: 16px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
      transition: all 0.2s ease;
    }

    .feature-card:hover {
      border-color: rgba(255, 153, 0, 0.35);
      transform: translateY(-2px);
    }

    .card-icon-box {
      width: 2.85rem;
      height: 2.85rem;
      border-radius: 12px;
      background: rgba(255, 153, 0, 0.1);
      border: 1px solid rgba(255, 153, 0, 0.25);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .card-icon {
      width: 1.45rem;
      height: 1.45rem;
    }

    .card-title {
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--fg);
      margin-bottom: 0.3rem;
    }

    .card-text {
      font-size: 0.88rem;
      line-height: 1.5;
      color: var(--fg-muted);
      margin: 0;
    }
  `],
})
export class SlideAgentcoreRuntime {}
