import { createElementFromHTML, createList } from '../utils/dom.js';

export const createContact = ({ email, phone, location, linkedin, github, resumeUrl, collaborationNote, socialLinks }) =>
  createElementFromHTML(`
    <main class="page-content">
      <section class="page-hero glass-panel">
        <p class="eyebrow">Contact</p>
        <h1>Open for research conversations</h1>
        <p class="page-subtitle">${collaborationNote}</p>
      </section>

      <section class="contact-grid">
        <article class="glass-panel contact-card">
          <h2>Direct contact</h2>
          <ul class="contact-list">
            <li><i class="fa-solid fa-envelope"></i> <a href="mailto:${email}">${email}</a></li>
            <li><i class="fa-solid fa-phone"></i> <a href="tel:${phone.replace(/\s+/g, '')}">${phone}</a></li>
            <li><i class="fa-solid fa-location-dot"></i> ${location}</li>
          </ul>
        </article>

        <article class="glass-panel contact-card">
          <h2>Professional links</h2>
          <ul class="contact-list">
            <li><i class="fa-brands fa-linkedin-in"></i> <a href="${linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn profile</a></li>
            <li><i class="fa-brands fa-github"></i> <a href="${github}" target="_blank" rel="noopener noreferrer">GitHub profile</a></li>
            <li><i class="fa-solid fa-file-pdf"></i> <a href="${resumeUrl}" target="_blank" rel="noopener noreferrer">Resume PDF</a></li>
          </ul>
        </article>
      </section>

      <section class="glass-panel prose-panel">
        <h2>Best reasons to reach out</h2>
        <ul class="detail-list">
          <li>Research collaboration in machine learning, NLP, or deep learning.</li>
          <li>Advanced academic or fellowship opportunities.</li>
          <li>Applied AI projects with strong experimentation requirements.</li>
          <li>Technical discussions around published work and project implementations.</li>
        </ul>
      </section>

      <section class="glass-panel contact-social-card">
        <h2>Connect online</h2>
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
      </section>
    </main>
  `);
