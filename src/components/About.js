import { createElementFromHTML, createList } from '../utils/dom.js';

export const createAbout = ({
  fullName,
  role,
  university,
  department,
  heroStatement,
  focusAreas,
  location,
  researchTheme
}) =>
  createElementFromHTML(`
    <main class="page-content">
      <section class="about-hero glass-panel">
        <div class="about-container">
          <p class="eyebrow">Academic Profile</p>
          <h1>${fullName}</h1>
          <p class="about-subtitle">${role}</p>
          <p class="about-statement">${heroStatement}</p>
          <div class="about-meta">
            <span><i class="fa-solid fa-building-columns"></i> ${university}</span>
            <span><i class="fa-solid fa-microscope"></i> ${department}</span>
            <span><i class="fa-solid fa-location-dot"></i> ${location}</span>
          </div>
        </div>
      </section>

      <section class="about-section glass-panel">
        <h2>Research Direction</h2>
        <p>
          Riya's current research direction is ${researchTheme}. The work sits at the intersection of deep learning,
          computer vision, and trustworthy AI for healthcare-oriented image analysis.
        </p>
        <div class="focus-areas">
          ${createList(focusAreas, (area) => `<div class="focus-item">${area}</div>`)}
        </div>
      </section>

      <section class="about-section glass-panel">
        <h2>Background</h2>
        <p>
          Before joining IIT Ropar for doctoral research, Riya completed an M.Tech in Computer Science and Engineering
          with a specialization in Artificial Intelligence from IGDTUW and a B.Tech in Computer Science and Engineering
          from BPIT, GGSIPU.
        </p>
        <p>
          Her previous projects span NLP-based depression detection, image classification with CNNs, malware
          classification with deep learning, and classical machine learning for healthcare risk prediction.
        </p>
      </section>

      <section class="about-section glass-panel">
        <h2>Research Interests</h2>
        <div class="interests-grid">
          <div class="interest-item">
            <i class="fa-solid fa-shield-halved"></i>
            <h3>Adversarial Robustness</h3>
            <p>Studying model behavior under small but consequential perturbations.</p>
          </div>
          <div class="interest-item">
            <i class="fa-solid fa-x-ray"></i>
            <h3>Medical Image Analysis</h3>
            <p>Applying computer vision to clinically relevant imaging workflows.</p>
          </div>
          <div class="interest-item">
            <i class="fa-solid fa-brain"></i>
            <h3>Deep Learning</h3>
            <p>Building and evaluating neural models for image and text understanding.</p>
          </div>
        </div>
      </section>
    </main>
  `);
