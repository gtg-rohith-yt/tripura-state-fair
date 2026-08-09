import React, { useState } from 'react';
import ImageReveal from '../common/ImageReveal';

export default function FoodCard({ dish }) {
  const [imgError, setImgError] = useState(false);

  return (
    <article 
      className="info-card food-card" 
      style={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-gold)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.5rem',
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {/* Image Banner Header */}
      {dish.image && (
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
              src={dish.image}
              alt={dish.name}
              loading="lazy"
              onError={() => setImgError(true)}
              style={{ width: '100%', height: '100%', borderRadius: 'var(--radius-md)' }}
            />
          ) : (
            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>
              {dish.icon}
            </div>
          )}

          <div style={{ position: 'absolute', top: '10px', right: '10px', display: 'flex', gap: '0.4rem', zIndex: 5 }}>
            {dish.isVegetarian ? (
              <span className="card-tag" style={{ background: 'rgba(5, 150, 105, 0.85)', color: '#fff', border: '1px solid #059669', backdropFilter: 'blur(8px)', margin: 0 }}>
                🌱 VEG
              </span>
            ) : (
              <span className="card-tag" style={{ background: 'rgba(136, 19, 55, 0.85)', color: '#fff', border: '1px solid var(--gold-glow)', backdropFilter: 'blur(8px)', margin: 0 }}>
                🐟 TRADITIONAL
              </span>
            )}
          </div>
        </div>
      )}

      {!dish.image && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
          <span style={{ fontSize: '2.5rem' }} aria-hidden="true">
            {dish.icon}
          </span>
          <div style={{ display: 'flex', gap: '0.4rem' }}>
            {dish.isVegetarian ? (
              <span className="card-tag" style={{ background: 'rgba(5, 150, 105, 0.25)', color: '#34d399', border: '1px solid #059669' }}>
                🌱 VEG
              </span>
            ) : (
              <span className="card-tag" style={{ background: 'rgba(217, 119, 6, 0.2)', color: 'var(--gold-glow)', border: '1px solid var(--border-gold)' }}>
                🐟 TRADITIONAL
              </span>
            )}
          </div>
        </div>
      )}

      <h3 style={{ color: 'var(--ivory-base)', fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.4rem' }}>
        {dish.name}
      </h3>

      <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
        {dish.shortDesc}
      </p>

      {/* Cultural Context Box */}
      <div 
        style={{
          background: 'rgba(9, 18, 14, 0.7)',
          border: '1px solid var(--border-gold)',
          borderRadius: 'var(--radius-md)',
          padding: '1rem 1.15rem',
          marginBottom: '1.25rem',
          marginTop: 'auto'
        }}
      >
        <span style={{ fontSize: '0.75rem', color: 'var(--gold-glow)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          CULTURAL CONTEXT:
        </span>
        <p style={{ color: 'var(--ivory-base)', fontSize: '0.88rem', marginTop: '0.25rem', lineHeight: 1.5 }}>
          {dish.culturalContext}
        </p>
      </div>

      {/* Key Ingredients List */}
      {dish.ingredients && (
        <div style={{ background: 'rgba(9, 18, 14, 0.5)', padding: '0.9rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>
            🛒 KEY INGREDIENTS:
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.4rem' }}>
            {dish.ingredients.map((ing, idx) => (
              <span 
                key={idx}
                style={{
                  background: 'rgba(245, 158, 11, 0.12)',
                  color: 'var(--gold-glow)',
                  fontSize: '0.78rem',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(245, 158, 11, 0.25)'
                }}
              >
                {ing}
              </span>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
