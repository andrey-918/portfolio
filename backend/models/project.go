package models

type Project struct {
	ID           int      `json:"id"`
	Title        string   `json:"title"`
	Description  string   `json:"description"`
	Technologies []string `json:"technologies"`
	ImageUrl     string   `json:"imageUrl,omitempty"`
	GithubUrl    string   `json:"githubUrl,omitempty"`
	LiveUrl      string   `json:"liveUrl,omitempty"`
	Category     string   `json:"category"`
	CreatedAt    string   `json:"createdAt"`
}
