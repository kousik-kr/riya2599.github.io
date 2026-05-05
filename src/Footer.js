import { createElementFromHTML, createList } from '../utils/dom.js';

export const createFooter = ({ fullName, email, office, university, location, socialLinks, cvUrl, resumeUrl }) =>
  createElementFromHTML(`
    <footer id="contact" class="site-footer glass-panel">
      <div class="footer-content">
        <div class="footer-section">
          <h2>${fullName}</h2>
          <p class="footer-role">PhD Candidate in Computer Science</p>
          <p><i class="fa-solid fa-envelope"></i> <a href="mailto:${email}">${email}</a></p>
          <p><i class="fa-solid fa-map-pin"></i> ${office}, ${university}</p>
          <p><i class="fa-solid fa-location-dot"></i> ${location}</p>
        </div>
        
        <div class="footer-section">
          <h3>Resources</h3>
          <ul class="resource-links">
            <li><a href="${cvUrl}"><i class="fa-solid fa-file-pdf"></i> Full CV</a></li>
            <li><a href="${resumeUrl}"><i class="fa-solid fa-file"></i> Resume</a></li>
            <li><a href="#research"><i class="fa-solid fa-book"></i> Publications</a></li>
            <li><a href="#projects"><i class="fa-solid fa-code"></i> Projects</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h3>Connect</h3>
          <div class="social-links">
            ${createList(
              socialLinks,
              (link) => `
                <a href="${link.url}" aria-label="${link.label}" title="${link.label}" class="social-icon">
                  <i class="fa-brands ${link.icon}"></i>
                </a>
              `
            )}
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; 2024 ${fullName}. Built with <i class="fa-solid fa-heart"></i> for research & collaboration.</p>
      </div>
    </footer>
  `);
