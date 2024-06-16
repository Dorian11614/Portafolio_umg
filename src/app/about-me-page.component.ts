import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './components/about-me-section/about-me/about-me.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-me-page',
  standalone: true,
  imports: [CommonModule, AboutMeComponent, FooterComponent, RouterLink],
  template: `
    <app-about-me></app-about-me>
  `
})
export class AboutMePageComponent {}