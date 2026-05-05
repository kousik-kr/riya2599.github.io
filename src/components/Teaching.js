import { createElementFromHTML, createList } from '../utils/dom.js';

export const createTeaching = ({ teaching }) =>
  createElementFromHTML(`
    <section id="teaching" class="content-section">
      <div class="section-heading">
        <p class="eyebrow">Teaching & Mentorship</p>
        <h2>Academic Contributions</h2>
      </div>
      <div class="teaching-grid">
        ${createList(
          teaching,
          (course) => `
            <article class="teaching-card glass-panel">
              <h3><i class="fa-solid fa-book-open-reader"></i> ${course.role}</h3>
              <p class="course-name"><strong>${course.course}</strong></p>
              <p class="semesters"><i class="fa-solid fa-calendar"></i> ${course.semesters.join(', ')}</p>
              <p class="responsibilities">${course.responsibilities}</p>
            </article>
          `
        )}
      </div>
    </section>
  `);
