import { createElementFromHTML } from '../utils/dom.js';

export const createHeader = ({ shortName }) =>
  createElementFromHTML(`
    <header class="site-header glass-panel sticky">
      <div class="header-container">
        <a class="brand" href="#home">
          <i class="fa-solid fa-flask-vial"></i>
          ${shortName}
        </a>
        <nav class="nav-links" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#research">Research</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <div class="nav-actions">
          <button class="btn-icon" aria-label="Download resume" title="Download Resume">
            <i class="fa-solid fa-download"></i>
          </button>
        </div>
      </div>
    </header>
  `);
