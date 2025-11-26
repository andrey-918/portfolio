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
              <span className="hero-badge-text">Karganov Andrey</span>
            </div>
            <h1 className="hero-h1">
              PORT<br />FOLIO
            </h1>
          </div>
          <div className="hero-contact-info">
            <div className="hero-date">
              <p>May 24, 2025</p>
            </div>
            <div className="hero-contact-list">
              <p className="hero-contact-item"><span className="hero-contact-label">Телефон:</span><span className="hero-contact-value"><a href="tel:+7 915 204-96-13" className="link"> +7 (915) 204-96-13</a></span></p>
              <p className="hero-contact-item"><span className="hero-contact-label">Сайт:</span><span className="hero-contact-value"><a href="karganov-an.ru" className="link"> karganov-an.ru</a></span></p>
              <p className="hero-contact-item"><span className="hero-contact-label">Почта:</span><span className="hero-contact-value"><a href="mailto:karganov.an@yandex.ru" className="link"> karganov.an@yandex.ru</a></span></p>
              <p className="hero-contact-item"><span className="hero-contact-label">Локация:</span><span className="hero-contact-value"> Москва</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
