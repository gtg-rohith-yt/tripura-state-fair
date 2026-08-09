import React from 'react';

export default function QuizCard({ 
  questionObj, 
  selectedOption, 
  isAnswered, 
  onSelectOption, 
  onNextQuestion, 
  isLastQuestion 
}) {
  return (
    <div 
      className="quiz-card-container quiz-card"
      style={{
        background: 'rgba(9, 18, 14, 0.85)',
        border: '2px solid var(--border-gold)',
        borderRadius: 'var(--radius-xl)',
        padding: '2.5rem 2rem',
        boxShadow: '0 20px 45px rgba(0, 0, 0, 0.6)'
      }}
    >
      {/* Question Heading */}
      <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--ivory-base)', marginBottom: '1.75rem', lineHeight: 1.5 }}>
        {questionObj.question}
      </h3>

      {/* 4 Answer Option Buttons with Subtle Micro-Interactions */}
      <div style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
        {questionObj.options.map((optText, optIdx) => {
          let btnClassName = "quiz-option-btn";
          let btnStyle = {
            background: 'rgba(9, 18, 14, 0.7)',
            color: 'var(--ivory-base)',
            border: '1px solid var(--border-gold)',
            borderRadius: 'var(--radius-lg)',
            padding: '1rem 1.25rem',
            fontSize: '1.02rem',
            fontWeight: 600,
            textAlign: 'left',
            cursor: isAnswered ? 'default' : 'pointer',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          };

          if (isAnswered) {
            if (optIdx === questionObj.correctAnswer) {
              // Correct Answer (Green Glow + Subtle Success Pulse)
              btnClassName += " quiz-option-correct";
              btnStyle.background = 'rgba(5, 150, 105, 0.3)';
              btnStyle.borderColor = '#059669';
              btnStyle.color = '#34d399';
              btnStyle.boxShadow = '0 0 15px rgba(5, 150, 105, 0.4)';
            } else if (optIdx === selectedOption) {
              // Incorrect Selected Option (Red Glow + Subtle Shake)
              btnClassName += " quiz-option-incorrect";
              btnStyle.background = 'rgba(136, 19, 55, 0.4)';
              btnStyle.borderColor = 'var(--red-accent)';
              btnStyle.color = '#fca5a5';
            } else {
              btnStyle.opacity = 0.5;
            }
          }

          return (
            <button
              key={optIdx}
              onClick={() => !isAnswered && onSelectOption(optIdx)}
              disabled={isAnswered}
              className={btnClassName}
              style={btnStyle}
              aria-label={`Option ${optIdx + 1}: ${optText}`}
            >
              <span>{optText}</span>
              {isAnswered && optIdx === questionObj.correctAnswer && (
                <span style={{ fontWeight: 800, fontSize: '1.2rem' }}>✓</span>
              )}
              {isAnswered && optIdx === selectedOption && optIdx !== questionObj.correctAnswer && (
                <span style={{ fontWeight: 800, fontSize: '1.2rem' }}>✕</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Immediate Educational Explanation Box (Shown after answering) */}
      {isAnswered && (
        <div 
          style={{
            background: 'rgba(245, 158, 11, 0.1)',
            border: '1px solid rgba(245, 158, 11, 0.35)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.25rem',
            marginBottom: '2rem',
            animation: 'fadeIn 0.3s ease'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
            <span style={{ fontSize: '1.3rem' }}>💡</span>
            <strong style={{ color: 'var(--gold-glow)', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Educational Explanation:
            </strong>
          </div>
          <p style={{ color: 'var(--ivory-base)', fontSize: '0.98rem', lineHeight: 1.6, margin: 0 }}>
            {questionObj.explanation}
          </p>
        </div>
      )}

      {/* Action Next Button */}
      {isAnswered && (
        <div style={{ textAlign: 'right' }}>
          <button
            className="btn-primary"
            onClick={onNextQuestion}
            style={{ padding: '0.85rem 2rem', fontSize: '1.05rem' }}
          >
            <span>{isLastQuestion ? 'View Final Results' : 'Next Question'}</span>
            <span>→</span>
          </button>
        </div>
      )}
    </div>
  );
}
