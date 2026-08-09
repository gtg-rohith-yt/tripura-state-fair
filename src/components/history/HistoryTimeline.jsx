import React, { useState } from 'react';
import { TRIPURA_HISTORY_TIMELINE } from '../../data/historyData';
import ScrollReveal from '../common/ScrollReveal';
import { useIntersectionObserver } from '../../utils/useIntersectionObserver';

export default function HistoryTimeline() {
  const [activeId, setActiveId] = useState(TRIPURA_HISTORY_TIMELINE[0].id);
  const [expandedIds, setExpandedIds] = useState({ [TRIPURA_HISTORY_TIMELINE[0].id]: true });
  const [containerRef, isRevealed] = useIntersectionObserver({ threshold: 0.15, triggerOnce: true });

  const activeIndex = TRIPURA_HISTORY_TIMELINE.findIndex(item => item.id === activeId);
  const activeItem = TRIPURA_HISTORY_TIMELINE[activeIndex] || TRIPURA_HISTORY_TIMELINE[0];

  const toggleExpand = (id) => {
    setExpandedIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleNext = () => {
    const nextIdx = (activeIndex + 1) % TRIPURA_HISTORY_TIMELINE.length;
    setActiveId(TRIPURA_HISTORY_TIMELINE[nextIdx].id);
  };

  const handlePrev = () => {
    const prevIdx = (activeIndex - 1 + TRIPURA_HISTORY_TIMELINE.length) % TRIPURA_HISTORY_TIMELINE.length;
    setActiveId(TRIPURA_HISTORY_TIMELINE[prevIdx].id);
  };

  return (
    <div 
      ref={containerRef}
      className={`history-timeline-container ${isRevealed ? 'timeline-revealed' : ''}`} 
      style={{ margin: '3rem 0' }}
    >
      {/* Desktop Horizontal Period Selector */}
      <ScrollReveal animation="fade-up" delay={0.1}>
        <div className="desktop-timeline-nav" style={{ marginBottom: '2.5rem' }}>
          <div 
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              position: 'relative',
              padding: '1rem 0',
              overflowX: 'auto',
              gap: '1rem'
            }}
          >
            {/* Connecting Track Base Line */}
            <div 
              className="timeline-track-line"
              style={{
                position: 'absolute',
                top: '50%',
                left: '5%',
                right: '5%',
                height: '3px',
                background: 'var(--border-gold)',
                zIndex: 1,
                transform: 'translateY(-50%)',
                overflow: 'hidden'
              }}
            >
              {/* Active Progress Line Draw Animation */}
              <div 
                className="timeline-track-line-progress"
                style={{
                  height: '100%',
                  width: isRevealed ? '100%' : '0%',
                  background: 'linear-gradient(90deg, var(--red-royal), var(--gold-glow))',
                  transition: 'width 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.3s'
                }}
              />
            </div>

            {TRIPURA_HISTORY_TIMELINE.map((item, idx) => {
              const isActive = item.id === activeId;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  aria-label={`Select period ${item.period}: ${item.title}`}
                  className="timeline-period-btn"
                  style={{
                    position: 'relative',
                    zIndex: 2,
                    background: isActive ? 'var(--gold-glow)' : 'var(--bg-dark)',
                    color: isActive ? '#000' : 'var(--text-muted)',
                    border: `2px solid ${isActive ? 'var(--gold-glow)' : 'var(--border-gold)'}`,
                    borderRadius: '30px',
                    padding: '0.5rem 1rem',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.3s ease',
                    boxShadow: isActive ? '0 0 15px rgba(245, 158, 11, 0.5)' : 'none',
                    opacity: isRevealed ? 1 : 0,
                    transform: isRevealed ? 'translateY(0)' : 'translateY(10px)',
                    transitionDelay: `${idx * 0.1 + 0.3}s`
                  }}
                >
                  <span>{item.icon} Period {idx + 1}</span>
                </button>
              );
            })}
          </div>
        </div>
      </ScrollReveal>

      {/* Featured Active Period Card */}
      <ScrollReveal animation="fade-up" delay={0.15}>
        <div 
          className="history-active-card"
          style={{
            background: 'linear-gradient(135deg, rgba(6, 78, 59, 0.5), rgba(9, 18, 14, 0.9))',
            border: '2px solid var(--gold-glow)',
            borderRadius: 'var(--radius-xl)',
            padding: '2.5rem',
            boxShadow: '0 20px 45px rgba(0, 0, 0, 0.5)',
            marginBottom: '3rem',
            position: 'relative',
            transition: 'transform 0.35s ease, box-shadow 0.35s ease'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
            <div>
              <span className="featured-badge" style={{ background: 'var(--red-royal)', marginBottom: '0.5rem' }}>
                ⏳ {activeItem.period}
              </span>
              <h3 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--ivory-base)', margin: '0.25rem 0' }}>
                {activeItem.icon} {activeItem.title}
              </h3>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button className="btn-secondary" onClick={handlePrev} style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                ← Prev
              </button>
              <button className="btn-primary" onClick={handleNext} style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}>
                Next →
              </button>
            </div>
          </div>

          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            {activeItem.summary}
          </p>

          {/* Key Highlight Banner */}
          <div 
            style={{
              background: 'rgba(245, 158, 11, 0.12)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              borderRadius: 'var(--radius-md)',
              padding: '1rem 1.25rem',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}
          >
            <span style={{ fontSize: '1.5rem' }}>💡</span>
            <p style={{ color: 'var(--gold-glow)', fontWeight: 600, fontSize: '0.95rem', margin: 0 }}>
              <strong>Historical Highlight:</strong> {activeItem.keyFact}
            </p>
          </div>

          {/* Expandable Details Section */}
          <div>
            <button
              onClick={() => toggleExpand(activeItem.id)}
              aria-expanded={Boolean(expandedIds[activeItem.id])}
              style={{
                background: 'transparent',
                border: '1px solid var(--border-gold)',
                color: 'var(--gold-glow)',
                padding: '0.6rem 1.25rem',
                borderRadius: 'var(--radius-md)',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease'
              }}
            >
              <span>{expandedIds[activeItem.id] ? 'Hide Full Historical Details' : 'Expand Full Historical Details'}</span>
              <span>{expandedIds[activeItem.id] ? '▲' : '▼'}</span>
            </button>

            {expandedIds[activeItem.id] && (
              <div 
                style={{
                  marginTop: '1.25rem',
                  padding: '1.5rem',
                  background: 'rgba(9, 18, 14, 0.75)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-light)'
                }}
              >
                <h4 style={{ color: 'var(--ivory-base)', fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                  Key Events & Historical Records:
                </h4>
                <ul className="featured-highlights-list">
                  {activeItem.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </ScrollReveal>

      {/* Complete Responsive Timeline Stream (Vertical Top-to-Bottom Line on Mobile) */}
      <div>
        <ScrollReveal animation="fade-up" delay={0.1}>
          <h4 style={{ color: 'var(--gold-glow)', fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.5rem', textAlign: 'center' }}>
            📜 Chronological History Overview
          </h4>
        </ScrollReveal>

        <div className="vertical-timeline-stream" style={{ display: 'grid', gap: '1.25rem' }}>
          {TRIPURA_HISTORY_TIMELINE.map((item, idx) => (
            <ScrollReveal key={item.id} animation="fade-up" delay={idx * 0.08}>
              <article 
                className="info-card timeline-stream-card"
                style={{
                  borderColor: item.id === activeId ? 'var(--gold-glow)' : 'var(--border-light)',
                  background: item.id === activeId ? 'var(--bg-card-hover)' : 'var(--bg-card)',
                  padding: '1.5rem',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span className="card-tag" style={{ margin: 0 }}>
                    Period {idx + 1} • {item.period}
                  </span>
                  <button
                    onClick={() => {
                      setActiveId(item.id);
                      toggleExpand(item.id);
                    }}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--gold-glow)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    {expandedIds[item.id] ? 'Collapse ▲' : 'Read Details ▼'}
                  </button>
                </div>

                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--ivory-base)', margin: '0.25rem 0 0.5rem' }}>
                  {item.icon} {item.title}
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {item.summary}
                </p>

                {expandedIds[item.id] && (
                  <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px dashed var(--border-gold)' }}>
                    <ul className="featured-highlights-list">
                      {item.details.map((detail, dIdx) => (
                        <li key={dIdx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
