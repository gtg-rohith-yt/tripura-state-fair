import React from 'react';
import { TRIPURA_BASIC_INFO } from '../data/tripuraData';

export default function Header() {
  return (
    <header className="header-nav" role="banner">
      <a href="#" className="brand-logo" aria-label="Tripura State Fair Home">
        <span>🏛️ {TRIPURA_BASIC_INFO.name} State Fair</span>
        <span className="brand-badge">{TRIPURA_BASIC_INFO.capital}</span>
      </a>
      <nav aria-label="Main Navigation">
        <ul className="nav-links">
          <li><a href="#overview" className="active">Overview</a></li>
          <li><a href="#history-culture">Heritage</a></li>
          <li><a href="#nature-wildlife">Nature</a></li>
          <li><a href="#crafts-festivals">Culture</a></li>
        </ul>
      </nav>
    </header>
  );
}
