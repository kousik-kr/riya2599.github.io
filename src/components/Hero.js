import { createElementFromHTML, createList } from '../utils/dom.js';

export const createHero = ({
  fullName,
  role,
  university,
  location,
  heroStatement,
  focusAreas,
  department,
  heroKicker,
  heroVisual,
  quickFacts,
  cvUrl
}) =>
  createElementFromHTML(`
    <section id="home" class="hero" style="--hero-image: url('${heroVisual}');">
      <div class="hero-inner">
        <div class="hero-content">
          <p class="eyebrow">${heroKicker}</p>
          <h1>${fullName}</h1>
          <h2>${role}</h2>
          <div class="hero-meta-group" aria-label="Academic affiliation">
            <p class="hero-meta"><i class="fa-solid fa-building-columns"></i> ${university}</p>
            <p class="hero-meta"><i class="fa-solid fa-microscope"></i> ${department}</p>
            <p class="hero-meta"><i class="fa-solid fa-location-dot"></i> ${location}</p>
          </div>
          <p class="hero-statement">${heroStatement}</p>
          <div class="focus-tags" aria-label="Research focus areas">
            ${createList(focusAreas, (area) => `<span class="tag">${area}</span>`)}
          </div>
          <div class="hero-actions">
            <a href="/research.html" class="btn btn-primary"><i class="fa-solid fa-book-open"></i> Research</a>
            <a href="${cvUrl}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-file-pdf"></i> CV</a>
          </div>
        </div>

        <aside class="hero-card" aria-label="Research profile">
          <h3>Research Profile</h3>
          <ul class="quick-stats">
            ${createList(
              quickFacts,
              (item) => `
                <li>
                  <span>${item.label}</span>
                  <strong>${item.value}</strong>
                </li>
              `
            )}
          </ul>
        </aside>
      </div>
    </section>
  `);
