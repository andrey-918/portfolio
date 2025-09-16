import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './utils/ThemeContext'
import { Header } from './components/Layout/Header'
import { Footer } from './components/Layout/Footer'
import { Home } from './pages/Home'
import { SkillList } from './components/Sections/SkillList'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import './styles/style.css'
import { ThemeToggleButton } from './components/UI/ThemeToggleButton'


function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<SkillList />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <ThemeToggleButton />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App