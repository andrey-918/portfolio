import React from 'react'
import { Navigation } from './Navigation'

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>Портфолио</h1>
        </div>
        <Navigation />
      </div>
    </header>
  )
}