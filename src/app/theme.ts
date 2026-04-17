import { Injectable, signal, effect, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class Theme {
  private readonly platformId = inject(PLATFORM_ID);
  public readonly mode = signal<'dark' | 'light'>('dark');

  constructor() {
    // Synchronize with class on body - Browser only
    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        document.documentElement.classList.toggle('light', this.mode() === 'light');
        document.documentElement.classList.toggle('dark', this.mode() === 'dark');
      }
    });
  }

  toggle() {
    this.mode.update(m => m === 'dark' ? 'light' : 'dark');
  }
}
