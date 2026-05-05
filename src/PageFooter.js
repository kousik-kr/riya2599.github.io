import { createElementFromHTML, createList } from '../utils/dom.js';

export const createPageFooter = ({ fullName, role, email, office, university, location, socialLinks, cvUrl, resumeUrl }) => {
  const currentYear = new Date().getFullYear();
  
  return createElementFromHTML(`
    <footer class="site-footer glass-panel">
      <div class="footer-content">
        <div class="footer-section">
          <h3>About</h3>
          <p class="footer-name">${fullName}</p>
          <p class="footer-role">${role}</p>
          <ul class="footer-info">
            <li><i class="fa-solid fa-envelope"></i> <a href="mailto:${email}">${email}</a></li>
            <li><i class="fa-solid fa-map-pin"></i> ${office}</li>
            <li><i class="fa-solid fa-university"></i> ${university}</li>
            <li><i class="fa-solid fa-location-dot"></i> ${location}</li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h3>Navigation</h3>
          <ul class="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about.html">About</a></li>
            <li><a href="/research.html">Research</a></li>
            <li><a href="/projects.html">Projects</a></li>
            <li><a href="/education.html">Education</a></li>
            <li><a href="/experience.html">Experience</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h3>Resources</h3>
          <ul class="footer-links">
            <li><a href="/awards.html">Awards</a></li>
            <li><a href="/teaching.html">Teaching</a></li>
            <li><a href="/skills.html">Skills</a></li>
            <li><a href="/contact.html">Contact</a></li>
            <li><a href="${cvUrl}" target="_blank"><i class="fa-solid fa-file-pdf"></i> Full CV</a></li>
            <li><a href="${resumeUrl}" target="_blank"><i class="fa-solid fa-file"></i> Resume</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h3>Connect</h3>
          <div class="social-links footer-social">
            ${createList(
              socialLinks || [],
              (link) => `<a href="${link.url}" aria-label="${link.label}" title="${link.label}" class="social-icon" target="_blank" rel="noopener noreferrer"><i class="fa-brands ${link.icon}"></i></a>`
            )}
          </div>
          <p class="footer-tagline">Collaborating on research, education, and responsible AI</p>
        </div>
      </div>
      
      <hr class="footer-divider" />
      
      <div class="footer-bottom">
        <div class="copyright">
          <p>&copy; ${currentYear} ${fullName}. All rights reserved.</p>
        </div>
        <div class="footer-meta">
          <a href="/sitemap.html" aria-label="Site Map">Sitemap</a>
          <span class="separator">•</span>
          <a href="/privacy.html" aria-label="Privacy Policy">Privacy Policy</a>
          <span class="separator">•</span>
          <a href="/terms.html" aria-label="Terms of Use">Terms</a>
        </div>
      </div>
    </footer>
  `);
};
