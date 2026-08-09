import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import PresentationOverlay from './components/presentation/PresentationOverlay';
import IntroScreen from './components/intro/IntroScreen';

export default function App() {
  const [isPresentationOpen, setIsPresentationOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    // Check if intro was already seen in this session
    const seen = sessionStorage.getItem('tripura_intro_seen');
    if (!seen) {
      setShowIntro(true);
    }
  }, []);

  return (
    <div className="app-container">
      {showIntro && (
        <IntroScreen onEnter={() => setShowIntro(false)} />
      )}

      <Navbar onOpenPresentation={() => setIsPresentationOpen(true)} />
      <HomePage />
      <Footer />

      {isPresentationOpen && (
        <PresentationOverlay onClose={() => setIsPresentationOpen(false)} />
      )}
    </div>
  );
}
