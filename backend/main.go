package main

import (
	"log"
	"net/http"
	"os"

	"github.com/andrey-918/portfolio/backend/internal/handlers"
	"github.com/joho/godotenv"
)

func main() {
	_ = godotenv.Load("../.env")
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	mux := http.NewServeMux()
	mux.HandleFunc("/api/projects", handlers.ProjectsHandler)
	mux.HandleFunc("/api/experience", handlers.ExperienceHandler)
	mux.HandleFunc("/api/education", handlers.EducationHandler)
	mux.HandleFunc("/api/skills", handlers.SkillsHandler)
	mux.HandleFunc("/api/contact", handlers.ContactHandler)

	log.Printf("Server started at :%s", port)
	if err := http.ListenAndServe(":"+port, mux); err != nil {
		log.Fatal(err)
	}
}
