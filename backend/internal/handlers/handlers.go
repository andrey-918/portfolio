package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/andrey-918/portfolio/backend/models"
)

func ProjectsHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	projects := []models.Project{
		{
			ID:           1,
			Title:        "Портфолио сайт",
			Description:  "Многофункциональное портфолио с блогом и проектами",
			Technologies: []string{"React", "TypeScript", "Go", "PostgreSQL"},
			Category:     "Full-stack",
			CreatedAt:    "2025-09-14",
			GithubUrl:    "https://github.com/andrey-918/portfolio",
			LiveUrl:      "https://github.com/andrey-918",
		},
		// ... другие проекты ...
	}
	json.NewEncoder(w).Encode(projects)
}

func ExperienceHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	experiences := []models.WorkExperience{
		{
			ID:           1,
			Company:      "ООО 'ВебТех'",
			Position:     "Frontend Developer",
			Period:       "2022 — 2024",
			Description:  "Разработка и поддержка SPA на React, внедрение TypeScript.",
			Technologies: []string{"React", "TypeScript", "Redux", "Vite"},
			Achievements: []string{"Оптимизация загрузки на 30%", "Внедрение CI/CD"},
			CompanyUrl:   "https://webtech.ru",
			Location:     "Москва",
			Current:      false,
		},
		{
			ID:           2,
			Company:      "ООО 'Инновации'",
			Position:     "Full-stack Developer",
			Period:       "2024 — н.в.",
			Description:  "Создание и поддержка корпоративных веб-приложений.",
			Technologies: []string{"Go", "React", "PostgreSQL"},
			Achievements: []string{"Разработка архитектуры проекта", "Настройка мониторинга"},
			CompanyUrl:   "https://innovate.ru",
			Location:     "Санкт-Петербург",
			Current:      true,
		},
	}
	json.NewEncoder(w).Encode(experiences)
}

func EducationHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	educations := []models.Education{
		{
			ID:          1,
			Institution: "МГТУ им. Баумана",
			Degree:      "Бакалавр",
			Field:       "Информатика и вычислительная техника",
			Period:      "2018 — 2022",
			Description: "Изучение алгоритмов, ООП, баз данных, сетей.",
			Location:    "Москва",
		},
	}
	json.NewEncoder(w).Encode(educations)
}

func SkillsHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	skills := []models.Skill{
		{Name: "Go", Category: "Backend", Level: 85},
		{Name: "TypeScript", Category: "Frontend", Level: 90},
		{Name: "React", Category: "Frontend", Level: 88},
		{Name: "PostgreSQL", Category: "Database", Level: 80},
		{Name: "Docker", Category: "DevOps", Level: 75},
		{Name: "Git", Category: "Tools", Level: 90},
	}
	json.NewEncoder(w).Encode(skills)
}

func ContactHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	if r.Method != http.MethodPost {
		w.WriteHeader(http.StatusMethodNotAllowed)
		json.NewEncoder(w).Encode(map[string]string{"error": "Method not allowed"})
		return
	}
	type ContactForm struct {
		Name    string `json:"name"`
		Email   string `json:"email"`
		Company string `json:"company"`
		Subject string `json:"subject"`
		Message string `json:"message"`
	}
	var form ContactForm
	if err := json.NewDecoder(r.Body).Decode(&form); err != nil {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(map[string]string{"error": "Invalid request"})
		return
	}
	// Здесь можно добавить сохранение или отправку email
	json.NewEncoder(w).Encode(map[string]string{"status": "ok"})
}
