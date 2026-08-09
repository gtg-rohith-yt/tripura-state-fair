import React from 'react';
import { NATURE_STATS } from '../../data/natureData';
import AnimatedCounter from '../common/AnimatedCounter';
import ScrollReveal from '../common/ScrollReveal';

export default function NatureStats() {
  return (
    <div className="nature-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '3.5rem' }}>
      {NATURE_STATS.map((stat, idx) => (
        <ScrollReveal key={stat.id} animation="fade-up" delay={idx * 0.08}>
          <div 
            className="nature-stat-card"
            style={{
              background: 'linear-gradient(135deg, rgba(6, 78, 59, 0.5), rgba(9, 18, 14, 0.8))',
              border: '1px solid var(--border-gold)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.5rem',
              textAlign: 'center',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.4)',
              transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease'
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '0.4rem' }} aria-hidden="true">
              {stat.icon}
            </div>
            <div style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--gold-glow)', letterSpacing: '0.02em' }}>
              <AnimatedCounter value={stat.value} />
            </div>
            <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--ivory-base)', margin: '0.2rem 0' }}>
              {stat.label}
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              {stat.subtext}
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
