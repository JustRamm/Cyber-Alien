/**
 * CYBER ALIENS — Global Interactive Orchestration
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileDrawer();
  initGlobalEvents();
});

// Mobile Drawer Navigation
function initMobileDrawer() {
  const toggleBtn = document.getElementById('mobile-nav-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const closeBtn = document.getElementById('mobile-drawer-close');
  const drawerLinks = document.querySelectorAll('.mobile-drawer-link');

  if (!drawer) return;

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      drawer.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  drawerLinks.forEach(link => link.addEventListener('click', closeDrawer));
}

// Hook called whenever a screen template is mounted by router
window.onViewMounted = function(path) {
  initProposalForm();
  initPortfolioFilters();
  initMethodologyTimeline();
};

// Interactive Proposal Form
function initProposalForm() {
  const form = document.getElementById('proposal-form');
  if (!form) return;

  // Multi-select or single select toggle for budget / services chips
  const selectableChips = form.querySelectorAll('[data-select-chip]');
  selectableChips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.preventDefault();
      const group = chip.getAttribute('data-group');
      if (group === 'single') {
        const siblings = form.querySelectorAll(`[data-group="single"]`);
        siblings.forEach(s => s.classList.remove('active'));
        chip.classList.add('active');
      } else {
        chip.classList.toggle('active');
      }
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.innerHTML = `<span>Transmitting Data...</span>`;
      submitBtn.disabled = true;
    }

    setTimeout(() => {
      window.location.hash = '#/confirmed';
    }, 700);
  });
}

// Interactive Portfolio Filter in Work Screen
function initPortfolioFilters() {
  const filterChips = document.querySelectorAll('[data-portfolio-filter]');
  const projectCards = document.querySelectorAll('[data-category]');

  if (!filterChips.length || !projectCards.length) return;

  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const filterVal = chip.getAttribute('data-portfolio-filter');

      projectCards.forEach(card => {
        const cardCategories = card.getAttribute('data-category').split(' ');
        if (filterVal === 'all' || cardCategories.includes(filterVal)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Methodology Interactive Timeline on Home Screen
function initMethodologyTimeline() {
  const timelineItems = document.querySelectorAll('[data-timeline-item]');
  const terminalInput = document.getElementById('terminal-interactive-input');

  if (!timelineItems.length) return;

  timelineItems.forEach(item => {
    item.addEventListener('click', () => {
      timelineItems.forEach(i => {
        i.classList.remove('active-step');
        i.style.opacity = '0.55';
      });
      item.classList.add('active-step');
      item.style.opacity = '1';

      const promptText = item.getAttribute('data-terminal-prompt');
      if (terminalInput && promptText) {
        terminalInput.value = promptText;
      }
    });
  });
}

function initGlobalEvents() {
  // Global handler for smooth scrolling
  window.addEventListener('scroll', () => {
    const navPill = document.querySelector('.nav-pill');
    if (!navPill) return;
    if (window.scrollY > 40) {
      navPill.style.transform = 'translateY(-2px)';
      navPill.style.boxShadow = '0 16px 40px -10px rgba(0,0,0,0.55)';
    } else {
      navPill.style.transform = 'translateY(0)';
      navPill.style.boxShadow = 'var(--shadow-nav)';
    }
  });
}
