import { createElementFromHTML, createList } from '../utils/dom.js';

const navItems = [
  { href: '/', label: 'Home', key: 'home' },
  { href: '/about.html', label: 'About', key: 'about' },
  { href: '/research.html', label: 'Research', key: 'research' },
  { href: '/projects.html', label: 'Projects', key: 'projects' },
  { href: '/education.html', label: 'Education', key: 'education' },
  { href: '/experience.html', label: 'Experience', key: 'experience' },
  { href: '/awards.html', label: 'Recognition', key: 'awards' },
  { href: '/teaching.html', label: 'Credentials', key: 'credentials' },
  { href: '/skills.html', label: 'Skills', key: 'skills' },
  { href: '/contact.html', label: 'Contact', key: 'contact' }
];

export const createNavigation = ({ shortName, fullName, profilePhoto, resumeUrl }, activePage = 'home') =>
  createElementFromHTML(`
    <header class="site-header glass-panel">
      <div class="header-container">
        <a class="brand" href="/" aria-label="${fullName} home">
          <img src="${profilePhoto}" alt="${fullName}" class="brand-photo" />
          <span class="brand-copy">
            <strong>${shortName}</strong>
            <small>${fullName}</small>
          </span>
        </a>
        <nav class="nav-links" aria-label="Main navigation">
          ${createList(
            navItems,
            (item) =>
              `<a href="${item.href}" class="${activePage === item.key ? 'active' : ''}">${item.label}</a>`
          )}
        </nav>
        <div class="nav-actions">
          <a href="${resumeUrl}" class="btn btn-nav" target="_blank" rel="noopener noreferrer">
            <i class="fa-solid fa-file-arrow-down"></i>
            Resume
          </a>
        </div>
      </div>
    </header>
  `);
