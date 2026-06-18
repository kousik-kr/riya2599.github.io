import { profile } from './data/profile.js';
import { createNavigation } from './components/Navigation.js';
import { createHero } from './components/Hero.js';
import { createAboutBlock } from './components/AboutBlock.js';
import { createMetrics } from './components/Metrics.js';
import { createHighlights } from './components/Highlights.js';
import { createPageFooter } from './components/PageFooter.js';

const renderHomePage = () => {
  const app = document.querySelector('#app');
  if (!app) {
    console.error('Unable to render home page: missing #app container.');
    return;
  }

  const page = document.createElement('div');
  page.className = 'page-shell home-shell';
  page.style.setProperty('--home-background', `url('${new URL(profile.heroVisual, document.baseURI).href}')`);

  page.append(
    createNavigation(profile, 'home'),
    createHero(profile),
    createAboutBlock(profile),
    createMetrics(profile),
    createHighlights(profile),
    createPageFooter(profile)
  );

  app.replaceChildren(page);
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderHomePage);
} else {
  renderHomePage();
}
