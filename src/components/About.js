import { createElementFromHTML } from '../utils/dom.js';

export const createAbout = ({ fullName, role, university, heroStatement, focusAreas, location, department, researchTheme }) =>
  createElementFromHTML(`
    <main class="page-content">
      <section class="about-hero glass-panel">
        <div class="about-container">
          <h1>${fullName}</h1>
          <p class="about-subtitle">${role}</p>
          <p class="about-statement">${heroStatement}</p>
          <div class="about-meta">
            <span><i class="fa-solid fa-graduation-cap"></i> ${university}</span>
            <span><i class="fa-solid fa-door-open"></i> ${department}</span>
            <span><i class="fa-solid fa-location-dot"></i> ${location}</span>
          </div>
        </div>
      </section>

      <section class="about-section glass-panel">
        <h2><i class="fa-solid fa-magnifying-glass"></i> Research Focus</h2>
        <p>My doctoral research focuses on <strong>${researchTheme}</strong>, with an emphasis on understanding model vulnerabilities and building trustworthy AI systems for healthcare applications. I am passionate about:</p>
        <div class="focus-areas">
          ${focusAreas.map(area => `<div class="focus-item"><i class="fa-solid fa-check"></i> ${area}</div>`).join('')}
        </div>
      </section>

      <section class="about-section glass-panel">
        <h2><i class="fa-solid fa-info-circle"></i> Background</h2>
        <p>
          I am a second-year PhD student in Computer Science and Engineering at ${university}, where I conduct research on the robustness and reliability of deep learning models in medical imaging applications.
          My work aims to identify adversarial vulnerabilities in medical image classification systems and develop methods to improve their resistance to perturbations.
        </p>
        <p>
          My academic journey spans a B.Tech in Computer Science from BPIT, GGSIPU (2021, 90.70%), and an M.Tech in CSE with AI specialization from IGDTUW (2023, 81.41%). 
          Throughout my studies, I have developed strong foundations in machine learning, deep learning, and computer vision, combined with practical experience in building robust AI systems.
        </p>
      </section>

      <section class="about-section glass-panel">
        <h2><i class="fa-solid fa-medal"></i> Academic Recognition</h2>
        <p>
          I have demonstrated strong academic performance and research aptitude through multiple national-level qualifications:
        </p>
        <ul class="recognition-list">
          <li><strong>UGC NET-JRF Qualified</strong> (December 2023) – National-level test for research eligibility and fellowship support</li>
          <li><strong>GATE Qualified</strong> (2021) – Graduate Aptitude Test in Engineering for research and higher studies</li>
          <li><strong>Published researcher</strong> with contributions in NLP and cybersecurity machine learning</li>
        </ul>
      </section>

      <section class="about-section glass-panel">
        <h2><i class="fa-solid fa-lightbulb"></i> Research Interests</h2>
        <div class="interests-grid">
          <div class="interest-item">
            <i class="fa-solid fa-shield-virus"></i>
            <h3>Adversarial Robustness</h3>
            <p>Understanding how perturbations affect medical imaging models</p>
          </div>
          <div class="interest-item">
            <i class="fa-solid fa-hospital"></i>
            <h3>Medical AI</h3>
            <p>Building trustworthy deep learning for clinical applications</p>
          </div>
          <div class="interest-item">
            <i class="fa-solid fa-neural-network"></i>
            <h3>Deep Learning Security</h3>
            <p>Evaluating and improving model reliability under adversarial conditions</p>
          </div>
          <div class="interest-item">
            <i class="fa-solid fa-images"></i>
            <h3>Computer Vision</h3>
            <p>Image classification, medical image analysis, and visual feature learning</p>
          </div>
          <div class="interest-item">
            <i class="fa-solid fa-book"></i>
            <h3>Teaching & Mentoring</h3>
            <p>Sharing knowledge on ML, deep learning, and robust AI practices</p>
          </div>
          <div class="interest-item">
            <i class="fa-solid fa-github"></i>
            <h3>Open Science</h3>
            <p>Contributing to reproducible research and open-source ML projects</p>
          </div>
        </div>
      </section>
    </main>
  `);
      </section>
    </main>
  `);
