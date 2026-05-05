import { createElementFromHTML, createList } from '../utils/dom.js';

export const createSkills = ({ skills }) =>
  createElementFromHTML(`
    <section class="content-section skills-section">
      <div class="section-heading">
        <p class="eyebrow">Expertise</p>
        <h2>Technical Skills</h2>
      </div>
      <div class="skills-grid">
        <article class="skill-category glass-panel">
          <h3><i class="fa-solid fa-code"></i> Programming Languages</h3>
          <div class="skill-tags">
            ${createList(skills.languages, (lang) => `<span class="skill-tag">${lang}</span>`)}
          </div>
        </article>
        
        <article class="skill-category glass-panel">
          <h3><i class="fa-solid fa-cube"></i> ML Frameworks</h3>
          <div class="skill-tags">
            ${createList(skills.frameworks, (fw) => `<span class="skill-tag">${fw}</span>`)}
          </div>
        </article>
        
        <article class="skill-category glass-panel">
          <h3><i class="fa-solid fa-wrench"></i> Tools & Platforms</h3>
          <div class="skill-tags">
            ${createList(skills.tools, (tool) => `<span class="skill-tag">${tool}</span>`)}
          </div>
        </article>
        
        <article class="skill-category glass-panel">
          <h3><i class="fa-solid fa-flask"></i> Research Areas</h3>
          <div class="skill-tags">
            ${createList(skills.research, (area) => `<span class="skill-tag research-tag">${area}</span>`)}
          </div>
        </article>
      </div>
    </section>
  `);
