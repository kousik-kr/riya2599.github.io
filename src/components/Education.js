import { createElementFromHTML, createList } from '../utils/dom.js';

export const createEducation = ({ education }) =>
  createElementFromHTML(`
    <section id="education" class="content-section">
      <div class="section-heading">
        <p class="eyebrow">Academic Journey</p>
        <h2>Education</h2>
      </div>
      <div class="education-cards">
        ${createList(
          education,
          (edu) => `
            <article class="education-card glass-panel">
              <div class="edu-header">
                <h3>${edu.degree}</h3>
                <span class="year">${edu.year}</span>
              </div>
              <p class="institution"><i class="fa-solid fa-building"></i> ${edu.institution}</p>
              ${edu.focus ? `<p class="focus"><strong>Focus:</strong> ${edu.focus}</p>` : ''}
              ${edu.advisor ? `<p class="advisor"><strong>Advisor:</strong> ${edu.advisor}</p>` : ''}
              ${edu.gpa ? `<p class="gpa"><strong>GPA:</strong> ${edu.gpa}</p>` : ''}
              ${edu.honors ? `<p class="honors"><i class="fa-solid fa-medal"></i> ${edu.honors}</p>` : ''}
            </article>
          `
        )}
      </div>
    </section>
  `);
