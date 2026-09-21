import { Component, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Theme } from './theme';
import { LucideSun, LucideMoon, LucideMenu, LucideX } from '@lucide/angular';
import { SocialIcons } from './ui/social';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, LucideSun, LucideMoon, LucideMenu, LucideX, SocialIcons],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  public readonly theme = inject(Theme);
  public readonly isMobileMenuOpen = signal<boolean>(false);

  public toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(open => !open);
  }

  public closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }
}
