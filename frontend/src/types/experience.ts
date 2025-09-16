export interface WorkExperience {
  id: number
  company: string
  position: string
  period: string
  description: string
  technologies: string[]
  achievements: string[]
  companyUrl?: string
  location: string
  current: boolean
}

export interface Education {
  id: number
  institution: string
  degree: string
  field: string
  period: string
  description: string
  location: string
}