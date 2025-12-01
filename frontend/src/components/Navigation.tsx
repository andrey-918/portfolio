import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import '../styles/navigation.css';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Get the Lenis instance from the global window object or create one
    const lenisInstance = (window as any).lenis as Lenis;
    if (lenisInstance) {
      setLenis(lenisInstance);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Calculate scroll progress
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(scrollPercent, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element && lenis) {
      // Use Lenis for ultra-smooth scrolling
      lenis.scrollTo(element, {
        offset: -80, // Account for fixed navigation height
        duration: 1.5,
        easing: (t: number) => 1 - Math.pow(1 - t, 3), // Custom easing for smoother feel
      });
    } else if (element) {
      // Fallback to native smooth scrolling
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Главная' },
    { id: 'about', label: 'Обо мне' },
    { id: 'education', label: 'Учёба' },
    { id: 'experience', label: 'Работа'},
    { id: 'projects', label: 'Проекты' },
    { id: 'contact', label: 'Контакты' }
  ];

  return (
    <>
      <nav
        className={`nav ${isScrolled ? 'nav-scrolled' : 'nav-transparent'}`}
      >
        <div className="nav-container">
          <div className="nav-content">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('home')}
              className={`nav-logo ${isScrolled ? 'nav-logo-scrolled' : 'nav-logo-transparent'}`}
            >
              Karganov
            </button>

            {/* Desktop Navigation */}
            <div className="nav-menu">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-link ${isScrolled ? 'nav-link-scrolled' : 'nav-link-transparent'}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`nav-mobile-btn ${isScrolled ? 'nav-mobile-btn-scrolled' : 'nav-mobile-btn-transparent'}`}
            >
              {isMobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Scroll Progress Indicator */}
        <div className="nav-progress" style={{ width: `${scrollProgress}%` }}></div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="nav-mobile-menu active">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="nav-mobile-link"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}