import portrait from '../images/about-1.jpg';
import { scrollToSection } from '../utils/scrollToSection';

export function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="global-container hero-content">
        <div className="hero-copy">
          <p className="eyebrow">Веб-разработка · Москва / удалённо</p>
          <h1 className="hero-h1">
            Создаю сайты,<br />
            <span>которые работают.</span>
          </h1>
          <p className="hero-intro">
            Проектирую и разрабатываю веб-сервисы и сайты —
            от первого обсуждения задачи до запуска и поддержки.
          </p>
          <div className="hero-actions">
            <a
              className="button button-dark"
              href="#projects"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection('projects');
              }}
            >
              Смотреть проекты <span aria-hidden="true">↘</span>
            </a>
            <a className="text-link" href="https://t.me/andrey_918">Обсудить задачу <span aria-hidden="true">↗</span></a>
          </div>
          <p className="hero-note">Понятный процесс, прямое общение, без лишних посредников.</p>
        </div>
        <div className="hero-portrait">
          <img src={portrait} alt="Андрей Карганов" />
          <div className="portrait-caption">
            <span>Андрей Карганов</span>
            <span>Веб-разработчик</span>
          </div>
        </div>
      </div>
    </section>
  );
}
