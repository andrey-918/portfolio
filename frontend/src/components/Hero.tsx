import { ImageWithFallback } from './figma/ImageWithFallback';
import '../styles/hero.css';

export function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758876022213-fbf6e54ad52e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkZXNrJTIwbGFwdG9wfGVufDF8fHx8MTc2Mzg5NTk1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Workspace"
              className="hero-image"
            />
          </div>
        </div>
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <div className="hero-flex-container">
          <div className="hero-main-title">
            <div className="hero-badge">
              <span className="hero-badge-text">Creative Presentation</span>
            </div>
            <h1 className="hero-h1">
              PORT<br />FOLIO
            </h1>
          </div>
          <div className="hero-contact-info">
            <div className="hero-date">
              <p>May 09, 2026</p>
            </div>
            <div className="hero-contact-list">
              <p className="hero-contact-item"><span className="hero-contact-label">Phone:</span><span className="hero-contact-value"> +234 456 7890</span></p>
              <p className="hero-contact-item"><span className="hero-contact-label">Website:</span><span className="hero-contact-value"> francoismercer.com</span></p>
              <p className="hero-contact-item"><span className="hero-contact-label">Email:</span><span className="hero-contact-value"> contact@myemail.com</span></p>
              <p className="hero-contact-item"><span className="hero-contact-label">Address:</span><span className="hero-contact-value"> 175 Argon Street</span></p>
              <p className="hero-contact-item">City, ST 12345</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
