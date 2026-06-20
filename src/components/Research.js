import { createElementFromHTML, createList } from '../utils/dom.js';

export const createResearch = ({ publicationIntro, publications, researchThemes }) =>
  createElementFromHTML(`
    <main class="page-content">
      <section class="page-hero glass-panel">
        <p class="eyebrow">Research</p>
        <h1>Publications and research themes</h1>
        <p class="page-subtitle">${publicationIntro}</p>
      </section>

      <section class="cards-grid">
        ${createList(
          researchThemes,
          (theme) => `
            <article class="feature-card glass-panel">
              <i class="fa-solid ${theme.icon}"></i>
              <h3>${theme.title}</h3>
              <p>${theme.description}</p>
            </article>
          `
        )}
      </section>

      <section class="content-section">
        <div class="section-heading">
          <p class="eyebrow">Selected work</p>
          <h2>Peer-reviewed publications</h2>
        </div>
        <div class="publications-list">
          ${createList(
            publications,
            (pub) => `
              <article class="publication-item glass-panel">
                <div class="pub-header">
                  <span class="year">${pub.year}</span>
                  <span class="pub-type">${pub.type}</span>
                </div>
                <h3>${pub.title}</h3>
                <p class="pub-authors">${pub.authors}</p>
                <p class="venue"><i class="fa-solid fa-book"></i> ${pub.venue}</p>
                <p class="publication-summary">${pub.summary}</p>
                <a href="${pub.url}" class="inline-link" target="_blank" rel="noopener noreferrer">
                  DOI: ${pub.doi}
                </a>
              </article>
            `
          )}
        </div>
      </section>
    </main>
  `);
