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
      min-height: 75vh;
      width: 100%;
    }

    .tipazo-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 1rem;
    }

    .image-card {
      max-width: min(480px, 85vw);
      max-height: 70vh;
      border-radius: 24px;
      overflow: hidden;
      border: 1px solid var(--surface-border-bright);
      box-shadow: 0 24px 60px rgba(0, 0, 0, 0.65), 0 0 40px rgba(255, 153, 0, 0.08);
      background: #0B0E14;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .image-card:hover {
      transform: scale(1.02);
      border-color: rgba(255, 153, 0, 0.35);
    }

    .tipazo-img {
      width: 100%;
      height: 100%;
      max-height: 70vh;
      object-fit: contain;
      display: block;
    }
  `],
})
export class SlideTipazo {}
