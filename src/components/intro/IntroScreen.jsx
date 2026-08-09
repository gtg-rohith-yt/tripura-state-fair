import React, { useState, useEffect } from 'react';

export default function IntroScreen({ onEnter }) {
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleComplete = () => {
    setIsFadingOut(true);
    // Store session flag so intro doesn't repeat in the same session
    sessionStorage.setItem('tripura_intro_seen', 'true');
    setTimeout(() => {
      onEnter();
    }, 600); // 600ms smooth fade-out transition
  };

  useEffect(() => {
    // Auto-enable keyboard Enter key to start experience
    const handleKeyDown = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        setIsFadingOut(true);
        sessionStorage.setItem('tripura_intro_seen', 'true');
        setTimeout(() => {
          onEnter();
        }, 600);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onEnter]);

  return (
    <div 
      className={`intro-screen-overlay ${isFadingOut ? 'fade-out' : ''}`}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#020806',
        backgroundImage: `
          radial-gradient(circle at 50% 30%, rgba(6, 78, 59, 0.5) 0%, transparent 60%),
          radial-gradient(circle at 50% 80%, rgba(136, 19, 55, 0.4) 0%, transparent 60%)
        `,
        zIndex: 10000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center',
        color: 'var(--ivory-base)',
        transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        opacity: isFadingOut ? 0 : 1,
        pointerEvents: isFadingOut ? 'none' : 'auto'
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Tripura Museum Exhibition Entrance"
    >
      {/* Tripura Traditional Pattern Background Overlay (Step 2: Appears first) */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.08,
          backgroundImage: 'radial-gradient(var(--gold-glow) 1.5px, transparent 1.5px)',
          backgroundSize: '32px 32px',
          animation: 'patternFade 1.2s ease-out forwards',
          pointerEvents: 'none'
        }}
      />

      {/* Museum Exhibition Entrance Plaque */}
      <div 
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '850px',
          width: '100%',
          background: 'linear-gradient(135deg, rgba(6, 78, 59, 0.75), rgba(9, 18, 14, 0.95))',
          border: '2px solid var(--gold-glow)',
          borderRadius: 'var(--radius-xl)',
          padding: '4rem 3rem',
          boxShadow: '0 30px 70px rgba(0, 0, 0, 0.9), inset 0 0 40px rgba(245, 158, 11, 0.15)',
          animation: 'plaqueScale 1.4s ease-out forwards'
        }}
      >
        {/* Step 1: School Attribution */}
        <div 
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.5rem 1.4rem',
            borderRadius: '30px',
            background: 'linear-gradient(135deg, rgba(136, 19, 55, 0.7), rgba(6, 78, 59, 0.7))',
            border: '1px solid var(--gold-glow)',
            color: 'var(--gold-glow)',
            fontSize: '0.88rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '1.75rem',
            animation: 'fadeInText 0.8s ease 0.4s forwards',
            opacity: 0
          }}
        >
          <span>🏛️</span>
          <span>CENTAUR HOUSE PRESENTS</span>
        </div>

        {/* Step 3: Title Fades In */}
        <h1 
          style={{
            fontSize: 'clamp(3.5rem, 9vw, 6rem)',
            fontWeight: 900,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            background: 'linear-gradient(135deg, var(--ivory-base) 20%, var(--gold-glow) 60%, #fff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: '0 0 0.5rem 0',
            textShadow: '0 10px 30px rgba(0, 0, 0, 0.6)',
            animation: 'fadeInText 1s ease 0.8s forwards',
            opacity: 0
          }}
        >
          TRIPURA
        </h1>

        {/* Subtitle Pillar Categories */}
        <div 
          style={{
            fontSize: 'clamp(1rem, 2.2vw, 1.3rem)',
            fontWeight: 800,
            color: 'var(--gold-glow)',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
            animation: 'fadeInText 0.9s ease 1.2s forwards',
            opacity: 0
          }}
        >
          HERITAGE • CULTURE • NATURE
        </div>

        {/* Step 4: Subtitle Quote Appears */}
        <p 
          style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
            color: 'var(--text-muted)',
            fontStyle: 'italic',
            lineHeight: 1.7,
            maxWidth: '650px',
            margin: '0 auto 2.5rem',
            animation: 'fadeInText 0.9s ease 1.6s forwards',
            opacity: 0
          }}
        >
          "Explore the Land of Royal Heritage and Natural Beauty"
        </p>

        {/* Step 5: Enter Experience Button Appears */}
        <div 
          style={{
            animation: 'fadeInText 1s ease 2s forwards',
            opacity: 0
          }}
        >
          <button
            className="btn-primary"
            onClick={handleComplete}
            style={{
              fontSize: '1.15rem',
              padding: '1.05rem 2.8rem',
              borderRadius: 'var(--radius-lg)',
              boxShadow: '0 12px 30px rgba(245, 158, 11, 0.5)'
            }}
          >
            <span>ENTER EXPERIENCE</span>
            <span>→</span>
          </button>
        </div>
      </div>

      {/* Accessibility Skip Intro Link */}
      <button
        onClick={handleComplete}
        style={{
          position: 'absolute',
          bottom: '2rem',
          background: 'transparent',
          border: 'none',
          color: 'var(--text-muted)',
          fontSize: '0.9rem',
          fontWeight: 600,
          cursor: 'pointer',
          textDecoration: 'underline',
          opacity: 0.8,
          transition: 'color 0.2s ease',
          zIndex: 20
        }}
        aria-label="Skip introduction and proceed directly to website"
      >
        Skip Intro →
      </button>

      {/* Embedded Animation CSS Rules */}
      <style>{`
        @keyframes patternFade {
          from { opacity: 0; transform: scale(1.05); }
          to { opacity: 0.08; transform: scale(1); }
        }

        @keyframes plaqueScale {
          from { opacity: 0; transform: translateY(20px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes fadeInText {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
