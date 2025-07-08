import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="about-section section">
      <div class="container">
        <div class="about-content" [class.animate]="isLoaded">
          <div class="about-text">
            <h1 class="section-title">About Me</h1>
            <div class="text-content">
              <p class="lead">
                My name is Harishwar Gopalsamy, I am a passionate and detail-oriented AI & Data Science graduate with a strong foundation in machine learning, deep learning, data analytics, and data engineering. I specialize in building scalable AI applications, transforming raw data into actionable insights, and deploying intelligent systems that solve real-world problems.
              </p>
              
              <p class="lead">
                 With hands-on experience in Python, TensorFlow, PyTorch, SQL, and modern development tools, I’ve successfully completed projects in student emotion recognition, image super-resolution, and automated product scanning. My goal is to continuously learn, innovate, and contribute to impactful, data-driven solutions that make a difference.

              </p>
              
              <p class="lead">
                I began my journey with a Diploma in Mechanical Engineering (2016) and gained 4 years of hands-on experience at TVS Sundaram Clayton Ltd. This exposure to data-driven industrial environments sparked my interest in AI and automation, leading me to pursue a B.Tech in AI & DS. I now bring a unique blend of engineering discipline and AI expertise to solve real-world problems.
              </p>

              <div class="highlights">
                <div class="highlight-item">
                  <h3>🎓 Education</h3>
                  <p>B.Tech in AI & Data Science(2025)</p>
                </div>
                
                <div class="highlight-item">
                  <h3>💼 Experience</h3>
                  <p>4 Years at TVS Sundaram Clayton as Technical Trainee and Apprentice</p>
                </div>
                
                <div class="highlight-item">
                  <h3>🚀 Passion</h3>
                  <p>Building AI solutions that matter</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="about-visual">
            <div class="profile-card glass-effect">
              <div class="profile-image">
                <div class="avatar">
                  <span>HG</span>
                </div>
              </div>
              <div class="profile-info">
                <h3>Harishwar G</h3>
                <p>AI & Data Science Engineer</p>
                <div class="stats">
                  <div class="stat">
                    <span class="stat-number">1+</span>
                    <span class="stat-label">Years Experience</span>
                  </div>
                  <div class="stat">
                    <span class="stat-number">4+</span>
                    <span class="stat-label">Projects</span>
                  </div>
                  <div class="stat">
                    <span class="stat-number">10+</span>
                    <span class="stat-label">Technologies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-section {
      padding-top: 120px;
    }
    
    .about-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.8s ease;
    }
    
    .about-content.animate {
      opacity: 1;
      transform: translateY(0);
    }
    
    .section-title {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 2rem;
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .lead {
      font-size: 1.25rem;
      font-weight: 500;
      color: var(--gray-700);
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }
    
    .text-content p {
      font-size: 1.1rem;
      line-height: 1.7;
      color: var(--gray-600);
      margin-bottom: 1.5rem;
    }
    
    .highlights {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
      margin-top: 2rem;
    }
    
    .highlight-item {
      padding: 1.5rem;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 1rem;
      border: 1px solid rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(10px);
    }
    
    .highlight-item h3 {
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
      color: var(--gray-700);
    }
    
    .highlight-item p {
      font-size: 0.95rem;
      color: var(--gray-600);
      margin: 0;
    }
    
    .about-visual {
      display: flex;
      justify-content: center;
      position: relative;
      top: -200px;
    }
    
    .profile-card {
      padding: 2rem;
      text-align: center;
      width: 100%;
      max-width: 350px;
    }
    
    .profile-image {
      margin-bottom: 1.5rem;
    }
    
    .avatar {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2.5rem;
      font-weight: bold;
      color: white;
      margin: 0 auto;
      box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
    }
    
    .profile-info h3 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: var(--gray-800);
    }
    
    .profile-info p {
      color: var(--gray-600);
      margin-bottom: 2rem;
    }
    
    .stats {
      display: flex;
      justify-content: space-around;
    }
    
    .stat {
      text-align: center;
    }
    
    .stat-number {
      display: block;
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--primary);
      margin-bottom: 0.25rem;
    }
    
    .stat-label {
      font-size: 0.875rem;
      color: var(--gray-600);
    }
    
    @media (max-width: 768px) {
      .about-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      
      .section-title {
        font-size: 2.5rem;
        text-align: center;
      }
      
      .highlights {
        grid-template-columns: 1fr;
      }
      
      .avatar {
        width: 100px;
        height: 100px;
        font-size: 2rem;
      }
    }
  `]
})
export class AboutComponent implements OnInit {
  isLoaded = false;

  ngOnInit() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 100);
  }
}