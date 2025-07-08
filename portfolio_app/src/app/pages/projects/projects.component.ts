import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  github: string;
  demo?: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="projects-section section">
      <div class="container">
        <h1 class="section-title" [class.animate]="isLoaded">My Projects</h1>
        
        <div class="filter-tabs" [class.animate]="isLoaded">
          <button 
            *ngFor="let filter of filters" 
            class="filter-btn"
            [class.active]="activeFilter === filter"
            (click)="setActiveFilter(filter)">
            {{ filter }}
          </button>
        </div>
        
        <div class="projects-grid" [class.animate]="isLoaded">
          <div 
            *ngFor="let project of filteredProjects; trackBy: trackByProject"
            class="project-card card"
            [class.featured]="project.featured">
            
            <div class="project-image">
              <img [src]="project.image" [alt]="project.title">
              <div class="project-overlay">
                <div class="project-actions">
                  <a [href]="project.github" target="_blank" class="action-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a *ngIf="project.demo" [href]="project.demo" target="_blank" class="action-btn demo-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                    </svg>
                    Demo
                  </a>
                </div>
              </div>
            </div>
            
            <div class="project-content">
              <div class="project-header">
                <h3 class="project-title">{{ project.title }}</h3>
                <span *ngIf="project.featured" class="featured-badge">Featured</span>
              </div>
              
              <p class="project-description">{{ project.description }}</p>
              
              <div class="project-technologies">
                <span *ngFor="let tech of project.technologies" class="tech-tag">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="projects-stats glass-effect" [class.animate]="isLoaded">
          <h3>Project Statistics</h3>
          <div class="stats-grid">
            <div class="stat-item">
              <span class="stat-number">{{ totalProjects }}</span>
              <span class="stat-label">Total Projects</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">{{ featuredProjects }}</span>
              <span class="stat-label">Featured</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">{{ uniqueTechnologies }}</span>
              <span class="stat-label">Technologies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projects-section {
      padding-top: 120px;
    }
    
    .section-title {
      font-size: 3rem;
      font-weight: 700;
      text-align: center;
      margin-bottom: 3rem;
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.8s ease;
    }
    
    .section-title.animate {
      opacity: 1;
      transform: translateY(0);
    }
    
    .filter-tabs {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 3rem;
      flex-wrap: wrap;
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.8s ease 0.1s;
    }
    
    .filter-tabs.animate {
      opacity: 1;
      transform: translateY(0);
    }
    
    .filter-btn {
      padding: 0.75rem 1.5rem;
      border: 2px solid var(--gray-300);
      background: transparent;
      border-radius: 2rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      color: var(--gray-600);
    }
    
    .filter-btn:hover,
    .filter-btn.active {
      border-color: var(--primary);
      background: var(--primary);
      color: white;
    }
    
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.8s ease 0.2s;
    }
    
    .projects-grid.animate {
      opacity: 1;
      transform: translateY(0);
    }
    
    .project-card {
      overflow: hidden;
      position: relative;
      padding: 0;
    }
    
    .project-card.featured {
      border: 2px solid var(--primary);
      box-shadow: 0 10px 30px rgba(59, 130, 246, 0.2);
    }
    
    .project-image {
      position: relative;
      height: 200px;
      overflow: hidden;
    }
    
    .project-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
    
    .project-card:hover .project-image img {
      transform: scale(1.1);
    }
    
    .project-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .project-card:hover .project-overlay {
      opacity: 1;
    }
    
    .project-actions {
      display: flex;
      gap: 1rem;
    }
    
    .action-btn {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 2rem;
      color: white;
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s ease;
    }
    
    .action-btn:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-2px);
    }
    
    .demo-btn {
      background: rgba(59, 130, 246, 0.8);
      border-color: var(--primary);
    }
    
    .project-content {
      padding: 1.5rem;
    }
    
    .project-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;
    }
    
    .project-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--gray-800);
    }
    
    .featured-badge {
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      font-size: 0.75rem;
      font-weight: 500;
    }
    
    .project-description {
      color: var(--gray-600);
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }
    
    .project-technologies {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    
    .tech-tag {
      background: var(--gray-100);
      color: var(--gray-700);
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      font-size: 0.875rem;
      font-weight: 500;
    }
    
    .projects-stats {
      padding: 2rem;
      text-align: center;
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.8s ease 0.3s;
    }
    
    .projects-stats.animate {
      opacity: 1;
      transform: translateY(0);
    }
    
    .projects-stats h3 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
      color: var(--gray-800);
    }
    
    .stats-grid {
      display: flex;
      justify-content: space-around;
      gap: 2rem;
    }
    
    .stat-item {
      text-align: center;
    }
    
    .stat-number {
      display: block;
      font-size: 2rem;
      font-weight: bold;
      color: var(--primary);
      margin-bottom: 0.5rem;
    }
    
    .stat-label {
      color: var(--gray-600);
      font-size: 0.9rem;
    }
    
    @media (max-width: 768px) {
      .section-title {
        font-size: 2.5rem;
      }
      
      .projects-grid {
        grid-template-columns: 1fr;
      }
      
      .stats-grid {
        flex-direction: column;
        gap: 1rem;
      }
      
      .action-btn {
        padding: 0.5rem 1rem;
        font-size: 0.875rem;
      }
    }
  `]
})
export class ProjectsComponent implements OnInit {
  isLoaded = false;
  activeFilter = 'All';
  
  filters = ['All', 'AI', 'Web', 'Vision', 'Data Science'];
  
  projects: Project[] = [
    {
      id: 1,
      title: 'Emotion Recognition System',
      description: 'Deep learning-based emotion recognition using CNN architecture. Recognizes facial expressions in real-time with high accuracy.',
      image: 'https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'CNN'],
      category: 'AI',
      github: 'https://github.com/Harishwar07/face-emotion-recognition',
      demo: 'https://demo.com',
      featured: true
    },
    {
      id: 2,
      title: 'SwinIR for CCTV Enhancement',
      description: 'Image super-resolution model for CCTV footage enhancement using SwinIR transformer architecture.',
      image: 'https://images.pexels.com/photos/2882566/pexels-photo-2882566.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['PyTorch', 'Transformers', 'Computer Vision'],
      category: 'Vision',
      github: 'https://github.com/Harishwar07/CCTV-Image-Enhancement-using-swinIR',
      featured: true
    },
    {
      id: 3,
      title: 'Smart Billing System',
      description: 'IoT-based smart billing system using sensor data for automated inventory management and billing.',
      image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['Python', 'IoT', 'FastAPI', 'SQLite'],
      category: 'Web',
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false
    },
    {
      id: 4,
      title: 'Online E-Commerce Platform',
      description: 'A full-stack e-commerce application enabling users to browse products, add to cart, and securely checkout. Admins can manage inventory, orders, and users through a dedicated dashboard.',
      image: 'https://images.pexels.com/photos/4464484/pexels-photo-4464484.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['Angular', 'Node.js', 'Express.js', 'MySQL'],
      category: 'Web',
      github: 'https://github.com/Harishwar07/E-Commerce_Web_Application',
      demo: 'https://your-ecommerce-demo.vercel.app',
      featured: true
    },
    {
      id: 5,
      title: 'Sales Prediction Model',
      description: 'Machine learning model for sales forecasting using time series analysis and multiple regression techniques.',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Time Series'],
      category: 'Data Science',
      github: 'https://github.com',
      featured: false
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website built with Angular featuring smooth animations and interactive backgrounds.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['Angular', 'TypeScript', 'CSS', 'Animations'],
      category: 'Web',
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false
    }
  ];
  
  get filteredProjects(): Project[] {
    if (this.activeFilter === 'All') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.activeFilter);
  }
  
  get totalProjects(): number {
    return this.projects.length;
  }
  
  get featuredProjects(): number {
    return this.projects.filter(p => p.featured).length;
  }
  
  get uniqueTechnologies(): number {
    const allTech = this.projects.flatMap(p => p.technologies);
    return new Set(allTech).size;
  }

  ngOnInit() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 100);
  }
  
  setActiveFilter(filter: string) {
    this.activeFilter = filter;
  }
  
  trackByProject(index: number, project: Project): number {
    return project.id;
  }
}