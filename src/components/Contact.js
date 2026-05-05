import { createElementFromHTML } from '../utils/dom.js';

export const createContact = ({ fullName, email, office, university, location }) =>
  createElementFromHTML(`
    <main class="page-content">
      <section class="contact-hero glass-panel">
        <h1>Get in Touch</h1>
        <p class="contact-intro">
          I'm always interested in hearing about new research collaborations, speaking opportunities, 
          or just connecting with people passionate about AI and human-computer interaction.
        </p>
      </section>

      <div class="contact-container">
        <section class="contact-methods glass-panel">
          <h2>Contact Information</h2>
          
          <div class="contact-method">
            <h3><i class="fa-solid fa-envelope"></i> Email</h3>
            <p>
              <a href="mailto:${email}">${email}</a>
            </p>
            <p class="contact-note">I typically respond within 48 hours</p>
          </div>

          <div class="contact-method">
            <h3><i class="fa-solid fa-map-pin"></i> Office</h3>
            <p>${office}</p>
            <p>${university}</p>
            <p>${location}</p>
          </div>

          <div class="contact-method">
            <h3><i class="fa-solid fa-calendar"></i> Schedule a Meeting</h3>
            <p>
              For research discussions, collaborations, or mentorship,
              <a href="#" class="contact-link">schedule a meeting</a> with my calendar.
            </p>
          </div>
        </section>

        <section class="contact-form-section glass-panel">
          <h2>Send a Message</h2>
          <form class="contact-form" method="POST" action="/api/contact">
            <div class="form-group">
              <label for="name">Name *</label>
              <input type="text" id="name" name="name" required placeholder="Your name" />
            </div>

            <div class="form-group">
              <label for="email">Email *</label>
              <input type="email" id="email" name="email" required placeholder="your@email.com" />
            </div>

            <div class="form-group">
              <label for="subject">Subject *</label>
              <input type="text" id="subject" name="subject" required placeholder="What is this about?" />
            </div>

            <div class="form-group">
              <label for="message">Message *</label>
              <textarea id="message" name="message" required rows="6" placeholder="Tell me more about your inquiry..."></textarea>
            </div>

            <div class="form-group">
              <label for="purpose">Purpose of Inquiry</label>
              <select id="purpose" name="purpose">
                <option value="">Select...</option>
                <option value="research">Research Collaboration</option>
                <option value="speaking">Speaking Opportunity</option>
                <option value="mentoring">Mentoring / Advice</option>
                <option value="interview">Interview / Media</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>

            <button type="submit" class="btn-primary">Send Message</button>
          </form>
        </section>
      </div>

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
