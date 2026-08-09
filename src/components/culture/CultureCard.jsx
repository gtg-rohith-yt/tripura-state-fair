import React, { useState } from 'react';
import ImageReveal from '../common/ImageReveal';

export default function CultureCard({ item }) {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="culture-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Image Banner Header */}
      {item.image && (
        <div 
          style={{
            width: '100%',
            height: '160px',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            marginBottom: '1.25rem',
            position: 'relative',
            background: 'rgba(9, 18, 14, 0.8)',
            border: '1px solid var(--border-gold)'
          }}
        >
          {!imgError ? (
            <ImageReveal
              src={item.image}
              alt={item.title}
              loading="lazy"
              onError={() => setImgError(true)}
              style={{ width: '100%', height: '100%', borderRadius: 'var(--radius-md)' }}
            />
          ) : (
            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>
              {item.icon}
            </div>
          )}

          <span className="card-tag" style={{ position: 'absolute', top: '10px', left: '10px', margin: 0, fontSize: '0.75rem', backdropFilter: 'blur(8px)', background: 'rgba(9,18,14,0.85)', zIndex: 5 }}>
            {item.category.toUpperCase().replace('-', ' & ')}
          </span>
        </div>
      )}

      {!item.image && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
          <span style={{ fontSize: '2.5rem' }} aria-hidden="true">
            {item.icon}
          </span>
          <span className="card-tag" style={{ margin: 0 }}>
            {item.category.toUpperCase().replace('-', ' & ')}
          </span>
        </div>
      )}

      <h3 style={{ color: 'var(--ivory-base)', fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.5rem' }}>
        {item.title}
      </h3>

      <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
        {item.shortExplanation}
      </p>

      {/* Cultural Importance Highlight Box */}
      <div 
        style={{
          background: 'rgba(9, 18, 14, 0.65)',
          border: '1px solid var(--border-gold)',
          borderRadius: 'var(--radius-md)',
          padding: '1rem 1.15rem',
          marginTop: 'auto'
        }}
      >
        <span style={{ fontSize: '0.75rem', color: 'var(--gold-glow)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          CULTURAL IMPORTANCE:
        </span>
        <p style={{ color: 'var(--ivory-base)', fontSize: '0.88rem', marginTop: '0.25rem', lineHeight: 1.5 }}>
          {item.culturalImportance}
        </p>
      </div>
    </article>
  );
}
