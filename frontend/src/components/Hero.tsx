import '../styles/hero.css';
import heroImage from '../images/workspace.jpg';

export function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <img
              src={heroImage}
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
              <p>Ноябрь 26, 2025</p>
            </div>
            <div className="hero-contact-list">
              <p className="hero-contact-item"><span className="hero-contact-label">Телефон:</span><span className="hero-contact-value"><a href="tel:+7 915 204-96-13" className="link"> +7 (915) 204-96-13</a></span></p>
              <p className="hero-contact-item"><span className="hero-contact-label">Сайт:</span><span className="hero-contact-value"><a href="karganov-an.ru" className="link"> karganov-an.ru</a></span></p>
              <p className="hero-contact-item"><span className="hero-contact-label">Почта:</span><span className="hero-contact-value"><a href="mailto:karganov.an@yandex.ru" className="link"> karganov.an@yandex.ru</a></span></p>
              <p className="hero-contact-item"><span className="hero-contact-label">Город:</span><span className="hero-contact-value"> Москва</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
