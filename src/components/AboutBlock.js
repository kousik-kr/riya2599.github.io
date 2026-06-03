import { createElementFromHTML } from '../utils/dom.js';

export const createAboutBlock = ({ fullName, researchTheme, university, heroStatement }) =>
  createElementFromHTML(`
    <section class="about-block-section">
      <div class="about-block-container glass-panel">
        <div class="about-block-aside" aria-label="Current research theme">
          <span class="about-block-label">Current Research</span>
          <strong>${researchTheme}</strong>
        </div>
        <div class="about-block-content">
          <p class="eyebrow">Profile Summary</p>
          <h2>${fullName}</h2>
          <p>${heroStatement}</p>
          <p>
            Her academic work at ${university} is positioned around dependable AI for healthcare imaging, with
            foundations in deep learning, computer vision, NLP, and applied machine learning.
          </p>
        </div>
      </div>
    </section>
  `);
