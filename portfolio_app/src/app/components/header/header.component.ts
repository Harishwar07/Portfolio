import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header [class.scrolled]="isScrolled" class="header">
      <div class="container">
        <nav class="nav">
          <div class="logo">
            <a routerLink="/" class="logo-link">
              <span class="logo-text">HG</span>
            </a>
          </div>
          
          <div class="nav-links" [class.open]="mobileMenuOpen">
            <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
            <a routerLink="/about" routerLinkActive="active">About</a>
            <a routerLink="/skills" routerLinkActive="active">Skills</a>
            <a routerLink="/projects" routerLinkActive="active">Projects</a>
            <a routerLink="/resume" routerLinkActive="active">Resume</a>
            <a routerLink="/contact" routerLinkActive="active">Contact</a>
          </div>
          
          <button class="mobile-toggle" (click)="toggleMobileMenu()">
            <span [class.open]="mobileMenuOpen"></span>
            <span [class.open]="mobileMenuOpen"></span>
            <span [class.open]="mobileMenuOpen"></span>
          </button>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(15px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      z-index: 1000;
      transition: all 0.3s ease;
    }
    
    .header.scrolled {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(20px);
    }
    
    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 0;
    }
    
    .logo-link {
      text-decoration: none;
    }
    
    .logo-text {
      font-size: 1.5rem;
      font-weight: 700;
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .nav-links {
      display: flex;
      gap: 2rem;
      align-items: center;
    }
    
    .nav-links a {
      text-decoration: none;
      color: var(--gray-700);
      font-weight: 500;
      transition: all 0.3s ease;
      position: relative;
    }
    
    .nav-links a:hover,
    .nav-links a.active {
      color: var(--primary);
    }
    
    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      transition: width 0.3s ease;
    }
    
    .nav-links a:hover::after,
    .nav-links a.active::after {
      width: 100%;
    }
    
    .mobile-toggle {
      display: none;
      flex-direction: column;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
    }
    
    .mobile-toggle span {
      width: 25px;
      height: 3px;
      background: var(--gray-700);
      margin: 3px 0;
      transition: 0.3s;
      border-radius: 2px;
    }
    
    .mobile-toggle span.open:nth-child(1) {
      transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .mobile-toggle span.open:nth-child(2) {
      opacity: 0;
    }
    
    .mobile-toggle span.open:nth-child(3) {
      transform: rotate(45deg) translate(-5px, -6px);
    }
    
    @media (max-width: 768px) {
      .nav-links {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(20px);
        flex-direction: column;
        padding: 2rem 0;
        transform: translateY(-100%);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
      }
      
      .nav-links.open {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      }
      
      .mobile-toggle {
        display: flex;
      }
    }
  `]
})
export class HeaderComponent {
  isScrolled = false;
  mobileMenuOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}