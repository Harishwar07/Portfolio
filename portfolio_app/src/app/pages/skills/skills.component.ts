import { Component, OnInit, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="skills-section section">
      <div class="container">
        <h1 class="section-title" [class.animate]="isLoaded">My Skills</h1>
        
        <div class="skills-content" [class.animate]="isLoaded">
          <div class="skills-categories">
            <div class="category" *ngFor="let category of categories">
              <h3 class="category-title">{{ category.title }}</h3>
              <div class="skills-grid">
                <div class="skill-card card" *ngFor="let skill of category.skills; trackBy: trackBySkill">
                  <div class="skill-header">
                    <div class="skill-icon">{{ skill.icon }}</div>
                    <div class="skill-info">
                      <h4>{{ skill.name }}</h4>
                      <span class="skill-percentage">{{ skill.level }}%</span>
                    </div>
                  </div>
                  <div class="skill-bar">
                    <div 
                      class="skill-progress" 
                      #skillBar
                      [style.width.%]="animateProgress ? skill.level : 0">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="skills-summary glass-effect">
            <h3>Technical Expertise</h3>
            <div class="summary-stats">
              <div class="summary-stat">
                <span class="stat-number">{{ totalSkills }}</span>
                <span class="stat-label">Technical Skills</span>
              </div>
              <div class="summary-stat">
                <span class="stat-number">{{ experienceYears }}+</span>
                <span class="stat-label">Years Experience</span>
              </div>
              <div class="summary-stat">
                <span class="stat-number">{{ averageLevel }}%</span>
                <span class="stat-label">Average Proficiency</span>
              </div>
            </div>
            
            <div class="certifications">
              <h4>Certifications & Learning</h4>
              <ul>
                <li>Business Intelligence and Analytics, Issued by NPTEL, Indian Institute of Technology Madras (IIT Madras)</li>
                <li>Human Computer Interaction, Issued by NPTEL, Indraprastha Institute of Information Technology, Delhi (IIIT-Delhi)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills-section {
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
    
    .skills-content {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 3rem;
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.8s ease 0.2s;
    }
    
    .skills-content.animate {
      opacity: 1;
      transform: translateY(0);
    }
    
    .category {
      margin-bottom: 3rem;
    }
    
    .category-title {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
      color: var(--gray-700);
      border-left: 4px solid var(--primary);
      padding-left: 1rem;
    }
    
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
    }
    
    .skill-card {
      padding: 1.5rem;
      transition: all 0.3s ease;
    }
    
    .skill-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
    }
    
    .skill-header {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;
    }
    
    .skill-icon {
      font-size: 2rem;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 5px 15px rgba(59, 130, 246, 0.3);
    }
    
    .skill-info {
      flex: 1;
    }
    
    .skill-info h4 {
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 0.25rem;
      color: var(--gray-800);
    }
    
    .skill-percentage {
      font-size: 0.9rem;
      color: var(--primary);
      font-weight: 500;
    }
    
    .skill-bar {
      width: 100%;
      height: 8px;
      background: var(--gray-200);
      border-radius: 4px;
      overflow: hidden;
    }
    
    .skill-progress {
      height: 100%;
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      transition: width 1.5s ease;
      border-radius: 4px;
    }
    
    .skills-summary {
      padding: 2rem;
      height: fit-content;
      position: sticky;
      top: 120px;
    }
    
    .skills-summary h3 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
      color: var(--gray-800);
    }
    
    .summary-stats {
      margin-bottom: 2rem;
    }
    
    .summary-stat {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.75rem 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    }
    
    .summary-stat:last-child {
      border-bottom: none;
    }
    
    .stat-number {
      font-size: 1.25rem;
      font-weight: bold;
      color: var(--primary);
    }
    
    .stat-label {
      font-size: 0.9rem;
      color: var(--gray-600);
    }
    
    .certifications h4 {
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: var(--gray-800);
    }
    
    .certifications ul {
      list-style: none;
    }
    
    .certifications li {
      padding: 0.5rem 0;
      color: var(--gray-600);
      border-left: 3px solid var(--accent);
      padding-left: 1rem;
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
    }
    
    @media (max-width: 1024px) {
      .skills-content {
        grid-template-columns: 1fr;
      }
      
      .skills-summary {
        position: static;
      }
    }
    
    @media (max-width: 768px) {
      .section-title {
        font-size: 2.5rem;
      }
      
      .skills-grid {
        grid-template-columns: 1fr;
      }
      
      .skill-card {
        padding: 1rem;
      }
    }
  `]
})
export class SkillsComponent implements OnInit, AfterViewInit {
  @ViewChildren('skillBar') skillBars!: QueryList<ElementRef>;
  
  isLoaded = false;
  animateProgress = false;
  
  categories = [
    {
      title: 'Primary Skills',
      skills: [
        { name: 'Python', level: 80, category: 'primary', icon: '🐍' },
        { name: 'Machine Learning', level: 75, category: 'primary', icon: '🤖' },
        { name: 'Deep Learning', level: 80, category: 'primary', icon: '🧠' },
        { name: 'SQL', level: 85, category: 'primary', icon: '🗃️' },
        { name: 'TensorFlow', level: 80, category: 'primary', icon: '⚡' },
        { name: 'PyTorch', level: 80, category: 'primary', icon: '🔥' }
      ]
    },
    {
      title: 'Secondary Skills',
      skills: [
        { name: 'Git & GitHub', level: 90, category: 'secondary', icon: '📝' },
        { name: 'HTML/CSS', level: 75, category: 'secondary', icon: '🎨' },
        { name: 'Flask', level: 80, category: 'secondary', icon: '⚡' },
        { name: 'MySQL', level: 80, category: 'secondary', icon: '🐳' },
        { name: 'Power BI', level: 50, category: 'secondary', icon: '☁️' }
      ]
    }
  ];
  
  get totalSkills(): number {
    return this.categories.reduce((total, cat) => total + cat.skills.length, 0);
  }
  
  get experienceYears(): number {
    return 1;
  }
  
  get averageLevel(): number {
    const allSkills = this.categories.flatMap(cat => cat.skills);
    const sum = allSkills.reduce((total, skill) => total + skill.level, 0);
    return Math.round(sum / allSkills.length);
  }

  ngOnInit() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 100);
  }
  
  ngAfterViewInit() {
    setTimeout(() => {
      this.animateProgress = true;
    }, 500);
  }
  
  trackBySkill(index: number, skill: Skill): string {
    return skill.name;
  }
}