import { createElementFromHTML, createList } from '../utils/dom.js';

export const createTeaching = ({ credentials, academicActivities, teaching }) => {
  const teachingCards = (teaching || []).map((course) => ({
    icon: 'fa-book-open-reader',
    title: course.role,
    issuer: course.course,
    year: course.semesters.join(', '),
    description: course.responsibilities
  }));
  const cards = credentials || teachingCards;
  const activities = academicActivities || [];

  return createElementFromHTML(`
    <main class="page-content">
      <section class="page-hero glass-panel">
        <p class="eyebrow">${teaching ? 'Teaching & Mentorship' : 'Credentials'}</p>
        <h1>${teaching ? 'Academic contributions and mentorship' : 'Certifications and academic activities'}</h1>
        <p class="page-subtitle">
          ${
            teaching
              ? 'Research-aligned teaching interests, mentorship, and academic service.'
              : 'Supplementary credentials and campus contributions that round out the research profile.'
          }
        </p>
      </section>

      <section class="teaching-grid">
        ${createList(
          cards,
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

      ${
        activities.length > 0
          ? `
            <section class="glass-panel prose-panel">
              <h2>Additional academic activities</h2>
              <ul class="detail-list">
                ${createList(activities, (item) => `<li>${item}</li>`)}
              </ul>
            </section>
          `
          : ''
      }
    </main>
  `);
};
