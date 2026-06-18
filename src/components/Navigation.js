import { createElementFromHTML } from '../utils/dom.js';

export const createNavigation = ({ shortName, initials, profilePhoto, cvUrl }, activePage = 'home') => {
  const brandMark = profilePhoto
    ? `<img src="${profilePhoto}" alt="" class="brand-photo" />`
    : `<span class="brand-monogram" aria-hidden="true">${initials}</span>`;

  const header = createElementFromHTML(`
    <header class="site-header">
      <div class="header-container">
        <div class="brand-group">
          <button class="brand-toggle" type="button" aria-label="Collapse navigation" aria-expanded="true" aria-controls="main-navigation" data-nav-toggle>
            ${brandMark}
          </button>
          <a class="brand-name" href="/">${shortName}</a>
        </div>
        <nav id="main-navigation" class="nav-links" aria-label="Main navigation">
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

  const toggle = header.querySelector('[data-nav-toggle]');
  const setCollapsed = (collapsed) => {
    header.classList.toggle('is-collapsed', collapsed);
    toggle.setAttribute('aria-expanded', String(!collapsed));
    toggle.setAttribute('aria-label', collapsed ? 'Expand navigation' : 'Collapse navigation');
  };

  toggle.addEventListener('click', () => {
    setCollapsed(!header.classList.contains('is-collapsed'));
  });

  return header;
};
