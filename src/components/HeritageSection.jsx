import React, { useState } from 'react';
import NeermahalFeatured from './heritage/NeermahalFeatured';
import HeritageCard from './heritage/HeritageCard';
import HeritageModal from './heritage/HeritageModal';
import HistoryTimeline from './history/HistoryTimeline';
import ScrollReveal from './common/ScrollReveal';
import { HERITAGE_DESTINATIONS } from '../data/heritageData';

export default function HeritageSection() {
  const [selectedDestination, setSelectedDestination] = useState(null);

  const handleExplore = (id) => {
    if (id === 'neermahal') {
      setSelectedDestination(HERITAGE_DESTINATIONS[0]);
    } else {
      const found = HERITAGE_DESTINATIONS.find(d => d.id === id);
      setSelectedDestination(found || HERITAGE_DESTINATIONS[0]);
    }
  };

  const handleCloseModal = () => {
    setSelectedDestination(null);
  };

  return (
    <section className="section-wrapper" id="heritage" aria-labelledby="heritage-heading">
      <ScrollReveal animation="fade-up" delay={0.1}>
        <div className="section-header">
          <span className="section-kicker">Architectural Marvels & Historical Monuments</span>
          <h2 className="section-title" id="heritage-heading">Heritage of Tripura</h2>
          <p className="section-subtitle">
            Explore centuries of royal grandeur, water palaces, sacred temples, and ancient rock sculptures.
          </p>
        </div>
      </ScrollReveal>

      {/* 1. Large Neermahal Water Palace Featured Presentation */}
      <ScrollReveal animation="scale-up" delay={0.15}>
        <NeermahalFeatured onExplore={handleExplore} />
      </ScrollReveal>

      {/* 2. Interactive History of Tripura Timeline */}
      <HistoryTimeline />

      {/* 3. Heritage Destinations Grid */}
      <div style={{ marginTop: '4rem' }}>
        <ScrollReveal animation="fade-up" delay={0.1}>
          <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--ivory-base)', marginBottom: '1.5rem', textAlign: 'center' }}>
            🏰 Premier Heritage Destinations
          </h3>
        </ScrollReveal>

        <div className="heritage-grid">
          {HERITAGE_DESTINATIONS.map((destination, idx) => (
            <ScrollReveal key={destination.id} animation="fade-up" delay={idx * 0.08}>
              <HeritageCard 
                destination={destination} 
                onExplore={handleExplore} 
              />
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* 4. Accessible Heritage Modal */}
      {selectedDestination && (
        <HeritageModal 
          destination={selectedDestination} 
          onClose={handleCloseModal} 
        />
      )}
    </section>
  );
}
