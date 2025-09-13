package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load("../.env") 
	if err != nil {
		log.Printf("Warning: .env file not loaded: %v", err)
	}

	PORT := os.Getenv("PORT")
	if PORT == "" {
		PORT = "8080"
	}

	r := mux.NewRouter()

	api := r.PathPrefix("/api").Subrouter()
	api.HandleFunc("/projects", getProjects).Methods("GET")
	api.HandleFunc("/contact", handleContact).Methods("POST")

	// Serve static files (фронтенд)
	r.PathPrefix("/").Handler(http.FileServer(http.Dir("../frontend/dist/")))

	// Настройка сервера
	srv := &http.Server{
		Handler:      r,
		Addr:         ":" + PORT,
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}

	fmt.Printf("Server running on port %s\n", PORT)
	log.Fatal(srv.ListenAndServe())
}

// Пример обработчика
func getProjects(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	
	// Здесь будет логика получения проектов из БД
	fmt.Fprintf(w, `[{"id": 1, "title": "My Project"}]`)
}

func handleContact(w http.ResponseWriter, r *http.Request) {
	// Обработка формы контактов
}