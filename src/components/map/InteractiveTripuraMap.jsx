import React, { useState } from 'react';
import { MAP_LOCATIONS } from '../../data/mapLocationsData';
import { useIntersectionObserver } from '../../utils/useIntersectionObserver';

export default function InteractiveTripuraMap() {
  const [selectedLocation, setSelectedLocation] = useState(MAP_LOCATIONS[0]);
  const [hoveredLocation, setHoveredLocation] = useState(null);
  const [sectionRef, isMapRevealed] = useIntersectionObserver({ threshold: 0.15, triggerOnce: true });

  const handleSmoothScroll = (targetId) => {
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      ref={sectionRef}
      className={`interactive-map-section-container ${isMapRevealed ? 'map-section-revealed' : ''}`} 
      style={{ margin: '3.5rem 0' }}
    >
      <div 
        style={{
          background: 'linear-gradient(135deg, rgba(6, 78, 59, 0.45), rgba(9, 18, 14, 0.9))',
          border: '2px solid var(--gold-glow)',
          borderRadius: 'var(--radius-xl)',
          padding: '2.5rem',
          boxShadow: '0 20px 45px rgba(0, 0, 0, 0.5)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span className="card-tag">Interactive Vector Map</span>
          <h3 style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--ivory-base)', margin: '0.4rem 0' }}>
            🗺️ Interactive Map of Tripura
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '700px', margin: '0 auto' }}>
            Click any interactive marker on the map to explore Tripura's royal palaces, ancient rock reliefs, and nature reserves.
          </p>
        </div>

        <div className="map-grid-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'center' }}>
          
          {/* Stylized Animated SVG Map Display */}
          <div 
            className="map-svg-card"
            style={{
              background: 'rgba(9, 18, 14, 0.85)',
              border: '1px solid var(--border-gold)',
              borderRadius: 'var(--radius-lg)',
              padding: '2rem 1.5rem',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 12px 30px rgba(0, 0, 0, 0.4)'
            }}
          >
            <svg 
              viewBox="0 0 400 450" 
              aria-label="Interactive Stylized Vector Map of Tripura"
              style={{
                width: '100%',
                maxHeight: '400px',
                filter: 'drop-shadow(0 0 20px rgba(245, 158, 11, 0.3))'
              }}
            >
              {/* Outer Boundary Path of Tripura with Smooth Outline Draw Animation */}
              <path
                className="map-boundary-path"
                d="M 120 40 L 220 30 L 320 80 L 350 200 L 280 320 L 200 420 L 100 380 L 60 260 L 80 120 Z"
                fill="rgba(6, 78, 59, 0.3)"
                stroke="var(--gold-glow)"
                strokeWidth="2.5"
                strokeDasharray="1000"
                strokeDashoffset={isMapRevealed ? '0' : '1000'}
                style={{
                  transition: 'stroke-dashoffset 1.8s cubic-bezier(0.16, 1, 0.3, 1), fill 1.2s ease 0.6s'
                }}
              />

              {/* District Boundary Guide Lines */}
              <path 
                d="M 120 40 L 180 200 L 160 350" 
                stroke="rgba(245, 158, 11, 0.25)" 
                strokeWidth="1.5" 
                strokeDasharray="3 3"
                opacity={isMapRevealed ? 0.7 : 0}
                style={{ transition: 'opacity 1s ease 0.8s' }} 
              />
              <path 
                d="M 220 30 L 235 110 L 240 180 L 180 270" 
                stroke="rgba(245, 158, 11, 0.25)" 
                strokeWidth="1.5" 
                strokeDasharray="3 3"
                opacity={isMapRevealed ? 0.7 : 0}
                style={{ transition: 'opacity 1s ease 0.8s' }} 
              />

              {/* Animated Connection Highlight Line from Selected Marker to Inspector Edge */}
              {selectedLocation && (
                <line
                  x1={selectedLocation.cx}
                  y1={selectedLocation.cy}
                  x2={380}
                  y2={selectedLocation.cy}
                  stroke="var(--gold-glow)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  opacity={0.65}
                  style={{ transition: 'all 0.4s ease' }}
                />
              )}

              {/* Interactive Location Markers */}
              {MAP_LOCATIONS.map((loc, idx) => {
                const isSelected = selectedLocation && selectedLocation.id === loc.id;
                const isHovered = hoveredLocation && hoveredLocation.id === loc.id;

                return (
                  <g 
                    key={loc.id}
                    className="map-marker-group"
                    onClick={() => setSelectedLocation(loc)}
                    onMouseEnter={() => setHoveredLocation(loc)}
                    onMouseLeave={() => setHoveredLocation(null)}
                    style={{ 
                      cursor: 'pointer',
                      opacity: isMapRevealed ? 1 : 0,
                      transform: isMapRevealed 
                        ? (isHovered ? `scale(1.25) translate(0, -2px)` : 'scale(1)') 
                        : 'scale(0.5)',
                      transformOrigin: `${loc.cx}px ${loc.cy}px`,
                      transition: `opacity 0.5s ease ${idx * 0.08 + 0.3}s, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)`
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label={`Map Marker: ${loc.name}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setSelectedLocation(loc);
                      }
                    }}
                  >
                    {/* Subtle Pulsing Highlight Ring for Selected/Hovered Marker */}
                    {(isSelected || isHovered) && (
                      <circle
                        cx={loc.cx}
                        cy={loc.cy}
                        r={isSelected ? 22 : 18}
                        fill="none"
                        stroke="var(--gold-glow)"
                        strokeWidth="2"
                        opacity={0.8}
                        className="map-marker-pulse-ring"
                      />
                    )}

                    {/* Main Marker Node */}
                    <circle
                      cx={loc.cx}
                      cy={loc.cy}
                      r={isSelected ? 14 : 11}
                      fill={isSelected ? 'var(--gold-glow)' : 'var(--red-royal)'}
                      stroke="var(--ivory-base)"
                      strokeWidth="2"
                      style={{ transition: 'fill 0.3s ease, r 0.3s ease' }}
                    />

                    {/* Marker Icon */}
                    <text
                      x={loc.cx}
                      y={loc.cy + 4}
                      textAnchor="middle"
                      fontSize="9"
                      fill="#fff"
                      pointerEvents="none"
                    >
                      {loc.icon}
                    </text>

                    {/* Marker Label */}
                    <text
                      x={loc.cx}
                      y={loc.cy + 22}
                      textAnchor="middle"
                      fill={isSelected ? 'var(--gold-glow)' : 'var(--ivory-base)'}
                      fontSize="10"
                      fontWeight={isSelected ? '800' : '600'}
                      pointerEvents="none"
                      style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)' }}
                    >
                      {loc.name}
                    </text>
                  </g>
                );
              })}

              {/* Hover Tooltip Overlay */}
              {hoveredLocation && (
                <g 
                  transform={`translate(${hoveredLocation.cx}, ${hoveredLocation.cy - 30})`}
                  style={{ pointerEvents: 'none', animation: 'fadeIn 0.2s ease' }}
                >
                  <rect 
                    x="-65" 
                    y="-16" 
                    width="130" 
                    height="24" 
                    rx="6" 
                    fill="rgba(4, 15, 11, 0.95)" 
                    stroke="var(--gold-glow)" 
                    strokeWidth="1.5" 
                  />
                  <text 
                    x="0" 
                    y="0" 
                    textAnchor="middle" 
                    fill="var(--gold-glow)" 
                    fontSize="10" 
                    fontWeight="700"
                  >
                    {hoveredLocation.icon} {hoveredLocation.name}
                  </text>
                </g>
              )}
            </svg>

            <p style={{ color: 'var(--gold-glow)', fontSize: '0.85rem', marginTop: '0.75rem', fontStyle: 'italic' }}>
              💡 Hover over or click any marker node to inspect destination details.
            </p>
          </div>

          {/* Active Location Inspector Card with Slide/Fade Entrance */}
          <div 
            key={selectedLocation.id}
            className="map-inspector-card"
            style={{
              background: 'rgba(9, 18, 14, 0.88)',
              border: '2px solid var(--gold-glow)',
              borderRadius: 'var(--radius-lg)',
              padding: '2rem',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5)',
              minHeight: '380px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              animation: 'mapInspectorFadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span className="card-tag" style={{ margin: 0 }}>
                  {selectedLocation.category}
                </span>
                <span style={{ fontSize: '1.8rem' }} aria-hidden="true">
                  {selectedLocation.icon}
                </span>
              </div>

              <h4 style={{ fontSize: '2.1rem', fontWeight: 800, color: 'var(--ivory-base)', margin: '0.2rem 0' }}>
                {selectedLocation.name}
              </h4>

              <p style={{ color: 'var(--gold-glow)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                📍 {selectedLocation.district}
              </p>

              <div 
                style={{
                  background: 'rgba(245, 158, 11, 0.08)',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.15rem',
                  marginBottom: '1.5rem'
                }}
              >
                <p style={{ color: 'var(--ivory-base)', fontSize: '1.02rem', lineHeight: 1.7 }}>
                  {selectedLocation.desc}
                </p>
              </div>
            </div>

            {/* Quick Action Button to Jump to Dedicated Section */}
            <div>
              <button
                className="btn-primary"
                onClick={() => handleSmoothScroll(selectedLocation.targetSection)}
                style={{ width: '100%', justifyContent: 'center', fontSize: '1rem', padding: '0.85rem 1.5rem' }}
              >
                <span>{selectedLocation.targetSectionLabel}</span>
                <span>→</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
