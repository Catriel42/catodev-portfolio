import { Component } from '@angular/core';
import { LucideMessageSquare, LucideWorkflow, LucideShieldCheck } from '@lucide/angular';

@Component({
  selector: 'app-slide-caso-de-uso',
  imports: [LucideMessageSquare, LucideWorkflow, LucideShieldCheck],
  template: `
    <div class="caso-wrapper">
      <div class="header-section">
        <div class="pill-badge font-mono">Caso de uso</div>
        <h2 class="main-heading">Caso de uso: Agente de soporte interno</h2>
        <p class="subtitle">Flujo end-to-end: desde el prompt del usuario hasta la ejecución de tools aisladas y generación de respuesta.</p>
      </div>

      <!-- Main Architecture Diagram Card -->
      <div class="diagram-card">
        <svg viewBox="0 0 1060 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagrama del caso de uso: agente de soporte interno">
          <defs>
            <marker id="arrow-gray" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#6B7280" />
            </marker>
            <marker id="arrow-green" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#10B981" />
            </marker>
            <marker id="arrow-orange" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#FF9900" />
            </marker>
            <marker id="arrow-purple" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#A855F7" />
            </marker>
          </defs>

          <!-- 1. Left: Usuario -->
          <rect x="25" y="80" width="150" height="90" rx="12" fill="#121620" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" />
          <text x="100" y="120" text-anchor="middle" fill="#F3F4F6" font-size="16" font-weight="700" font-family="var(--font-sans)">Usuario</text>
          <text x="100" y="145" text-anchor="middle" fill="#9CA3AF" font-size="12" font-family="var(--font-mono)">pregunta / prompt</text>

          <!-- Arrow: Usuario → Strands Agent (pregunta) -->
          <line x1="175" y1="108" x2="238" y2="108" stroke="#6B7280" stroke-width="2" marker-end="url(#arrow-gray)" />

          <!-- Arrow: Strands Agent → Usuario (respuesta final) -->
          <line x1="245" y1="142" x2="183" y2="142" stroke="#10B981" stroke-width="2" marker-end="url(#arrow-green)" />
          <text x="211" y="160" text-anchor="middle" fill="#10B981" font-size="11" font-weight="700" font-family="var(--font-mono)">respuesta</text>

          <!-- 2. AgentCore Runtime boundary -->
          <rect x="235" y="30" width="240" height="185" rx="16" fill="#0A0E17" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" stroke-dasharray="6 6" />
          <text x="355" y="56" text-anchor="middle" fill="#9CA3AF" font-size="12" font-weight="700" font-family="var(--font-mono)">AgentCore Runtime (microVM)</text>

          <!-- Inner rect: Strands Agent -->
          <rect x="255" y="75" width="200" height="120" rx="12" fill="#161B26" stroke="#00D2FF" stroke-width="2" />
          <text x="355" y="128" text-anchor="middle" fill="#F3F4F6" font-size="18" font-weight="800" font-family="var(--font-sans)">Strands Agent</text>
          <text x="355" y="152" text-anchor="middle" fill="#00D2FF" font-size="12" font-weight="600" font-family="var(--font-mono)">Loop de Decisión</text>

          <!-- Arrow: Strands Agent → Gateway (Tools) -->
          <line x1="455" y1="110" x2="528" y2="110" stroke="#FF9900" stroke-width="2" marker-end="url(#arrow-orange)" />
          <text x="492" y="100" text-anchor="middle" fill="#FF9900" font-size="11" font-weight="700" font-family="var(--font-mono)">call tools</text>

          <!-- Arrow: Gateway → Strands Agent (Resultados) -->
          <line x1="535" y1="148" x2="463" y2="148" stroke="#FF9900" stroke-width="2" marker-end="url(#arrow-orange)" />
          <text x="499" y="166" text-anchor="middle" fill="#FF9900" font-size="11" font-weight="700" font-family="var(--font-mono)">resultados</text>

          <!-- 3. Gateway -->
          <rect x="535" y="75" width="160" height="120" rx="14" fill="#1C1812" stroke="#FF9900" stroke-width="2" />
          <text x="615" y="128" text-anchor="middle" fill="#FF9900" font-size="18" font-weight="800" font-family="var(--font-sans)">Gateway</text>
          <text x="615" y="152" text-anchor="middle" fill="#9CA3AF" font-size="12" font-weight="600" font-family="var(--font-mono)">Auth &amp; Routing</text>

          <!-- Arrow: Gateway → Ticketing System -->
          <path d="M 695 110 C 745 110, 755 58, 792 58" fill="none" stroke="#6B7280" stroke-width="2" marker-end="url(#arrow-gray)" />

          <!-- Arrow: Gateway → Base de Conocimiento -->
          <path d="M 695 148 C 745 148, 755 198, 792 198" fill="none" stroke="#6B7280" stroke-width="2" marker-end="url(#arrow-gray)" />

          <!-- 4. Upper right: Ticketing System -->
          <rect x="800" y="28" width="235" height="65" rx="12" fill="#121620" stroke="rgba(255,255,255,0.18)" stroke-width="1.5" />
          <text x="917" y="56" text-anchor="middle" fill="#F3F4F6" font-size="15" font-weight="700" font-family="var(--font-sans)">Ticketing System</text>
          <text x="917" y="76" text-anchor="middle" fill="#9CA3AF" font-size="11" font-family="var(--font-mono)">AWS Lambda / Jira API</text>

          <!-- 5. Lower right: Base de Conocimiento -->
          <rect x="800" y="165" width="235" height="65" rx="12" fill="#121620" stroke="rgba(255,255,255,0.18)" stroke-width="1.5" />
          <text x="917" y="193" text-anchor="middle" fill="#F3F4F6" font-size="15" font-weight="700" font-family="var(--font-sans)">Base de Conocimiento</text>
          <text x="917" y="213" text-anchor="middle" fill="#9CA3AF" font-size="11" font-family="var(--font-mono)">OpenSearch / Vector Store</text>

          <!-- 6. Bottom: Bedrock (Claude / Nova / OpenAI) -->
          <rect x="255" y="260" width="200" height="75" rx="12" fill="#181124" stroke="#A855F7" stroke-width="2" />
          <text x="355" y="292" text-anchor="middle" fill="#A855F7" font-size="16" font-weight="800" font-family="var(--font-sans)">Amazon Bedrock</text>
          <text x="355" y="315" text-anchor="middle" fill="#9CA3AF" font-size="11" font-family="var(--font-mono)">Claude / Nova / Frontier LLMs</text>

          <!-- Arrow: Agent → Bedrock (reasoning) -->
          <line x1="315" y1="195" x2="315" y2="252" stroke="#A855F7" stroke-width="2" marker-end="url(#arrow-purple)" />

          <!-- Arrow: Bedrock → Agent (completion) -->
          <line x1="395" y1="260" x2="395" y2="203" stroke="#A855F7" stroke-width="2" marker-end="url(#arrow-purple)" />
          <text x="440" y="232" text-anchor="middle" fill="#A855F7" font-size="10" font-weight="700" font-family="var(--font-mono)">tokens</text>
        </svg>
      </div>

      <!-- 3 Workflow Callout Cards -->
      <div class="steps-grid">
        <div class="step-card">
          <div class="step-icon-box">
            <svg lucideMessageSquare class="step-icon text-accent"></svg>
          </div>
          <div>
            <div class="step-title">1. Entrada &amp; Razonamiento</div>
            <p class="step-text">El usuario envía su requerimiento; Strands consulta a Bedrock con el prompt y el esquema de tools disponibles.</p>
          </div>
        </div>

        <div class="step-card">
          <div class="step-icon-box">
            <svg lucideWorkflow class="step-icon text-accent"></svg>
          </div>
          <div>
            <div class="step-title">2. Orquestación &amp; Gateway</div>
            <p class="step-text">Strands decide qué herramientas ejecutar y llama a Gateway para conectar con Lambdas, APIs y bases vectoriales.</p>
          </div>
        </div>

        <div class="step-card">
          <div class="step-icon-box">
            <svg lucideShieldCheck class="step-icon text-accent"></svg>
          </div>
          <div>
            <div class="step-title">3. Aislamiento en Producción</div>
            <p class="step-text">El agente opera dentro de microVMs aisladas con credenciales efímeras, generando la respuesta final con total seguridad.</p>
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

    .caso-wrapper {
      width: 100%;
      max-width: 1380px;
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

    .diagram-card {
      background: var(--bg-surface);
      border: 1px solid var(--surface-border-bright);
      border-radius: 20px;
      padding: clamp(1.25rem, 2.5vw, 2rem);
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    svg {
      width: 100%;
      height: auto;
      filter: drop-shadow(0 10px 24px rgba(0, 0, 0, 0.4));
    }

    .steps-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.25rem;
    }

    @media (max-width: 900px) {
      .steps-grid {
        grid-template-columns: 1fr;
      }
    }

    .step-card {
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

    .step-card:hover {
      border-color: rgba(255, 153, 0, 0.35);
      transform: translateY(-2px);
    }

    .step-icon-box {
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

    .step-icon {
      width: 1.35rem;
      height: 1.35rem;
    }

    .step-title {
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--fg);
      margin-bottom: 0.25rem;
    }

    .step-text {
      font-size: 0.88rem;
      line-height: 1.5;
      color: var(--fg-muted);
      margin: 0;
    }
  `],
})
export class SlideCasoDeUso {}
