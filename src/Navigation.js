import { createElementFromHTML } from '../utils/dom.js';

export const createNavigation = ({ shortName, profilePhoto }, activePage = 'home') =>
  createElementFromHTML(`
    <header class="site-header glass-panel sticky">
      <div class="header-container">
        <a class="brand" href="/">
          <img src="${profilePhoto}" alt="${shortName}" class="brand-photo" />
          ${shortName}
        </a>
        <nav class="nav-links" aria-label="Main navigation">
          <a href="/about.html" class="${activePage === 'about' ? 'active' : ''}">About</a>
          <a href="/research.html" class="${activePage === 'research' ? 'active' : ''}">Research</a>
          <a href="/projects.html" class="${activePage === 'projects' ? 'active' : ''}">Projects</a>
          <a href="/education.html" class="${activePage === 'education' ? 'active' : ''}">Education</a>
          <a href="/experience.html" class="${activePage === 'experience' ? 'active' : ''}">Experience</a>
          <a href="/awards.html" class="${activePage === 'awards' ? 'active' : ''}">Awards</a>
          <a href="/teaching.html" class="${activePage === 'teaching' ? 'active' : ''}">Teaching</a>
          <a href="/skills.html" class="${activePage === 'skills' ? 'active' : ''}">Skills</a>
          <a href="/contact.html" class="${activePage === 'contact' ? 'active' : ''}">Contact</a>
        </nav>
        <div class="nav-actions">
          <button class="btn-icon" aria-label="Download resume" title="Download Resume">
            <i class="fa-solid fa-download"></i>
          </button>
        </div>
      </div>
    </header>
  `);
