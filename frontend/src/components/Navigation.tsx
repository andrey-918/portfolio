import { useState } from 'react';

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
        <a className="nav-logo" href="#home">Андрей Карганов<span>.</span></a>
        <div className="nav-menu">
          {navItems.map((item) => (
            <a key={item.id} className="nav-link" href={`#${item.id}`}>{item.label}</a>
          ))}
        </div>
        <a className="nav-contact" href="mailto:karganov.an@yandex.ru">Написать <span aria-hidden="true">↗</span></a>
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
            <a key={item.id} href={`#${item.id}`} onClick={() => setIsMobileMenuOpen(false)}>{item.label}</a>
          ))}
          <a href="mailto:karganov.an@yandex.ru" onClick={() => setIsMobileMenuOpen(false)}>Написать мне ↗</a>
        </div>
      )}
    </nav>
  );
}