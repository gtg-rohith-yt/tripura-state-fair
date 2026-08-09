import React, { useState } from 'react';
import { NEERMAHAL_FEATURED_DATA } from '../../data/heritageData';
import ImageReveal from '../common/ImageReveal';
import { useIntersectionObserver } from '../../utils/useIntersectionObserver';

export default function NeermahalFeatured({ onExplore }) {
  const data = NEERMAHAL_FEATURED_DATA;
  const [imgError, setImgError] = useState(false);
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.15, triggerOnce: true });

  return (
    <div 
      ref={sectionRef} 
      className={`neermahal-featured-wrapper ${isVisible ? 'neermahal-revealed' : ''}`} 
      style={{ margin: '3.5rem 0' }}
    >
      {/* Water Effect Section Box */}
      <div 
        style={{
          background: 'linear-gradient(135deg, rgba(2, 44, 34, 0.95), rgba(6, 78, 59, 0.85), rgba(15, 23, 42, 0.95))',
          border: '2px solid var(--gold-glow)',
          borderRadius: 'var(--radius-xl)',
          padding: '3rem 2.5rem',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6), inset 0 0 30px rgba(5, 150, 105, 0.2)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Subtle Gold Light Sweep Overlay (Triggers Once on Entrance) */}
        <div className="gold-sweep-overlay" aria-hidden="true" />

        {/* SVG Animated Water Ripple Effect Background */}
        <svg 
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            width: '100%',
            height: '120px',
            opacity: 0.18,
            pointerEvents: 'none'
          }}
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path 
            className="water-wave-1"
            d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z" 
            fill="var(--gold-glow)"
          />
          <path 
            className="water-wave-2"
            d="M0,20 C200,100 450,-10 700,60 C850,110 1050,30 1200,70 L1200,120 L0,120 Z" 
            fill="var(--green-accent)"
          />
        </svg>

        {/* Floating Water Glow Dust Particles */}
        <div className="floating-particle floating-particle-1" style={{ top: '10%', right: '8%', width: '14px', height: '14px', background: 'var(--gold-glow)' }} />
        <div className="floating-particle floating-particle-2" style={{ top: '75%', left: '5%', width: '18px', height: '18px', background: 'var(--green-accent)' }} />

        {/* Content Header & Badge */}
        <div style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
            <span className="featured-badge" style={{ fontSize: '0.85rem', padding: '0.4rem 1rem' }}>
              👑 FEATURED ROYAL DESTINATION
            </span>
            <span style={{ color: 'var(--gold-glow)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.05em' }}>
              🌊 {data.lakeName}
            </span>
          </div>

          <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: 900, color: 'var(--ivory-base)', marginBottom: '0.5rem', textShadow: '0 4px 15px rgba(0, 0, 0, 0.6)' }}>
            {data.title}
          </h2>
          <p style={{ fontSize: '1.3rem', color: 'var(--gold-glow)', fontWeight: 600, fontStyle: 'italic', marginBottom: '1.5rem' }}>
            "{data.subtitle}"
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', margin: '2rem 0', alignItems: 'center' }}>
            {/* Left: Featured Neermahal Photo Banner with Gentle 1.02 to 1.05 Scale */}
            <div 
              className="neermahal-image-container"
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '2px solid var(--gold-glow)',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.6)',
                aspectRatio: '16 / 10'
              }}
            >
              {!imgError ? (
                <ImageReveal
                  src={data.image}
                  alt="Royal Neermahal Water Palace floating in Rudrasagar Lake, Tripura"
                  loading="lazy"
                  onError={() => setImgError(true)}
                  style={{ width: '100%', height: '100%', borderRadius: 'var(--radius-lg)' }}
                />
              ) : (
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(9,18,14,0.8)', fontSize: '4rem' }}>
                  🏰
                </div>
              )}
            </div>

            {/* Right: Overview & Royal Patronage */}
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                {data.fullDesc}
              </p>
              <div style={{ background: 'rgba(9, 18, 14, 0.7)', padding: '1.25rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-gold)' }}>
                <p style={{ color: 'var(--ivory-base)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.4rem' }}>
                  🏛️ <strong>Royal Patron:</strong> {data.ruler} ({data.period})
                </p>
                <p style={{ color: 'var(--gold-glow)', fontWeight: 600, fontSize: '0.95rem' }}>
                  🎨 <strong>Architectural Style:</strong> {data.architecture}
                </p>
              </div>
            </div>
          </div>

          {/* Simple & Accurate Architectural Breakdown */}
          <div style={{ background: 'rgba(9, 18, 14, 0.75)', padding: '1.75rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)', margin: '1.5rem 0' }}>
            <h4 style={{ color: 'var(--gold-glow)', fontSize: '1.15rem', fontWeight: 800, marginBottom: '1rem' }}>
              ✨ Key Architectural Character:
            </h4>
            <ul className="featured-highlights-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
              {data.architecturalCharacter.map((fact, idx) => (
                <li key={idx} style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {fact}
                </li>
              ))}
            </ul>
          </div>

          {/* Action CTA */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.25rem', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px dashed var(--border-gold)' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              📍 <strong>Location:</strong> {data.location}
            </p>
            <button 
              className="btn-primary"
              onClick={() => onExplore(data.id)}
              style={{ fontSize: '1.05rem', padding: '0.9rem 2.2rem' }}
            >
              <span>Explore Neermahal Palace</span>
              <span>🔍</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
