import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true
})
export class HeaderComponent {
  private clickedLinkId: string = "";
  private targetSection: HTMLElement | null = null;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private router: Router
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.scrollToSection(this.router.url.substring(1));
      }
    });
  }

  onClickNotCollapseNavLink($event: any) {
    this.clickedLinkId = $event.target.attributes.id.nodeValue;

    const clickedElement = this.el.nativeElement.querySelector('#' + this.clickedLinkId);
    const links = this.el.nativeElement.querySelectorAll('.nav-link');
    links.forEach((link: any) => this.renderer.removeClass(link, 'active'));

    if (clickedElement != null) {
      this.renderer.addClass(clickedElement, 'active');
    }
  }

  private scrollToSection(sectionId: string) {
    this.targetSection = document.getElementById(sectionId);
    if (this.targetSection) {
      if (sectionId == "") {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        this.targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.toggleActiveClass('welcome', "home-btn", scrollPosition);
    this.toggleActiveClass('about-me', "about-me-btn", scrollPosition);
    this.toggleActiveClass('portfolio', "projects-btn", scrollPosition);
    this.toggleActiveClass('contact', "contact-btn", scrollPosition);
  }

  private toggleActiveClass(sectionId: string, linkId: string, scrollPosition: number): void {
    const sectionElement = document.getElementById(sectionId);
    const linkElement = this.el.nativeElement.querySelector(`#${linkId}`);

    if (sectionElement && linkElement) {
      const sectionOffset = sectionElement.offsetTop;
      const sectionHeight = sectionElement.offsetHeight;

      if (this.targetSection == null) {
        if (scrollPosition >= sectionOffset - 300 && scrollPosition < (sectionOffset + sectionHeight) - 300) {
          this.renderer.addClass(linkElement, 'active');
        } else {
          this.renderer.removeClass(linkElement, 'active');
        }
      } else {
        const clickedSectionOffset = this.targetSection.offsetTop;
        const clickedSectionHeight = this.targetSection.offsetHeight;

        if (scrollPosition >= clickedSectionOffset - 300
          && scrollPosition < (clickedSectionOffset + clickedSectionHeight) - 300
          && this.clickedLinkId != "") {
          this.clickedLinkId = "";
          this.targetSection = null;
        }
      }
    }
  }
}

