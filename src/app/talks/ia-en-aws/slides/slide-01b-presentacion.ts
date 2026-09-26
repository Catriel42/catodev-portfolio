import { Component } from '@angular/core';
import { LucideGraduationCap, LucideMic } from '@lucide/angular';

@Component({
  selector: 'app-slide-presentacion',
  imports: [LucideGraduationCap, LucideMic],
  template: `
    <div class="presentacion-wrapper">
      <div class="header-section">
        <div class="pill-badge font-mono">INTRODUCCIÓN · ¿QUIÉN SOY?</div>
        <h2 class="main-heading">Catriel Pereira</h2>
        <p class="subtitle">Software Engineer &amp; UG Leader Bolivia.</p>
      </div>

      <!-- Main Profile Cards (Concise, 2-column) -->
      <div class="cards-grid">
        <!-- 1. AWS User Group Leader -->
        <div class="profile-card highlight-aws">
          <div class="card-header">
            <div class="icon-box icon-aws">
              <img src="/AwsAIbolvia.png" alt="AWS AI Bolivia Community" class="aws-community-logo" />
            </div>
            <span class="card-tag font-mono text-aws">COMUNIDAD AWS</span>
          </div>

          <div class="card-body">
            <h3 class="card-title text-aws">AWS AI User Group Leader</h3>
            <p class="card-desc">
              Lidero la comunidad oficial de Inteligencia Artificial en Bolivia. Organización de meetups, workshops y adopción de IA generativa.
            </p>
          </div>

          <div class="badge-pill font-mono pill-aws">AWS Community Leader · Bolivia</div>
        </div>

        <!-- 2. Jala University -->
        <div class="profile-card highlight-jala">
          <div class="card-header">
            <div class="icon-box icon-jala">
              <svg lucideGraduationCap class="card-icon text-jala"></svg>
            </div>
            <span class="card-tag font-mono text-jala">EDUCACIÓN</span>
          </div>

          <div class="card-body">
            <h3 class="card-title">Jala University</h3>
            <p class="card-desc">
              3er año de <strong>Ingeniería de Software Comercial</strong>. Enfoque en sistemas distribuidos, arquitectura cloud y desarrollo a gran escala.
            </p>
          </div>

          <div class="badge-pill font-mono pill-jala">Ing. de Software Comercial</div>
        </div>
      </div>

      <!-- Fun Fact Bar (Smaller, Casual, Informal) -->
      <div class="fun-fact-bar">
        <div class="fun-fact-icon">
          <svg lucideMic class="mic-icon"></svg>
        </div>
        <div class="fun-fact-content">
          <span class="fun-fact-label font-mono">FUN FACT</span>
          <p class="fun-fact-text">
            Fuera del código hago freestyle y rap. De vez en cuando me encuentras improvisando en la <strong>Plaza 14 de Septiembre</strong>.
          </p>
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

    .presentacion-wrapper {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: clamp(1.5rem, 3vh, 2.5rem);
    }

    .header-section {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .pill-badge {
      display: inline-flex;
      align-items: center;
      padding: 0.3rem 0.85rem;
      border-radius: 9999px;
      background: rgba(255, 153, 0, 0.12);
      border: 1px solid rgba(255, 153, 0, 0.35);
      color: var(--accent);
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      width: fit-content;
    }

    .main-heading {
      font-size: clamp(2.2rem, 3.8vw, 3.4rem);
      font-weight: 800;
      line-height: 1.1;
      letter-spacing: -0.03em;
      color: var(--fg);
      margin: 0;
    }

    .subtitle {
      font-size: clamp(1.05rem, 1.5vw, 1.25rem);
      color: var(--fg-muted);
      margin: 0;
    }

    /* 2-column main profile cards */
    .cards-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: clamp(1.25rem, 2vw, 2rem);
      align-items: stretch;
    }

    @media (max-width: 768px) {
      .cards-grid {
        grid-template-columns: 1fr;
      }
    }

    .profile-card {
      background: var(--bg-surface);
      border: 1px solid var(--surface-border-bright);
      border-radius: 20px;
      padding: clamp(1.5rem, 2.2vw, 2.25rem);
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      transition: transform 0.25s ease, border-color 0.25s ease;
    }

    .profile-card:hover {
      transform: translateY(-3px);
    }

    .highlight-aws {
      border-color: rgba(255, 153, 0, 0.35);
      background: linear-gradient(180deg, var(--bg-surface) 0%, rgba(255, 153, 0, 0.04) 100%);
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4), 0 0 24px rgba(255, 153, 0, 0.06);
    }

    .highlight-jala {
      border-color: rgba(0, 210, 255, 0.3);
      background: linear-gradient(180deg, var(--bg-surface) 0%, rgba(0, 210, 255, 0.03) 100%);
    }

    .card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .icon-box {
      width: 4.25rem;
      height: 4.25rem;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .icon-aws {
      background: rgba(255, 153, 0, 0.12);
      border: 1px solid rgba(255, 153, 0, 0.35);
      box-shadow: 0 0 18px var(--accent-glow);
      padding: 0.35rem;
    }

    .aws-community-logo {
      width: 100%;
      height: 100%;
      object-fit: contain;
      filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.4));
    }

    .icon-jala {
      background: rgba(0, 210, 255, 0.12);
      border: 1px solid rgba(0, 210, 255, 0.35);
      box-shadow: 0 0 16px rgba(0, 210, 255, 0.2);
    }

    .card-icon {
      width: 2.15rem;
      height: 2.15rem;
    }

    .text-aws { color: var(--accent); }
    .text-jala { color: #00D2FF; }

    .card-tag {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.08em;
    }

    .card-body {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      flex-grow: 1;
    }

    .card-title {
      font-size: clamp(1.35rem, 1.8vw, 1.65rem);
      font-weight: 700;
      color: var(--fg);
      margin: 0;
      line-height: 1.2;
    }

    .card-desc {
      font-size: clamp(0.95rem, 1.2vw, 1.05rem);
      line-height: 1.55;
      color: var(--fg-muted);
      margin: 0;
    }

    .card-desc strong {
      color: var(--fg);
    }

    .badge-pill {
      font-size: 0.75rem;
      padding: 0.35rem 0.8rem;
      border-radius: 8px;
      width: fit-content;
      margin-top: 0.25rem;
    }

    .pill-aws {
      color: var(--accent-light);
      background: rgba(255, 153, 0, 0.08);
      border: 1px solid rgba(255, 153, 0, 0.25);
    }

    .pill-jala {
      color: #7DD3FC;
      background: rgba(0, 210, 255, 0.08);
      border: 1px solid rgba(0, 210, 255, 0.25);
    }

    /* Casual Fun Fact Bar */
    .fun-fact-bar {
      display: flex;
      align-items: center;
      gap: 1.15rem;
      background: linear-gradient(90deg, rgba(168, 85, 247, 0.08) 0%, rgba(20, 24, 33, 0.7) 100%);
      border: 1px solid rgba(168, 85, 247, 0.25);
      border-radius: 14px;
      padding: 0.85rem 1.4rem;
      transition: border-color 0.25s ease;
    }

    .fun-fact-bar:hover {
      border-color: rgba(168, 85, 247, 0.45);
    }

    .fun-fact-icon {
      width: 2.35rem;
      height: 2.35rem;
      flex-shrink: 0;
      border-radius: 10px;
      background: rgba(168, 85, 247, 0.15);
      border: 1px solid rgba(168, 85, 247, 0.35);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #C084FC;
    }

    .mic-icon {
      width: 1.25rem;
      height: 1.25rem;
    }

    .fun-fact-content {
      display: flex;
      align-items: center;
      gap: 0.85rem;
      flex-wrap: wrap;
    }

    .fun-fact-label {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      color: #C084FC;
      background: rgba(168, 85, 247, 0.15);
      padding: 0.2rem 0.55rem;
      border-radius: 6px;
      white-space: nowrap;
    }

    .fun-fact-text {
      margin: 0;
      font-size: clamp(0.88rem, 1.15vw, 0.98rem);
      color: var(--fg-muted);
      line-height: 1.4;
    }

    .fun-fact-text strong {
      color: var(--fg);
    }
  `],
})
export class SlidePresentacion {}

