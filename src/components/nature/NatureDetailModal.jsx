import React, { useEffect, useRef } from 'react';

export default function NatureDetailModal({ destination, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!destination) return null;

  return (
    <div 
      className="modal-backdrop"
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(5, 11, 9, 0.85)',
        backdropFilter: 'blur(12px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        animation: 'fadeIn 0.3s ease'
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="nature-modal-title"
    >
      <div 
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'linear-gradient(135deg, rgba(6, 78, 59, 0.95), rgba(9, 18, 14, 0.98))',
          border: '2px solid var(--gold-glow)',
          borderRadius: 'var(--radius-xl)',
          maxWidth: '750px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2.5rem',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)',
          position: 'relative'
        }}
      >
        {/* Close Button X */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="Close nature modal"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'rgba(136, 19, 55, 0.6)',
            border: '1px solid var(--border-gold)',
            color: 'var(--ivory-base)',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '1.2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          ✕
        </button>

        <span className="card-tag" style={{ marginBottom: '0.75rem' }}>
          {destination.tag}
        </span>

        <h2 id="nature-modal-title" style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--ivory-base)', marginBottom: '0.4rem' }}>
          {destination.icon} {destination.title}
        </h2>

        <p style={{ color: 'var(--gold-glow)', fontWeight: 600, fontSize: '1rem', marginBottom: '1.5rem' }}>
          📍 Location: {destination.location} {destination.altitude ? `• Elevation: ${destination.altitude}` : ''}
        </p>

        {/* Large Nature Graphic Display */}
        <div 
          style={{
            background: 'rgba(9, 18, 14, 0.8)',
            border: '1px solid var(--border-gold)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            textAlign: 'center',
            fontSize: '4.5rem',
            marginBottom: '1.75rem',
            boxShadow: 'inset 0 0 20px rgba(5, 150, 105, 0.2)'
          }}
        >
          {destination.icon}
        </div>

        {/* Overview & Key Meta */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h4 style={{ color: 'var(--ivory-base)', fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            🌲 Ecological Description:
          </h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', lineHeight: 1.8 }}>
            {destination.fullDesc || destination.shortDesc}
          </p>
        </div>

        {/* Key Wildlife & Best Season Box */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1.75rem' }}>
          <div style={{ background: 'rgba(9, 18, 14, 0.65)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--gold-glow)', fontWeight: 700, textTransform: 'uppercase' }}>Key Fauna & Species:</span>
            <p style={{ color: 'var(--ivory-base)', fontWeight: 700, fontSize: '0.95rem', marginTop: '0.25rem' }}>
              🐾 {destination.keyFauna}
            </p>
          </div>

          <div style={{ background: 'rgba(9, 18, 14, 0.65)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--gold-glow)', fontWeight: 700, textTransform: 'uppercase' }}>Best Visiting Season:</span>
            <p style={{ color: 'var(--ivory-base)', fontWeight: 700, fontSize: '0.95rem', marginTop: '0.25rem' }}>
              📅 {destination.bestSeason}
            </p>
          </div>
        </div>

        {/* Conservation & Highlights */}
        {destination.highlights && (
          <div style={{ background: 'rgba(9, 18, 14, 0.7)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-gold)', marginBottom: '2rem' }}>
            <h4 style={{ color: 'var(--gold-glow)', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem' }}>
              ✨ Ecological Highlights & Sanctuary Notes:
            </h4>
            <ul className="featured-highlights-list">
              {destination.highlights.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        <div style={{ textAlign: 'right' }}>
          <button 
            className="btn-secondary"
            onClick={onClose}
            style={{ padding: '0.7rem 1.75rem', fontSize: '0.95rem' }}
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
}
