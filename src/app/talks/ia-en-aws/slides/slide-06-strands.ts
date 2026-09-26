import { Component } from '@angular/core';
import { LucideCode, LucideCheck } from '@lucide/angular';

@Component({
  selector: 'app-slide-strands',
  imports: [LucideCode, LucideCheck],
  template: `
    <div class="strands-wrapper">
      <div class="strands-layout">
        <!-- Left Column: Copy & Value Proposition -->
        <div class="info-col">
          <div class="pill-badge font-mono">CAPA 02 · AGENTE</div>
          <h2 class="title">Strands Agents</h2>
          
          <p class="lead-text">
            SDK <strong>open source</strong> de AWS para construir agentes en <strong>Python y TypeScript</strong>.
          </p>

          <div class="highlight-quote">
            <span class="accent-bar"></span>
            <span class="quote-text">"Tu código, tu loop — cambias de nube o de modelo y el código no se mueve."</span>
          </div>

          <div class="features-mini">
            <div class="mini-item">
              <svg lucideCheck class="check-icon text-accent"></svg>
              <span>Crear un <code>Agent</code> en 4 líneas de código</span>
            </div>
            <div class="mini-item">
              <svg lucideCheck class="check-icon text-accent"></svg>
              <span>Herramientas conectables como funciones nativas</span>
            </div>
            <div class="mini-item">
              <svg lucideCheck class="check-icon text-accent"></svg>
              <span>Ejecutable en cualquier runtime (local o nube)</span>
            </div>
          </div>
        </div>

        <!-- Right Column: Wide Vibrant Code Terminal -->
        <div class="terminal-col">
          <div class="code-terminal">
            <div class="terminal-header">
              <div class="terminal-dots">
                <span class="dot dot-red"></span>
                <span class="dot dot-yellow"></span>
                <span class="dot dot-green"></span>
              </div>
              <div class="tab-title font-mono">
                <svg lucideCode class="file-icon"></svg>
                <span>agent.py</span>
              </div>
              <span class="lang-tag font-mono">Python</span>
            </div>

            <div class="terminal-body">
              <div class="line-numbers font-mono" aria-hidden="true">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
              </div>
              
              <pre class="code-content font-mono"><code><span class="kwd">from</span> <span class="mod">strands</span> <span class="kwd">import</span> <span class="cls">Agent</span>

<span class="var">agent</span> <span class="op">=</span> <span class="cls">Agent</span>(<span class="param">tools</span><span class="op">=</span>[<span class="fn">cargar_mosca</span>, <span class="fn">estim_ppl101</span>])

<span class="var">res</span> <span class="op">=</span> <span class="fn">agent</span>(<span class="str">"Corre DOOM en el cerebro de una mosca"</span>)
<span class="cmt"># → Intento #6,386. No pasa del primer pasillo</span></code></pre>
            </div>
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

    .strands-wrapper {
      width: 100%;
      max-width: 1450px;
      margin: 0 auto;
    }

    .strands-layout {
      display: grid;
      grid-template-columns: minmax(360px, 480px) 1fr;
      gap: clamp(2rem, 4vw, 4.5rem);
      align-items: center;
      width: 100%;
    }

    @media (max-width: 960px) {
      .strands-layout {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }

    .info-col {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .pill-badge {
      display: inline-flex;
      align-items: center;
      padding: 0.3rem 0.85rem;
      border-radius: 9999px;
      background: rgba(255, 153, 0, 0.12);
      border: 1px solid rgba(255, 153, 0, 0.35);
      color: var(--accent);
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      width: fit-content;
    }

    .title {
      font-size: clamp(2.4rem, 4.2vw, 3.8rem);
      font-weight: 800;
      line-height: 1.1;
      letter-spacing: -0.03em;
      color: var(--fg);
      margin: 0;
    }

    .lead-text {
      font-size: clamp(1.15rem, 1.8vw, 1.45rem);
      color: var(--fg);
      line-height: 1.5;
      margin: 0;
    }

    .highlight-quote {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.85rem 1.25rem;
      background: rgba(255, 153, 0, 0.06);
      border-radius: 10px;
      border: 1px solid rgba(255, 153, 0, 0.2);
    }

    .accent-bar {
      width: 4px;
      height: 2rem;
      background: var(--accent);
      border-radius: 2px;
      flex-shrink: 0;
    }

    .quote-text {
      font-size: clamp(1rem, 1.4vw, 1.2rem);
      font-weight: 600;
      color: var(--accent-light);
    }

    .features-mini {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      margin-top: 0.5rem;
    }

    .mini-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-size: clamp(0.95rem, 1.3vw, 1.15rem);
      color: var(--fg-muted);
    }

    .mini-item code {
      background: rgba(255, 255, 255, 0.08);
      padding: 0.15rem 0.4rem;
      border-radius: 4px;
      color: var(--fg);
      font-family: var(--font-mono);
      font-size: 0.9em;
    }

    .check-icon {
      width: 1.25rem;
      height: 1.25rem;
      flex-shrink: 0;
    }

    /* Terminal Column and Frame */
    .terminal-col {
      width: 100%;
      min-width: 0;
    }

    .code-terminal {
      width: 100% !important;
      max-width: 100% !important;
      background: #0B0E14;
      border: 1px solid rgba(255, 255, 255, 0.18);
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 24px 60px rgba(0, 0, 0, 0.6), 0 0 30px rgba(255, 153, 0, 0.08);
      position: relative;
    }

    .terminal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.9rem 1.4rem;
      background: #121722;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .terminal-dots {
      display: flex;
      gap: 8px;
    }

    .dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }

    .dot-red { background: #FF5F56; }
    .dot-yellow { background: #FFBD2E; }
    .dot-green { background: #27C93F; }

    .tab-title {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.85rem;
      font-weight: 600;
      color: #E2E8F0;
      background: #0B0E14;
      padding: 0.25rem 0.95rem;
      border-radius: 6px;
      border: 1px solid rgba(255, 255, 255, 0.08);
    }

    .file-icon {
      width: 1rem;
      height: 1rem;
      color: var(--accent);
    }

    .lang-tag {
      font-size: 0.75rem;
      color: #64748B;
    }

    .terminal-body {
      display: flex;
      padding: clamp(2rem, 3vw, 2.75rem);
      gap: 1.75rem;
      align-items: flex-start;
      overflow-x: auto;
    }

    .line-numbers {
      display: flex;
      flex-direction: column;
      color: #475569;
      font-size: clamp(1.05rem, 1.4vw, 1.25rem);
      line-height: 1.85;
      user-select: none;
      text-align: right;
      padding-right: 1.25rem;
      border-right: 1px solid rgba(255, 255, 255, 0.08);
    }

    .code-content {
      margin: 0;
      padding: 0;
      font-size: clamp(1.05rem, 1.4vw, 1.25rem);
      line-height: 1.85;
      color: #F8FAFC;
      background: transparent;
      border: none;
      white-space: pre;
      flex-grow: 1;
    }

    /* Vibrant Code Syntax Colors */
    .kwd {
      color: #FF7B72;
      font-weight: 700;
    }

    .mod {
      color: #79C0FF;
    }

    .cls {
      color: #FFA657;
      font-weight: 700;
    }

    .var {
      color: #E6EDF3;
      font-weight: 500;
    }

    .op {
      color: #79C0FF;
    }

    .param {
      color: #D2A8FF;
    }

    .fn {
      color: #00D2FF;
    }

    .str {
      color: #7EE787;
    }

    .cmt {
      color: #94A3B8;
      font-style: italic;
    }
  `],
})
export class SlideStrands {}
