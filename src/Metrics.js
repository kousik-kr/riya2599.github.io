import { createElementFromHTML, createList } from '../utils/dom.js';

export const createMetrics = ({ metrics }) =>
  createElementFromHTML(`
    <section class="metrics" aria-label="Academic highlights">
      ${createList(
        metrics,
        (metric) => `
          <article class="metric-card glass-panel floating-soft">
            <div class="metric-icon">
              <i class="fa-solid ${metric.icon}"></i>
            </div>
            <h3>${metric.value}</h3>
            <p>${metric.label}</p>
          </article>
        `
      )}
    </section>
  `);
