import { Component } from '@angular/core';
import { SlideEmbudoDiagram } from './slide-embudo';
import { LucideCpu, LucideSparkles, LucideWorkflow } from '@lucide/angular';

@Component({
  selector: 'app-slide-bedrock',
  imports: [SlideEmbudoDiagram, LucideCpu, LucideSparkles, LucideWorkflow],
  template: `
    <div class="diagram-wrapper">
      <app-embudo-diagram highlightStage="modelo" />
    </div>

    <div class="content-body">
      <div class="header-row">
        <div>
          <div class="pill-badge">CAPA 01 · MODELO</div>
          <h2 class="title">Amazon Bedrock</h2>
        </div>

        <div class="stats-group">
          <div class="stat-pill">
            <span class="stat-num">100+</span>
            <span class="stat-label">Modelos</span>
          </div>
          <div class="stat-pill">
            <span class="stat-num">~18</span>
            <span class="stat-label">Proveedores</span>
          </div>
          <div class="stat-pill highlight-pill">
            <svg lucideWorkflow class="pill-icon text-accent"></svg>
            <span class="stat-label">1 Sola API Unificada</span>
          </div>
        </div>
      </div>

      <!-- Dynamic Matrix of Model Providers (Sep 2026 Frontier Models) -->
      <div class="providers-matrix">
        @for (item of providers; track item.name) {
          <div class="provider-card" [class.featured]="item.featured">
            <div class="card-top">
              <svg lucideCpu class="provider-icon" [class.icon-accent]="item.featured"></svg>
              <span class="provider-tag font-mono">{{ item.tag }}</span>
            </div>
            <div class="provider-name">{{ item.name }}</div>
          </div>
        }
      </div>

      <!-- Impact Callout: Sep 2026 Latest Frontier Models -->
      <div class="impact-callout">
        <svg lucideSparkles class="impact-icon text-accent"></svg>
        <span class="impact-text">
          <strong>OpenAI GPT-6 Astra, GPT-6 Sol y GPT-6 Luna</strong>, junto con <strong>Claude Opus 5.5</strong>, ya están disponibles de forma nativa en Amazon Bedrock.
        </span>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }

    .diagram-wrapper {
      margin-bottom: clamp(1rem, 2vh, 1.5rem);
    }

    .header-row {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      gap: 1.5rem;
      margin-bottom: 1.25rem;
      flex-wrap: wrap;
    }

    .pill-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      background: rgba(255, 153, 0, 0.12);
      border: 1px solid rgba(255, 153, 0, 0.35);
      color: var(--accent);
      font-size: 0.75rem;
      font-weight: 700;
      font-family: var(--font-mono);
      letter-spacing: 0.08em;
      margin-bottom: 0.5rem;
    }

    .title {
      margin: 0;
      font-size: clamp(1.75rem, 3.2vw, 2.6rem);
      font-weight: 700;
      color: var(--fg);
    }

    .stats-group {
      display: flex;
      align-items: center;
      gap: 0.65rem;
      flex-wrap: wrap;
    }

    .stat-pill {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 0.95rem;
      background: var(--bg-surface);
      border: 1px solid var(--surface-border-bright);
      border-radius: 9999px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
    }

    .stat-pill.highlight-pill {
      border-color: rgba(255, 153, 0, 0.3);
      background: linear-gradient(180deg, var(--bg-surface) 0%, rgba(255, 153, 0, 0.06) 100%);
    }

    .pill-icon {
      width: 1.1rem;
      height: 1.1rem;
    }

    .stat-num {
      font-size: 1.2rem;
      font-weight: 800;
      color: var(--accent);
      font-family: var(--font-mono);
      line-height: 1;
    }

    .stat-label {
      font-size: 0.8rem;
      color: var(--fg);
      font-weight: 600;
    }

    /* Dynamic Matrix Grid */
    .providers-matrix {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0.75rem;
      margin-bottom: 1.25rem;
    }

    @media (max-width: 768px) {
      .providers-matrix {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 480px) {
      .providers-matrix {
        grid-template-columns: 1fr;
      }
    }

    .provider-card {
      background: var(--bg-surface);
      border: 1px solid var(--surface-border);
      border-radius: 12px;
      padding: 0.85rem 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      transition: all 0.2s ease;
      box-shadow: 0 4px 12px rgba(0,0,0,0.25);
    }

    .provider-card:hover {
      border-color: var(--surface-border-bright);
      transform: translateY(-2px);
      background: var(--bg-surface-hover);
    }

    .provider-card.featured {
      border-color: rgba(255, 153, 0, 0.35);
      background: linear-gradient(180deg, var(--bg-surface) 0%, rgba(255, 153, 0, 0.05) 100%);
    }

    .provider-card.featured:hover {
      border-color: var(--accent);
    }

    .card-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .provider-icon {
      width: 1.15rem;
      height: 1.15rem;
      color: var(--fg-muted);
    }

    .icon-accent {
      color: var(--accent);
    }

    .provider-tag {
      font-size: 0.65rem;
      color: var(--fg-muted);
      background: rgba(255, 255, 255, 0.04);
      padding: 0.15rem 0.45rem;
      border-radius: 4px;
      border: 1px solid rgba(255, 255, 255, 0.06);
    }

    .provider-card.featured .provider-tag {
      color: var(--accent-light);
      background: rgba(255, 153, 0, 0.1);
      border-color: rgba(255, 153, 0, 0.25);
    }

    .provider-name {
      font-size: clamp(0.9rem, 1.2vw, 1.05rem);
      font-weight: 600;
      color: var(--fg);
    }

    /* Impact Callout */
    .impact-callout {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.85rem 1.25rem;
      background: var(--bg-surface);
      border: 1px solid var(--surface-border-bright);
      border-left: 3px solid var(--accent);
      border-radius: 10px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.3);
    }

    .impact-icon {
      width: 1.4rem;
      height: 1.4rem;
      flex-shrink: 0;
    }

    .impact-text {
      font-size: clamp(0.85rem, 1.25vw, 0.95rem);
      color: var(--fg);
      line-height: 1.45;
    }
  `],
})
export class SlideBedrock {
  readonly providers = [
    { name: 'OpenAI', tag: 'GPT-6 Astra · Sol · Luna', featured: true },
    { name: 'Anthropic Claude', tag: 'Claude Opus 5.5 · Sonnet 4.5', featured: true },
    { name: 'Amazon Nova', tag: 'Nova Premier 2 · Pro', featured: true },
    { name: 'DeepSeek', tag: 'R2 · V3.5 Reasoning', featured: true },
    { name: 'Meta Llama', tag: 'Llama 4 Frontier', featured: false },
    { name: 'Mistral', tag: 'Large 3 · Codestral 2', featured: false },
    { name: 'Cohere', tag: 'Command R+ v2 · Embed v4', featured: false },
    { name: 'Stability AI', tag: 'Stable Diffusion 3.5 / Video', featured: false },
    { name: 'AI21 Labs', tag: 'Jamba 2.0 (SSM-Transformer)', featured: false },
  ];
}
