import { profile } from './data/profile.js';
import { createNavigation } from './components/Navigation.js';
import { createHero } from './components/Hero.js';
import { createMetrics } from './components/Metrics.js';
import { createHighlights } from './components/Highlights.js';
import { createPageFooter } from './components/PageFooter.js';

const app = document.querySelector('#app');

const page = document.createElement('div');
page.className = 'page-shell';

page.append(
  createNavigation(profile, 'home'),
  createHero(profile),
  createMetrics(profile),
  createHighlights(profile),
  createPageFooter(profile)
);

app.append(page);
