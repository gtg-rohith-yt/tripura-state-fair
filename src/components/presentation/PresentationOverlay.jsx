import React, { useState, useEffect, useCallback, useRef } from 'react';
import { PRESENTATION_SLIDES } from '../../data/presentationData';
import InteractiveTripuraMap from '../map/InteractiveTripuraMap';
import QuizCard from '../quiz/QuizCard';
import QuizResult from '../quiz/QuizResult';
import AnimatedCounter from '../common/AnimatedCounter';
import { QUIZ_QUESTIONS } from '../../data/quizData';

export default function PresentationOverlay({ onClose }) {
  const [currentSlideIdx, setCurrentSlideIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isControlsVisible, setIsControlsVisible] = useState(true);
  const [isPrepScreen, setIsPrepScreen] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Quiz embedded state for Slide 14
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [quizIdx, setQuizIdx] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizSelectedOption, setQuizSelectedOption] = useState(null);
  const [quizIsAnswered, setQuizIsAnswered] = useState(false);
  const [quizIsCompleted, setQuizIsCompleted] = useState(false);

  const controlsTimeoutRef = useRef(null);
  const autoplayTimerRef = useRef(null);
  const scrollPositionRef = useRef(0);

  const totalSlides = PRESENTATION_SLIDES.length;
  const slide = PRESENTATION_SLIDES[currentSlideIdx];

  // Request Fullscreen & Lock Body Scroll on Mount
  useEffect(() => {
    scrollPositionRef.current = window.scrollY;
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    // Attempt Fullscreen API
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch(() => {
        // Graceful fallback to immersive viewport overlay if denied
      });
    }

    const timer = setTimeout(() => setIsOpen(true), 15);

    // Preparation screen auto-advance after 1.8s
    const prepTimer = setTimeout(() => {
      setIsPrepScreen(false);
    }, 1800);

    return () => {
      document.body.style.overflow = originalStyle;
      clearTimeout(timer);
      clearTimeout(prepTimer);

      if (document.fullscreenElement && document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    };
  }, []);

  // Exit Handler with 300ms transition
  const handleClose = useCallback(() => {
    if (isClosing) return;
    setIsClosing(true);
    setIsOpen(false);
    setIsPlaying(false);

    if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }

    setTimeout(() => {
      onClose();
      window.scrollTo(0, scrollPositionRef.current);
    }, 300);
  }, [isClosing, onClose]);

  // Slide Navigation Handlers
  const handleNext = useCallback(() => {
    setImgError(false);
    if (currentSlideIdx + 1 < totalSlides) {
      setCurrentSlideIdx(prev => prev + 1);
    } else {
      setCurrentSlideIdx(0);
    }
  }, [currentSlideIdx, totalSlides]);

  const handlePrev = useCallback(() => {
    setImgError(false);
    if (currentSlideIdx > 0) {
      setCurrentSlideIdx(prev => prev - 1);
    } else {
      setCurrentSlideIdx(totalSlides - 1);
    }
  }, [currentSlideIdx, totalSlides]);

  // Auto-Hiding Controls Timer (3s inactivity)
  const resetControlsTimeout = useCallback(() => {
    setIsControlsVisible(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => {
      setIsControlsVisible(false);
    }, 3000);
  }, []);

  useEffect(() => {
    resetControlsTimeout();
    const handleMouseMove = () => resetControlsTimeout();
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    };
  }, [resetControlsTimeout]);

  // Autoplay Logic (8–12s normal, 14s for Neermahal feature, Pause on Quiz)
  useEffect(() => {
    if (!isPlaying || isPrepScreen || isQuizActive || slide.type === 'quiz') {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
      return;
    }

    const slideDuration = slide.type === 'neermahal_feature' ? 14000 : 10000;

    autoplayTimerRef.current = setTimeout(() => {
      handleNext();
    }, slideDuration);

    return () => {
      if (autoplayTimerRef.current) clearTimeout(autoplayTimerRef.current);
    };
  }, [isPlaying, isPrepScreen, isQuizActive, currentSlideIdx, slide.type, handleNext]);

  // Keyboard Shortcuts Listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      resetControlsTimeout();

      if (e.key === 'Escape') {
        handleClose();
      } else if (e.key === 'ArrowRight') {
        if (!isQuizActive) handleNext();
      } else if (e.key === 'ArrowLeft') {
        if (!isQuizActive) handlePrev();
      } else if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying(prev => !prev);
      } else if (e.key === 'Home') {
        setCurrentSlideIdx(0);
      } else if (e.key === 'End') {
        setCurrentSlideIdx(totalSlides - 1);
      } else if (e.key === 'p' || e.key === 'P') {
        handleClose();
      } else if ((e.key === 'q' || e.key === 'Q') && slide.type === 'quiz') {
        setIsQuizActive(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleClose, handleNext, handlePrev, isQuizActive, resetControlsTimeout, slide.type, totalSlides]);

  // Quiz Action Handlers inside Slide 14
  const handleQuizSelectOption = (optIdx) => {
    setQuizSelectedOption(optIdx);
    setQuizIsAnswered(true);
    if (optIdx === QUIZ_QUESTIONS[quizIdx].correctAnswer) {
      setQuizScore(prev => prev + 1);
    }
  };

  const handleQuizNextQuestion = () => {
    if (quizIdx + 1 < QUIZ_QUESTIONS.length) {
      setQuizIdx(prev => prev + 1);
      setQuizSelectedOption(null);
      setQuizIsAnswered(false);
    } else {
      setQuizIsCompleted(true);
    }
  };

  const handleQuizRestart = () => {
    setQuizIdx(0);
    setQuizScore(0);
    setQuizSelectedOption(null);
    setQuizIsAnswered(false);
    setQuizIsCompleted(false);
    setIsQuizActive(false);
  };

  // Preparation Screen Splash View
  if (isPrepScreen) {
    return (
      <div 
        className="presentation-overlay-backdrop presentation-open"
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: '#030806',
          backgroundImage: 'radial-gradient(circle at center, rgba(6, 78, 59, 0.6) 0%, #030806 80%)',
          zIndex: 5000,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--ivory-base)',
          textAlign: 'center',
          padding: '2rem'
        }}
      >
        <div style={{ fontSize: '4.5rem', marginBottom: '1.5rem', animation: 'fadeIn 0.5s ease' }}>🏛️</div>
        <span className="card-tag" style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
          PREPARING EXPERIENCE...
        </span>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 900, color: 'var(--gold-glow)', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
          TRIPURA
        </h1>
        <p style={{ fontSize: '1.4rem', color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: '2.5rem' }}>
          "Where Heritage Meets Nature" • Centaur House Exhibition
        </p>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <button 
            className="btn-primary" 
            onClick={() => setIsPrepScreen(false)}
            style={{ padding: '0.85rem 2.5rem', fontSize: '1.1rem' }}
          >
            Start Presentation →
          </button>
          <button 
            className="btn-secondary" 
            onClick={() => setIsPrepScreen(false)}
            style={{ padding: '0.85rem 1.8rem', fontSize: '1rem' }}
          >
            Skip
          </button>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`presentation-overlay-backdrop ${isOpen && !isClosing ? 'presentation-open' : ''} ${isClosing ? 'presentation-closing' : ''}`}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#030806',
        backgroundImage: `
          radial-gradient(circle at 10% 20%, rgba(6, 78, 59, 0.45) 0%, transparent 50%),
          radial-gradient(circle at 90% 80%, rgba(136, 19, 55, 0.45) 0%, transparent 50%)
        `,
        zIndex: 5000,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '2rem 3rem',
        color: 'var(--ivory-base)',
        overflow: 'hidden'
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Tripura Exhibition Presentation Mode"
    >
      {/* Top Header Watermark Badge & Controls */}
      <div 
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '2px solid var(--border-gold)',
          paddingBottom: '1rem',
          position: 'relative',
          zIndex: 20
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span className="card-tag" style={{ fontSize: '0.82rem', margin: 0, background: 'var(--red-royal)' }}>
            {slide.tag}
          </span>
          <span style={{ color: 'var(--gold-glow)', fontWeight: 800, fontSize: '1.05rem', letterSpacing: '0.08em' }}>
            TRIPURA | Centaur House
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <span style={{ color: 'var(--gold-glow)', fontWeight: 800, fontSize: '1.1rem' }}>
            Slide {currentSlideIdx + 1} of {totalSlides}
          </span>
          <button
            onClick={handleClose}
            aria-label="Exit presentation mode (ESC)"
            className="btn-secondary"
            style={{
              background: 'rgba(136, 19, 55, 0.85)',
              border: '2px solid var(--gold-glow)',
              color: '#fff',
              padding: '0.45rem 1.25rem',
              borderRadius: 'var(--radius-md)',
              fontWeight: 700,
              fontSize: '0.9rem'
            }}
          >
            <span>✕</span>
            <span>Exit Presentation</span>
          </button>
        </div>
      </div>

      {/* Main Widescreen Slide Container (Keyed for Smooth Transition) */}
      <div 
        key={slide.id}
        className="presentation-slide-enter"
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          margin: '1rem 0',
          position: 'relative',
          zIndex: 10,
          overflowY: 'auto'
        }}
      >
        {/* SLIDE TYPE 1 & 15: INTRO / OUTRO */}
        {(slide.type === 'intro' || slide.type === 'outro') && (
          <div style={{ textAlign: 'center', maxWidth: '950px', margin: '0 auto' }}>
            <div style={{ fontSize: '5rem', marginBottom: '1rem' }} aria-hidden="true">{slide.icon}</div>
            <h1 style={{ fontSize: 'clamp(3.5rem, 7.5vw, 6rem)', fontWeight: 900, color: 'var(--ivory-base)', letterSpacing: '0.08em', marginBottom: '0.5rem', textShadow: '0 6px 25px rgba(0,0,0,0.8)' }}>
              {slide.title}
            </h1>
            <p style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)', color: 'var(--gold-glow)', fontWeight: 700, fontStyle: 'italic', marginBottom: '2rem' }}>
              "{slide.subtitle}"
            </p>
            <p style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              {slide.content}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
              {slide.bullets && slide.bullets.map((b, idx) => (
                <div key={idx} style={{ background: 'rgba(9,18,14,0.8)', border: '1px solid var(--border-gold)', borderRadius: 'var(--radius-lg)', padding: '1.25rem', fontSize: '1.15rem', color: 'var(--ivory-base)' }}>
                  ✨ {b}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SLIDE TYPE 2: STATS GRID */}
        {slide.type === 'stats' && (
          <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: 900, color: 'var(--ivory-base)' }}>{slide.title}</h2>
              <p style={{ fontSize: '1.4rem', color: 'var(--gold-glow)', fontWeight: 700 }}>{slide.subtitle}</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
              {slide.stats.map((st, idx) => (
                <div key={idx} style={{ background: 'rgba(9, 18, 14, 0.85)', border: '2px solid var(--border-gold)', borderRadius: 'var(--radius-xl)', padding: '1.75rem', boxShadow: '0 15px 35px rgba(0,0,0,0.6)' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{st.label}</span>
                  <div style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--gold-glow)', margin: '0.3rem 0' }}>
                    <AnimatedCounter value={st.value} />
                  </div>
                  <p style={{ color: 'var(--ivory-base)', fontSize: '1rem' }}>{st.detail}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SLIDE TYPE 3: TIMELINE */}
        {slide.type === 'timeline' && (
          <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: 900, color: 'var(--ivory-base)' }}>{slide.title}</h2>
              <p style={{ fontSize: '1.4rem', color: 'var(--gold-glow)', fontWeight: 700 }}>{slide.subtitle}</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
              {slide.timelinePoints.map((pt, idx) => (
                <div key={idx} style={{ background: 'rgba(9,18,14,0.85)', border: '1px solid var(--border-gold)', borderRadius: 'var(--radius-lg)', padding: '1.5rem' }}>
                  <span style={{ background: 'var(--red-royal)', color: 'var(--ivory-base)', padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.85rem', fontWeight: 800 }}>
                    {pt.era}
                  </span>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--gold-glow)', margin: '0.75rem 0 0.3rem' }}>{pt.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: 1.6 }}>{pt.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SLIDE TYPE 4: HERITAGE OVERVIEW */}
        {slide.type === 'heritage_overview' && (
          <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: 900, color: 'var(--ivory-base)' }}>{slide.title}</h2>
              <p style={{ fontSize: '1.4rem', color: 'var(--gold-glow)', fontWeight: 700 }}>{slide.subtitle}</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {slide.heritageSites.map((st, idx) => (
                <div key={idx} style={{ background: 'linear-gradient(135deg, rgba(6,78,59,0.7), rgba(9,18,14,0.9))', border: '2px solid var(--border-gold)', borderRadius: 'var(--radius-xl)', padding: '1.75rem' }}>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--ivory-base)', marginBottom: '0.4rem' }}>{st.name}</h3>
                  <p style={{ color: 'var(--gold-glow)', fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.75rem' }}>📍 {st.loc}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{st.note}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SLIDE TYPE 5: NEERMAHAL SPECIAL FEATURE SLIDE */}
        {slide.type === 'neermahal_feature' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(340px, 1.2fr) 1.5fr', gap: '3.5rem', alignItems: 'center', maxWidth: '1180px', margin: '0 auto', width: '100%' }}>
            <div 
              className="neermahal-cinematic-card"
              style={{
                background: 'linear-gradient(135deg, rgba(6, 78, 59, 0.8), rgba(9, 18, 14, 0.95))',
                border: '3px solid var(--gold-glow)',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                boxShadow: '0 25px 60px rgba(0,0,0,0.85)',
                position: 'relative',
                height: '420px'
              }}
            >
              {!imgError ? (
                <img
                  src={slide.image}
                  alt={slide.title}
                  onError={() => setImgError(true)}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    animation: 'neermahalScaleZoom 14s infinite alternate linear'
                  }}
                />
              ) : (
                <div style={{ textAlign: 'center', padding: '3rem' }}>
                  <span style={{ fontSize: '6rem' }}>🌊</span>
                  <h3 style={{ color: 'var(--gold-glow)' }}>Neermahal Palace</h3>
                </div>
              )}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(9,18,14,0.9)', padding: '1rem', borderTop: '2px solid var(--gold-glow)', textAlign: 'center' }}>
                <span style={{ color: 'var(--gold-glow)', fontWeight: 800, fontSize: '0.95rem', letterSpacing: '0.1em' }}>
                  ROYAL WATER PALACE • MELAGHAR
                </span>
              </div>
            </div>

            <div>
              <span className="card-tag" style={{ background: 'var(--gold-glow)', color: '#000', fontWeight: 800, fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                SPECIAL FEATURE EXHIBIT
              </span>
              <h1 style={{ fontSize: 'clamp(2.8rem, 5vw, 4.2rem)', fontWeight: 900, color: 'var(--ivory-base)', marginBottom: '0.4rem' }}>
                {slide.title}
              </h1>
              <p style={{ fontSize: '1.4rem', color: 'var(--gold-glow)', fontWeight: 700, fontStyle: 'italic', marginBottom: '1.25rem' }}>
                "{slide.subtitle}"
              </p>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                📍 <strong>Location:</strong> {slide.location}
              </p>
              <div style={{ background: 'rgba(9, 18, 14, 0.8)', border: '2px solid var(--border-gold)', borderRadius: 'var(--radius-lg)', padding: '1.5rem' }}>
                <ul style={{ display: 'grid', gap: '0.85rem', listStyle: 'none', padding: 0 }}>
                  {slide.bullets.map((b, idx) => (
                    <li key={idx} style={{ fontSize: '1.1rem', color: 'var(--ivory-base)', lineHeight: 1.5, display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <span style={{ color: 'var(--gold-glow)' }}>👑</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* SLIDE TYPE 6, 7, 8: DESTINATION SLIDES */}
        {slide.type === 'destination' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(320px, 1fr) 1.4fr', gap: '3.5rem', alignItems: 'center', maxWidth: '1150px', margin: '0 auto', width: '100%' }}>
            <div 
              style={{
                background: 'linear-gradient(135deg, rgba(6, 78, 59, 0.7), rgba(9, 18, 14, 0.95))',
                border: '3px solid var(--gold-glow)',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                boxShadow: '0 25px 60px rgba(0,0,0,0.8)',
                height: '380px'
              }}
            >
              {!imgError ? (
                <img
                  src={slide.image}
                  alt={slide.title}
                  onError={() => setImgError(true)}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              ) : (
                <div style={{ textAlign: 'center', padding: '3rem' }}>
                  <span style={{ fontSize: '5rem' }}>{slide.icon}</span>
                  <h3 style={{ color: 'var(--gold-glow)' }}>{slide.title}</h3>
                </div>
              )}
            </div>

            <div>
              <h1 style={{ fontSize: 'clamp(2.8rem, 5vw, 4rem)', fontWeight: 900, color: 'var(--ivory-base)', marginBottom: '0.4rem' }}>
                {slide.title}
              </h1>
              <p style={{ fontSize: '1.35rem', color: 'var(--gold-glow)', fontWeight: 700, fontStyle: 'italic', marginBottom: '1.25rem' }}>
                "{slide.subtitle}"
              </p>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                📍 <strong>Location:</strong> {slide.location}
              </p>

              <div style={{ background: 'rgba(9, 18, 14, 0.8)', border: '2px solid var(--border-gold)', borderRadius: 'var(--radius-lg)', padding: '1.5rem' }}>
                <ul style={{ display: 'grid', gap: '0.85rem', listStyle: 'none', padding: 0 }}>
                  {slide.bullets.map((b, idx) => (
                    <li key={idx} style={{ fontSize: '1.1rem', color: 'var(--ivory-base)', lineHeight: 1.5, display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <span style={{ color: 'var(--gold-glow)' }}>✨</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* SLIDE TYPE 9: CULTURE */}
        {slide.type === 'culture' && (
          <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '3rem', alignItems: 'center', maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
            <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '2px solid var(--gold-glow)', height: '360px' }}>
              <img src={slide.image} alt="Culture" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div>
              <h1 style={{ fontSize: '3.5rem', fontWeight: 900, color: 'var(--ivory-base)', marginBottom: '0.4rem' }}>{slide.title}</h1>
              <p style={{ fontSize: '1.4rem', color: 'var(--gold-glow)', fontWeight: 700, marginBottom: '1.5rem' }}>{slide.subtitle}</p>
              <div style={{ display: 'grid', gap: '1rem' }}>
                {slide.bullets.map((b, idx) => (
                  <div key={idx} style={{ background: 'rgba(9,18,14,0.85)', border: '1px solid var(--border-gold)', borderRadius: 'var(--radius-lg)', padding: '1.25rem', fontSize: '1.1rem' }}>
                    🎭 {b}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SLIDE TYPE 10: FESTIVALS */}
        {slide.type === 'festivals' && (
          <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '3.5rem', fontWeight: 900, color: 'var(--ivory-base)' }}>{slide.title}</h2>
              <p style={{ fontSize: '1.4rem', color: 'var(--gold-glow)', fontWeight: 700 }}>{slide.subtitle}</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
              {slide.festivals.map((fs, idx) => (
                <div key={idx} style={{ background: 'rgba(9,18,14,0.85)', border: '2px solid var(--border-gold)', borderRadius: 'var(--radius-xl)', padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--gold-glow)', marginBottom: '0.4rem' }}>{fs.name}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{fs.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SLIDE TYPE 11: NATURE */}
        {slide.type === 'nature' && (
          <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '3.5rem', fontWeight: 900, color: 'var(--ivory-base)' }}>{slide.title}</h2>
              <p style={{ fontSize: '1.4rem', color: 'var(--gold-glow)', fontWeight: 700 }}>{slide.subtitle}</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
              {slide.reserves.map((rs, idx) => (
                <div key={idx} style={{ background: 'linear-gradient(135deg, rgba(6,78,59,0.7), rgba(9,18,14,0.9))', border: '1px solid var(--border-gold)', borderRadius: 'var(--radius-lg)', padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--gold-glow)', marginBottom: '0.4rem' }}>🌲 {rs.name}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.5 }}>{rs.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SLIDE TYPE 12: FOOD */}
        {slide.type === 'food' && (
          <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '3.5rem', fontWeight: 900, color: 'var(--ivory-base)' }}>{slide.title}</h2>
              <p style={{ fontSize: '1.4rem', color: 'var(--gold-glow)', fontWeight: 700 }}>{slide.subtitle}</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
              {slide.dishes.map((dh, idx) => (
                <div key={idx} style={{ background: 'rgba(9,18,14,0.85)', border: '2px solid var(--border-gold)', borderRadius: 'var(--radius-xl)', padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--gold-glow)', marginBottom: '0.4rem' }}>🍲 {dh.name}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{dh.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SLIDE TYPE 13: MAP */}
        {slide.type === 'map' && (
          <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '3.2rem', fontWeight: 900, color: 'var(--ivory-base)' }}>{slide.title}</h2>
              <p style={{ fontSize: '1.25rem', color: 'var(--gold-glow)', fontWeight: 700 }}>{slide.subtitle}</p>
            </div>
            <div style={{ background: 'rgba(9,18,14,0.85)', border: '2px solid var(--border-gold)', borderRadius: 'var(--radius-xl)', padding: '1.5rem' }}>
              <InteractiveTripuraMap />
            </div>
          </div>
        )}

        {/* SLIDE TYPE 14: QUIZ INTRO & EMBEDDED QUIZ */}
        {slide.type === 'quiz' && (
          <div style={{ maxWidth: '850px', margin: '0 auto', width: '100%', textAlign: 'center' }}>
            {!isQuizActive ? (
              <div style={{ background: 'linear-gradient(135deg, rgba(136,19,55,0.6), rgba(6,78,59,0.7))', border: '3px solid var(--gold-glow)', borderRadius: 'var(--radius-xl)', padding: '3.5rem 2rem', boxShadow: '0 25px 60px rgba(0,0,0,0.8)' }}>
                <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🏆</div>
                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: 900, color: 'var(--ivory-base)', marginBottom: '0.5rem' }}>
                  {slide.title}
                </h1>
                <p style={{ fontSize: '1.35rem', color: 'var(--gold-glow)', fontWeight: 700, marginBottom: '1.5rem' }}>
                  "{slide.subtitle}"
                </p>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '650px', margin: '0 auto 2.5rem' }}>
                  {slide.content}
                </p>
                <button 
                  className="btn-primary" 
                  onClick={() => setIsQuizActive(true)}
                  style={{ padding: '1rem 3rem', fontSize: '1.2rem' }}
                >
                  <span>{slide.buttonText}</span>
                  <span>🎯</span>
                </button>
              </div>
            ) : (
              <div style={{ textAlign: 'left' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <button 
                    className="btn-secondary" 
                    onClick={() => setIsQuizActive(false)}
                    style={{ padding: '0.45rem 1.25rem', fontSize: '0.85rem' }}
                  >
                    ← Return to Presentation
                  </button>
                  <span style={{ color: 'var(--gold-glow)', fontWeight: 800 }}>
                    Question {quizIdx + 1} of {QUIZ_QUESTIONS.length}
                  </span>
                </div>

                {!quizIsCompleted ? (
                  <QuizCard 
                    questionObj={QUIZ_QUESTIONS[quizIdx]}
                    selectedOption={quizSelectedOption}
                    isAnswered={quizIsAnswered}
                    onSelectOption={handleQuizSelectOption}
                    onNextQuestion={handleQuizNextQuestion}
                    isLastQuestion={quizIdx + 1 === QUIZ_QUESTIONS.length}
                  />
                ) : (
                  <QuizResult 
                    score={quizScore}
                    totalQuestions={QUIZ_QUESTIONS.length}
                    onRestart={handleQuizRestart}
                  />
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom Floating Control Bar (Auto-hides on inactivity) */}
      <div 
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '2px solid var(--border-gold)',
          paddingTop: '1rem',
          position: 'relative',
          zIndex: 20,
          opacity: isControlsVisible ? 1 : 0,
          pointerEvents: isControlsVisible ? 'auto' : 'none',
          transition: 'opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Left Nav Button */}
        <button
          className="btn-secondary"
          onClick={handlePrev}
          aria-label="Previous slide (ArrowLeft)"
          style={{ padding: '0.75rem 1.8rem', fontSize: '1rem' }}
        >
          ← Previous
        </button>

        {/* Center Indicators: Autoplay Toggle & Slide Dots */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? "Pause autoplay (Space)" : "Play autoplay (Space)"}
            className="btn-secondary"
            style={{
              padding: '0.5rem 1.2rem',
              fontSize: '0.9rem',
              background: isPlaying ? 'rgba(5, 150, 105, 0.4)' : 'rgba(136, 19, 55, 0.4)',
              borderColor: isPlaying ? '#059669' : 'var(--border-gold)'
            }}
          >
            <span>{isPlaying ? '⏸️ Pause' : '▶️ Play Autoplay'}</span>
          </button>

          {/* Slide Indicator Dots */}
          <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap', maxWidth: '300px', justifyContent: 'center' }}>
            {PRESENTATION_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setImgError(false);
                  setCurrentSlideIdx(idx);
                }}
                aria-label={`Jump to slide ${idx + 1}`}
                style={{
                  width: idx === currentSlideIdx ? '28px' : '10px',
                  height: '10px',
                  borderRadius: '5px',
                  background: idx === currentSlideIdx ? 'var(--gold-glow)' : 'rgba(254, 243, 199, 0.25)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              />
            ))}
          </div>
        </div>

        {/* Right Nav Button */}
        <button
          className="btn-primary"
          onClick={handleNext}
          aria-label="Next slide (ArrowRight)"
          style={{ padding: '0.75rem 2.2rem', fontSize: '1rem' }}
        >
          <span>Next</span>
          <span>→</span>
        </button>
      </div>
    </div>
  );
}
