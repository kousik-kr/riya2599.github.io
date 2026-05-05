import { createElementFromHTML, createList } from '../utils/dom.js';

export const createHero = ({ fullName, role, university, location, heroStatement, focusAreas, advisor, profilePhoto }) =>
  createElementFromHTML(`
    <section id="home" class="hero section-grid">
      <div class="hero-content">
        <h1>${fullName}</h1>
        <h2>${role}</h2>
        <p class="hero-meta"><i class="fa-solid fa-building-columns"></i> ${university}</p>
        <p class="hero-meta-location"><i class="fa-solid fa-map-pin"></i> ${location}</p>
        <p class="hero-meta-advisor"><i class="fa-solid fa-user-tie"></i> Advisor: ${advisor}</p>
        <p class="hero-statement">${heroStatement}</p>
        <div class="focus-tags" aria-label="Research focus areas">
          ${createList(focusAreas, (area) => `<span class="tag accent-tag"><i class="fa-solid fa-star"></i> ${area}</span>`)}
        </div>
        <div class="hero-actions">
          <a href="/research.html" class="btn btn-primary"><i class="fa-solid fa-book-open"></i> View Research</a>
          <a href="/contact.html" class="btn btn-secondary"><i class="fa-solid fa-envelope"></i> Get in Touch</a>
        </div>
      </div>
      <aside class="hero-card glass-panel floating" aria-label="Profile and quick facts">
        <div class="profile-photo-container">
          <img src="${profilePhoto}" alt="Riya Goyal" class="profile-photo" />
          <span class="photo-badge"><i class="fa-solid fa-camera"></i></span>
        </div>
        <h3><i class="fa-solid fa-fire"></i> Highlights</h3>
        <ul class="quick-stats">
          <li><strong>7</strong> Publications</li>
          <li><strong>Top Tier</strong> Venues (NeurIPS, CHI)</li>
          <li><strong>FAANG</strong> Internships</li>
          <li><strong>2k+</strong> GitHub Stars</li>
        </ul>
      </aside>
    </section>
  `);
