import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="contact-section section">
      <div class="container">
        <h1 class="section-title" [class.animate]="isLoaded">Get In Touch</h1>
        
        <div class="contact-intro" [class.animate]="isLoaded">
          <p>
            I'm always interested in discussing new opportunities, innovative projects, 
            and collaborations in AI and data science. Let's connect!
          </p>
        </div>
        
        <div class="contact-content" [class.animate]="isLoaded">
          <div class="contact-info">
            <div class="info-card glass-effect">
              <h3>Contact Information</h3>
              
              <div class="contact-item">
                <div class="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/>
                  </svg>
                </div>
                <div class="contact-details">
                  <h4>Email</h4>
                  <p>harishwarg07&#64;gmail.com</p>
                  <a href="mailto:harishwarg07@gmail.com" class="contact-link">Send Email</a>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
                  </svg>
                </div>
                <div class="contact-details">
                  <h4>Phone</h4>
                  <p>+91 8778874553</p>
                  <a href="tel:+8778874553" class="contact-link">Call Now</a>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"/>
                  </svg>
                </div>
                <div class="contact-details">
                  <h4>Location</h4>
                  <p>Chennai, Tamil Nadu, India</p>
                </div>
              </div>
              
              <div class="social-section">
                <h4>Follow Me</h4>
                <div class="social-links">
                  <a href="https://www.linkedin.com/in/harishwar-g0911/" target="_blank" class="social-link">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                  <a href="https://github.com/Harishwar07?tab=repositories" target="_blank" class="social-link">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div class="contact-form-container">
            <form class="contact-form glass-effect" (ngSubmit)="onSubmit()" #contactForm="ngForm">
              <h3>Send Me a Message</h3>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="name">Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    [(ngModel)]="formData.name"
                    required
                    #nameInput="ngModel"
                    [class.error]="nameInput.invalid && nameInput.touched"
                    placeholder="Your full name">
                  <div *ngIf="nameInput.invalid && nameInput.touched" class="error-message">
                    Name is required
                  </div>
                </div>
                
                <div class="form-group">
                  <label for="email">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    [(ngModel)]="formData.email"
                    required
                    email
                    #emailInput="ngModel"
                    [class.error]="emailInput.invalid && emailInput.touched"
                    placeholder="your.email@example.com">
                  <div *ngIf="emailInput.invalid && emailInput.touched" class="error-message">
                    Valid email is required
                  </div>
                </div>
              </div>
              
              <div class="form-group">
                <label for="subject">Subject *</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  [(ngModel)]="formData.subject"
                  required
                  #subjectInput="ngModel"
                  [class.error]="subjectInput.invalid && subjectInput.touched"
                  placeholder="What's this about?">
                <div *ngIf="subjectInput.invalid && subjectInput.touched" class="error-message">
                  Subject is required
                </div>
              </div>
              
              <div class="form-group">
                <label for="message">Message *</label>
                <textarea 
                  id="message" 
                  name="message"
                  [(ngModel)]="formData.message"
                  required
                  rows="6"
                  #messageInput="ngModel"
                  [class.error]="messageInput.invalid && messageInput.touched"
                  placeholder="Tell me about your project or inquiry..."></textarea>
                <div *ngIf="messageInput.invalid && messageInput.touched" class="error-message">
                  Message is required
                </div>
              </div>
              
              <button 
                type="submit" 
                class="btn-primary submit-btn"
                [disabled]="contactForm.invalid || isSubmitting"
                [class.loading]="isSubmitting">
                <span *ngIf="!isSubmitting">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z"/>
                  </svg>
                  Send Message
                </span>
                <span *ngIf="isSubmitting">
                  <div class="spinner"></div>
                  Sending...
                </span>
              </button>
            </form>
            
            <div *ngIf="submitMessage" class="submit-feedback" [class.success]="submitSuccess" [class.error]="!submitSuccess">
              {{ submitMessage }}
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-section {
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
    
    .contact-intro {
      text-align: center;
      max-width: 600px;
      margin: 0 auto 3rem;
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.8s ease 0.1s;
    }
    
    .contact-intro.animate {
      opacity: 1;
      transform: translateY(0);
    }
    
    .contact-intro p {
      font-size: 1.1rem;
      line-height: 1.7;
      color: var(--gray-600);
    }
    
    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.8s ease 0.2s;
    }
    
    .contact-content.animate {
      opacity: 1;
      transform: translateY(0);
    }
    
    .info-card {
      padding: 2rem;
      height: fit-content;
    }
    
    .info-card h3 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 2rem;
      color: var(--gray-800);
    }
    
    .contact-item {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
      padding-bottom: 2rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    }
    
    .contact-item:last-child {
      border-bottom: none;
      margin-bottom: 2rem;
    }
    
    .contact-icon {
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      flex-shrink: 0;
    }
    
    .contact-details h4 {
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: var(--gray-800);
    }
    
    .contact-details p {
      color: var(--gray-600);
      margin-bottom: 0.5rem;
    }
    
    .contact-link {
      color: var(--primary);
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
    }
    
    .contact-link:hover {
      color: var(--primary-dark);
    }
    
    .social-section h4 {
      font-weight: 600;
      margin-bottom: 1rem;
      color: var(--gray-800);
    }
    
    .social-links {
      display: flex;
      gap: 1rem;
    }
    
    .social-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1rem;
      background: rgba(255, 255, 255, 0.3);
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 0.5rem;
      color: var(--gray-700);
      text-decoration: none;
      transition: all 0.3s ease;
      font-size: 0.9rem;
    }
    
    .social-link:hover {
      background: var(--primary);
      color: white;
      transform: translateY(-2px);
    }
    
    .contact-form {
      padding: 2rem;
    }
    
    .contact-form h3 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 2rem;
      color: var(--gray-800);
    }
    
    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
    
    .form-group {
      margin-bottom: 1.5rem;
    }
    
    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
      color: var(--gray-700);
    }
    
    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 0.75rem 1rem;
      border: 2px solid var(--gray-200);
      border-radius: 0.5rem;
      font-size: 1rem;
      transition: all 0.3s ease;
      background: rgba(255, 255, 255, 0.5);
    }
    
    .form-group input:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: var(--primary);
      background: rgba(255, 255, 255, 0.8);
    }
    
    .form-group input.error,
    .form-group textarea.error {
      border-color: var(--error);
    }
    
    .form-group textarea {
      resize: vertical;
      min-height: 120px;
    }
    
    .error-message {
      color: var(--error);
      font-size: 0.875rem;
      margin-top: 0.25rem;
    }
    
    .submit-btn {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 1rem 2rem;
      font-size: 1rem;
    }
    
    .submit-btn:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
    
    .submit-btn.loading {
      pointer-events: none;
    }
    
    .submit-feedback {
      margin-top: 1rem;
      padding: 1rem;
      border-radius: 0.5rem;
      text-align: center;
      font-weight: 500;
    }
    
    .submit-feedback.success {
      background: rgba(16, 185, 129, 0.1);
      color: var(--success);
      border: 1px solid var(--success);
    }
    
    .submit-feedback.error {
      background: rgba(239, 68, 68, 0.1);
      color: var(--error);
      border: 1px solid var(--error);
    }
    
    @media (max-width: 1024px) {
      .contact-content {
        grid-template-columns: 1fr;
      }
    }
    
    @media (max-width: 768px) {
      .section-title {
        font-size: 2.5rem;
      }
      
      .form-row {
        grid-template-columns: 1fr;
      }
      
      .social-links {
        flex-direction: column;
      }
      
      .contact-item {
        flex-direction: column;
        text-align: center;
      }
    }
  `]
})
export class ContactComponent implements OnInit {
  isLoaded = false;
  isSubmitting = false;
  submitMessage = '';
  submitSuccess = false;
  
  formData: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  ngOnInit() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 100);
  }
  
  onSubmit() {
    if (this.isSubmitting) return;
    
    this.isSubmitting = true;
    this.submitMessage = '';
    
    // Simulate form submission
    setTimeout(() => {
      this.isSubmitting = false;
      this.submitSuccess = true;
      this.submitMessage = 'Thank you for your message! I\'ll get back to you soon.';
      
      // Reset form
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
      
      // Clear feedback after 5 seconds
      setTimeout(() => {
        this.submitMessage = '';
      }, 5000);
    }, 2000);
  }
}