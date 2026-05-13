import { createElementFromHTML, createList } from '../utils/dom.js';

export const createAwards = ({ awards }) =>
  createElementFromHTML(`
    <main class="page-content">
      <section class="page-hero glass-panel">
        <p class="eyebrow">Recognition</p>
        <h1>Academic distinctions and milestones</h1>
        <p class="page-subtitle">Recognition anchored in examinations, academic performance, and research output.</p>
      </section>

      <section class="awards-container">
        ${createList(
          awards,
          (award) => `
            <article class="award-item glass-panel">
              <div class="award-year">
                <i class="fa-solid fa-trophy"></i>
                ${award.year}
              </div>
              <div class="award-content">
                <h3>${award.title}</h3>
                <p>${award.description}</p>
              </div>
            </article>
          `
        )}
      </section>
    </main>
  `);
