export function About() {
  const capabilities = [
    {
      number: '01',
      title: 'Сайты и веб-сервисы',
      description: 'Дизайн и разработка с нуля: корпоративные сайты, лендинги, каталоги и сервисы с личной логикой.',
    },
    {
      number: '02',
      title: 'Интеграции и автоматизация',
      description: 'Соединяю сайт с нужными системами и помогаю убрать ручные, повторяющиеся операции.',
    },
    {
      number: '03',
      title: 'ИИ в рабочих процессах',
      description: 'Подбираю уместные сценарии для ИИ-инструментов и встраиваю их в существующий процесс.',
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="global-container">
        <div className="about-heading">
          <p className="eyebrow">Чем могу быть полезен</p>
          <h2 className="section-title">Технологии — не цель.<br />Важно, что они меняют.</h2>
          <p className="about-description">
            Помогаю разобраться в задаче, выбрать подходящий формат и довести решение до запуска.
            Беру на себя и интерфейс, и техническую часть.
          </p>
        </div>
        <div className="capabilities-list">
          {capabilities.map((capability) => (
            <article className="capability-item" key={capability.number}>
              <span className="capability-number">{capability.number}</span>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
