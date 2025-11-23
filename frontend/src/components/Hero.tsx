import { ImageWithFallback } from './figma/ImageWithFallback';
import '../styles/hero.css';

export function Hero() {
  return (
    <section id="home" className="hero-section">
      {/* Background Image with Overlay */}
      <div className="hero-background">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758876022213-fbf6e54ad52e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkZXNrJTIwbGFwdG9wfGVufDF8fHx8MTc2Mzg5NTk1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Workspace"
          className="hero-image"
        />
        <div className="hero-overlay" />
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-flex-container">
          {/* Main Title */}
          <div className="hero-main-title">
            <div className="hero-badge">
              <span className="hero-badge-text">Creative Presentation</span>
            </div>
            <h1 className="hero-h1">
              PORT<br />FOLIO
            </h1>
          </div>

          {/* Contact Info */}
          <div className="hero-contact-info">
            <div className="hero-date">
              <p>May 09, 2026</p>
            </div>
            <div>
              <p className="hero-contact-item"><span className="hero-contact-label">Website:</span><a href="https://karganov-an.ru" className="hero-contact-link"> karganov-an.ru</a></p>
              <p className="hero-contact-item"><span className="hero-contact-label">Email:</span><a href="mailto:karganov.an@yandex.ru" className="hero-contact-link"> karganov-an@yandex.ru</a></p>
              <p className="hero-contact-item"><span className="hero-contact-label">Address:</span> Москва</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
