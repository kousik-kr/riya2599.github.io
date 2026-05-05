import { createElementFromHTML, createList } from '../utils/dom.js';

export const createHighlights = ({ highlights }) =>
  createElementFromHTML(`
    <section id="about" class="content-section">
      <div class="section-heading">
        <p class="eyebrow">Strengths</p>
        <h2>Why Riya Stands Out</h2>
      </div>
      <div class="cards-grid">
        ${createList(
          highlights,
          (item) => `
            <article class="feature-card glass-panel">
              <i class="fa-solid ${item.icon}"></i>
              <h3>${item.title}</h3>
              <p>${item.description}</p>
            </article>
          `
        )}
      </div>
    </section>
  `);
