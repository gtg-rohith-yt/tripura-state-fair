import React, { useState } from 'react';
import { DID_YOU_KNOW_FACTS } from '../../data/tripuraData';

export default function DidYouKnow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalFacts = DID_YOU_KNOW_FACTS.length;
  const currentFact = DID_YOU_KNOW_FACTS[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalFacts);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalFacts) % totalFacts);
  };

  const progressPercent = ((currentIndex + 1) / totalFacts) * 100;

  return (
    <div className="did-you-know-container" style={{ margin: '3.5rem 0' }}>
      <div 
        style={{
          background: 'linear-gradient(135deg, rgba(136, 19, 55, 0.45), rgba(6, 78, 59, 0.45))',
          border: '2px solid var(--gold-glow)',
          borderRadius: 'var(--radius-xl)',
          padding: '2.5rem 2rem',
          boxShadow: '0 20px 45px rgba(0, 0, 0, 0.5)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.8rem' }} aria-hidden="true">💡</span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--ivory-base)' }}>
              Did You Know?
            </h3>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span className="card-tag" style={{ margin: 0 }}>
              {currentFact.category}
            </span>
            <span style={{ color: 'var(--gold-glow)', fontSize: '0.9rem', fontWeight: 700 }}>
              Fact {currentIndex + 1} of {totalFacts}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div 
          style={{
            height: '6px',
            background: 'rgba(9, 18, 14, 0.6)',
            borderRadius: '10px',
            overflow: 'hidden',
            marginBottom: '2rem',
            border: '1px solid var(--border-light)'
          }}
        >
          <div 
            style={{
              height: '100%',
              width: `${progressPercent}%`,
              background: 'linear-gradient(to right, var(--gold-warm), var(--gold-glow))',
              transition: 'width 0.4s ease-in-out'
            }}
          />
        </div>

        {/* Fact Card Display Area */}
        <div 
          style={{
            minHeight: '130px',
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
            background: 'rgba(9, 18, 14, 0.75)',
            border: '1px solid var(--border-gold)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.75rem',
            marginBottom: '2rem',
            transition: 'all 0.3s ease'
          }}
        >
          <div style={{ fontSize: '3rem', minWidth: '60px', textAlign: 'center' }} aria-hidden="true">
            {currentFact.icon}
          </div>
          <p style={{ fontSize: '1.15rem', color: 'var(--ivory-base)', lineHeight: 1.7, fontWeight: 500 }}>
            "{currentFact.fact}"
          </p>
        </div>

        {/* Interactive Controls */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <button
            className="btn-secondary"
            onClick={handlePrev}
            style={{ padding: '0.7rem 1.5rem', fontSize: '0.95rem' }}
            aria-label="Previous fact"
          >
            <span>← Previous</span>
          </button>

          <div style={{ display: 'flex', gap: '0.4rem' }}>
            {DID_YOU_KNOW_FACTS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to fact ${idx + 1}`}
                style={{
                  width: idx === currentIndex ? '24px' : '10px',
                  height: '10px',
                  borderRadius: '5px',
                  background: idx === currentIndex ? 'var(--gold-glow)' : 'rgba(254, 243, 199, 0.25)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>

          <button
            className="btn-primary"
            onClick={handleNext}
            style={{ padding: '0.7rem 1.75rem', fontSize: '0.95rem' }}
            aria-label="Next fact"
          >
            <span>Next Fact →</span>
          </button>
        </div>
      </div>
    </div>
  );
}
