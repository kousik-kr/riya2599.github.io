import { createElementFromHTML, createList } from '../utils/dom.js';

export const createExperience = ({ experiences }) =>
  createElementFromHTML(`
    <section id="experience" class="content-section">
      <div class="section-heading">
        <p class="eyebrow">Professional Experience</p>
        <h2>Internships & Work</h2>
      </div>
      <div class="experience-timeline">
        ${createList(
          experiences,
          (exp) => `
            <article class="experience-card glass-panel">
              <div class="exp-header">
                <div>
                  <h3>${exp.role}</h3>
                  <p class="company"><i class="fa-solid fa-building"></i> ${exp.company}</p>
                </div>
                <span class="period">${exp.period}</span>
              </div>
              <p class="location"><i class="fa-solid fa-map-pin"></i> ${exp.location}</p>
              <p class="description">${exp.description}</p>
            </article>
          `
        )}
      </div>
    </section>
  `);
