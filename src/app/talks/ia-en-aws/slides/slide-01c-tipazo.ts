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
      min-height: 80vh;
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
      max-width: min(820px, 94vw);
      max-height: 85vh;
      border-radius: 24px;
      overflow: hidden;
      border: 1px solid var(--surface-border-bright);
      box-shadow: 0 28px 70px rgba(0, 0, 0, 0.75), 0 0 50px rgba(255, 153, 0, 0.12);
      background: #0B0E14;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .image-card:hover {
      transform: scale(1.02);
      border-color: rgba(255, 153, 0, 0.4);
    }

    .tipazo-img {
      width: 100%;
      height: 100%;
      max-height: 85vh;
      object-fit: contain;
      display: block;
    }
  `],
})
export class SlideTipazo {}
