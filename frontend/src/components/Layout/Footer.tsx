import React from 'react'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} Портфолио. Все права защищены.</p>
        <div className="social-links">
          <a href="https://github.com/andrey-918" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://t.me/andrey_918" target="_blank" rel="noopener noreferrer">
            Telegram
          </a>
          <a href="mailto:karganov.an@yandex.ru">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}