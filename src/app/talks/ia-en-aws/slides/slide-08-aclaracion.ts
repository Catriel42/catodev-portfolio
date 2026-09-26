import { Component } from '@angular/core';
import { LucideInfo, LucideCheck, LucideLayers, LucideTerminal } from '@lucide/angular';

@Component({
  selector: 'app-slide-aclaracion',
  imports: [LucideInfo, LucideCheck, LucideLayers, LucideTerminal],
  template: `
    <div class="aclaracion-wrapper">
      <div class="header-section">
        <div class="pill-badge font-mono">
          <svg lucideInfo class="badge-icon"></svg>
          <span>ACLARACIÓN · ZERO VENDOR LOCK-IN</span>
        </div>

        <h2 class="main-heading">
          "Strands es open source — <span class="text-accent">no es obligatorio de AWS</span>."
        </h2>

        <p class="subtitle">
          Cualquier framework, SDK o loop artesanal hace exactamente lo mismo y corre sobre la infraestructura de AWS con total compatibilidad.
        </p>
      </div>

      <!-- Architecture Diagram: Universal Agent Pluggability -->
      <div class="diagram-card">
        <svg viewBox="0 0 1020 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagrama: Cualquier agente es compatible con AWS AgentCore">
          <defs>
            <marker id="arrowhead-aclaracion" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#FF9900" />
            </marker>
            <marker id="arrowhead-gray-acl" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#6B7280" />
            </marker>
          </defs>

          <!-- 1. Left Stack: Pluggable Frameworks & Languages -->
          <g class="frameworks-stack">
            <!-- Strands -->
            <rect x="20" y="20" width="200" height="42" rx="10" fill="#1C1812" stroke="#FF9900" stroke-width="1.5" />
            <circle cx="38" cy="41" r="5" fill="#FF9900" />
            <text x="52" y="46" fill="#FF9900" font-size="13" font-weight="700" font-family="var(--font-sans)">Strands Agents</text>
            <text x="180" y="46" text-anchor="middle" fill="#9CA3AF" font-size="10" font-family="var(--font-mono)">AWS</text>

            <!-- Google ADK / Genkit -->
            <rect x="20" y="72" width="200" height="42" rx="10" fill="#0E1624" stroke="#00D2FF" stroke-width="1.5" />
            <circle cx="38" cy="93" r="5" fill="#00D2FF" />
            <text x="52" y="98" fill="#00D2FF" font-size="13" font-weight="700" font-family="var(--font-sans)">Google ADK</text>
            <text x="185" y="98" text-anchor="middle" fill="#9CA3AF" font-size="10" font-family="var(--font-mono)">Google</text>

            <!-- LangChain / LangGraph -->
            <rect x="20" y="124" width="200" height="42" rx="10" fill="#111827" stroke="#60A5FA" stroke-width="1.5" />
            <circle cx="38" cy="145" r="5" fill="#60A5FA" />
            <text x="52" y="150" fill="#F3F4F6" font-size="13" font-weight="700" font-family="var(--font-sans)">LangChain</text>
            <text x="180" y="150" text-anchor="middle" fill="#9CA3AF" font-size="10" font-family="var(--font-mono)">OSS</text>

            <!-- C# puro / .NET -->
            <rect x="20" y="176" width="200" height="42" rx="10" fill="#181124" stroke="#C084FC" stroke-width="1.5" />
            <circle cx="38" cy="197" r="5" fill="#C084FC" />
            <text x="52" y="202" fill="#C084FC" font-size="13" font-weight="700" font-family="var(--font-sans)">C# puro</text>
            <text x="180" y="202" text-anchor="middle" fill="#9CA3AF" font-size="10" font-family="var(--font-mono)">Custom</text>

            <!-- Custom Loop (Python, Java, Go, Rust) -->
            <rect x="20" y="228" width="200" height="42" rx="10" fill="#0E1A16" stroke="#34D399" stroke-width="1.5" />
            <circle cx="38" cy="249" r="5" fill="#34D399" />
            <text x="52" y="254" fill="#34D399" font-size="13" font-weight="700" font-family="var(--font-sans)">Custom Loop</text>
            <text x="175" y="254" text-anchor="middle" fill="#9CA3AF" font-size="10" font-family="var(--font-mono)"></text>
          </g>

          <!-- Converging Bezier Connectors to Central Container -->
          <path d="M 220 41 C 280 41, 290 145, 348 145" fill="none" stroke="#FF9900" stroke-width="2" stroke-dasharray="4 4" />
          <path d="M 220 93 C 275 93, 295 145, 348 145" fill="none" stroke="#00D2FF" stroke-width="2" stroke-dasharray="4 4" />
          <path d="M 220 145 L 348 145" fill="none" stroke="#60A5FA" stroke-width="2" stroke-dasharray="4 4" />
          <path d="M 220 197 C 275 197, 295 145, 348 145" fill="none" stroke="#C084FC" stroke-width="2" stroke-dasharray="4 4" />
          <path d="M 220 249 C 280 249, 290 145, 348 145" fill="none" stroke="#34D399" stroke-width="2" stroke-dasharray="4 4" />

          <!-- 2. Center: Universal Container Contract (AgentCore microVM) -->
          <g class="runtime-contract">
            <!-- Outer dashed boundary -->
            <rect x="350" y="30" width="310" height="235" rx="16" fill="#0A0E17" stroke="rgba(255,255,255,0.25)" stroke-width="1.5" stroke-dasharray="6 6" />
            <text x="505" y="56" text-anchor="middle" fill="#9CA3AF" font-size="11" font-weight="700" font-family="var(--font-mono)">AgentCore Runtime (microVM)</text>

            <!-- Inner universal container -->
            <rect x="370" y="70" width="270" height="175" rx="12" fill="#121620" stroke="#FF9900" stroke-width="2" />
            
            <rect x="420" y="85" width="170" height="24" rx="6" fill="rgba(255, 153, 0, 0.12)" stroke="rgba(255, 153, 0, 0.3)" stroke-width="1" />
            <text x="505" y="101" text-anchor="middle" fill="#FF9900" font-size="10" font-weight="700" font-family="var(--font-mono)">CONTRATO UNIVERSAL</text>

            <text x="505" y="132" text-anchor="middle" fill="#F3F4F6" font-size="16" font-weight="800" font-family="var(--font-sans)">Tu Contenedor</text>
            <text x="505" y="152" text-anchor="middle" fill="#9CA3AF" font-size="11" font-family="var(--font-mono)">Cualquier agente / Cualquier loop</text>

            <!-- Standard HTTP Endpoints -->
            <rect x="390" y="170" width="110" height="32" rx="8" fill="rgba(0, 210, 255, 0.1)" stroke="rgba(0, 210, 255, 0.35)" stroke-width="1" />
            <text x="445" y="190" text-anchor="middle" fill="#00D2FF" font-size="11" font-weight="700" font-family="var(--font-mono)">/invocations</text>

            <rect x="520" y="170" width="100" height="32" rx="8" fill="rgba(255, 255, 255, 0.05)" stroke="rgba(255, 255, 255, 0.15)" stroke-width="1" />
            <text x="570" y="190" text-anchor="middle" fill="#9CA3AF" font-size="11" font-weight="700" font-family="var(--font-mono)">/ping</text>

            <text x="505" y="226" text-anchor="middle" fill="#64748B" font-size="10" font-family="var(--font-mono)">AWS solo requiere estos 2 endpoints</text>
          </g>

          <!-- Arrow to AWS Production -->
          <line x1="660" y1="147" x2="722" y2="147" stroke="#FF9900" stroke-width="2.5" marker-end="url(#arrowhead-aclaracion)" />
          <text x="691" y="138" text-anchor="middle" fill="#FF9900" font-size="10" font-weight="700" font-family="var(--font-mono)">ejecuta</text>

          <!-- 3. Right: AWS Production Ecosystem -->
          <g class="aws-destination">
            <rect x="730" y="45" width="265" height="205" rx="16" fill="#151A26" stroke="rgba(255,255,255,0.22)" stroke-width="1.5" />
            
            <rect x="750" y="65" width="140" height="24" rx="6" fill="rgba(255, 255, 255, 0.05)" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1" />
            <text x="820" y="81" text-anchor="middle" fill="#9CA3AF" font-size="10" font-weight="700" font-family="var(--font-mono)">INFRAESTRUCTURA AWS</text>

            <text x="750" y="115" fill="#F3F4F6" font-size="16" font-weight="800" font-family="var(--font-sans)">Servicios Listos</text>

            <!-- Feature 1: Bedrock -->
            <rect x="750" y="128" width="225" height="32" rx="8" fill="rgba(168, 85, 247, 0.1)" stroke="rgba(168, 85, 247, 0.3)" stroke-width="1" />
            <text x="765" y="148" fill="#C084FC" font-size="11" font-weight="700" font-family="var(--font-mono)">Amazon Bedrock</text>
            <text x="960" y="148" text-anchor="end" fill="#9CA3AF" font-size="10" font-family="var(--font-mono)">Modelos</text>

            <!-- Feature 2: Gateway -->
            <rect x="750" y="166" width="225" height="32" rx="8" fill="rgba(255, 153, 0, 0.1)" stroke="rgba(255, 153, 0, 0.3)" stroke-width="1" />
            <text x="765" y="186" fill="#FF9900" font-size="11" font-weight="700" font-family="var(--font-mono)">AgentCore Gateway</text>
            <text x="960" y="186" text-anchor="end" fill="#9CA3AF" font-size="10" font-family="var(--font-mono)">Tools/MCP</text>

            <!-- Feature 3: IAM & CloudWatch -->
            <rect x="750" y="204" width="225" height="32" rx="8" fill="rgba(0, 210, 255, 0.1)" stroke="rgba(0, 210, 255, 0.3)" stroke-width="1" />
            <text x="765" y="224" fill="#00D2FF" font-size="11" font-weight="700" font-family="var(--font-mono)">IAM &amp; Observability</text>
            <text x="960" y="224" text-anchor="end" fill="#9CA3AF" font-size="10" font-family="var(--font-mono)">Seguridad</text>
          </g>
        </svg>
      </div>

      <!-- 3 Takeaway Highlights -->
      <div class="takeaways-grid">
        <div class="takeaway-card">
          <div class="takeaway-icon-box">
            <svg lucideCheck class="takeaway-icon text-accent"></svg>
          </div>
          <div>
            <div class="takeaway-title">Zero Vendor Lock-In</div>
            <p class="takeaway-text">Tu código no se ata a AWS. Si cambias de nube o ejecutas local, tu agente y su lógica siguen intactos.</p>
          </div>
        </div>

        <div class="takeaway-card">
          <div class="takeaway-icon-box">
            <svg lucideTerminal class="takeaway-icon text-accent"></svg>
          </div>
          <div>
            <div class="takeaway-title">Cualquier Lenguaje o SDK</div>
            <p class="takeaway-text">Strands, Google ADK, LangChain, C# puro o scripts en Rust/Go: utiliza la tecnología en la que tu equipo es experto.</p>
          </div>
        </div>

        <div class="takeaway-card">
          <div class="takeaway-icon-box">
            <svg lucideLayers class="takeaway-icon text-accent"></svg>
          </div>
          <div>
            <div class="takeaway-title">El Mismo Contrato HTTP</div>
            <p class="takeaway-text">A AgentCore solo le interesan <code>/invocations</code> y <code>/ping</code> para aislar y escalar el agente elásticamente.</p>
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

    .aclaracion-wrapper {
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
      gap: 0.5rem;
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

    .badge-icon {
      width: 1rem;
      height: 1rem;
    }

    .main-heading {
      font-size: clamp(2rem, 3.6vw, 3.2rem);
      font-weight: 800;
      line-height: 1.15;
      letter-spacing: -0.03em;
      color: var(--fg);
      margin: 0;
    }

    .text-accent {
      color: var(--accent-light);
    }

    .subtitle {
      font-size: clamp(1.05rem, 1.5vw, 1.25rem);
      line-height: 1.5;
      color: var(--fg-muted);
      margin: 0;
      max-width: 75ch;
    }

    .diagram-card {
      background: var(--bg-surface);
      border: 1px solid var(--surface-border-bright);
      border-radius: 20px;
      padding: clamp(1.25rem, 2vw, 1.75rem);
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

    .takeaways-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.25rem;
    }

    @media (max-width: 900px) {
      .takeaways-grid {
        grid-template-columns: 1fr;
      }
    }

    .takeaway-card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid var(--surface-border-bright);
      border-radius: 16px;
      padding: 1.1rem 1.35rem;
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
      transition: all 0.2s ease;
    }

    .takeaway-card:hover {
      border-color: rgba(255, 153, 0, 0.35);
      transform: translateY(-2px);
    }

    .takeaway-icon-box {
      width: 2.75rem;
      height: 2.75rem;
      border-radius: 12px;
      background: rgba(255, 153, 0, 0.1);
      border: 1px solid rgba(255, 153, 0, 0.25);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .takeaway-icon {
      width: 1.35rem;
      height: 1.35rem;
    }

    .takeaway-title {
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--fg);
      margin-bottom: 0.25rem;
    }

    .takeaway-text {
      font-size: 0.88rem;
      line-height: 1.5;
      color: var(--fg-muted);
      margin: 0;
    }

    .takeaway-text code {
      background: rgba(255, 255, 255, 0.08);
      padding: 0.1rem 0.35rem;
      border-radius: 4px;
      color: var(--fg);
      font-family: var(--font-mono);
      font-size: 0.9em;
    }
  `],
})
export class SlideAclaracion {}
