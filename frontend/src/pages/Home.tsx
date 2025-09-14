import React from 'react'
import { Hero } from '../components/Sections/Hero'
import { ProjectGrid } from '../components/Sections/ProjectGrid'
import { SkillList } from '../components/Sections/SkillList'

export const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <SkillList />
      <ProjectGrid limit={3} />
    </div>
  )
}