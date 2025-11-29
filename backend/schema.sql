-- Таблица проектов
CREATE TABLE IF NOT EXISTS projects (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    technologies TEXT[] NOT NULL,
    image_url TEXT,
    github_url TEXT,
    live_url TEXT,
    category TEXT NOT NULL,
    created_at DATE NOT NULL
);

-- Таблица опыта работы
CREATE TABLE IF NOT EXISTS work_experience (
    id SERIAL PRIMARY KEY,
    company TEXT NOT NULL,
    position TEXT NOT NULL,
    period TEXT NOT NULL,
    description TEXT NOT NULL,
    technologies TEXT[] NOT NULL,
    achievements TEXT[] NOT NULL,
    company_url TEXT,
    location TEXT NOT NULL,
    current BOOLEAN NOT NULL
);

-- Таблица образования
CREATE TABLE IF NOT EXISTS education (
    id SERIAL PRIMARY KEY,
    institution TEXT NOT NULL,
    degree TEXT NOT NULL,
    field TEXT NOT NULL,
    period TEXT NOT NULL,
    description TEXT NOT NULL,
    location TEXT NOT NULL
);

-- Таблица сообщений с формы контактов (опционально)
CREATE TABLE IF NOT EXISTS contact_messages (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT,
    subject TEXT,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
