import { createElementFromHTML, createList } from '../utils/dom.js';

export const createTeaching = ({ credentials, academicActivities }) =>
  createElementFromHTML(`
    <main class="page-content">
      <section class="page-hero glass-panel">
        <p class="eyebrow">Credentials</p>
        <h1>Certifications and academic activities</h1>
        <p class="page-subtitle">Supplementary credentials and campus contributions that round out the research profile.</p>
      </section>

      <section class="teaching-grid">
        ${createList(
          credentials,
          (item) => `
            <article class="teaching-card glass-panel">
              <h3><i class="fa-solid ${item.icon}"></i> ${item.title}</h3>
              <p class="course-name">${item.issuer}</p>
              <p class="semesters">${item.year}</p>
              <p class="responsibilities">${item.description}</p>
            </article>
          `
        )}
      </section>

      <section class="glass-panel prose-panel">
        <h2>Additional academic activities</h2>
        <ul class="detail-list">
          ${createList(academicActivities, (item) => `<li>${item}</li>`)}
        </ul>
      </section>
    </main>
  `);
