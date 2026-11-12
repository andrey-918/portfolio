export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="global-container">
        <div className="contact-inner">
          <div className="contact-copy">
            <p className="eyebrow">Есть задача?</p>
            <h2 className="contact-title">Давайте обсудим<br />вашу идею</h2>
          </div>
          <div className="contact-methods">
            <a className="contact-email" href="mailto:karganov.an@yandex.ru">
              <span>Написать на почту</span>
              <span>karganov.an@yandex.ru <span aria-hidden="true">↗</span></span>
            </a>
            <div className="contact-socials">
              <a href="https://t.me/andrey_918" target="_blank" rel="noopener noreferrer">Telegram ↗</a>
              <a href="https://github.com/andrey-918" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            </div>
          </div>
        </div>
        <div className="contact-footer">
          <a href="#home">Андрей Карганов</a>
          <p>© {new Date().getFullYear()} · Сделано с вниманием к деталям</p>
        </div>
      </div>
    </section>
  );
}
