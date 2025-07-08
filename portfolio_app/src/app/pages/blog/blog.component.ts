import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  tags: string[];
  date: Date;
  readTime: number;
  featured: boolean;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="blog-section section">
      <div class="container">
        <h1 class="section-title" [class.animate]="isLoaded">Blog & Articles</h1>
        
        <div class="blog-intro" [class.animate]="isLoaded">
          <p>
            Sharing insights about AI, data science, and technology trends. 
            Explore my thoughts on machine learning, development practices, and industry innovations.
          </p>
        </div>
        
        <div class="blog-filters" [class.animate]="isLoaded">
          <button 
            *ngFor="let tag of allTags" 
            class="filter-btn"
            [class.active]="activeTag === tag"
            (click)="setActiveTag(tag)">
            {{ tag }}
          </button>
        </div>
        
        <div class="blog-grid" [class.animate]="isLoaded">
          <article 
            *ngFor="let post of filteredPosts; trackBy: trackByPost"
            class="blog-card card"
            [class.featured]="post.featured">
            
            <div class="blog-image">
              <img [src]="post.image" [alt]="post.title">
              <div class="blog-overlay">
                <span *ngIf="post.featured" class="featured-badge">Featured</span>
                <span class="read-time">{{ post.readTime }} min read</span>
              </div>
            </div>
            
            <div class="blog-content">
              <div class="blog-meta">
                <span class="blog-date">{{ post.date | date:'MMM dd, yyyy' }}</span>
                <div class="blog-tags">
                  <span *ngFor="let tag of post.tags" class="tag">{{ tag }}</span>
                </div>
              </div>
              
              <h3 class="blog-title">{{ post.title }}</h3>
              <p class="blog-excerpt">{{ post.excerpt }}</p>
              
              <button class="read-more-btn" (click)="readMore(post)">
                Read More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
                </svg>
              </button>
            </div>
          </article>
        </div>
        
        <div class="blog-stats glass-effect" [class.animate]="isLoaded">
          <h3>Blog Statistics</h3>
          <div class="stats-grid">
            <div class="stat-item">
              <span class="stat-number">{{ totalPosts }}</span>
              <span class="stat-label">Articles</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">{{ totalReadTime }}</span>
              <span class="stat-label">Minutes Read</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">{{ uniqueTags }}</span>
              <span class="stat-label">Topics</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .blog-section {
      padding-top: 120px;
    }
    
    .section-title {
      font-size: 3rem;
      font-weight: 700;
      text-align: center;
      margin-bottom: 2rem;
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
    
    .blog-intro {
      text-align: center;
      max-width: 600px;
      margin: 0 auto 3rem;
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.8s ease 0.1s;
    }
    
    .blog-intro.animate {
      opacity: 1;
      transform: translateY(0);
    }
    
    .blog-intro p {
      font-size: 1.1rem;
      line-height: 1.7;
      color: var(--gray-600);
    }
    
    .blog-filters {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 3rem;
      flex-wrap: wrap;
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.8s ease 0.2s;
    }
    
    .blog-filters.animate {
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
    
    .blog-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.8s ease 0.3s;
    }
    
    .blog-grid.animate {
      opacity: 1;
      transform: translateY(0);
    }
    
    .blog-card {
      overflow: hidden;
      position: relative;
      padding: 0;
      height: fit-content;
    }
    
    .blog-card.featured {
      border: 2px solid var(--primary);
      box-shadow: 0 10px 30px rgba(59, 130, 246, 0.2);
    }
    
    .blog-image {
      position: relative;
      height: 200px;
      overflow: hidden;
    }
    
    .blog-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
    
    .blog-card:hover .blog-image img {
      transform: scale(1.05);
    }
    
    .blog-overlay {
      position: absolute;
      top: 1rem;
      right: 1rem;
      display: flex;
      gap: 0.5rem;
      flex-direction: column;
      align-items: flex-end;
    }
    
    .featured-badge {
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      font-size: 0.75rem;
      font-weight: 500;
    }
    
    .read-time {
      background: rgba(0, 0, 0, 0.7);
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      font-size: 0.75rem;
      backdrop-filter: blur(10px);
    }
    
    .blog-content {
      padding: 1.5rem;
    }
    
    .blog-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    
    .blog-date {
      font-size: 0.875rem;
      color: var(--gray-500);
    }
    
    .blog-tags {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }
    
    .tag {
      background: var(--gray-100);
      color: var(--gray-700);
      padding: 0.25rem 0.5rem;
      border-radius: 0.75rem;
      font-size: 0.75rem;
      font-weight: 500;
    }
    
    .blog-title {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: var(--gray-800);
      line-height: 1.4;
    }
    
    .blog-excerpt {
      color: var(--gray-600);
      line-height: 1.6;
      margin-bottom: 1.5rem;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    
    .read-more-btn {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: none;
      border: none;
      color: var(--primary);
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      padding: 0;
    }
    
    .read-more-btn:hover {
      gap: 0.75rem;
    }
    
    .blog-stats {
      padding: 2rem;
      text-align: center;
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.8s ease 0.4s;
    }
    
    .blog-stats.animate {
      opacity: 1;
      transform: translateY(0);
    }
    
    .blog-stats h3 {
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
      
      .blog-grid {
        grid-template-columns: 1fr;
      }
      
      .stats-grid {
        flex-direction: column;
        gap: 1rem;
      }
      
      .blog-meta {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  `]
})
export class BlogComponent implements OnInit {
  isLoaded = false;
  activeTag = 'All';
  
  blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Getting Started with TensorFlow 2.0',
      excerpt: 'A comprehensive guide to understanding the fundamentals of TensorFlow 2.0 and building your first neural network.',
      content: 'Full article content would go here...',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=500',
      tags: ['AI', 'TensorFlow', 'Tutorial'],
      date: new Date('2024-12-15'),
      readTime: 8,
      featured: true
    },
    {
      id: 2,
      title: 'The Future of Computer Vision',
      excerpt: 'Exploring the latest trends and innovations in computer vision technology and their real-world applications.',
      content: 'Full article content would go here...',
      image: 'https://images.pexels.com/photos/2882566/pexels-photo-2882566.jpeg?auto=compress&cs=tinysrgb&w=500',
      tags: ['AI', 'Computer Vision', 'Trends'],
      date: new Date('2024-12-10'),
      readTime: 6,
      featured: false
    },
    {
      id: 3,
      title: 'Building Scalable APIs with FastAPI',
      excerpt: 'Learn how to create high-performance REST APIs using FastAPI and deploy them in production environments.',
      content: 'Full article content would go here...',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=500',
      tags: ['Web Development', 'Python', 'API'],
      date: new Date('2024-12-05'),
      readTime: 10,
      featured: true
    },
    {
      id: 4,
      title: 'Data Science Best Practices',
      excerpt: 'Essential practices and methodologies for successful data science projects and team collaboration.',
      content: 'Full article content would go here...',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=500',
      tags: ['Data Science', 'Best Practices', 'Productivity'],
      date: new Date('2024-11-28'),
      readTime: 7,
      featured: false
    },
    {
      id: 5,
      title: 'Understanding Transformer Architecture',
      excerpt: 'Deep dive into the transformer architecture that revolutionized natural language processing and beyond.',
      content: 'Full article content would go here...',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=500',
      tags: ['AI', 'NLP', 'Deep Learning'],
      date: new Date('2024-11-20'),
      readTime: 12,
      featured: false
    },
    {
      id: 6,
      title: 'Career Tips for AI Engineers',
      excerpt: 'Practical advice for building a successful career in artificial intelligence and machine learning.',
      content: 'Full article content would go here...',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=500',
      tags: ['Career', 'AI', 'Professional Growth'],
      date: new Date('2024-11-15'),
      readTime: 5,
      featured: false
    }
  ];
  
  get allTags(): string[] {
    const tags = new Set<string>();
    tags.add('All');
    this.blogPosts.forEach(post => {
      post.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags);
  }
  
  get filteredPosts(): BlogPost[] {
    if (this.activeTag === 'All') {
      return this.blogPosts.sort((a, b) => b.date.getTime() - a.date.getTime());
    }
    return this.blogPosts
      .filter(post => post.tags.includes(this.activeTag))
      .sort((a, b) => b.date.getTime() - a.date.getTime());
  }
  
  get totalPosts(): number {
    return this.blogPosts.length;
  }
  
  get totalReadTime(): number {
    return this.blogPosts.reduce((total, post) => total + post.readTime, 0);
  }
  
  get uniqueTags(): number {
    return this.allTags.length - 1; // Subtract 'All'
  }

  ngOnInit() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 100);
  }
  
  setActiveTag(tag: string) {
    this.activeTag = tag;
  }
  
  readMore(post: BlogPost) {
    // In a real application, this would navigate to the full article
    alert(`Reading "${post.title}"...\n\nIn a real application, this would navigate to the full article page.`);
  }
  
  trackByPost(index: number, post: BlogPost): number {
    return post.id;
  }
}