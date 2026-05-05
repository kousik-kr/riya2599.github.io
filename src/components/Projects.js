import { createElementFromHTML, createList } from '../utils/dom.js';

export const createProjects = ({ projects }) =>
  createElementFromHTML(`
    <section id="projects" class="content-section">
      <div class="section-heading">
        <p class="eyebrow">Portfolio</p>
        <h2>Featured Projects</h2>
      </div>
      <div class="projects-grid">
        ${createList(
          projects,
          (project) => `
            <article class="project-card glass-panel">
              <div class="project-header">
                <h3>${project.title}</h3>
                <a href="${project.link}" class="project-link" aria-label="View project">
                  <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
              <p class="project-description">${project.description}</p>
              <div class="project-meta">
                <div class="tech-stack">
                  ${createList(project.technologies, (tech) => `<span class="tech-badge">${tech}</span>`)}
                </div>
                <p class="project-impact"><i class="fa-solid fa-star"></i> ${project.impact}</p>
              </div>
            </article>
          `
        )}
      </div>
    </section>
  `);
