interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  description: string;
}

const educationItems: EducationItem[] = [
  {
    id: 'baumanka',
    institution: 'МГТУ им. Н. Э. Баумана',
    degree: 'Бакалавриат',
    field: 'Электроника и наноэлектроника',
    period: '2022 — н. в.',
    description: 'Изучаю программирование микропроцессоров и микроконтроллеров, цифровую обработку сигналов и проектирование электронных устройств. Лабораторные работы развивают системное мышление и навык решения комплексных технических задач.',
  },
  {
    id: 'vk-web-development',
    institution: 'VK Education',
    degree: 'Курс',
    field: 'Web-разработка на Go',
    period: '2024 — 2025',
    description: 'Алгоритмы и структуры данных, Go, базы данных, REST API, микросервисная архитектура, кэширование, Docker и CI/CD. В рамках курса выполнено пять проектов, включая сервис обработки данных с высокой нагрузкой.',
  },
  {
    id: 'yandex-go',
    institution: 'Яндекс Лицей',
    degree: 'Дополнительный курс',
    field: 'Go',
    period: '',
    description: 'Дополнительное обучение языку Go и практика решения задач на этом языке.',
  },
  {
    id: 'yandex-sql',
    institution: 'Яндекс Лицей',
    degree: 'Дополнительный курс',
    field: 'SQL',
    period: '',
    description: 'Дополнительное обучение SQL и работе с данными в реляционных базах.',
  },
  {
    id: 'vk-web-services',
    institution: 'VK Education',
    degree: 'Обучаюсь',
    field: 'Разработка веб-сервисов на Golang',
    period: 'В процессе',
    description: 'Изучаю конкурентность в Go, HTTP и проектирование API, работу с базами данных, микросервисную архитектуру, тестирование, Docker, CI/CD, мониторинг и оптимизацию.',
  },
];

export function Education() {
  return (
    <section id="education" className="education-section">
      <div className="global-container">
        <div className="education-heading">
          <p className="eyebrow">База и развитие</p>
          <h2 className="section-title">Образование</h2>
        </div>
        <div className="education-list">
          {educationItems.map((item) => (
            <article className="education-item" key={item.id}>
              <div className="education-item-copy">
                <h3>{item.institution}</h3>
                <p>{item.degree} · {item.field}</p>
                {item.description && <p className="education-item-description">{item.description}</p>}
              </div>
              {item.period && <span className="education-item-period">{item.period}</span>}
            </article>
          ))}
          </div>
      </div>
    </section>
  );
}
