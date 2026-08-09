import React, { useState, useEffect } from 'react';
import { getResultBadge } from '../../data/quizData';

export default function QuizResult({ score, totalQuestions, onRestart }) {
  const resultInfo = getResultBadge(score, totalQuestions);
  const percentage = Math.round((score / totalQuestions) * 100);
  const isHighScore = percentage >= 80;

  const [animatedScore, setAnimatedScore] = useState(0);

  // Score count-up animation from 0 to final score
  useEffect(() => {
    if (score === 0) {
      setAnimatedScore(0);
      return;
    }

    let startTimestamp = null;
    const duration = 1200; // 1.2s count up

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentScore = Math.floor(progress * score);
      setAnimatedScore(currentScore);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setAnimatedScore(score);
      }
    };

    window.requestAnimationFrame(step);
  }, [score]);

  return (
    <div 
      className="quiz-result-container quiz-result-enter"
      style={{
        background: 'linear-gradient(135deg, rgba(6, 78, 59, 0.9), rgba(9, 18, 14, 0.95))',
        border: '2px solid var(--gold-glow)',
        borderRadius: 'var(--radius-xl)',
        padding: '3.5rem 2rem',
        textAlign: 'center',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7)',
        maxWidth: '750px',
        margin: '0 auto',
        position: 'relative'
      }}
    >
      <div 
        className={`result-icon-wrapper ${isHighScore ? 'high-score-glow' : ''}`}
        style={{ fontSize: '4.5rem', marginBottom: '1rem', display: 'inline-block' }} 
        aria-hidden="true"
      >
        {resultInfo.icon}
      </div>

      <br />

      <span 
        className="card-tag" 
        style={{ 
          fontSize: '0.85rem', 
          padding: '0.4rem 1.25rem', 
          marginBottom: '1rem',
          background: 'var(--red-royal)',
          color: 'var(--ivory-base)',
          border: '1px solid var(--gold-glow)'
        }}
      >
        QUIZ COMPLETED
      </span>

      <h2 style={{ fontSize: '2.8rem', fontWeight: 900, color: 'var(--ivory-base)', marginBottom: '0.4rem' }}>
        {resultInfo.title}
      </h2>

      <p style={{ fontSize: '1.2rem', color: 'var(--gold-glow)', fontWeight: 700, marginBottom: '1.5rem' }}>
        {resultInfo.subtitle}
      </p>

      {/* Animated Score Badge Card */}
      <div 
        style={{
          background: 'rgba(9, 18, 14, 0.8)',
          border: '1px solid var(--border-gold)',
          borderRadius: 'var(--radius-lg)',
          padding: '1.75rem',
          margin: '0 auto 2rem',
          maxWidth: '400px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.4)'
        }}
      >
        <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--gold-glow)' }}>
          {animatedScore} / {totalQuestions}
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '0.25rem' }}>
          Score Percentage: <strong>{percentage}%</strong>
        </p>
      </div>

      <p style={{ color: 'var(--text-muted)', fontSize: '1.08rem', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto 2.5rem' }}>
        {resultInfo.message}
      </p>

      {/* Try Again Button */}
      <button 
        className="btn-primary"
        onClick={onRestart}
        style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}
      >
        <span>Try Again / Restart Quiz</span>
        <span>🔄</span>
      </button>
    </div>
  );
}
