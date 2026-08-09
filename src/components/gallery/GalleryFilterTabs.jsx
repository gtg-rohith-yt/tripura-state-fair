import React from 'react';
import { GALLERY_CATEGORIES } from '../../data/galleryData';

export default function GalleryFilterTabs({ activeCategory, onSelectCategory }) {
  return (
    <div 
      className="gallery-tabs-container"
      role="tablist"
      aria-label="Gallery Category Filters"
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '0.75rem',
        flexWrap: 'wrap',
        marginBottom: '2.5rem'
      }}
    >
      {GALLERY_CATEGORIES.map((cat) => {
        const isActive = activeCategory === cat.id;
        return (
          <button
            key={cat.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelectCategory(cat.id)}
            style={{
              background: isActive ? 'linear-gradient(135deg, var(--gold-warm), var(--gold-bright))' : 'rgba(9, 18, 14, 0.8)',
              color: isActive ? '#000' : 'var(--text-muted)',
              border: `1px solid ${isActive ? 'var(--gold-glow)' : 'var(--border-gold)'}`,
              borderRadius: '30px',
              padding: '0.65rem 1.4rem',
              fontWeight: 700,
              fontSize: '0.88rem',
              letterSpacing: '0.05em',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: isActive ? '0 6px 20px rgba(245, 158, 11, 0.4)' : 'none'
            }}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}
