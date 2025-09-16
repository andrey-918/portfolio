import React from 'react'
import { Hero } from '../components/Sections/Hero'
import { ProjectGrid } from '../components/Sections/ProjectGrid'

export const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <ProjectGrid />
    </div>
  )
}