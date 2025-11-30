import '../styles/hero.css';
import heroImage from '/workspace.png';

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
              loading="eager"
            />
            <div className="image-bottom-badge">
                <span className="image-bottom-badge-text">Nov 15, 2025</span>
            </div>
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
            <div className="hero-contact-list">
              <p className="hero-contact-item"><span className="hero-contact-label">Телеграм:</span><span className="hero-contact-value"><a href="https://t.me/andrey_918" className="link"> @andrey_918</a></span></p>
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
