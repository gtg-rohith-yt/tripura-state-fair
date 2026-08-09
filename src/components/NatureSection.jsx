import React, { useState } from 'react';
import NatureStats from './nature/NatureStats';
import NatureCard from './nature/NatureCard';
import NatureDetailModal from './nature/NatureDetailModal';
import ScrollReveal from './common/ScrollReveal';
import ImageReveal from './common/ImageReveal';
import { NATURE_DESTINATIONS, TRIPURA_WILDLIFE } from '../data/natureData';

export default function NatureSection() {
  const [selectedDestination, setSelectedDestination] = useState(null);

  return (
    <section className="section-wrapper nature-section-wrapper" id="nature" aria-labelledby="nature-heading">
      <ScrollReveal animation="fade-up" delay={0.1}>
        <div className="section-header">
          <span className="section-kicker">Sanctuaries, Lakes, Peaks & Wildlife</span>
          <h2 className="section-title" id="nature-heading">Nature & Wildlife of Tripura</h2>
          <p className="section-subtitle">
            Discover pristine rainforests, 48 emerald lake islands, RAMSAR wetlands, and endangered primates.
          </p>
        </div>
      </ScrollReveal>

      {/* 1. Nature Statistics Bar with Viewport-Triggered Counter */}
      <NatureStats />

      {/* 2. Primary Nature Destinations Grid */}
      <div style={{ marginBottom: '4rem' }}>
        <ScrollReveal animation="fade-up" delay={0.1}>
          <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--ivory-base)', marginBottom: '1.5rem', textAlign: 'center' }}>
            🏞️ Iconic Nature Sanctuaries & Lakes
          </h3>
        </ScrollReveal>

        <div className="nature-grid">
          {NATURE_DESTINATIONS.map((destination, idx) => (
            <ScrollReveal key={destination.id} animation="fade-up" delay={idx * 0.08}>
              <NatureCard 
                destination={destination} 
                onSelect={setSelectedDestination} 
              />
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* 3. Wildlife & Fauna Spotlight Grid */}
      <div style={{ marginTop: '4rem' }}>
        <ScrollReveal animation="fade-up" delay={0.1}>
          <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--ivory-base)', marginBottom: '1.5rem', textAlign: 'center' }}>
            🐾 Endangered Fauna & State Emblems
          </h3>
        </ScrollReveal>

        <div className="cards-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {TRIPURA_WILDLIFE.map((animal, idx) => (
            <ScrollReveal key={animal.id} animation="fade-up" delay={idx * 0.08}>
              <article className="info-card wildlife-card">
                {animal.image ? (
                  <div style={{ marginBottom: '1rem', borderRadius: 'var(--radius-md)', overflow: 'hidden', maxHeight: '180px' }}>
                    <ImageReveal
                      src={animal.image}
                      alt={animal.name}
                      loading="lazy"
                      style={{ width: '100%', height: '180px', objectFit: 'cover' }}
                    />
                  </div>
                ) : (
                  <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }} aria-hidden="true">
                    {animal.icon}
                  </div>
                )}
                <span className="card-tag">{animal.tag}</span>
                <h4 style={{ color: 'var(--ivory-base)', fontSize: '1.3rem', fontWeight: 800, margin: '0.2rem 0' }}>
                  {animal.name}
                </h4>
                <p style={{ color: 'var(--gold-glow)', fontSize: '0.85rem', fontStyle: 'italic', marginBottom: '0.6rem' }}>
                  {animal.scientificName}
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  {animal.desc}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* 4. Interactive Nature Inspector Modal */}
      {selectedDestination && (
        <NatureDetailModal 
          destination={selectedDestination} 
          onClose={() => setSelectedDestination(null)} 
        />
      )}
    </section>
  );
}
