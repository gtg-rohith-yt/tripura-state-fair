import React, { useState } from 'react';
import ImageReveal from '../common/ImageReveal';

export default function GalleryCard({ item, onClick }) {
  const [imgError, setImgError] = useState(false);

  return (
    <article 
      className="gallery-card"
      onClick={onClick}
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-gold)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        cursor: 'pointer',
        position: 'relative',
        transition: 'all 0.35s ease',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.4)'
      }}
      role="button"
      tabIndex={0}
      aria-label={`View ${item.title} image in fullscreen lightbox`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}
    >
      {/* Image or Clean Fallback Banner */}
      <div 
        style={{
          height: '240px',
          width: '100%',
          position: 'relative',
          background: 'linear-gradient(135deg, rgba(6, 78, 59, 0.8), rgba(9, 18, 14, 0.95))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}
      >
        {!imgError ? (
          <ImageReveal 
            src={item.src} 
            alt={item.alt} 
            loading="lazy"
            onError={() => setImgError(true)}
            style={{ width: '100%', height: '100%' }}
          />
        ) : (
          /* Clean Fallback Illustration */
          <div style={{ textAlign: 'center', padding: '1.5rem' }}>
            <span style={{ fontSize: '4rem', display: 'block', marginBottom: '0.5rem' }} aria-hidden="true">
              {item.icon}
            </span>
            <span style={{ color: 'var(--gold-glow)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.05em' }}>
              TRIPURA EXHIBIT
            </span>
          </div>
        )}

        <span 
          className="card-tag" 
          style={{ 
            position: 'absolute', 
            top: '0.75rem', 
            left: '0.75rem',
            margin: 0,
            boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
            backdropFilter: 'blur(8px)',
            background: 'rgba(9, 18, 14, 0.85)',
            zIndex: 5
          }}
        >
          {item.category.toUpperCase()}
        </span>
      </div>

      {/* Card Info Details */}
      <div style={{ padding: '1.25rem' }}>
        <h4 style={{ color: 'var(--ivory-base)', fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.4rem' }}>
          {item.title}
        </h4>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {item.description}
        </p>
      </div>
    </article>
  );
}
