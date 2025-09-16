import React from 'react'
import { useTheme } from '../../utils/ThemeContext'
import { FaSun, FaMoon } from 'react-icons/fa'

export const ThemeToggleButton: React.FC = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button 
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Переключить тему"
    >
      {isDark ? (
        <FaSun size={20} color="#ffd43b" />
      ) : (
        <FaMoon size={20} color="#495057" />
      )}
    </button>
  )
}