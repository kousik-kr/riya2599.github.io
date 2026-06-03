import { createElementFromHTML, createList } from '../utils/dom.js';

export const createHero = ({ fullName, role, university, location, heroStatement, focusAreas, metrics, heroVisual, department }) =>
  createElementFromHTML(`
    <section id="home" class="hero section-grid">
      <div class="hero-visual-container">
        <img src="${heroVisual}" alt="Medical imaging robustness visualization" class="hero-visual" />
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <h1>${fullName}</h1>
        <h2>${role}</h2>
        <p class="hero-meta"><i class="fa-solid fa-building-columns"></i> ${university}</p>
        <p class="hero-meta"><i class="fa-solid fa-door-open"></i> ${department}</p>
        <p class="hero-meta-location"><i class="fa-solid fa-map-pin"></i> ${location}</p>
        <p class="hero-statement">${heroStatement}</p>
        <div class="focus-tags" aria-label="Research focus areas">
          ${createList(focusAreas, (area) => `<span class="tag accent-tag"><i class="fa-solid fa-check"></i> ${area}</span>`)}
        </div>
        <div class="hero-actions">
          <a href="/research.html" class="btn btn-primary"><i class="fa-solid fa-book-open"></i> View Research</a>
          <a href="/contact.html" class="btn btn-secondary"><i class="fa-solid fa-envelope"></i> Get in Touch</a>
        </div>
      </div>
      <aside class="hero-card glass-panel" aria-label="Research metrics">
        <h3><i class="fa-solid fa-chart-line"></i> Research Profile</h3>
        <ul class="quick-stats">
          ${createList(metrics, (metric) => `<li><strong>${metric.value}</strong> ${metric.label}</li>`)}
        </ul>
      </aside>
    </section>
  `);
