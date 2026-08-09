import React, { useState } from 'react';
import ImageReveal from '../common/ImageReveal';

export default function HeritageCard({ destination, onExplore }) {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="heritage-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Image Banner Header */}
      <div 
        style={{
          width: '100%',
          height: '180px',
          borderRadius: 'var(--radius-md)',
          overflow: 'hidden',
          marginBottom: '1.25rem',
          position: 'relative',
          background: 'rgba(9, 18, 14, 0.8)',
          border: '1px solid var(--border-gold)'
        }}
      >
        {destination.image && !imgError ? (
          <ImageReveal
            src={destination.image}
            alt={destination.title}
            loading="lazy"
            onError={() => setImgError(true)}
            style={{ width: '100%', height: '100%', borderRadius: 'var(--radius-md)' }}
          />
        ) : (
          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3.5rem' }}>
            {destination.imagePlaceholder}
          </div>
        )}

        <span className="card-tag" style={{ position: 'absolute', top: '10px', left: '10px', margin: 0, fontSize: '0.75rem', backdropFilter: 'blur(8px)', background: 'rgba(9,18,14,0.85)', zIndex: 5 }}>
          {destination.category}
        </span>
      </div>

      <div className="heritage-card-header" style={{ marginBottom: '0.75rem' }}>
        <div>
          <h3 className="heritage-card-title">
            {destination.title}
          </h3>
          <span className="heritage-card-location">📍 {destination.location}</span>
        </div>
      </div>

      <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem' }}>
        {destination.shortDesc}
      </p>

      {/* Historical Significance Box */}
      <div 
        style={{
          background: 'rgba(9, 18, 14, 0.6)',
          border: '1px solid var(--border-gold)',
          borderRadius: 'var(--radius-md)',
          padding: '0.9rem 1.1rem',
          marginBottom: '1.5rem',
          marginTop: 'auto'
        }}
      >
        <span style={{ fontSize: '0.75rem', color: 'var(--gold-glow)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          HISTORICAL SIGNIFICANCE:
        </span>
        <p style={{ color: 'var(--ivory-base)', fontSize: '0.88rem', marginTop: '0.25rem', lineHeight: 1.5 }}>
          {destination.significance}
        </p>
      </div>

      <button 
        className="btn-primary"
        onClick={() => onExplore(destination.id)}
        style={{ width: '100%', justifyContent: 'center', fontSize: '0.95rem', padding: '0.75rem 1.25rem' }}
        aria-label={`Explore ${destination.title}`}
      >
        <span>Explore Details</span>
        <span>→</span>
      </button>
    </article>
  );
}
