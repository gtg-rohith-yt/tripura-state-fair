import React, { useEffect, useState, useRef } from 'react';
import { TRIPURA_BASIC_INFO } from '../data/tripuraData';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    // Disable parallax on mobile or if reduced motion is preferred
    const isMobile = window.innerWidth <= 768;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isMobile || prefersReduced) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY < 1200) {
            setScrollY(window.scrollY);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Very subtle depth offsets (Slower background, faster foreground)
  const bgOffsetY = scrollY * 0.12;      // Layer 1: Background (slowest)
  const decorOffsetY = scrollY * 0.22;   // Layer 2: Decorative elements (medium)
  const contentOffsetY = scrollY * 0.32; // Layer 3: Content (foreground)

  return (
    <section 
      ref={heroRef}
      className="hero-section" 
      id="home" 
      aria-label="Welcome Hero"
    >
      {/* Layer 1: Decorative Pattern Overlay */}
      <div 
        className="hero-pattern-overlay" 
        aria-hidden="true" 
        style={{
          transform: `translate3d(0, ${bgOffsetY * 0.5}px, 0)`
        }}
      />
      
      {/* Layer 2: Low-Amplitude Floating Decorative Particles */}
      <div 
        className="floating-particle floating-particle-1" 
        style={{ 
          top: '15%', 
          left: '10%', 
          width: '12px', 
          height: '12px', 
          background: 'var(--gold-glow)',
          transform: `translate3d(0, ${decorOffsetY}px, 0)`
        }} 
      />
      <div 
        className="floating-particle floating-particle-2" 
        style={{ 
          top: '65%', 
          left: '85%', 
          width: '16px', 
          height: '16px', 
          background: 'var(--green-accent)',
          transform: `translate3d(0, ${decorOffsetY * 0.9}px, 0)`
        }} 
      />
      <div 
        className="floating-particle floating-particle-3" 
        style={{ 
          top: '25%', 
          right: '12%', 
          width: '10px', 
          height: '10px', 
          background: 'var(--red-accent)',
          transform: `translate3d(0, ${decorOffsetY * 1.1}px, 0)`
        }} 
      />
      
      {/* Layer 3: Content (Foreground) */}
      <div 
        className="hero-content"
        style={{
          transform: `translate3d(0, ${contentOffsetY}px, 0)`,
          opacity: Math.max(0, 1 - scrollY / 850)
        }}
      >
        <div className="school-badge hero-badge-anim">
          <span>🏛️</span>
          <span>{TRIPURA_BASIC_INFO.presentation}</span>
        </div>

        <h1 className="hero-main-title hero-title-anim">{TRIPURA_BASIC_INFO.name}</h1>
        
        <p className="hero-tagline hero-tagline-anim">"{TRIPURA_BASIC_INFO.subtitle}"</p>
        
        <p className="hero-description hero-desc-anim">
          {TRIPURA_BASIC_INFO.supportingText}
        </p>

        <div className="hero-actions hero-actions-anim">
          <button 
            className="btn-primary"
            onClick={() => scrollToSection('discover')}
          >
            <span>Explore Tripura</span>
            <span>↓</span>
          </button>
          
          <button 
            className="btn-secondary"
            onClick={() => scrollToSection('quiz')}
          >
            <span>Take the Quiz</span>
            <span>🎯</span>
          </button>
        </div>
      </div>

      {/* Subtle Museum Scroll Indicator */}
      <div 
        className="hero-scroll-indicator hero-scroll-anim"
        onClick={() => scrollToSection('discover')}
        role="button"
        tabIndex={0}
        aria-label="Scroll down to discover Tripura"
        style={{
          opacity: Math.max(0, 1 - scrollY / 250)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            scrollToSection('discover');
          }
        }}
      >
        <span className="scroll-indicator-text">SCROLL TO EXPLORE</span>
        <div className="scroll-indicator-mouse">
          <div className="scroll-indicator-wheel" />
        </div>
      </div>
    </section>
  );
}
