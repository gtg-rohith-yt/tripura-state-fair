import React, { useState, useEffect } from 'react';
import { TRIPURA_BASIC_INFO } from '../data/tripuraData';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'discover', label: 'Discover' },
  { id: 'heritage', label: 'Heritage' },
  { id: 'culture', label: 'Culture' },
  { id: 'cuisine', label: 'Cuisine' },
  { id: 'nature', label: 'Nature' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'quiz', label: 'Quiz' }
];

export default function Navbar({ onOpenPresentation }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Background scroll elevation check
      setIsScrolled(window.scrollY > 25);

      // Section scroll tracking
      const scrollPos = window.scrollY + 200;
      for (let item of NAV_ITEMS) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation listener (ESC to close mobile menu)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`} role="banner">
      <div className="nav-container">
        <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="nav-brand" aria-label="Tripura State Fair Home">
          <div className="brand-crest">🏛️</div>
          <div className="brand-text-container">
            <span className="brand-title">{TRIPURA_BASIC_INFO.name.toUpperCase()}</span>
            <span className="brand-subtitle">{TRIPURA_BASIC_INFO.presentation}</span>
          </div>
        </a>

        {/* Animated Hamburger Icon */}
        <button 
          className={`nav-hamburger ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="bar bar-1" />
          <span className="bar bar-2" />
          <span className="bar bar-3" />
        </button>

        <nav aria-label="Main Navigation">
          <ul className={`nav-menu ${mobileOpen ? 'mobile-open' : ''}`}>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenPresentation();
                }}
                className="btn-presentation-trigger"
                style={{
                  background: 'linear-gradient(135deg, var(--red-royal), var(--red-accent))',
                  color: '#fff',
                  border: '1px solid var(--gold-glow)',
                  borderRadius: '20px',
                  padding: '0.45rem 1rem',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  boxShadow: '0 0 12px rgba(245, 158, 11, 0.4)',
                  transition: 'all 0.3s ease'
                }}
              >
                <span>📺</span>
                <span>Presentation Mode</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
