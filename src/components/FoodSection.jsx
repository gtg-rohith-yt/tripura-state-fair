import React, { useState } from 'react';
import FoodFilterTabs from './food/FoodFilterTabs';
import FoodCard from './food/FoodCard';
import ScrollReveal from './common/ScrollReveal';
import { TRIPURA_DISHES } from '../data/foodData';

export default function FoodSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredDishes = activeCategory === 'all' 
    ? TRIPURA_DISHES 
    : activeCategory === 'vegetarian'
    ? TRIPURA_DISHES.filter(d => d.isVegetarian)
    : TRIPURA_DISHES.filter(d => d.category === activeCategory);

  return (
    <section className="section-wrapper" id="cuisine" aria-labelledby="cuisine-heading">
      <ScrollReveal animation="fade-up" delay={0.1}>
        <div className="section-header">
          <span className="section-kicker">Culinary Traditions & Flavors</span>
          <h2 className="section-title" id="cuisine-heading">Traditional Cuisine of Tripura</h2>
          <p className="section-subtitle">
            Discover authentic Tripuri gastronomy centered around organic rice, forest bamboo shoots, local herbs, and traditional steaming.
          </p>
        </div>
      </ScrollReveal>

      {/* Category Filter Tabs */}
      <FoodFilterTabs 
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      {/* Culinary Cards Grid with Keyed Filter Transition */}
      <div 
        key={activeCategory}
        className="cards-grid food-grid-enter" 
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}
      >
        {filteredDishes.map((dish, idx) => (
          <ScrollReveal key={dish.id} animation="fade-up" delay={idx * 0.06}>
            <FoodCard dish={dish} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
