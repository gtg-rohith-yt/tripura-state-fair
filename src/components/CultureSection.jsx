import React, { useState } from 'react';
import CultureTabs from './culture/CultureTabs';
import CultureCard from './culture/CultureCard';
import ScrollReveal from './common/ScrollReveal';
import { CULTURE_CARDS_DATA } from '../data/cultureData';

export default function CultureSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredCards = activeCategory === 'all' 
    ? CULTURE_CARDS_DATA 
    : CULTURE_CARDS_DATA.filter(item => item.category === activeCategory);

  return (
    <section className="section-wrapper" id="culture" aria-labelledby="culture-heading">
      <ScrollReveal animation="fade-up" delay={0.1}>
        <div className="section-header">
          <span className="section-kicker">Traditions, Arts, Crafts & Celebrations</span>
          <h2 className="section-title" id="culture-heading">Culture & Heritage of Tripura</h2>
          <p className="section-subtitle">
            Explore the living traditions of 19 indigenous tribes, handloom weaving, bamboo mastercrafts, rhythmic folk dances, and grand festivals.
          </p>
        </div>
      </ScrollReveal>

      {/* Working Tab System with Active Indicator */}
      <CultureTabs 
        activeCategory={activeCategory} 
        onSelectCategory={setActiveCategory} 
      />

      {/* Filtered Culture Cards Grid with Smooth Transition */}
      <div 
        key={activeCategory}
        className="culture-grid culture-tab-enter" 
      >
        {filteredCards.map((item, idx) => (
          <ScrollReveal key={item.id} animation="fade-up" delay={idx * 0.07}>
            <CultureCard item={item} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
