import { Component } from '@angular/core';
import { LucideArrowRight, LucideDownload } from '@lucide/angular';

@Component({
  selector: 'app-hero',
  imports: [LucideArrowRight, LucideDownload],
  templateUrl: './hero.html',
})
export class Hero {}
