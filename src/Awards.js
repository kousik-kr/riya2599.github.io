import { createElementFromHTML, createList } from '../utils/dom.js';

export const createAwards = ({ awards }) =>
  createElementFromHTML(`
    <section class="content-section">
      <div class="section-heading">
        <p class="eyebrow">Recognition</p>
        <h2>Awards & Honors</h2>
      </div>
      <div class="awards-container">
        ${createList(
          awards,
          (award) => `
            <article class="award-item glass-panel">
              <div class="award-year"><i class="fa-solid fa-trophy"></i> ${award.year}</div>
              <div class="award-content">
                <h3>${award.title}</h3>
                <p>${award.description}</p>
              </div>
            </article>
          `
        )}
      </div>
    </section>
  `);
