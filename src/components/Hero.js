import { createElementFromHTML, createList } from '../utils/dom.js';

export const createHero = ({
  fullName,
  role,
  headline,
  affiliation,
  location,
  heroStatement,
  focusAreas,
  heroBadges,
  heroFacts,
  profilePhoto,
  resumeUrl
}) =>
  createElementFromHTML(`
    <section id="home" class="hero">
      <div class="hero-content glass-panel">
        <p class="eyebrow">Applied AI Researcher</p>
        <h1>${fullName}</h1>
        <p class="hero-role">${role}</p>
        <p class="hero-headline">${headline}</p>
        <div class="hero-meta-row">
          <span><i class="fa-solid fa-building-columns"></i> ${affiliation}</span>
          <span><i class="fa-solid fa-location-dot"></i> ${location}</span>
        </div>
        <p class="hero-statement">${heroStatement}</p>
        <div class="focus-tags" aria-label="Research focus areas">
          ${createList(
            focusAreas,
            (area) => `<span class="tag accent-tag"><i class="fa-solid fa-sparkles"></i> ${area}</span>`
          )}
        </div>
        <div class="hero-badges" aria-label="Research profile badges">
          ${createList(heroBadges, (badge) => `<span class="tag subtle-tag">${badge}</span>`)}
        </div>
        <div class="hero-actions">
          <a href="/research.html" class="btn btn-primary">
            <i class="fa-solid fa-book-open-reader"></i>
            Selected Research
          </a>
          <a href="/projects.html" class="btn btn-secondary">
            <i class="fa-solid fa-diagram-project"></i>
            Projects
          </a>
          <a href="${resumeUrl}" class="btn btn-ghost" target="_blank" rel="noopener noreferrer">
            <i class="fa-solid fa-file-pdf"></i>
            Download Resume
          </a>
        </div>
      </div>

      <aside class="hero-card glass-panel" aria-label="Research snapshot">
        <div class="profile-photo-container">
          <img src="${profilePhoto}" alt="${fullName}" class="profile-photo" />
          <span class="photo-badge">RG</span>
        </div>
        <div class="snapshot-copy">
          <p class="eyebrow">Snapshot</p>
          <h2>Research profile at a glance</h2>
        </div>
        <ul class="quick-stats">
          ${createList(
            heroFacts,
            (fact) => `
              <li>
                <strong>${fact.value}</strong>
                <span>${fact.label}</span>
              </li>
            `
          )}
        </ul>
      </aside>
    </section>
  `);
