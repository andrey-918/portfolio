package models

type WorkExperience struct {
	ID           int      `json:"id"`
	Company      string   `json:"company"`
	Position     string   `json:"position"`
	Period       string   `json:"period"`
	Description  string   `json:"description"`
	Technologies []string `json:"technologies"`
	Achievements []string `json:"achievements"`
	CompanyUrl   string   `json:"companyUrl,omitempty"`
	Location     string   `json:"location"`
	Current      bool     `json:"current"`
}

type Education struct {
	ID          int    `json:"id"`
	Institution string `json:"institution"`
	Degree      string `json:"degree"`
	Field       string `json:"field"`
	Period      string `json:"period"`
	Description string `json:"description"`
	Location    string `json:"location"`
}
