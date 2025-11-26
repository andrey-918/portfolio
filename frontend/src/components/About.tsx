import '../styles/about.css';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="about-section">
      <div className="global-container">
        <div className="about-grid">
          {/* Left - Photo */}
          <div className="about-photo-container">
            <div className="about-badge">
              <span className="about-badge-text">«Простота — это высшая степень сложности» — Леонардо да Винчи</span>
            </div>
            <div className="about-photo-wrapper">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1604046744901-d38344fd6129?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBvdXRkb29yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzODk1OTcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Portrait"
                className="about-photo"
              />
              <div className="about-accent-dot" />
            </div>
          </div>

          {/* Right - Content */}
          <div className="about-content">
            <h2>
              ПРИВЕТ, Я<br />
              АНДРЕЙ
            </h2>

            <p className="about-description">
              Full-stack разработчик с фокусом на создании интуитивных и эффективных digital-решений. 
              Превращаю бизнес-задачи в чистый код и понятные интерфейсы.
            </p>

            <div className="about-highlight-badge">
              <span className="about-highlight-text">May 24, 2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
