import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PortfolioComponent } from './components/portfolio-section/porfolio/portfolio.component';
import { ContactComponent } from './components/contact-section/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToastContainerComponent } from './components/toast-container/toast-container.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-welcome-page',
    standalone: true,
    imports: [
        CommonModule,
        WelcomeComponent,
        PortfolioComponent,
        ContactComponent,
        FooterComponent,
        ToastContainerComponent,
        RouterLink],
    template: `
    <app-welcome></app-welcome>
    <app-porfolio></app-porfolio>`
})
export class WelcomePageComponent { }