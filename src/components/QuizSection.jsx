import React, { useState } from 'react';
import QuizCard from './quiz/QuizCard';
import QuizResult from './quiz/QuizResult';
import ScrollReveal from './common/ScrollReveal';
import { QUIZ_QUESTIONS } from '../data/quizData';

export default function QuizSection() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const totalQuestions = QUIZ_QUESTIONS.length;
  const currentQuestion = QUIZ_QUESTIONS[currentIdx];

  const handleSelectOption = (optionIndex) => {
    setSelectedOption(optionIndex);
    setIsAnswered(true);

    if (optionIndex === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIdx + 1 < totalQuestions) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentIdx(0);
    setScore(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setIsCompleted(false);
  };

  const progressPercentage = Math.round(((currentIdx + (isAnswered ? 1 : 0)) / totalQuestions) * 100);

  return (
    <section className="section-wrapper" id="quiz" aria-labelledby="quiz-heading">
      <ScrollReveal animation="fade-up" delay={0.1}>
        <div className="section-header">
          <span className="section-kicker">Interactive Educational Knowledge Challenge</span>
          <h2 className="section-title" id="quiz-heading">Tripura State Fair Quiz</h2>
          <p className="section-subtitle">
            Test your knowledge of Tripura's royal history, landmarks, indigenous cultures, nature reserves, and delicious cuisine!
          </p>
        </div>
      </ScrollReveal>

      {!isCompleted ? (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {/* Header Stats Bar: Progress, Counter & Score */}
          <div 
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1rem',
              flexWrap: 'wrap',
              gap: '0.75rem'
            }}
          >
            <span style={{ color: 'var(--gold-glow)', fontWeight: 700, fontSize: '0.95rem' }}>
              Question {currentIdx + 1} of {totalQuestions}
            </span>
            <span style={{ color: 'var(--ivory-base)', fontWeight: 700, fontSize: '0.95rem' }}>
              Current Score: <strong style={{ color: 'var(--gold-glow)' }}>{score}</strong>
            </span>
          </div>

          {/* Real-time Animated Progress Bar */}
          <div 
            style={{
              height: '8px',
              background: 'rgba(9, 18, 14, 0.7)',
              borderRadius: '10px',
              overflow: 'hidden',
              marginBottom: '2rem',
              border: '1px solid var(--border-gold)'
            }}
          >
            <div 
              style={{
                height: '100%',
                width: `${progressPercentage}%`,
                background: 'linear-gradient(to right, var(--gold-warm), var(--gold-glow))',
                transition: 'width 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            />
          </div>

          {/* Active Question Card Component with Smooth Entrance Transition */}
          <div key={currentIdx} className="quiz-question-enter">
            <QuizCard 
              questionObj={currentQuestion}
              selectedOption={selectedOption}
              isAnswered={isAnswered}
              onSelectOption={handleSelectOption}
              onNextQuestion={handleNextQuestion}
              isLastQuestion={currentIdx + 1 === totalQuestions}
            />
          </div>
        </div>
      ) : (
        /* Final Result Screen Component */
        <QuizResult 
          score={score}
          totalQuestions={totalQuestions}
          onRestart={handleRestartQuiz}
        />
      )}
    </section>
  );
}
