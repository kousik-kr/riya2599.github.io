import { createElementFromHTML } from '../utils/dom.js';

export const createNavigation = ({ shortName, initials, profilePhoto, cvUrl }, activePage = 'home') => {
  const brandMark = profilePhoto
    ? `<img src="${profilePhoto}" alt="${shortName}" class="brand-photo" />`
    : `<span class="brand-monogram" aria-hidden="true">${initials}</span>`;

  return createElementFromHTML(`
    <header class="site-header">
      <div class="header-container">
        <a class="brand" href="/">
          ${brandMark}
          <span>${shortName}</span>
        </a>
        <nav class="nav-links" aria-label="Main navigation">
          <a href="/about.html" class="${activePage === 'about' ? 'active' : ''}">About</a>
          <a href="/research.html" class="${activePage === 'research' ? 'active' : ''}">Research</a>
          <a href="/projects.html" class="${activePage === 'projects' ? 'active' : ''}">Projects</a>
          <a href="/education.html" class="${activePage === 'education' ? 'active' : ''}">Education</a>
          <a href="/experience.html" class="${activePage === 'experience' ? 'active' : ''}">Experience</a>
          <a href="/awards.html" class="${activePage === 'awards' ? 'active' : ''}">Awards</a>
          <a href="/skills.html" class="${activePage === 'skills' ? 'active' : ''}">Skills</a>
          <a href="/contact.html" class="${activePage === 'contact' ? 'active' : ''}">Contact</a>
        </nav>
        <div class="nav-actions">
          <a class="btn btn-nav" href="${cvUrl}" target="_blank" rel="noopener noreferrer">
            <i class="fa-solid fa-file-pdf"></i>
            CV
          </a>
        </div>
      </div>
    </header>
  `);
};
