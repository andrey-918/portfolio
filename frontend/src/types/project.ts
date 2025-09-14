export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  imageUrl?: string
  githubUrl?: string
  liveUrl?: string
  category: string
  createdAt: string
}

export interface ProjectFilters {
  category?: string
  technology?: string
}