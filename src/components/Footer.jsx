import React from 'react';
import { TRIPURA_BASIC_INFO } from '../data/tripuraData';
import ScrollReveal from './common/ScrollReveal';

export default function Footer() {
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Discover', href: '#discover' },
    { label: 'Heritage', href: '#heritage' },
    { label: 'Culture', href: '#culture' },
    { label: 'Nature', href: '#nature' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Quiz', href: '#quiz' }
  ];

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer" role="contentinfo" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Decorative Background Pattern */}
      <div className="footer-pattern-overlay" />

      <div style={{ position: 'relative', zIndex: 5, maxWidth: '900px', margin: '0 auto' }}>
        {/* 1. Brand Heading & Tagline */}
        <ScrollReveal animation="fade-up" delay={0.1}>
          <div className="footer-brand">{TRIPURA_BASIC_INFO.name.toUpperCase()}</div>
          <p className="footer-tagline">Heritage • Culture • Nature</p>
        </ScrollReveal>

        {/* 2. Navigation Quick Links with Staggered Entrance */}
        <ScrollReveal animation="fade-up" delay={0.2}>
          <nav aria-label="Footer Navigation" style={{ margin: '1.5rem 0' }}>
            <ul style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', listStyle: 'none', padding: 0 }}>
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href} 
                    className="footer-link"
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </ScrollReveal>

        <div className="footer-divider" />

        {/* 3. Centaur House Credit & Info (Fades in last) */}
        <ScrollReveal animation="fade-up" delay={0.35}>
          <p className="footer-credit">
            Created for State Fair — Centaur House
          </p>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
            Educational Interactive Exhibition | Capital: {TRIPURA_BASIC_INFO.capital} | Statehood: {TRIPURA_BASIC_INFO.statehood}
          </p>
        </ScrollReveal>
      </div>
    </footer>
  );
}
