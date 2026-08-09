import React from 'react';
import { ABOUT_TRIPURA } from '../../data/tripuraData';
import ScrollReveal from '../common/ScrollReveal';
import AnimatedCounter from '../common/AnimatedCounter';

export default function AboutTripura() {
  return (
    <div className="about-tripura-wrapper" style={{ marginBottom: '4rem' }}>
      {/* Overview Hero Box */}
      <ScrollReveal animation="fade-up" delay={0.15}>
        <div 
          style={{
            background: 'linear-gradient(135deg, rgba(6, 78, 59, 0.4), rgba(9, 18, 14, 0.8))',
            border: '1px solid var(--border-gold)',
            borderRadius: 'var(--radius-xl)',
            padding: '2.5rem',
            marginBottom: '2.5rem',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4)'
          }}
        >
          <span className="card-tag">State Profile & Overview</span>
          <h3 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--ivory-base)', margin: '0.5rem 0 1rem' }}>
            About Tripura
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            {ABOUT_TRIPURA.intro}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginTop: '1.5rem' }}>
            <div style={{ background: 'rgba(9, 18, 14, 0.6)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <h4 style={{ color: 'var(--gold-glow)', fontSize: '1.1rem', marginBottom: '0.4rem' }}>🗺️ Geography & Terrain</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                {ABOUT_TRIPURA.geography}
              </p>
            </div>

            <div style={{ background: 'rgba(9, 18, 14, 0.6)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <h4 style={{ color: 'var(--gold-glow)', fontSize: '1.1rem', marginBottom: '0.4rem' }}>🌐 Location & Borders</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                {ABOUT_TRIPURA.location}
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Administrative Quick Reference Grid */}
      <div style={{ marginTop: '2rem' }}>
        <ScrollReveal animation="fade-up" delay={0.1}>
          <h4 style={{ color: 'var(--gold-glow)', fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            🏛️ Administrative & Key Information
          </h4>
        </ScrollReveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
          {ABOUT_TRIPURA.admin.map((item, idx) => (
            <ScrollReveal key={idx} animation="fade-up" delay={idx * 0.06}>
              <div className="info-card" style={{ padding: '1.25rem', height: '100%' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {item.label}
                </span>
                <p style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--ivory-base)', marginTop: '0.25rem' }}>
                  <AnimatedCounter value={item.value} />
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
