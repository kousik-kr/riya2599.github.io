import { createElementFromHTML, createList } from '../utils/dom.js';

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/about.html', label: 'About' },
  { href: '/research.html', label: 'Research' },
  { href: '/projects.html', label: 'Projects' },
  { href: '/education.html', label: 'Education' },
  { href: '/experience.html', label: 'Experience' },
  { href: '/awards.html', label: 'Recognition' },
  { href: '/teaching.html', label: 'Credentials' },
  { href: '/skills.html', label: 'Skills' },
  { href: '/contact.html', label: 'Contact' }
];

export const createPageFooter = ({
  fullName,
  role,
  affiliation,
  email,
  phone,
  location,
  socialLinks,
  cvUrl,
  resumeUrl
}) => {
  const currentYear = new Date().getFullYear();

  return createElementFromHTML(`
    <footer class="site-footer glass-panel">
      <div class="footer-content">
        <section class="footer-section">
          <p class="eyebrow">Profile</p>
          <h2>${fullName}</h2>
          <p class="footer-role">${role}</p>
          <p>${affiliation}</p>
          <ul class="footer-info">
            <li><i class="fa-solid fa-envelope"></i> <a href="mailto:${email}">${email}</a></li>
            <li><i class="fa-solid fa-phone"></i> <a href="tel:${phone.replace(/\s+/g, '')}">${phone}</a></li>
            <li><i class="fa-solid fa-location-dot"></i> ${location}</li>
          </ul>
        </section>

        <section class="footer-section">
          <p class="eyebrow">Navigate</p>
          <ul class="footer-links">
            ${createList(footerLinks, (link) => `<li><a href="${link.href}">${link.label}</a></li>`)}
          </ul>
        </section>

        <section class="footer-section">
          <p class="eyebrow">Resources</p>
          <ul class="footer-links">
            <li><a href="${cvUrl}" target="_blank" rel="noopener noreferrer">Curriculum Vitae</a></li>
            <li><a href="${resumeUrl}" target="_blank" rel="noopener noreferrer">Resume PDF</a></li>
            <li><a href="/sitemap.html">Sitemap</a></li>
            <li><a href="/privacy.html">Privacy</a></li>
            <li><a href="/terms.html">Terms</a></li>
          </ul>
        </section>

        <section class="footer-section">
          <p class="eyebrow">Connect</p>
          <div class="social-links">
            ${createList(
              socialLinks,
              (link) => `
                <a href="${link.url}" aria-label="${link.label}" title="${link.label}" class="social-icon" target="_blank" rel="noopener noreferrer">
                  <i class="${link.iconSet} ${link.icon}"></i>
                </a>
              `
            )}
          </div>
          <p class="footer-tagline">Machine learning, NLP, and deep learning for real-world research problems.</p>
        </section>
      </div>

      <div class="footer-bottom">
        <p>&copy; ${currentYear} ${fullName}. Research portfolio and academic profile.</p>
      </div>
    </footer>
  `);
};
