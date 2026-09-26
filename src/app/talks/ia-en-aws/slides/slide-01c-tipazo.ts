import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-tipazo',
  template: `
    <div class="tipazo-wrapper">
      <div class="image-card">
        <img src="/un-tipazo.png" alt="CV: - Un tipazo" class="tipazo-img" />
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
    }

    .tipazo-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      padding: 0.5rem;
    }

    .image-card {
      height: min(80vh, 760px);
      aspect-ratio: 410 / 487;
      max-width: min(92vw, 680px);
      width: auto;
      border-radius: 28px;
      overflow: hidden;
      border: 1px solid var(--surface-border-bright);
      box-shadow: 0 32px 80px rgba(0, 0, 0, 0.8), 0 0 60px rgba(255, 153, 0, 0.15);
      background: #0B0E14;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
    }

    .image-card:hover {
      transform: scale(1.02);
      border-color: rgba(255, 153, 0, 0.45);
      box-shadow: 0 36px 90px rgba(0, 0, 0, 0.85), 0 0 70px rgba(255, 153, 0, 0.25);
    }

    .tipazo-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  `],
})
export class SlideTipazo {}

