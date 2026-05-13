import { createElementFromHTML, createList } from '../utils/dom.js';

export const createEducation = ({ education }) =>
  createElementFromHTML(`
    <main class="page-content">
      <section class="page-hero glass-panel">
        <p class="eyebrow">Education</p>
        <h1>Academic foundation</h1>
        <p class="page-subtitle">A progression from strong school performance to advanced training in computer science and artificial intelligence.</p>
      </section>

      <section class="education-cards">
        ${createList(
          education,
          (edu) => `
            <article class="education-card glass-panel">
              <div class="edu-header">
                <div>
                  <h3>${edu.degree}</h3>
                  <p class="institution"><i class="fa-solid fa-building"></i> ${edu.institution}</p>
                </div>
                <span class="year">${edu.year}</span>
              </div>
              ${edu.focus ? `<p class="focus"><strong>Focus:</strong> ${edu.focus}</p>` : ''}
              <p class="score"><strong>Score:</strong> ${edu.score}</p>
              ${edu.notes ? `<p class="edu-notes">${edu.notes}</p>` : ''}
            </article>
          `
        )}
      </section>
    </main>
  `);
