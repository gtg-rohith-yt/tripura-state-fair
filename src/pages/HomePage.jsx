import React from 'react';
import Hero from '../components/Hero';
import DiscoverSection from '../components/DiscoverSection';
import HeritageSection from '../components/HeritageSection';
import CultureSection from '../components/CultureSection';
import FoodSection from '../components/FoodSection';
import NatureSection from '../components/NatureSection';
import GallerySection from '../components/GallerySection';
import QuizSection from '../components/QuizSection';

export default function HomePage() {
  return (
    <main className="main-content-wrapper" id="main-content">
      <Hero />
      <DiscoverSection />
      <HeritageSection />
      <CultureSection />
      <FoodSection />
      <NatureSection />
      <GallerySection />
      <QuizSection />
    </main>
  );
}
