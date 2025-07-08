import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="resume-section section">
      <div class="container">
        <h1 class="section-title" [class.animate]="isLoaded">Resume</h1>
        
        <div class="resume-content" [class.animate]="isLoaded">
          <div class="resume-actions">
            <button class="btn-primary download-btn" (click)="downloadResume()">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
              </svg>
              Download PDF
            </button>
            <button class="btn-secondary" (click)="viewOnline()">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/>
              </svg>
              View Online
            </button>
          </div>
          
          <div class="resume-preview glass-effect">
            <div class="resume-header">
              <div class="personal-info">
                <h2>Harishwar Gopalsamy</h2>
                <p class="title">AI & Data Science Engineer</p>
                <div class="contact-info">
                  <span>📩 harishwarg07&#64;gmail.com</span>
                  <span>📱+91 8778874553</span>
                  <span>📍 Chennai, India</span>
                  <span>💼 LinkedIn: harishwar-g0911</span>
                </div>
              </div>
            </div>
            
            <div class="resume-sections">
              <div class="resume-section-item">
                <h3>Objective</h3>
                <p>
                  Aspiring AI Data Science student with hands-on experience in machine learning, deep learning, and analytics.
                  Passionate about solving real-world problems through data-driven solutions in dynamic environments.
                </p>
              </div>

              <div class="resume-section-item">
                <h3>Technical Skills</h3>
                <div class="skills-grid">
                  <div class="skill-category">
                    <h5>Programming</h5>
                    <p>Python, SQL</p>
                  </div>
                  <div class="skill-category">
                    <h5>ML/DL Frameworks</h5>
                    <p>TensorFlow, Keras, PyTorch, Scikit-learn, OpenCV</p>
                  </div>
                  <div class="skill-category">
                    <h5>Tools & Technologies</h5>
                    <p>GitHub, Flask</p>
                  </div>
                  <div class="skill-category">
                    <h5>Specializations</h5>
                    <p>Data Analytics and Visualization, Model Evaluation and Tuning, Computer Vision and Image Processing</p>
                  </div>
                </div>
              </div>

                            <div class="resume-section-item">
                <h3>Key Projects</h3>
                <div class="projects-list">
                  <div class="project-item">
                    <h5>Emotion Recognition System</h5>
                    <p>• Developed a CNN-based deep learning model to classify student emotions like happiness, sadness, and anger from facial expressions.</p>
                    <p>• Implemented real-time emotion detection to support personalized learning and boost classroom engagement.</p>
                  </div>
                  <div class="project-item">
                    <h5>SwinIR CCTV Enhancement</h5>
                    <p>• Implemented SwinIR to enhance low-resolution CCTV footage, improving clarity for surveillance and forensic use.</p>
                    <p>• Designed a hybrid pipeline with CNN and Swin Transformer blocks, achieving higher PSNR/SSIM and better recognition accuracy.</p>
                  </div>
                </div>

                <div class="resume-section-item">
                <h3>Certifications</h3>
                <ul class="certifications-list">
                  <li>Business Intelligence and Analytics, Issued by NPTEL, Indian Institute of Technology Madras (IIT Madras)</li>
                  <li>Human Computer Interaction, Issued by NPTEL, Indraprastha Institute of Information Technology, Delhi (IIIT-Delhi)</li>
                </ul>
              </div>
              
              <div class="resume-section-item">
                <h3>Education</h3>
                <div class="education-item">
                  <h4>B.Tech in Artificial Intelligence & Data Science</h4>
                  <p class="institution">Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology University, Chennai</p>
                  <p class="duration">2022 - 2025</p>
                  <p class="grade">CGPA: 7.6/10</p>
                </div>
                <div class="education-item">
                  <h4>Diploma in Mechanical Engineering</h4>
                  <p class="institution">V Ramakrishna Polytechnic College, Chennai</p>
                  <p class="duration">2023 - 2016</p>
                  <p class="grade">Percentage: 59/100</p>
                </div>
              </div>

              <div class="resume-section-item">
                <h3>Experience</h3>
                <div class="experience-item">
                  <h4>Technical Trainee and Apprentice</h4>
                  <p class="company">TVS Sundaram Clayton Ltd.</p>
                  <p class="duration">2017 - 2021 (4 years)</p>
                  <ul>
                    <li>Worked as a Temporary Trainee, Technical Apprentice, and NEEM Trainee, gaining 
                      hands-on experience in manufacturing operations, CNC machining, and quality control</li>
                  </ul>
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
    .resume-section {
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
    
    .resume-content {
      max-width: 800px;
      margin: 0 auto;
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.8s ease 0.2s;
    }
    
    .resume-content.animate {
      opacity: 1;
      transform: translateY(0);
    }
    
    .resume-actions {
      display: flex;
      gap: 1rem;
      justify-content: center;
      margin-bottom: 3rem;
      flex-wrap: wrap;
    }
    
    .download-btn {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .btn-secondary {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .resume-preview {
      padding: 3rem;
      max-height: 80vh;
      overflow-y: auto;
    }
    
    .resume-header {
      text-align: center;
      padding-bottom: 2rem;
      border-bottom: 2px solid rgba(59, 130, 246, 0.2);
      margin-bottom: 2rem;
    }
    
    .personal-info h2 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .personal-info .title {
      font-size: 1.25rem;
      color: var(--gray-600);
      margin-bottom: 1rem;
    }
    
    .contact-info {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;
      font-size: 0.9rem;
      color: var(--gray-600);
    }
    
    .resume-section-item {
      margin-bottom: 2rem;
    }
    
    .resume-section-item h3 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: var(--gray-800);
      border-left: 4px solid var(--primary);
      padding-left: 1rem;
    }
    
    .experience-item,
    .education-item {
      background: rgba(255, 255, 255, 0.3);
      padding: 1.5rem;
      border-radius: 0.5rem;
      margin-bottom: 1rem;
      border: 1px solid rgba(255, 255, 255, 0.3);
    }
    
    .experience-item h4,
    .education-item h4 {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: var(--gray-800);
    }
    
    .company,
    .institution {
      font-weight: 500;
      color: var(--primary);
      margin-bottom: 0.25rem;
    }
    
    .duration,
    .grade {
      font-size: 0.9rem;
      color: var(--gray-600);
      margin-bottom: 1rem;
    }
    
    .experience-item ul {
      list-style: none;
      padding-left: 0;
    }
    
    .experience-item li {
      padding: 0.25rem 0;
      color: var(--gray-700);
      border-left: 3px solid var(--accent);
      padding-left: 1rem;
      margin-bottom: 0.5rem;
    }
    
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
    }
    
    .skill-category {
      background: rgba(255, 255, 255, 0.3);
      padding: 1rem;
      border-radius: 0.5rem;
      border: 1px solid rgba(255, 255, 255, 0.3);
    }
    
    .skill-category h5 {
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: var(--gray-800);
    }
    
    .skill-category p {
      font-size: 0.9rem;
      color: var(--gray-600);
    }
    
    .certifications-list {
      list-style: none;
      padding-left: 0;
    }
    
    .certifications-list li {
      padding: 0.5rem 0;
      color: var(--gray-700);
      border-left: 3px solid var(--success);
      padding-left: 1rem;
      margin-bottom: 0.5rem;
      background: rgba(16, 185, 129, 0.1);
      border-radius: 0.25rem;
    }
    
    .projects-list {
      display: grid;
      gap: 1rem;
    }
    
    .project-item {
      background: rgba(255, 255, 255, 0.3);
      padding: 1rem;
      border-radius: 0.5rem;
      border: 1px solid rgba(255, 255, 255, 0.3);
    }
    
    .project-item h5 {
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: var(--gray-800);
    }
    
    .project-item p {
      font-size: 0.9rem;
      color: var(--gray-600);
    }
    
    @media (max-width: 768px) {
      .section-title {
        font-size: 2.5rem;
      }
      
      .resume-preview {
        padding: 2rem 1rem;
      }
      
      .personal-info h2 {
        font-size: 2rem;
      }
      
      .contact-info {
        flex-direction: column;
        gap: 0.5rem;
      }
      
      .skills-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ResumeComponent implements OnInit {
  isLoaded = false;

  ngOnInit() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 100);
  }
  pdfPath = 'src/assets/harishwar_resumee.pdf';
  downloadResume() {
    // In a real application, this would trigger a PDF download
    const link = document.createElement('a');
    link.href = this.pdfPath // You would place the actual PDF here
    link.download = 'Harishwar_G_Resume.pdf';
    link.click();
  }
  
  viewOnline() {
    // In a real application, this would open the resume in a new tab
    window.open(this.pdfPath, '_blank');
  }
}