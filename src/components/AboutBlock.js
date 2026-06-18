import { createElementFromHTML, createList } from '../utils/dom.js';

export const createAboutBlock = ({
  fullName,
  role,
  department,
  focusAreas,
  location,
  profilePhoto,
  university,
  heroStatement
}) => {
  const profileImage = profilePhoto
    ? `
      <div class="about-block-img-wrapper">
        <img src="${profilePhoto}" alt="${fullName}" class="about-block-photo" />
      </div>
    `
    : '';

  return createElementFromHTML(`
    <section id="profile-summary" class="about-block-section">
      <div class="about-block-container glass-panel">
        ${profileImage}
        <div class="about-block-content">
          <h2>${fullName}</h2>
          <p class="about-block-role">${role} | ${department}</p>
          <p>${heroStatement}</p>
          <p>
            Her academic work at ${university} is positioned around dependable AI for healthcare imaging, with
            foundations in deep learning, computer vision, NLP, and applied machine learning.
          </p>
          <p>
            Before joining IIT Ropar for doctoral research, Riya completed an M.Tech in Computer Science and Engineering
            with a specialization in Artificial Intelligence and a B.Tech in Computer Science and Engineering.
          </p>
          <div class="about-meta about-block-meta">
            <span><i class="fa-solid fa-building-columns"></i> ${university}</span>
            <span><i class="fa-solid fa-location-dot"></i> ${location}</span>
          </div>
          <div class="focus-areas about-block-focus" aria-label="Research focus areas">
            ${createList(focusAreas, (area) => `<div class="focus-item">${area}</div>`)}
          </div>
        </div>
      </div>
    </section>
  `);
};
