import { createElementFromHTML } from '../utils/dom.js';

export const createContact = ({ fullName, email, office, university, location, linkedinUrl, githubUrl, socialLinks }) =>
  createElementFromHTML(`
    <main class="page-content">
      <section class="contact-hero glass-panel">
        <h1>Get in Touch</h1>
        <p class="contact-intro">
          I'm interested in discussing research collaborations, adversarial robustness in medical AI, 
          and opportunities to contribute to trustworthy AI systems. Feel free to reach out.
        </p>
      </section>

      <div class="contact-container">
        <section class="contact-methods glass-panel">
          <h2><i class="fa-solid fa-address-card"></i> Contact Information</h2>
          
          <div class="contact-method">
            <h3><i class="fa-solid fa-envelope"></i> Email</h3>
            <p>
              <a href="mailto:${email}">${email}</a>
            </p>
            <p class="contact-note">I typically respond within 2-3 business days</p>
          </div>

          <div class="contact-method">
            <h3><i class="fa-solid fa-map-pin"></i> Office Location</h3>
            <p>${office}</p>
            <p><strong>${university}</strong></p>
            <p>${location}</p>
          </div>

          <div class="contact-method">
            <h3><i class="fa-solid fa-link"></i> Connect Online</h3>
            <div class="social-links-contact">
              <a href="${linkedinUrl}" target="_blank" rel="noopener noreferrer" class="social-link">
                <i class="fa-brands fa-linkedin-in"></i> LinkedIn
              </a>
              <a href="${githubUrl}" target="_blank" rel="noopener noreferrer" class="social-link">
                <i class="fa-brands fa-github"></i> GitHub
              </a>
            </div>
          </div>
        </section>

        <section class="contact-research glass-panel">
          <h2><i class="fa-solid fa-microscope"></i> Research Collaboration</h2>
          <p>
            I'm actively seeking collaborations in the following areas:
          </p>
          <ul class="collaboration-topics">
            <li><strong>Adversarial robustness</strong> in medical imaging deep learning models</li>
            <li><strong>Defense mechanisms</strong> against adversarial attacks in healthcare AI</li>
            <li><strong>Trustworthiness evaluation</strong> frameworks for clinical decision-support systems</li>
            <li><strong>Safety-critical applications</strong> of deep learning in medical image analysis</li>
          </ul>
          <p class="collaboration-note">
            If you're working on related problems or interested in discussing AI safety in medical imaging, I'd love to hear from you!
          </p>
        </section>
      </div>
    </main>
  `);

      <section class="contact-social glass-panel">
        <h2>Connect Online</h2>
        <p>You can also find me and connect on various platforms:</p>
        <div class="social-links contact-social-links">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i class="fa-brands fa-twitter"></i>
            <span>Twitter</span>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i class="fa-brands fa-github"></i>
            <span>GitHub</span>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i class="fa-brands fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
          <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar">
            <i class="fa-brands fa-google"></i>
            <span>Google Scholar</span>
          </a>
        </div>
      </section>

      <section class="faq-section glass-panel">
        <h2>Frequently Asked Questions</h2>
        <div class="faq-items">
          <div class="faq-item">
            <h3>How long does it take to respond?</h3>
            <p>I aim to respond to all inquiries within 48 hours. During conference season or heavy periods, it might take slightly longer.</p>
          </div>
          <div class="faq-item">
            <h3>Are you available for collaborations?</h3>
            <p>Yes! I'm interested in research collaborations, especially in machine learning and HCI. Please reach out with specific project details.</p>
          </div>
          <div class="faq-item">
            <h3>Do you accept interns or mentees?</h3>
            <p>I occasionally mentor students. Please include your background, interests, and what you'd like to learn in your inquiry.</p>
          </div>
          <div class="faq-item">
            <h3>Can I cite your work?</h3>
            <p>Absolutely! You'll find citation information on each publication. Feel free to reach out if you need clarification on any work.</p>
          </div>
        </div>
      </section>
    </main>
  `);
