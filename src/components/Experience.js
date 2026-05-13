import { createElementFromHTML, createList } from '../utils/dom.js';

export const createExperience = ({ experiences }) =>
  createElementFromHTML(`
    <main class="page-content">
      <section class="page-hero glass-panel">
        <p class="eyebrow">Experience</p>
        <h1>Research and AI internship experience</h1>
        <p class="page-subtitle">Hands-on work across research, computer vision, and NLP problem settings.</p>
      </section>

      <section class="experience-timeline">
        ${createList(
          experiences,
          (exp) => `
            <article class="experience-card glass-panel">
              <div class="exp-header">
                <div>
                  <h3>${exp.role}</h3>
                  <p class="company"><i class="fa-solid fa-building"></i> ${exp.organization}</p>
                </div>
                <span class="period">${exp.period}</span>
              </div>
              <p class="location"><i class="fa-solid fa-location-dot"></i> ${exp.location}</p>
              <p class="description">${exp.description}</p>
              <ul class="detail-list">
                ${createList(exp.highlights, (item) => `<li>${item}</li>`)}
              </ul>
            </article>
          `
        )}
      </section>
    </main>
  `);
