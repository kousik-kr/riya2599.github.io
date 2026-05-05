import { createElementFromHTML, createList } from '../utils/dom.js';

export const createResearch = ({ publications }) =>
  createElementFromHTML(`
    <section id="research" class="content-section">
      <div class="section-heading">
        <p class="eyebrow">Research</p>
        <h2>Publications</h2>
        <p class="section-subtitle">Peer-reviewed work in machine learning and human-AI interaction</p>
      </div>
      <div class="publications-list">
        ${createList(
          publications,
          (pub) => `
            <article class="publication-item glass-panel">
              <div class="pub-header">
                <span class="year">${pub.year}</span>
                <span class="pub-type">${pub.type === 'conference' ? 'Conference' : 'Journal'}</span>
              </div>
              <h3>${pub.title}</h3>
              <p class="venue"><i class="fa-solid fa-book"></i> ${pub.venue}</p>
            </article>
          `
        )}
      </div>
    </section>
  `);
