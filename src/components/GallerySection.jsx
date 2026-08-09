import React, { useState } from 'react';
import GalleryFilterTabs from './gallery/GalleryFilterTabs';
import GalleryCard from './gallery/GalleryCard';
import GalleryLightbox from './gallery/GalleryLightbox';
import ScrollReveal from './common/ScrollReveal';
import { GALLERY_ITEMS } from '../data/galleryData';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const activeItem = activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  const handleNext = () => {
    if (activeLightboxIndex !== null) {
      const nextIdx = (activeLightboxIndex + 1) % filteredItems.length;
      setActiveLightboxIndex(nextIdx);
    }
  };

  const handlePrev = () => {
    if (activeLightboxIndex !== null) {
      const prevIdx = (activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length;
      setActiveLightboxIndex(prevIdx);
    }
  };

  return (
    <section className="section-wrapper" id="gallery" aria-labelledby="gallery-heading">
      <ScrollReveal animation="fade-up" delay={0.1}>
        <div className="section-header">
          <span className="section-kicker">Visual Exhibition & Photographic Gallery</span>
          <h2 className="section-title" id="gallery-heading">Tripura Exhibition Gallery</h2>
          <p className="section-subtitle">
            Explore visual landmarks across royal heritage palaces, mountain sanctuaries, indigenous folk arts, and traditional cuisine.
          </p>
        </div>
      </ScrollReveal>

      {/* Category Filter Tabs */}
      <GalleryFilterTabs 
        activeCategory={activeCategory}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          setActiveLightboxIndex(null); // Reset lightbox on tab change
        }}
      />

      {/* Responsive Gallery Grid with Keyed Filter Transition */}
      <div 
        key={activeCategory}
        className="cards-grid gallery-grid-enter" 
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}
      >
        {filteredItems.map((item, idx) => (
          <ScrollReveal key={item.id} animation="fade-up" delay={idx * 0.06}>
            <GalleryCard 
              item={item} 
              onClick={() => setActiveLightboxIndex(idx)} 
            />
          </ScrollReveal>
        ))}
      </div>

      {/* Fullscreen Interactive Lightbox */}
      {activeItem && (
        <GalleryLightbox 
          item={activeItem}
          itemsList={filteredItems}
          currentIndex={activeLightboxIndex}
          onClose={() => setActiveLightboxIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </section>
  );
}
