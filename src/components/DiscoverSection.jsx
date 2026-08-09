import React from 'react';
import AboutTripura from './discover/AboutTripura';
import DidYouKnow from './discover/DidYouKnow';
import InteractiveTripuraMap from './map/InteractiveTripuraMap';
import ScrollReveal from './common/ScrollReveal';
import AnimatedCounter from './common/AnimatedCounter';
import { DISCOVER_FACT_CARDS } from '../data/tripuraData';

export default function DiscoverSection() {
  return (
    <section className="section-wrapper" id="discover" aria-labelledby="discover-heading">
      <ScrollReveal animation="fade-up" delay={0.1}>
        <div className="section-header">
          <span className="section-kicker">State Profile & Educational Overview</span>
          <h2 className="section-title" id="discover-heading">Discover Tripura</h2>
          <p className="section-subtitle">
            Explore the history, geography, governance, languages, and unique facts of the jewel of Northeast India.
          </p>
        </div>
      </ScrollReveal>

      {/* 1. About Tripura Overview & Admin Info */}
      <AboutTripura />

      {/* 2. Interactive Fact Cards Grid */}
      <div style={{ margin: '3.5rem 0' }}>
        <ScrollReveal animation="fade-up" delay={0.1}>
          <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--ivory-base)', marginBottom: '1.5rem', textAlign: 'center' }}>
            ✨ Essential Fact Cards
          </h3>
        </ScrollReveal>
        <div className="discover-grid">
          {DISCOVER_FACT_CARDS.map((fact, idx) => (
            <ScrollReveal key={fact.id} animation="fade-up" delay={idx * 0.08}>
              <article className="discover-card" style={{ height: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span className="discover-card-icon" aria-hidden="true">{fact.icon}</span>
                  <span className="card-tag" style={{ margin: 0 }}>{fact.badge}</span>
                </div>
                <div className="discover-card-title">{fact.title}</div>
                <div className="discover-card-highlight">
                  <AnimatedCounter value={fact.highlight} />
                </div>
                <p className="discover-card-detail">{fact.detail}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* 3. Interactive "Did You Know?" Module */}
      <ScrollReveal animation="fade-up" delay={0.15}>
        <DidYouKnow />
      </ScrollReveal>

      {/* 4. Interactive Vector Map of Tripura */}
      <ScrollReveal animation="scale-up" delay={0.15}>
        <InteractiveTripuraMap />
      </ScrollReveal>
    </section>
  );
}
