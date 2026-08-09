import React, { useState, useEffect, useRef, useCallback } from 'react';
import ImageReveal from '../common/ImageReveal';

export default function HeritageModal({ destination, onClose }) {
  const closeButtonRef = useRef(null);
  const modalRef = useRef(null);
  const [imgError, setImgError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Trigger opening animation on mount & lock body scroll
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => setIsOpen(true), 15);

    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }

    return () => {
      document.body.style.overflow = originalStyle;
      clearTimeout(timer);
    };
  }, []);

  const handleClose = useCallback(() => {
    if (isClosing) return;
    setIsClosing(true);
    setIsOpen(false);
    setTimeout(() => {
      onClose();
    }, 300); // Match CSS transition duration
  }, [isClosing, onClose]);

  // Keyboard navigation listener (ESC to close)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleClose]);

  if (!destination) return null;

  const details = destination.details || {};

  return (
    <div 
      className={`modal-backdrop ${isOpen && !isClosing ? 'modal-open' : ''} ${isClosing ? 'modal-closing' : ''}`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        ref={modalRef}
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal content
      >
        {/* Close Button X with Hover Micro-Interaction */}
        <button
          ref={closeButtonRef}
          onClick={handleClose}
          aria-label="Close modal"
          className="modal-close-btn"
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
            justifyContent: 'center',
            zIndex: 10
          }}
        >
          ✕
        </button>

        {/* Header Badge & Title */}
        <span className="featured-badge" style={{ marginBottom: '0.75rem' }}>
          {destination.category}
        </span>

        <h2 id="modal-title" style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--ivory-base)', marginBottom: '0.4rem' }}>
          {destination.title}
        </h2>

        <p style={{ color: 'var(--gold-glow)', fontWeight: 600, fontSize: '1rem', marginBottom: '1.5rem' }}>
          📍 Location: {destination.location}
        </p>

        {/* Large Local Image Display with ImageReveal */}
        <div 
          style={{
            background: 'rgba(9, 18, 14, 0.8)',
            border: '1px solid var(--border-gold)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            marginBottom: '1.75rem',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
            maxHeight: '350px'
          }}
        >
          {destination.image && !imgError ? (
            <ImageReveal
              src={destination.image}
              alt={destination.title}
              loading="lazy"
              onError={() => setImgError(true)}
              style={{ width: '100%', maxHeight: '350px', borderRadius: 'var(--radius-lg)' }}
            />
          ) : (
            <div style={{ padding: '2.5rem', textAlign: 'center', fontSize: '4.5rem' }}>
              {destination.imagePlaceholder}
            </div>
          )}
        </div>

        {/* Key Info Meta Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
          {details.period && (
            <div style={{ background: 'rgba(9, 18, 14, 0.6)', padding: '0.9rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Historical Period:</span>
              <p style={{ color: 'var(--gold-glow)', fontWeight: 700, fontSize: '0.95rem', marginTop: '0.2rem' }}>{details.period}</p>
            </div>
          )}
          {details.builtBy && (
            <div style={{ background: 'rgba(9, 18, 14, 0.6)', padding: '0.9rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Built By / Era:</span>
              <p style={{ color: 'var(--gold-glow)', fontWeight: 700, fontSize: '0.95rem', marginTop: '0.2rem' }}>{details.builtBy}</p>
            </div>
          )}
          {details.architecturalStyle && (
            <div style={{ background: 'rgba(9, 18, 14, 0.6)', padding: '0.9rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Architecture:</span>
              <p style={{ color: 'var(--gold-glow)', fontWeight: 700, fontSize: '0.95rem', marginTop: '0.2rem' }}>{details.architecturalStyle}</p>
            </div>
          )}
        </div>

        {/* Full Story & Historical Significance */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h4 style={{ color: 'var(--ivory-base)', fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            📖 Historical Significance & Narrative:
          </h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', lineHeight: 1.8 }}>
            {details.fullStory || destination.shortDesc}
          </p>
        </div>

        {/* Architectural Highlights */}
        {details.highlights && (
          <div style={{ background: 'rgba(9, 18, 14, 0.6)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-gold)', marginBottom: '2rem' }}>
            <h4 style={{ color: 'var(--gold-glow)', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem' }}>
              ✨ Key Highlights & Trivia:
            </h4>
            <ul className="featured-highlights-list">
              {details.highlights.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Bottom Close Action */}
        <div style={{ textAlign: 'right' }}>
          <button
            className="btn-secondary"
            onClick={handleClose}
            style={{ padding: '0.7rem 1.75rem', fontSize: '0.95rem' }}
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
