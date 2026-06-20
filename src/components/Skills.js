import { createElementFromHTML, createList } from '../utils/dom.js';

export const createSkills = ({ skillGroups, professionalStrengths }) =>
  createElementFromHTML(`
    <main class="page-content">
      <section class="page-hero glass-panel">
        <p class="eyebrow">Skills</p>
        <h1>Technical breadth with strong CS fundamentals</h1>
        <p class="page-subtitle">Programming, AI methods, development tools, and core computer science foundations.</p>
      </section>

      <section class="skills-grid">
        ${createList(
          skillGroups,
          (group) => `
            <article class="skill-category glass-panel">
              <h3><i class="fa-solid ${group.icon}"></i> ${group.title}</h3>
              <div class="skill-tags">
                ${createList(group.items, (item) => `<span class="skill-tag">${item}</span>`)}
              </div>
            </article>
          `
        )}
      </section>

      <section class="glass-panel prose-panel">
        <h2>Professional strengths</h2>
        <div class="focus-tags">
          ${createList(professionalStrengths, (item) => `<span class="tag subtle-tag">${item}</span>`)}
        </div>
      </section>
    </main>
  `);
