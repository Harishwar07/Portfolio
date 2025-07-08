import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text" [class.animate]="isLoaded">
            <h1 class="hero-title">
              Hi, I'm <span class="gradient-text">Harishwar G</span>
            </h1>
            <h2 class="hero-subtitle">
              AI & Data Science Engineer | Python Developer | Data Engineer | Data Analys
            </h2>
            <p class="hero-description">
              Passionate about creating intelligent solutions using machine learning, 
              deep learning, data analytics, and data engineering. I specialize in building 
              scalable AI applications and transforming raw data into actionable insights through 
              end-to-end pipelines.
            </p>
            
            <div class="hero-buttons">
              <a routerLink="/resume" class="btn-primary">
                View Resume
              </a>
              <a routerLink="/projects" class="btn-secondary">
                View Projects
              </a>
              <a routerLink="/contact" class="btn-secondary">
                Contact Me
              </a>
            </div>
            
            <div class="social-links">
              <a href="https://www.linkedin.com/in/harishwar-g0911/" target="_blank" class="social-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://github.com/Harishwar07?tab=repositories" target="_blank" class="social-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div class="hero-visual" [class.animate]="isLoaded">
            <div class="tech-icons">
              <div class="tech-icon" style="animation-delay: 0.2s;">
                <div class="icon-wrapper ai-icon">
                  <span>AI</span>
                </div>
              </div>
              <div class="tech-icon" style="animation-delay: 0.4s;">
                <div class="icon-wrapper python-icon">
                  <span>🐍</span>
                </div>
              </div>
              <div class="tech-icon" style="animation-delay: 0.6s;">
                <div class="icon-wrapper brain-icon">
                  <span>🧠</span>
                </div>
              </div>
              <div class="tech-icon" style="animation-delay: 0.8s;">
                <div class="icon-wrapper data-icon">
                  <span>📊</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      min-height: 100vh;
      display: flex;
      align-items: center;
      position: relative;
      padding-top: 80px;
    }
    
    .hero-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
      min-height: calc(100vh - 160px);
    }
    
    .hero-text {
      opacity: 0;
      transform: translateX(-50px);
      transition: all 0.8s ease;
    }
    
    .hero-text.animate {
      opacity: 1;
      transform: translateX(0);
    }
    
    .hero-title {
      font-size: 3.5rem;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 1rem;
      color: var(--gray-800);
    }
    
    .gradient-text {
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .hero-subtitle {
      font-size: 1.5rem;
      font-weight: 500;
      color: var(--gray-600);
      margin-bottom: 1.5rem;
    }
    
    .hero-description {
      font-size: 1.1rem;
      line-height: 1.7;
      color: var(--gray-600);
      margin-bottom: 2.5rem;
    }
    
    .hero-buttons {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
      flex-wrap: wrap;
    }
    
    .social-links {
      display: flex;
      gap: 1rem;
    }
    
    .social-icon {
      color: var(--gray-600);
      transition: all 0.3s ease;
    }
    
    .social-icon:hover {
      color: var(--primary);
      transform: translateY(-3px);
    }
    
    .hero-visual {
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      transform: translateX(50px);
      transition: all 0.8s ease;
    }
    
    .hero-visual.animate {
      opacity: 1;
      transform: translateX(0);
    }
    
    .tech-icons {
      position: relative;
      width: 300px;
      height: 300px;
    }
    
    .tech-icon {
      position: absolute;
      opacity: 0;
      animation: float-in 0.8s ease forwards;
    }
    
    .tech-icon:nth-child(1) { top: 10%; left: 20%; }
    .tech-icon:nth-child(2) { top: 20%; right: 10%; }
    .tech-icon:nth-child(3) { bottom: 20%; left: 10%; }
    .tech-icon:nth-child(4) { bottom: 10%; right: 20%; }
    
    .icon-wrapper {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      font-weight: bold;
      color: white;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      animation: pulse 2s ease-in-out infinite;
    }
    
    .ai-icon {
      background: linear-gradient(135deg, var(--primary), var(--secondary));
    }
    
    .python-icon {
      background: linear-gradient(135deg, #3776ab, #ffd43b);
    }
    
    .brain-icon {
      background: linear-gradient(135deg, var(--accent), var(--success));
    }
    
    .data-icon {
      background: linear-gradient(135deg, var(--warning), var(--error));
    }
    
    .scroll-indicator {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      color: var(--gray-500);
      font-size: 0.875rem;
      opacity: 0;
      transition: all 0.8s ease 1s;
    }
    
    .scroll-indicator.animate {
      opacity: 1;
    }
    
    .scroll-line {
      width: 2px;
      height: 30px;
      background: var(--gray-400);
      animation: scroll-bounce 2s ease-in-out infinite;
    }
    
    @keyframes float-in {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
    }
    
    @keyframes scroll-bounce {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(10px);
      }
    }
    
    @media (max-width: 768px) {
      .hero-content {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 2rem;
      }
      
      .hero-title {
        font-size: 2.5rem;
      }
      
      .hero-subtitle {
        font-size: 1.25rem;
      }
      
      .hero-buttons {
        justify-content: center;
      }
      
      .tech-icons {
        width: 250px;
        height: 250px;
      }
      
      .icon-wrapper {
        width: 60px;
        height: 60px;
        font-size: 1.5rem;
      }
    }
  `]
})
export class HomeComponent implements OnInit {
  isLoaded = false;

  ngOnInit() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 100);
  }
}