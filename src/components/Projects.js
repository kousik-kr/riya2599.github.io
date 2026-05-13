import { createElementFromHTML, createList } from '../utils/dom.js';

export const createProjects = ({ projects }) =>
  createElementFromHTML(`
    <main class="page-content">
      <section class="page-hero glass-panel">
        <p class="eyebrow">Projects</p>
        <h1>Applied AI and software portfolio</h1>
        <p class="page-subtitle">A project set spanning NLP research, deep learning, healthcare prediction, and academic software systems.</p>
      </section>

      <section class="projects-grid">
        ${createList(
          projects,
          (project) => `
            <article class="project-card glass-panel">
              <div class="project-header">
                <span class="project-category">${project.category}</span>
                <i class="fa-solid fa-arrow-up-right-from-square project-mark"></i>
              </div>
              <h3>${project.title}</h3>
              <p class="project-description">${project.description}</p>
              <div class="tech-stack">
                ${createList(project.technologies, (tech) => `<span class="tech-badge">${tech}</span>`)}
              </div>
              <p class="project-impact"><i class="fa-solid fa-flask-vial"></i> ${project.impact}</p>
            </article>
          `
        )}
      </section>
    </main>
  `);
