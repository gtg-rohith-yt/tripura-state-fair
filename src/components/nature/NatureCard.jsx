import React, { useState } from 'react';
import ImageReveal from '../common/ImageReveal';

export default function NatureCard({ destination, onSelect }) {
  const [imgError, setImgError] = useState(false);

  return (
    <article 
      className="nature-card" 
      style={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-gold)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.5rem',
        transition: 'all 0.35s ease'
      }}
    >
      {/* Image Banner Header */}
      <div 
        style={{
          width: '100%',
          height: '170px',
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
            {destination.icon}
          </div>
        )}

        <span className="card-tag" style={{ position: 'absolute', top: '10px', left: '10px', margin: 0, fontSize: '0.75rem', backdropFilter: 'blur(8px)', background: 'rgba(9,18,14,0.85)', zIndex: 5 }}>
          {destination.tag}
        </span>
      </div>

      <h3 style={{ color: 'var(--ivory-base)', fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.25rem' }}>
        {destination.title}
      </h3>

      {destination.altitude && (
        <p style={{ color: 'var(--gold-glow)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>
          📍 Elevation: {destination.altitude}
        </p>
      )}

      {destination.location && (
        <p style={{ color: 'var(--gold-glow)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.6rem' }}>
          📍 Location: {destination.location}
        </p>
      )}

      <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
        {destination.shortDesc}
      </p>

      <button 
        className="btn-primary"
        onClick={() => onSelect(destination)}
        style={{ width: '100%', justifyContent: 'center', fontSize: '0.95rem', padding: '0.75rem 1.25rem' }}
        aria-label={`Explore Nature details for ${destination.title}`}
      >
        <span>Explore Nature</span>
        <span>🌿</span>
      </button>
    </article>
  );
}
