import { createElementFromHTML, createList } from '../utils/dom.js';

export const createAbout = ({ fullName, role, biography, researchInterests, aboutSections, affiliation, location }) =>
  createElementFromHTML(`
    <main class="page-content">
      <section class="page-hero glass-panel">
        <p class="eyebrow">About</p>
        <h1>${fullName}</h1>
        <p class="page-subtitle">${role}</p>
        <div class="hero-meta-row">
          <span><i class="fa-solid fa-building-columns"></i> ${affiliation}</span>
          <span><i class="fa-solid fa-location-dot"></i> ${location}</span>
        </div>
      </section>

      <section class="split-layout">
        <article class="glass-panel prose-panel">
          <h2>Research profile</h2>
          ${createList(biography, (paragraph) => `<p>${paragraph}</p>`)}
        </article>

        <article class="glass-panel prose-panel">
          <h2>Current research interests</h2>
          <div class="interest-grid">
            ${createList(
              researchInterests,
              (item) => `
                <div class="interest-item">
                  <i class="fa-solid ${item.icon}"></i>
                  <h3>${item.title}</h3>
                  <p>${item.description}</p>
                </div>
              `
            )}
          </div>
        </article>
      </section>

      <section class="glass-panel narrative-panel">
        <div class="section-heading">
          <p class="eyebrow">Positioning</p>
          <h2>What defines the work</h2>
        </div>
        <div class="cards-grid">
          ${createList(
            aboutSections,
            (section) => `
              <article class="feature-card feature-card-tight">
                <h3>${section.title}</h3>
                <p>${section.description}</p>
              </article>
            `
          )}
        </div>
      </section>
    </main>
  `);
