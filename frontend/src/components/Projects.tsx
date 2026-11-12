import { useEffect, useState } from 'react';

interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  details: string;
  technologies: string[];
  video?: string;
  poster?: string;
  website?: string;
  github?: string;
}

const projects: Project[] = [
  {
    id: 'cinema',
    title: 'Cinema Queue',
    category: 'Веб-сервис · Бронирование',
    summary: 'Бронирование мест без конфликтов',
    details: 'Сервис бронирования для кинотеатра. В проекте проработана конкурентная запись на места с использованием Go и Redis.',
    technologies: ['Go', 'Redis', 'Docker'],
    video: '/projects/cinema-queue-demo.mp4',
    poster: '/cinema.png',
    website: 'https://cinema-queue.ru',
    github: 'https://github.com/andrey-918/cinema-queue',
  },
  {
    id: 'cafe-between',
    title: 'Cafe Between',
    category: 'Сайт кафе · Управление контентом',
    summary: 'Сайт, которым удобно управлять',
    details: 'Сайт кофейни с меню и возможностью самостоятельно обновлять позиции и публиковать акции.',
    technologies: ['Go', 'PostgreSQL', 'React'],
    video: '/projects/cafe-between-demo.mp4',
    poster: '/cafe.jpg',
    website: 'https://cafe-between.ru',
    github: 'https://github.com/andrey-918/cafe-between',
  },
  {
    id: 'zharka',
    title: 'Жарка',
    category: 'Сайт кофейни · Демо',
    summary: 'Цифровая витрина для кофейни',
    details: 'Демо сайта для кофейни: знакомство с заведением и его предложением через аккуратный веб-интерфейс.',
    technologies: ['Дизайн', 'Frontend'],
    video: '/projects/zharka-demo.mp4',
  },
  {
    id: 'cement',
    title: 'Цемент из Ирана',
    category: 'Корпоративный сайт',
    summary: 'Понятно о сложной поставке',
    details: 'Сайт для компании, которая занимается поставками цемента из Ирана: информация о предложении и работе компании собрана в одном месте.',
    technologies: ['Go', 'TypeScript', 'HTML', 'CSS'],
    poster: '/cement.png',
    website: 'https://cementiran.ru',
    github: 'https://github.com/andrey-918/cement',
  },
];

export function Projects() {
  const [expandedProject, setExpandedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!expandedProject) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setExpandedProject(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [expandedProject]);

  return (
    <section id="projects" className="projects-section">
      <div className="global-container">
        <div className="projects-header">
          <div>
            <p className="eyebrow">Избранные работы</p>
            <h2 className="section-title">Проекты</h2>
          </div>
          <p className="projects-intro">От бизнес-сайтов до сервисов со сложной логикой — решения под реальные сценарии использования.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.id}>
              <div className="project-media">
                {project.video ? (
                  <>
                    <video
                      src={project.video}
                      poster={project.poster}
                      controls
                      playsInline
                      preload="none"
                      aria-label={`Видео проекта «${project.title}»`}
                    />
                    <button
                      className="project-video-expand"
                      type="button"
                      aria-label={`Открыть видео проекта «${project.title}» на весь экран`}
                      onClick={() => setExpandedProject(project)}
                    >
                      На весь экран <span aria-hidden="true">⤢</span>
                    </button>
                  </>
                ) : (
                  <img src={project.poster} alt={`Сайт проекта «${project.title}»`} loading="lazy" />
                )}
                <span className="project-index">0{index + 1}</span>
              </div>
              <div className="project-info">
                <p className="project-category">{project.category}</p>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-summary">{project.summary}</p>
                <p className="project-description">{project.details}</p>
                <ul className="project-technologies" aria-label="Технологии проекта">
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <div className="project-links">
                  {project.website && (
                    <a href={project.website} target="_blank" rel="noopener noreferrer">
                      Открыть сайт <span aria-hidden="true">↗</span>
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      Исходный код <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      {expandedProject?.video && (
        <div
          className="project-video-lightbox"
          role="presentation"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setExpandedProject(null);
            }
          }}
        >
          <section
            className="project-video-lightbox-content"
            role="dialog"
            aria-modal="true"
            aria-label={`Видео проекта «${expandedProject.title}»`}
          >
            <button
              className="project-video-close"
              type="button"
              aria-label="Закрыть видео"
              autoFocus
              onClick={() => setExpandedProject(null)}
            >
              Закрыть <span aria-hidden="true">×</span>
            </button>
            <video
              src={expandedProject.video}
              poster={expandedProject.poster}
              controls
              playsInline
              preload="metadata"
              aria-label={`Видео проекта «${expandedProject.title}»`}
            />
            <h2>{expandedProject.title}</h2>
          </section>
        </div>
      )}
    </section>
  );
}
