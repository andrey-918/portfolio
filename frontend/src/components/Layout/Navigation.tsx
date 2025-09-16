import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export const Navigation: React.FC = () => {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Главная' },
    { path: '/skills', label: 'Навыки' },
    { path: '/about', label: 'Обо мне' },
    { path: '/contact', label: 'Контакты' }
  ]

  return (
    <nav className="navigation">
      {navItems.map(item => (
        <Link
          key={item.path}
          to={item.path}
          className={location.pathname === item.path ? 'active' : ''}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}