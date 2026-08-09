import React, { useState } from 'react';

export default function TripuraMapPlaceholder() {
  const [selectedDistrict, setSelectedDistrict] = useState('West Tripura');

  const districtsData = [
    {
      id: 'west-tripura',
      name: 'West Tripura',
      headquarters: 'Agartala',
      landmark: 'Ujjayanta Palace & State Museum',
      desc: 'The political and cultural heart of Tripura, housing the capital Agartala and historic royal monuments.'
    },
    {
      id: 'sepahijala',
      name: 'Sepahijala District',
      headquarters: 'Bishramganj',
      landmark: 'Neermahal Water Palace & Wildlife Sanctuary',
      desc: 'Home to the famous Rudrasagar Lake, Neermahal Water Palace, and Phayre’s Leaf Monkey reserve.'
    },
    {
      id: 'khowai',
      name: 'Khowai District',
      headquarters: 'Khowai',
      landmark: 'Badtali & Tea Gardens',
      desc: 'Famous for rolling tea estates, bamboo handicraft centers, and scenic river valley views.'
    },
    {
      id: 'gomati',
      name: 'Gomati District',
      headquarters: 'Udaipur',
      landmark: 'Tripura Sundari Temple (Matabari)',
      desc: 'The ancient temple town of Udaipur, renowned for the 500-year-old Tripura Sundari Shakti Peetha.'
    },
    {
      id: 'south-tripura',
      name: 'South Tripura',
      headquarters: 'Belonia',
      landmark: 'Trishna Wildlife Sanctuary & Pilak Archaeology',
      desc: 'Protects the endangered Indian Gaur (bison) and ancient 8th-century Buddhist archaeological sites at Pilak.'
    },
    {
      id: 'dhalai',
      name: 'Dhalai District',
      headquarters: 'Ambassa',
      landmark: 'Longtharai Valley & Dense Rainforests',
      desc: 'The largest district in Tripura, featuring primary tropical forests and tribal indigenous settlements.'
    },
    {
      id: 'unakoti',
      name: 'Unakoti District',
      headquarters: 'Kailashahar',
      landmark: 'Unakoti Rock-Cut Reliefs',
      desc: 'World-famous Shaivite pilgrimage site featuring ancient rock carvings sculpted directly into green hill slopes.'
    },
    {
      id: 'north-tripura',
      name: 'North Tripura',
      headquarters: 'Dharmanagar',
      landmark: 'Jampui Hills (Seat of Spring)',
      desc: 'Home to Tripura’s highest mountain ranges, pleasant year-round climate, and famous orange orchards.'
    }
  ];

  const activeDistrictInfo = districtsData.find(d => d.name === selectedDistrict) || districtsData[0];

  return (
    <div className="map-section-wrapper" style={{ marginTop: '4rem' }}>
      <div 
        style={{
          background: 'linear-gradient(135deg, rgba(6, 78, 59, 0.4), rgba(9, 18, 14, 0.85))',
          border: '1px solid var(--border-gold)',
          borderRadius: 'var(--radius-xl)',
          padding: '2.5rem',
          boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4)'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span className="card-tag">Interactive Preview</span>
          <h3 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--ivory-base)', margin: '0.4rem 0' }}>
            Tripura Geographic & District Map
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '650px', margin: '0 auto' }}>
            Interactive local vector visualization preview of Tripura's 8 administrative districts and regional landmarks.
          </p>
        </div>

        <div className="map-grid-container">
          {/* Custom Local SVG Graphic Map Outline */}
          <div 
            style={{
              background: 'rgba(9, 18, 14, 0.8)',
              border: '1px solid var(--border-gold)',
              borderRadius: 'var(--radius-lg)',
              padding: '2rem',
              textAlign: 'center',
              position: 'relative'
            }}
          >
            <svg 
              viewBox="0 0 400 450" 
              style={{ width: '100%', maxHeight: '360px', filter: 'drop-shadow(0 0 15px rgba(245, 158, 11, 0.3))' }}
              aria-label="Tripura District Vector Map"
            >
              {/* Decorative State Border Backdrop */}
              <path 
                d="M 120 40 L 220 30 L 320 80 L 350 200 L 280 320 L 200 420 L 100 380 L 60 260 L 80 120 Z" 
                fill="rgba(6, 78, 59, 0.25)" 
                stroke="var(--gold-glow)" 
                strokeWidth="2"
                strokeDasharray="4 4"
              />

              {/* Vector Representation Nodes of 8 Districts */}
              {/* North Tripura */}
              <g onClick={() => setSelectedDistrict('North Tripura')} style={{ cursor: 'pointer' }}>
                <circle cx="290" cy="90" r="28" fill={selectedDistrict === 'North Tripura' ? 'var(--gold-glow)' : 'rgba(136, 19, 55, 0.6)'} stroke="var(--ivory-base)" strokeWidth="2" />
                <text x="290" y="94" textAnchor="middle" fill={selectedDistrict === 'North Tripura' ? '#000' : '#fff'} fontSize="10" fontWeight="bold">North</text>
              </g>

              {/* Unakoti */}
              <g onClick={() => setSelectedDistrict('Unakoti District')} style={{ cursor: 'pointer' }}>
                <circle cx="230" cy="110" r="24" fill={selectedDistrict === 'Unakoti District' ? 'var(--gold-glow)' : 'rgba(6, 78, 59, 0.7)'} stroke="var(--ivory-base)" strokeWidth="2" />
                <text x="230" y="114" textAnchor="middle" fill={selectedDistrict === 'Unakoti District' ? '#000' : '#fff'} fontSize="9" fontWeight="bold">Unakoti</text>
              </g>

              {/* Dhalai */}
              <g onClick={() => setSelectedDistrict('Dhalai District')} style={{ cursor: 'pointer' }}>
                <circle cx="240" cy="180" r="32" fill={selectedDistrict === 'Dhalai District' ? 'var(--gold-glow)' : 'rgba(136, 19, 55, 0.5)'} stroke="var(--ivory-base)" strokeWidth="2" />
                <text x="240" y="184" textAnchor="middle" fill={selectedDistrict === 'Dhalai District' ? '#000' : '#fff'} fontSize="11" fontWeight="bold">Dhalai</text>
              </g>

              {/* Khowai */}
              <g onClick={() => setSelectedDistrict('Khowai District')} style={{ cursor: 'pointer' }}>
                <circle cx="160" cy="160" r="22" fill={selectedDistrict === 'Khowai District' ? 'var(--gold-glow)' : 'rgba(6, 78, 59, 0.7)'} stroke="var(--ivory-base)" strokeWidth="2" />
                <text x="160" y="164" textAnchor="middle" fill={selectedDistrict === 'Khowai District' ? '#000' : '#fff'} fontSize="9" fontWeight="bold">Khowai</text>
              </g>

              {/* West Tripura (Agartala) */}
              <g onClick={() => setSelectedDistrict('West Tripura')} style={{ cursor: 'pointer' }}>
                <circle cx="110" cy="190" r="30" fill={selectedDistrict === 'West Tripura' ? 'var(--gold-glow)' : 'rgba(217, 119, 6, 0.7)'} stroke="var(--ivory-base)" strokeWidth="2" />
                <text x="110" y="194" textAnchor="middle" fill={selectedDistrict === 'West Tripura' ? '#000' : '#fff'} fontSize="10" fontWeight="bold">Agartala</text>
              </g>

              {/* Sepahijala */}
              <g onClick={() => setSelectedDistrict('Sepahijala District')} style={{ cursor: 'pointer' }}>
                <circle cx="120" cy="260" r="26" fill={selectedDistrict === 'Sepahijala District' ? 'var(--gold-glow)' : 'rgba(136, 19, 55, 0.6)'} stroke="var(--ivory-base)" strokeWidth="2" />
                <text x="120" y="264" textAnchor="middle" fill={selectedDistrict === 'Sepahijala District' ? '#000' : '#fff'} fontSize="9" fontWeight="bold">Sepahijala</text>
              </g>

              {/* Gomati */}
              <g onClick={() => setSelectedDistrict('Gomati District')} style={{ cursor: 'pointer' }}>
                <circle cx="180" cy="270" r="28" fill={selectedDistrict === 'Gomati District' ? 'var(--gold-glow)' : 'rgba(6, 78, 59, 0.7)'} stroke="var(--ivory-base)" strokeWidth="2" />
                <text x="180" y="274" textAnchor="middle" fill={selectedDistrict === 'Gomati District' ? '#000' : '#fff'} fontSize="10" fontWeight="bold">Gomati</text>
              </g>

              {/* South Tripura */}
              <g onClick={() => setSelectedDistrict('South Tripura')} style={{ cursor: 'pointer' }}>
                <circle cx="160" cy="350" r="32" fill={selectedDistrict === 'South Tripura' ? 'var(--gold-glow)' : 'rgba(136, 19, 55, 0.6)'} stroke="var(--ivory-base)" strokeWidth="2" />
                <text x="160" y="354" textAnchor="middle" fill={selectedDistrict === 'South Tripura' ? '#000' : '#fff'} fontSize="10" fontWeight="bold">South</text>
              </g>
            </svg>
            <p style={{ color: 'var(--gold-glow)', fontSize: '0.85rem', marginTop: '0.5rem', fontStyle: 'italic' }}>
              💡 Click any district node to inspect regional details
            </p>
          </div>

          {/* Selected District Info Card */}
          <div 
            style={{
              background: 'rgba(9, 18, 14, 0.85)',
              border: '2px solid var(--gold-glow)',
              borderRadius: 'var(--radius-lg)',
              padding: '2rem',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)'
            }}
          >
            <span className="card-tag">District Details</span>
            <h4 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--ivory-base)', margin: '0.4rem 0' }}>
              {activeDistrictInfo.name}
            </h4>
            <p style={{ color: 'var(--gold-glow)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
              📍 HQ: {activeDistrictInfo.headquarters}
            </p>
            <div style={{ background: 'rgba(245, 158, 11, 0.1)', padding: '0.9rem 1.1rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(245, 158, 11, 0.3)', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--gold-glow)', fontWeight: 700, textTransform: uppercase => uppercase }}>KEY LANDMARK:</span>
              <p style={{ color: 'var(--ivory-base)', fontWeight: 700, fontSize: '1rem', marginTop: '0.2rem' }}>
                🌟 {activeDistrictInfo.landmark}
              </p>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>
              {activeDistrictInfo.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
