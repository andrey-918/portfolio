import React from 'react'

interface Skill {
  name: string
  category: string
  level: number
}

export const SkillList: React.FC = () => {
  const skills: Skill[] = [
    { name: 'Go', category: 'Backend', level: 85 },
    { name: 'TypeScript', category: 'Frontend', level: 90 },
    { name: 'React', category: 'Frontend', level: 88 },
    { name: 'PostgreSQL', category: 'Database', level: 80 },
    { name: 'Docker', category: 'DevOps', level: 75 },
    { name: 'Git', category: 'Tools', level: 90 }
  ]

  const categories = [...new Set(skills.map(skill => skill.category))]

  return (
    <section className="skills">
      <div className="container">
        <h2>Мои навыки</h2>
        <div className="skills-grid">
          {categories.map(category => (
            <div key={category} className="skill-category">
              <h3>{category}</h3>
              <div className="skills-list">
                {skills
                  .filter(skill => skill.category === category)
                  .map(skill => (
                    <div key={skill.name} className="skill-item">
                      <span className="skill-name">{skill.name}</span>
                      <div className="skill-level">
                        <div 
                          className="skill-level-bar"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}