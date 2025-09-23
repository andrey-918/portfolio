package handlers

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"net/url"
	"os"

	"github.com/andrey-918/portfolio/backend/internal/db"
	"github.com/andrey-918/portfolio/backend/models"
	"github.com/joho/godotenv"
)

func ProjectsHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	rows, err := db.Pool.Query(context.Background(), `SELECT id, title, description, technologies, image_url, github_url, live_url, category, created_at FROM projects ORDER BY id`)
	if err != nil {
		http.Error(w, "DB error", http.StatusInternalServerError)
		return
	}
	defer rows.Close()
	var projects []models.Project
	for rows.Next() {
		var p models.Project
		var imageUrl, githubUrl, liveUrl *string
		var technologiesRaw interface{}
		if err := rows.Scan(&p.ID, &p.Title, &p.Description, &technologiesRaw, &imageUrl, &githubUrl, &liveUrl, &p.Category, &p.CreatedAt); err != nil {
			fmt.Println("Scan error in ProjectsHandler:", err)
			http.Error(w, "DB scan error", http.StatusInternalServerError)
			return
		}
		p.Technologies = pgArrayToStringSlice(technologiesRaw)
		if imageUrl != nil {
			p.ImageUrl = *imageUrl
		}
		if githubUrl != nil {
			p.GithubUrl = *githubUrl
		}
		if liveUrl != nil {
			p.LiveUrl = *liveUrl
		}
		projects = append(projects, p)
	}
	json.NewEncoder(w).Encode(projects)
}

// pgArrayToStringSlice универсально преобразует PostgreSQL text[] в []string
func pgArrayToStringSlice(src interface{}) []string {
	switch v := src.(type) {
	case []string:
		return v
	case []interface{}:
		res := make([]string, 0, len(v))
		for _, el := range v {
			if s, ok := el.(string); ok {
				res = append(res, s)
			}
		}
		return res
	case string:
		// На случай, если драйвер вернул строку вида {"a","b"}
		return parsePgArrayString(v)
	case []byte:
		return parsePgArrayString(string(v))
	default:
		return []string{}
	}
}

// parsePgArrayString разбирает строку PostgreSQL массива в []string (без поддержки вложенных массивов)
func parsePgArrayString(s string) []string {
	s = s[1 : len(s)-1] // убрать фигурные скобки
	if len(s) == 0 {
		return []string{}
	}
	var res []string
	curr := ""
	inQuotes := false
	for i := 0; i < len(s); i++ {
		c := s[i]
		if c == '"' {
			inQuotes = !inQuotes
			continue
		}
		if c == ',' && !inQuotes {
			res = append(res, curr)
			curr = ""
			continue
		}
		curr += string(c)
	}
	res = append(res, curr)
	return res
}

func ExperienceHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	rows, err := db.Pool.Query(r.Context(), `SELECT id, company, position, period, description, technologies, achievements, company_url, location, current FROM work_experience ORDER BY id`)
	if err != nil {
		http.Error(w, "DB error", http.StatusInternalServerError)
		return
	}
	defer rows.Close()
	var experiences []models.WorkExperience
	for rows.Next() {
		var exp models.WorkExperience
		var companyUrl *string
		if err := rows.Scan(&exp.ID, &exp.Company, &exp.Position, &exp.Period, &exp.Description, &exp.Technologies, &exp.Achievements, &companyUrl, &exp.Location, &exp.Current); err != nil {
			http.Error(w, "DB scan error", http.StatusInternalServerError)
			return
		}
		if companyUrl != nil {
			exp.CompanyUrl = *companyUrl
		}
		experiences = append(experiences, exp)
	}
	json.NewEncoder(w).Encode(experiences)
}

func EducationHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	rows, err := db.Pool.Query(r.Context(), `SELECT id, institution, degree, field, period, description, location FROM education ORDER BY id`)
	if err != nil {
		http.Error(w, "DB error", http.StatusInternalServerError)
		return
	}
	defer rows.Close()
	var educations []models.Education
	for rows.Next() {
		var edu models.Education
		if err := rows.Scan(&edu.ID, &edu.Institution, &edu.Degree, &edu.Field, &edu.Period, &edu.Description, &edu.Location); err != nil {
			http.Error(w, "DB scan error", http.StatusInternalServerError)
			return
		}
		educations = append(educations, edu)
	}
	json.NewEncoder(w).Encode(educations)
}

func SkillsHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	rows, err := db.Pool.Query(r.Context(), `SELECT name, category, level FROM skills ORDER BY id`)
	if err != nil {
		http.Error(w, "DB error", http.StatusInternalServerError)
		return
	}
	defer rows.Close()
	var skills []models.Skill
	for rows.Next() {
		var s models.Skill
		if err := rows.Scan(&s.Name, &s.Category, &s.Level); err != nil {
			http.Error(w, "DB scan error", http.StatusInternalServerError)
			return
		}
		skills = append(skills, s)
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

	_ = godotenv.Load("../.env")
	telegramToken := os.Getenv("TELEGRAM_TOKEN")
	telegramChatID := os.Getenv("TELEGRAM_CHAT_ID")
	msg := fmt.Sprintf(
		"Новое сообщение с сайта!\nИмя: %s\nEmail: %s\nКомпания: %s\nТема: %s\nСообщение: %s",
		form.Name, form.Email, form.Company, form.Subject, form.Message,
	)
	apiURL := fmt.Sprintf("https://api.telegram.org/bot%s/sendMessage", telegramToken)
	data := url.Values{}
	data.Set("chat_id", telegramChatID)
	data.Set("text", msg)

	resp, err := http.PostForm(apiURL, data)
	if err != nil || resp.StatusCode >= 400 {
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(map[string]string{"error": "Не удалось отправить в Telegram"})
		return
	}
	defer resp.Body.Close()

	json.NewEncoder(w).Encode(map[string]string{"status": "ok"})
}
