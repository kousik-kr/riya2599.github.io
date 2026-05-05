import { createElementFromHTML } from '../utils/dom.js';

export const createAbout = ({ fullName, role, university, heroStatement, focusAreas, advisor, location }) =>
  createElementFromHTML(`
    <main class="page-content">
      <section class="about-hero glass-panel">
        <div class="about-container">
          <h1>${fullName}</h1>
          <p class="about-subtitle">${role}</p>
          <p class="about-statement">${heroStatement}</p>
          <div class="about-meta">
            <span><i class="fa-solid fa-graduation-cap"></i> ${university}</span>
            <span><i class="fa-solid fa-location-dot"></i> ${location}</span>
            <span><i class="fa-solid fa-user-tie"></i> Advisor: ${advisor}</span>
          </div>
        </div>
      </section>

      <section class="about-section glass-panel">
        <h2><i class="fa-solid fa-magnifying-glass"></i> Research Focus</h2>
        <p>My research integrates machine learning with human-computer interaction to develop intelligent systems that understand and adapt to human behavior. I'm passionate about:</p>
        <div class="focus-areas">
          ${focusAreas.map(area => `<div class="focus-item"><i class="fa-solid fa-star"></i> ${area}</div>`).join('')}
        </div>
      </section>

      <section class="about-section glass-panel">
        <h2><i class="fa-solid fa-info-circle"></i> Background</h2>
        <p>
          I am a PhD Student in Computer Science at ${university}, where I work on cutting-edge research at the intersection of machine learning and human-AI interaction. 
          My work focuses on developing adaptive systems that improve user engagement and system performance through intelligent feedback mechanisms.
        </p>
        <p>
          With a strong foundation in computer science and mathematics, combined with diverse industry experience at leading tech companies, I bring both theoretical rigor and practical expertise to research challenges.
          I'm passionate about responsible AI design and believe in the importance of developing systems that are both powerful and aligned with human values.
        </p>
      </section>

      <section class="about-section glass-panel">
        <h2><i class="fa-solid fa-chart-line"></i> Research Impact</h2>
        <p>
          My research has been published at top-tier venues including NeurIPS, CHI, ICML, and others. I've also contributed to open-source projects that are used by thousands of developers worldwide.
          Beyond research, I'm committed to teaching and mentoring the next generation of computer scientists.
        </p>
      </section>

      <section class="about-section glass-panel">
        <h2>Interests & Activities</h2>
        <div class="interests-grid">
          <div class="interest-item">
            <i class="fa-solid fa-flask-vial"></i>
            <h3>Machine Learning</h3>
            <p>Deep learning, representation learning, and adaptive systems</p>
          </div>
          <div class="interest-item">
            <i class="fa-solid fa-handshake"></i>
            <h3>Human-AI Interaction</h3>
            <p>User-centered AI design and interactive machine learning</p>
          </div>
          <div class="interest-item">
            <i class="fa-solid fa-shield"></i>
            <h3>Responsible AI</h3>
            <p>Fairness, explainability, and ethical AI development</p>
          </div>
          <div class="interest-item">
            <i class="fa-solid fa-book"></i>
            <h3>Teaching & Mentoring</h3>
            <p>Education and knowledge sharing with the community</p>
          </div>
          <div class="interest-item">
            <i class="fa-solid fa-code"></i>
            <h3>Open Source</h3>
            <p>Contributing to and maintaining open-source projects</p>
          </div>
          <div class="interest-item">
            <i class="fa-solid fa-users"></i>
            <h3>Collaboration</h3>
            <p>Working with diverse teams on impactful research</p>
          </div>
        </div>
      </section>
    </main>
  `);
