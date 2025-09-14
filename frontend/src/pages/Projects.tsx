import React, { useState } from 'react'
import { ProjectGrid } from '../components/Sections/ProjectGrid'
import { ProjectFilters } from '../types'

export const Projects: React.FC = () => {
  const [filters, setFilters] = useState<ProjectFilters>({})

  return (
    <div className="container">
      <h1>Мои проекты</h1>
      <div className="filters">
        {/* Фильтры по категориям и технологиям */}
      </div>
      <ProjectGrid filters={filters} />
    </div>
  )
}