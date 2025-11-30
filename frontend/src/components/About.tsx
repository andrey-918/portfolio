import '../styles/about.css';

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
              <img
                src="https://i.pinimg.com/1200x/13/eb/49/13eb49d5c45edc7f819c5c0cd76ecb39.jpg"
                alt="Portrait"
                className="about-photo"
              />
              <div className="image-bottom-badge">
                <span className="image-bottom-badge-text">May 24, 2025</span>
              </div>
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
          </div>
        </div>
      </div>
    </section>
  );
}
