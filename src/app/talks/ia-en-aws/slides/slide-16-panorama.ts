import { Component } from '@angular/core';
import { LucideGlobe, LucideGhost, LucideShieldCheck } from '@lucide/angular';

@Component({
  selector: 'app-slide-panorama',
  imports: [LucideGlobe, LucideGhost, LucideShieldCheck],
  template: `
    <div class="panorama-wrapper">
      <div class="header-section">
        <div class="pill-badge font-mono">PANORAMA 2026</div>
        <h2 class="main-heading">Otras innovaciones clave en AWS AI</h2>
        <p class="subtitle">El ecosistema de automatización, herramientas de desarrollo y modelos se expande rápidamente.</p>
      </div>

      <div class="panorama-grid">
        <!-- Nova Act -->
        <div class="panorama-card">
          <div class="card-top">
            <div class="icon-box">
              <svg lucideGlobe class="card-icon text-accent"></svg>
            </div>
            <span class="card-tag font-mono">WEB AUTOMATION &amp; RPA</span>
          </div>

          <h3 class="card-title">Nova Act</h3>
          <p class="card-desc">
            Agentes multimodales nativos capaces de navegar sitios web dinámicos, interpretar interfaces gráficas complejas y ejecutar acciones autónomas end-to-end.
          </p>

          <div class="tags-row">
            <span class="badge-pill font-mono">Autonomous Web Actions</span>
            <span class="badge-pill font-mono">Multimodal Grounding</span>
          </div>
        </div>

        <!-- Kiro (Purple with Ghost icon) -->
        <div class="panorama-card kiro-card">
          <div class="card-top">
            <div class="icon-box kiro-icon-box">
              <svg lucideGhost class="card-icon text-kiro"></svg>
            </div>
            <span class="card-tag font-mono text-kiro">AGENTIC IDE</span>
          </div>

          <h3 class="card-title text-kiro">Kiro</h3>
          <p class="card-desc">
            El nuevo entorno de desarrollo agéntico de AWS (sucesor de Q Developer). Diseñado para pair-programming autónomo, refactoring multi-repositorio y debugging asistido.
          </p>

          <div class="tags-row">
            <span class="badge-pill font-mono kiro-pill">Autonomous Coding</span>
            <span class="badge-pill font-mono kiro-pill">Multi-Repo Context</span>
          </div>
        </div>

        <!-- Claude Platform on AWS -->
        <div class="panorama-card">
          <div class="card-top">
            <div class="icon-box">
              <svg lucideShieldCheck class="card-icon text-accent"></svg>
            </div>
            <span class="card-tag font-mono">ENTERPRISE ACCESS</span>
          </div>

          <h3 class="card-title">Claude Platform on AWS</h3>
          <p class="card-desc">
            Acceso directo y administrado a la plataforma completa de Anthropic (Claude Opus 5.5, Sonnet y Haiku) integrado nativamente bajo la VPC y gobernanza de tu cuenta AWS.
          </p>

          <div class="tags-row">
            <span class="badge-pill font-mono">Private VPC Isolation</span>
            <span class="badge-pill font-mono">Full Anthropic Stack</span>
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

    .panorama-wrapper {
      width: 100%;
      max-width: 1350px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: clamp(2rem, 4vh, 3.5rem);
    }

    .header-section {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
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
      font-size: clamp(2.4rem, 4.2vw, 3.8rem);
      font-weight: 800;
      line-height: 1.1;
      letter-spacing: -0.03em;
      color: var(--fg);
      margin: 0;
    }

    .subtitle {
      font-size: clamp(1.1rem, 1.8vw, 1.4rem);
      color: var(--fg-muted);
      margin: 0;
      max-width: 70ch;
    }

    .panorama-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: clamp(1.5rem, 2.5vw, 2.25rem);
      align-items: stretch;
    }

    @media (max-width: 960px) {
      .panorama-grid {
        grid-template-columns: 1fr;
      }
    }

    .panorama-card {
      background: var(--bg-surface);
      border: 1px solid var(--surface-border-bright);
      border-radius: 20px;
      padding: clamp(1.75rem, 2.5vw, 2.5rem);
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      transition: all 0.25s ease;
    }

    .panorama-card:hover {
      border-color: rgba(255, 255, 255, 0.25);
      transform: translateY(-4px);
    }

    /* Kiro Purple Themed Card */
    .kiro-card {
      border-color: rgba(168, 85, 247, 0.4);
      background: linear-gradient(180deg, var(--bg-surface) 0%, rgba(168, 85, 247, 0.07) 100%);
      box-shadow: 0 20px 48px rgba(0, 0, 0, 0.5), 0 0 24px rgba(168, 85, 247, 0.12);
    }

    .kiro-card:hover {
      border-color: rgba(168, 85, 247, 0.65);
      transform: translateY(-4px);
    }

    .card-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
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
    }

    .kiro-icon-box {
      background: rgba(168, 85, 247, 0.14);
      border-color: rgba(168, 85, 247, 0.4);
      box-shadow: 0 0 16px rgba(168, 85, 247, 0.25);
    }

    .card-icon {
      width: 1.85rem;
      height: 1.85rem;
    }

    .text-kiro {
      color: #C084FC;
    }

    .card-tag {
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--fg-muted);
      letter-spacing: 0.08em;
    }

    .card-title {
      font-size: clamp(1.4rem, 2vw, 1.8rem);
      font-weight: 700;
      color: var(--fg);
      margin: 0;
      line-height: 1.2;
    }

    .card-desc {
      font-size: clamp(0.98rem, 1.3vw, 1.12rem);
      line-height: 1.6;
      color: var(--fg-muted);
      margin: 0;
      flex-grow: 1;
    }

    .tags-row {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 0.5rem;
    }

    .badge-pill {
      font-size: 0.75rem;
      color: var(--fg-muted);
      background: rgba(255, 255, 255, 0.04);
      padding: 0.4rem 0.85rem;
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 0.08);
      width: fit-content;
    }

    .kiro-pill {
      color: #E9D5FF;
      background: rgba(168, 85, 247, 0.12);
      border-color: rgba(168, 85, 247, 0.3);
    }
  `],
})
export class SlidePanorama {}
