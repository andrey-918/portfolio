import { useState } from 'react';
import { scrollToSection } from '../utils/scrollToSection';

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'about', label: 'Возможности' },
    { id: 'projects', label: 'Проекты' },
    { id: 'experience', label: 'Опыт' },
    { id: 'contact', label: 'Контакты' },
  ];

  return (
    <nav className="nav">
      <div className="nav-container">
        <a
          className="nav-logo"
          href="#home"
          onClick={(event) => {
            event.preventDefault();
            scrollToSection('home');
          }}
        >
          Андрей Карганов<span>.</span>
        </a>
        <div className="nav-menu">
          {navItems.map((item) => (
            <a
              key={item.id}
              className="nav-link"
              href={`#${item.id}`}
              onClick={(event) => {
                event.preventDefault();
                scrollToSection(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
        <a className="nav-contact" href="https://t.me/andrey_918">Написать <span aria-hidden="true">↗</span></a>
        <button
          type="button"
          className="nav-mobile-btn"
          aria-label={isMobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span />
          <span />
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="nav-mobile-menu">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(event) => {
                event.preventDefault();
                scrollToSection(item.id);
                setIsMobileMenuOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}
          <a href="https://t.me/andrey_918" onClick={() => setIsMobileMenuOpen(false)}>Написать мне ↗</a>
        </div>
      )}
    </nav>
  );
}