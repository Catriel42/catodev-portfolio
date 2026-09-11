import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Theme } from './theme';
import { LucideSun, LucideMoon } from '@lucide/angular';
import { SocialIcons } from './ui/social';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, LucideSun, LucideMoon, SocialIcons],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  public readonly theme = inject(Theme);
}
