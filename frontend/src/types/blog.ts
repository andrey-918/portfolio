export interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  author: string
  createdAt: string
  updatedAt: string
  tags: string[]
  imageUrl?: string
}

export interface BlogFilters {
  tag?: string
  author?: string
}