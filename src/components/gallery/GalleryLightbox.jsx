import React, { useEffect, useState, useCallback, useRef } from 'react';

export default function GalleryLightbox({ item, itemsList, currentIndex, onClose, onNext, onPrev }) {
  const [imgError, setImgError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const closeBtnRef = useRef(null);

  // Trigger opening transition & lock body scroll on mount
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => setIsOpen(true), 15);

    if (closeBtnRef.current) {
      closeBtnRef.current.focus();
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

  // Reset image error state when active item changes
  useEffect(() => {
    setImgError(false);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      } else if (e.key === 'ArrowRight') {
        onNext();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, handleClose, onNext, onPrev]);

  if (!item) return null;

  return (
    <div 
      className={`modal-backdrop ${isOpen && !isClosing ? 'modal-open' : ''} ${isClosing ? 'modal-closing' : ''}`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
    >
      <div 
        className="modal-content lightbox-modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'linear-gradient(135deg, rgba(6, 78, 59, 0.95), rgba(9, 18, 14, 0.98))',
          border: '2px solid var(--gold-glow)',
          borderRadius: 'var(--radius-xl)',
          maxWidth: '900px',
          width: '100%',
          maxHeight: '92vh',
          overflowY: 'auto',
          padding: '2.5rem 2rem 2rem',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9)',
          position: 'relative'
        }}
      >
        {/* Top Close Button X */}
        <button
          ref={closeBtnRef}
          onClick={handleClose}
          aria-label="Close lightbox"
          className="modal-close-btn"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'rgba(136, 19, 55, 0.6)',
            border: '1px solid var(--border-gold)',
            color: 'var(--ivory-base)',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '1.3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10
          }}
        >
          ✕
        </button>

        {/* Category Badge & Counter */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span className="card-tag" style={{ margin: 0, fontSize: '0.8rem' }}>
            {item.category.toUpperCase()} EXHIBIT
          </span>
          <span style={{ color: 'var(--gold-glow)', fontWeight: 700, fontSize: '0.9rem' }}>
            Exhibit {currentIndex + 1} of {itemsList.length}
          </span>
        </div>

        {/* Lightbox Main Image / Fallback Viewport with Smooth Crossfade Transition */}
        <div 
          style={{
            minHeight: '320px',
            maxHeight: '480px',
            width: '100%',
            background: 'rgba(9, 18, 14, 0.85)',
            border: '1px solid var(--border-gold)',
            borderRadius: 'var(--radius-lg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            marginBottom: '1.5rem',
            position: 'relative'
          }}
        >
          {!imgError ? (
            <img 
              key={item.id}
              src={item.src} 
              alt={item.alt}
              onError={() => setImgError(true)}
              className="lightbox-image-crossfade"
              style={{
                maxWidth: '100%',
                maxHeight: '480px',
                objectFit: 'contain'
              }}
            />
          ) : (
            <div style={{ textAlign: 'center', padding: '3rem' }}>
              <span style={{ fontSize: '5rem', display: 'block', marginBottom: '1rem' }} aria-hidden="true">
                {item.icon}
              </span>
              <h4 style={{ color: 'var(--gold-glow)', fontSize: '1.4rem', fontWeight: 800 }}>
                {item.title}
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '0.5rem' }}>
                Centaur House Exhibition Visual
              </p>
            </div>
          )}
        </div>

        {/* Title & Description */}
        <h3 id="lightbox-title" style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--ivory-base)', marginBottom: '0.5rem' }}>
          {item.title}
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
          {item.description}
        </p>

        {/* Navigation Action Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px dashed var(--border-gold)', paddingTop: '1.25rem' }}>
          <button 
            className="btn-secondary"
            onClick={onPrev}
            aria-label="Previous exhibit image"
            style={{ padding: '0.65rem 1.4rem', fontSize: '0.95rem' }}
          >
            ← Previous
          </button>

          <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }} className="desktop-hint">
            ⌨️ Use ← / → Arrow Keys
          </span>

          <button 
            className="btn-primary"
            onClick={onNext}
            aria-label="Next exhibit image"
            style={{ padding: '0.65rem 1.6rem', fontSize: '0.95rem' }}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
