import { Component } from '@angular/core';
import { LucideUsers, LucideGraduationCap, LucideMic } from '@lucide/angular';

@Component({
  selector: 'app-slide-presentacion',
  imports: [LucideUsers, LucideGraduationCap, LucideMic],
  template: `
    <div class="presentacion-wrapper">
      <div class="header-section">
        <div class="pill-badge font-mono">INTRODUCCIÓN · ¿QUIÉN SOY?</div>
        <h2 class="main-heading">Catriel Pereira</h2>
        <p class="subtitle">Software Engineer &amp; Community Leader en Cochabamba, Bolivia.</p>
      </div>

      <div class="bio-grid">
        <!-- 1. AWS Community Leader -->
        <div class="bio-card highlight-aws">
          <div class="card-top">
            <div class="icon-box icon-aws">
              <svg lucideUsers class="card-icon text-aws"></svg>
            </div>
            <span class="card-tag font-mono text-aws">COMUNIDAD AWS</span>
          </div>

          <h3 class="card-title text-aws">AWS AI User Group Leader</h3>
          <p class="card-desc">
            Líder de la comunidad oficial de inteligencia artificial de AWS en Bolivia. Impulsando talleres prácticos, charlas técnicas y adopción de arquitecturas agénticas y modelos generativos.
          </p>

          <div class="badge-pill font-mono pill-aws">AWS Community Leader · Bolivia</div>
        </div>

        <!-- 2. Jala University Student -->
        <div class="bio-card highlight-jala">
          <div class="card-top">
            <div class="icon-box icon-jala">
              <svg lucideGraduationCap class="card-icon text-jala"></svg>
            </div>
            <span class="card-tag font-mono text-jala">EDUCACIÓN &amp; FORMACIÓN</span>
          </div>

          <h3 class="card-title">3er Año · Jala University</h3>
          <p class="card-desc">
            Estudiante de <strong>Ingeniería de Software Comercial</strong>. Especializándome en arquitecturas escalables, sistemas cloud críticos y desarrollo de soluciones de alto impacto empresarial.
          </p>

          <div class="badge-pill font-mono pill-jala">Commercial Software Engineering</div>
        </div>

        <!-- 3. Rap & Freestyle Fun Fact -->
        <div class="bio-card highlight-rap">
          <div class="card-top">
            <div class="icon-box icon-rap">
              <svg lucideMic class="card-icon text-rap"></svg>
            </div>
            <span class="card-tag font-mono text-rap">FUN FACT · HIP HOP</span>
          </div>

          <h3 class="card-title text-rap">Rapero &amp; Freestyler</h3>
          <p class="card-desc">
            Cuando no estoy tirando código, estoy tirando rimas: freestyler activo apasionado de la improvisación. Me encuentras rapeando en las plazas, especialmente en la <strong>Plaza 14 de Septiembre</strong>.
          </p>

          <div class="badge-pill font-mono pill-rap">Plaza 14 de Septiembre · CBB</div>
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
      max-width: 65ch;
    }

    .bio-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: clamp(1.5rem, 2.5vw, 2.25rem);
      align-items: stretch;
    }

    @media (max-width: 960px) {
      .bio-grid {
        grid-template-columns: 1fr;
      }
    }

    .bio-card {
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

    .bio-card:hover {
      transform: translateY(-4px);
    }

    /* Card Highlights */
    .highlight-aws {
      border-color: rgba(255, 153, 0, 0.4);
      background: linear-gradient(180deg, var(--bg-surface) 0%, rgba(255, 153, 0, 0.05) 100%);
      box-shadow: 0 20px 48px rgba(0, 0, 0, 0.5), 0 0 24px rgba(255, 153, 0, 0.08);
    }

    .highlight-jala {
      border-color: rgba(0, 210, 255, 0.35);
      background: linear-gradient(180deg, var(--bg-surface) 0%, rgba(0, 210, 255, 0.04) 100%);
    }

    .highlight-rap {
      border-color: rgba(168, 85, 247, 0.4);
      background: linear-gradient(180deg, var(--bg-surface) 0%, rgba(168, 85, 247, 0.06) 100%);
      box-shadow: 0 20px 48px rgba(0, 0, 0, 0.5), 0 0 24px rgba(168, 85, 247, 0.08);
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
    }

    .icon-aws {
      background: rgba(255, 153, 0, 0.12);
      border: 1px solid rgba(255, 153, 0, 0.35);
      box-shadow: 0 0 16px var(--accent-glow);
    }

    .icon-jala {
      background: rgba(0, 210, 255, 0.12);
      border: 1px solid rgba(0, 210, 255, 0.35);
      box-shadow: 0 0 16px rgba(0, 210, 255, 0.2);
    }

    .icon-rap {
      background: rgba(168, 85, 247, 0.14);
      border: 1px solid rgba(168, 85, 247, 0.4);
      box-shadow: 0 0 16px rgba(168, 85, 247, 0.25);
    }

    .card-icon {
      width: 1.85rem;
      height: 1.85rem;
    }

    .text-aws { color: var(--accent); }
    .text-jala { color: #00D2FF; }
    .text-rap { color: #C084FC; }

    .card-tag {
      font-size: 0.72rem;
      font-weight: 700;
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

    .badge-pill {
      font-size: 0.75rem;
      padding: 0.4rem 0.85rem;
      border-radius: 8px;
      width: fit-content;
      margin-top: 0.5rem;
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

    .pill-rap {
      color: #E9D5FF;
      background: rgba(168, 85, 247, 0.12);
      border: 1px solid rgba(168, 85, 247, 0.3);
    }
  `],
})
export class SlidePresentacion {}
