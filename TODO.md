# TODO: CSS оптимизация (удаление дублей и неиспользуемых стилей)

Цель: предотвратить повторение CSS-правил и удалить неиспользуемые стили.

## План работ

1) frontend/src/styles/style.css
   - [ ] Добавить базовый унифицированный стиль:
     - .tech-tag: display, фон, бордер-радиус, padding, базовый font-size: 0.9em, базовые отступы (mr: 6px, mb: 4px).
   - [ ] Добавить дефолт для контейнера технологий:
     - .technologies { margin: 12px 0 0 0; }

2) frontend/src/styles/about.css
   - [ ] Удалить дубли WorkExp-стилей:
     - [ ] Заменить блок `.workexp-page .timeline, .education-list { ... }` на `.education-list { ... }`.
     - [ ] Заменить блок `.timeline-item, .education-item { ... }` на `.education-item { ... }` (оставить идентичные свойства только для education-item).
     - [ ] В media (max-width: 600px) заменить `.timeline-item, .education-item { ... }` на `.education-item { ... }`.
   - [ ] Удалить неиспользуемые/дублирующиеся блоки:
     - [ ] .timeline-marker (по словам пользователя не нужен).
     - [ ] .education-marker (не используется в разметке).
     - [ ] .technologies (дефолт будет в style.css).
     - [ ] .tech-tag (дефолт будет в style.css).
     - [ ] .achievements (используется в WorkExp, стиль оставляем в WorkExp.css).

3) frontend/src/styles/WorkExp.css
   - [ ] Удалить дубли, которые переехали в style.css:
     - [ ] .technologies
     - [ ] .tech-tag
   - [ ] Опционально: удалить .timeline-marker (пользователь указал, что не нужен).
     - [ ] Перед удалением проверить использование в `frontend/src/components/Sections/WorkExp.tsx`. При наличии — обсудить удаление самой разметки.

4) frontend/src/styles/Projects.css
   - [ ] Упростить `.tech-tag`, оставив только отличия от базового:
     - [ ] font-size: 0.85em
     - [ ] margin-right: 4px
     - [ ] margin-bottom: 4px

## Проверки после правок

- [ ] Поиск дублей и удалённых селекторов
  - [ ] Проверить, что `.tech-tag` и `.technologies` не продублированы в других CSS-файлах.
  - [ ] Проверить использование удалённых селекторов в TSX (className) и в других CSS (составные селекторы).
- [ ] Визуальная проверка
  - [ ] About (включая EducationList и WorkExp)
  - [ ] Projects (ProjectGrid)
  - [ ] Contact (форма и карточки)
  - [ ] Шапка/подвал (настроечные переменные темы)

## Примечания

- Порядок подключения CSS: `style.css` глобально в `App.tsx`, остальные — локально через компоненты. Переопределения в файлах компонентов должны идти поверх базовых утилит из `style.css`.
- Если нужно полностью убрать `.timeline-marker`, рекомендуется также удалить элемент из JSX (`WorkExp.tsx`), чтобы не плодить "пустые" классы в DOM.
