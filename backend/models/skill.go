package models

type Skill struct {
	Name     string `json:"name"`
	Category string `json:"category"`
	Level    int    `json:"level"`
}
