import React, { useState } from 'react';
import { QUIZ_TEASER } from '../data/tripuraData';

export default function QuizPreview() {
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  return (
    <section className="section-wrapper" id="quiz" aria-labelledby="quiz-heading">
      <div className="quiz-section">
        <h2 className="quiz-title" id="quiz-heading">
          {QUIZ_TEASER.title}
        </h2>
        
        <p className="quiz-subtitle">
          {QUIZ_TEASER.subtitle}
        </p>

        <ul className="quiz-topics-list">
          {QUIZ_TEASER.topics.map((topic, idx) => (
            <li key={idx} className="quiz-topic-chip">
              ✨ {topic}
            </li>
          ))}
        </ul>

        <button 
          className="btn-primary" 
          onClick={() => setShowPreviewModal(true)}
          style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}
        >
          <span>Start Quiz</span>
          <span>🎯</span>
        </button>

        {showPreviewModal && (
          <div 
            style={{
              marginTop: '2rem',
              padding: '1.5rem',
              background: 'rgba(9, 18, 14, 0.9)',
              border: '1px solid var(--gold-glow)',
              borderRadius: 'var(--radius-lg)',
              maxWidth: '500px',
              margin: '2rem auto 0',
              textAlign: 'center'
            }}
          >
            <p style={{ color: 'var(--gold-glow)', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>
              🧠 Tripura State Fair Quiz Challenge
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1rem' }}>
              Sample Question: Which is the only water palace in Northeast India located in Rudrasagar Lake?
            </p>
            <div style={{ display: 'grid', gap: '0.5rem', marginBottom: '1rem' }}>
              <button style={{ padding: '0.6rem', background: 'rgba(245, 158, 11, 0.2)', border: '1px solid var(--gold-glow)', color: '#fff', borderRadius: '8px', cursor: 'pointer' }}>
                A) Ujjayanta Palace
              </button>
              <button style={{ padding: '0.6rem', background: 'rgba(5, 150, 105, 0.3)', border: '1px solid var(--gold-glow)', color: '#fff', borderRadius: '8px', cursor: 'pointer' }}>
                B) Neermahal (Correct!)
              </button>
              <button style={{ padding: '0.6rem', background: 'rgba(245, 158, 11, 0.2)', border: '1px solid var(--gold-glow)', color: '#fff', borderRadius: '8px', cursor: 'pointer' }}>
                C) Kunjaban Palace
              </button>
            </div>
            <button 
              className="btn-secondary" 
              onClick={() => setShowPreviewModal(false)}
              style={{ fontSize: '0.85rem', padding: '0.4rem 1rem' }}
            >
              Close Preview
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
