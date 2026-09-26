import { Component } from '@angular/core';
import { LucideBookOpen, LucideCode, LucideGlobe, LucideSparkles } from '@lucide/angular';

@Component({
  selector: 'app-slide-cierre',
  imports: [LucideBookOpen, LucideCode, LucideGlobe, LucideSparkles],
  template: `
    <div class="cierre-wrapper">
      <div class="cierre-layout">
        <!-- Left Column: Thanks & Links -->
        <div class="left-col">
          <div class="pill-badge font-mono">CIERRE · Q&amp;A</div>
          <h1 class="cierre-title">¡Muchas gracias!</h1>
          <p class="subtitle">¿Preguntas, ideas o desafíos en producción? Hablemos y construyamos juntos.</p>

          <div class="links-container">
            <!-- Strands Docs -->
            <a class="link-card" href="https://strandsagents.com" target="_blank" rel="noopener noreferrer">
              <div class="link-icon-box">
                <svg lucideBookOpen class="link-icon text-accent"></svg>
              </div>
              <div class="link-text-content">
                <div class="link-header">
                  <span class="link-title">Strands Agents</span>
                  <span class="link-tag font-mono">DOCS &amp; SDK</span>
                </div>
                <div class="link-url font-mono">strandsagents.com</div>
              </div>
            </a>

            <!-- AgentCore Samples -->
            <a class="link-card" href="https://github.com/awslabs/amazon-bedrock-agentcore-samples" target="_blank" rel="noopener noreferrer">
              <div class="link-icon-box">
                <svg lucideCode class="link-icon text-accent"></svg>
              </div>
              <div class="link-text-content">
                <div class="link-header">
                  <span class="link-title">AgentCore Samples</span>
                  <span class="link-tag font-mono">AWSLABS GITHUB</span>
                </div>
                <div class="link-url font-mono">github.com/awslabs/amazon-bedrock-agentcore-samples</div>
              </div>
            </a>

            <!-- Catriel Profile -->
            <a class="link-card highlight-link" href="https://linkedin.com/in/catriel-pereira" target="_blank" rel="noopener noreferrer">
              <div class="link-icon-box accent-box">
                <svg lucideGlobe class="link-icon text-accent"></svg>
              </div>
              <div class="link-text-content">
                <div class="link-header">
                  <span class="link-title text-accent">Catriel Pereira</span>
                  <span class="link-tag font-mono highlight-tag">AWS AI USER GROUP</span>
                </div>
                <div class="link-url font-mono">linkedin.com/in/catriel-pereira · @catodev_</div>
              </div>
            </a>
          </div>
        </div>

        <!-- Right Column: Keynote QR Card -->
        <div class="right-col">
          <div class="qr-card">
            <div class="qr-badge font-mono">
              <svg lucideSparkles class="qr-badge-icon text-accent"></svg>
              <span>MATERIAL COMPLETO</span>
            </div>

            <!-- Stylized Keynote Vector QR Code -->
            <div class="qr-frame">
              <svg class="qr-svg" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
                <!-- Top-Left Finder Pattern -->
                <rect x="10" y="10" width="40" height="40" rx="8" fill="none" stroke="#FF9900" stroke-width="4" />
                <rect x="20" y="20" width="20" height="20" rx="4" fill="#FF9900" />

                <!-- Top-Right Finder Pattern -->
                <rect x="110" y="10" width="40" height="40" rx="8" fill="none" stroke="#FF9900" stroke-width="4" />
                <rect x="120" y="20" width="20" height="20" rx="4" fill="#FF9900" />

                <!-- Bottom-Left Finder Pattern -->
                <rect x="10" y="110" width="40" height="40" rx="8" fill="none" stroke="#FF9900" stroke-width="4" />
                <rect x="20" y="120" width="20" height="20" rx="4" fill="#FF9900" />

                <!-- Timing & Data Matrix Dots -->
                <g fill="#F3F4F6" opacity="0.85">
                  <!-- Timing lines -->
                  <rect x="26" y="60" width="8" height="8" rx="2" />
                  <rect x="26" y="76" width="8" height="8" rx="2" />
                  <rect x="26" y="92" width="8" height="8" rx="2" />
                  <rect x="60" y="26" width="8" height="8" rx="2" />
                  <rect x="76" y="26" width="8" height="8" rx="2" />
                  <rect x="92" y="26" width="8" height="8" rx="2" />

                  <!-- Center & Data bits -->
                  <rect x="60" y="60" width="10" height="10" rx="2" fill="#00D2FF" />
                  <rect x="76" y="60" width="8" height="8" rx="2" />
                  <rect x="90" y="60" width="10" height="10" rx="2" />
                  <rect x="60" y="76" width="8" height="8" rx="2" />
                  <rect x="74" y="74" width="12" height="12" rx="3" fill="#FF9900" />
                  <rect x="92" y="76" width="8" height="8" rx="2" fill="#00D2FF" />
                  <rect x="60" y="92" width="10" height="10" rx="2" />
                  <rect x="76" y="92" width="8" height="8" rx="2" />
                  <rect x="90" y="92" width="10" height="10" rx="2" fill="#FF9900" />

                  <rect x="110" y="60" width="8" height="8" rx="2" />
                  <rect x="124" y="60" width="8" height="8" rx="2" />
                  <rect x="138" y="60" width="8" height="8" rx="2" />
                  <rect x="110" y="76" width="10" height="10" rx="2" />
                  <rect x="128" y="76" width="8" height="8" rx="2" />
                  <rect x="110" y="92" width="8" height="8" rx="2" />
                  <rect x="124" y="92" width="10" height="10" rx="2" />
                  <rect x="140" y="92" width="8" height="8" rx="2" />

                  <rect x="60" y="110" width="8" height="8" rx="2" />
                  <rect x="76" y="110" width="10" height="10" rx="2" />
                  <rect x="92" y="110" width="8" height="8" rx="2" />
                  <rect x="60" y="126" width="10" height="10" rx="2" />
                  <rect x="76" y="126" width="8" height="8" rx="2" />
                  <rect x="92" y="126" width="10" height="10" rx="2" />
                  <rect x="60" y="142" width="8" height="8" rx="2" />
                  <rect x="76" y="142" width="10" height="10" rx="2" />

                  <rect x="110" y="110" width="10" height="10" rx="2" />
                  <rect x="126" y="110" width="8" height="8" rx="2" />
                  <rect x="140" y="110" width="8" height="8" rx="2" />
                  <rect x="110" y="126" width="8" height="8" rx="2" />
                  <rect x="124" y="126" width="12" height="12" rx="3" fill="#00D2FF" />
                  <rect x="110" y="142" width="10" height="10" rx="2" />
                  <rect x="126" y="142" width="8" height="8" rx="2" />
                  <rect x="138" y="138" width="10" height="10" rx="2" />
                </g>
              </svg>
            </div>

            <div class="qr-info">
              <span class="qr-info-title font-sans">Escanea para acceder al material</span>
              <span class="qr-info-sub font-mono">Slides interactivas · Repositorios · Demos</span>
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

    .cierre-wrapper {
      width: 100%;
      max-width: 1350px;
      margin: 0 auto;
    }

    .cierre-layout {
      display: grid;
      grid-template-columns: 1.25fr 0.75fr;
      gap: clamp(2rem, 4vw, 4rem);
      align-items: center;
    }

    @media (max-width: 960px) {
      .cierre-layout {
        grid-template-columns: 1fr;
      }
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
      margin-bottom: 0.75rem;
    }

    .cierre-title {
      font-size: clamp(2.8rem, 5vw, 4.4rem);
      font-weight: 800;
      line-height: 1.05;
      letter-spacing: -0.04em;
      color: var(--fg);
      margin: 0 0 0.75rem 0;
    }

    .subtitle {
      font-size: clamp(1.15rem, 1.8vw, 1.4rem);
      color: var(--fg-muted);
      margin: 0 0 2.25rem 0;
      max-width: 55ch;
      line-height: 1.5;
    }

    .links-container {
      display: flex;
      flex-direction: column;
      gap: 1.15rem;
      max-width: 650px;
    }

    .link-card {
      display: flex;
      align-items: center;
      gap: 1.25rem;
      padding: 1.15rem 1.5rem;
      background: var(--bg-surface);
      border: 1px solid var(--surface-border-bright);
      border-radius: 16px;
      text-decoration: none;
      color: var(--fg);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
      transition: all 0.25s ease;
    }

    .link-card:hover {
      border-color: rgba(255, 153, 0, 0.4);
      background: linear-gradient(90deg, var(--bg-surface) 0%, rgba(255, 153, 0, 0.04) 100%);
      transform: translateX(6px);
    }

    .highlight-link {
      border-color: rgba(255, 153, 0, 0.3);
    }

    .link-icon-box {
      width: 3.2rem;
      height: 3.2rem;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .accent-box {
      background: rgba(255, 153, 0, 0.12);
      border-color: rgba(255, 153, 0, 0.35);
      box-shadow: 0 0 16px var(--accent-glow);
    }

    .link-icon {
      width: 1.6rem;
      height: 1.6rem;
    }

    .link-text-content {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      flex-grow: 1;
      overflow: hidden;
    }

    .link-header {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .link-title {
      font-weight: 700;
      font-size: 1.15rem;
      color: var(--fg);
    }

    .link-tag {
      font-size: 0.65rem;
      font-weight: 700;
      color: var(--fg-muted);
      letter-spacing: 0.08em;
      background: rgba(255, 255, 255, 0.05);
      padding: 0.15rem 0.5rem;
      border-radius: 4px;
    }

    .highlight-tag {
      color: var(--accent);
      background: rgba(255, 153, 0, 0.12);
    }

    .link-url {
      font-size: 0.85rem;
      color: var(--fg-muted);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    /* Right Column QR Card */
    .qr-card {
      background: var(--bg-surface);
      border: 1px solid var(--surface-border-bright);
      border-radius: 24px;
      padding: clamp(2rem, 3.5vw, 2.75rem);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      box-shadow: 0 20px 48px rgba(0, 0, 0, 0.5);
      position: relative;
    }

    .qr-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.3rem 0.85rem;
      border-radius: 9999px;
      background: rgba(255, 153, 0, 0.1);
      border: 1px solid rgba(255, 153, 0, 0.3);
      color: var(--accent);
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.08em;
    }

    .qr-badge-icon {
      width: 0.95rem;
      height: 0.95rem;
    }

    .qr-frame {
      width: 220px;
      height: 220px;
      background: #090C12;
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.25rem;
      box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.6), 0 0 24px rgba(255, 153, 0, 0.06);
    }

    .qr-svg {
      width: 100%;
      height: 100%;
    }

    .qr-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 0.35rem;
    }

    .qr-info-title {
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--fg);
    }

    .qr-info-sub {
      font-size: 0.82rem;
      color: var(--fg-muted);
    }
  `],
})
export class SlideCierre {}
