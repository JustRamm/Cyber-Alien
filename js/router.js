/**
 * CYBER ALIENS — Client-Side Router
 */

class CyberRouter {
  constructor(routes, appContainerId = 'app-view') {
    this.routes = routes;
    this.container = document.getElementById(appContainerId);
    this.templateCache = new Map();
    this.currentRoute = null;

    window.addEventListener('hashchange', () => this.handleRoute());
    window.addEventListener('DOMContentLoaded', () => this.handleRoute());
  }

  async handleRoute() {
    const rawHash = window.location.hash.slice(1) || '/';
    let path = rawHash;
    let anchor = null;

    if (rawHash.includes('#')) {
      const parts = rawHash.split('#');
      path = parts[0] || '/';
      anchor = parts[1];
    } else if (['services', 'work-preview', 'process', 'reviews', 'insights', 'proposal-anchor'].includes(rawHash.replace(/^\//, ''))) {
      anchor = rawHash.replace(/^\//, '');
      path = '/';
    }

    // Normalize path
    if (!path.startsWith('/')) path = '/' + path;

    const matchedRoute = this.routes[path] || this.routes['*'] || this.routes['/'];

    // Update Nav Active Links
    this.updateActiveNav(path, anchor);

    // If already on the same page and only an anchor changed, just scroll
    if (this.currentRoute === path && anchor) {
      this.scrollToAnchor(anchor);
      return;
    }

    try {
      const html = await this.loadTemplate(matchedRoute.template);
      this.render(html);
      this.currentRoute = path;
      document.title = matchedRoute.title || 'Cyber Aliens | Creative Design & Dev Studio';

      // Re-bind screen specific events if any
      if (window.onViewMounted) {
        window.onViewMounted(path);
      }

      if (anchor) {
        setTimeout(() => this.scrollToAnchor(anchor), 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    } catch (err) {
      console.error('Failed to load screen template:', err);
      if (path !== '/404') {
        window.location.hash = '#/404';
      }
    }
  }

  async loadTemplate(url) {
    if (this.templateCache.has(url)) {
      return this.templateCache.get(url);
    }
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error ${res.status} fetching ${url}`);
    const html = await res.text();
    this.templateCache.set(url, html);
    return html;
  }

  render(html) {
    if (!this.container) return;
    this.container.innerHTML = html;
    this.container.classList.remove('view-transition-in');
    void this.container.offsetWidth; // Force reflow
    this.container.classList.add('view-transition-in');
  }

  scrollToAnchor(anchorId) {
    const el = document.getElementById(anchorId);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  updateActiveNav(path, anchor) {
    const links = document.querySelectorAll('.nav-link, .mobile-drawer-link');
    links.forEach(link => {
      const href = link.getAttribute('href');
      let isActive = false;

      if (href) {
        if (anchor && href.includes(anchor)) {
          isActive = true;
        } else if (!anchor && (href === `#${path}` || (path === '/' && (href === '#/' || href === '#')))) {
          isActive = true;
        }
      }

      link.classList.toggle('active', isActive);
    });
  }
}

// Route Configuration Map
const routerConfig = {
  '/': {
    template: 'screens/home.html',
    title: 'Cyber Aliens | Creative Design & Development Studio'
  },
  '/home': {
    template: 'screens/home.html',
    title: 'Cyber Aliens | Creative Design & Development Studio'
  },
  '/work': {
    template: 'screens/work.html',
    title: 'Cyber Aliens | Selected Work & Artifacts'
  },
  '/case-study': {
    template: 'screens/case-study.html',
    title: 'Cyber Aliens | Case Study: Project Obsidian'
  },
  '/impact': {
    template: 'screens/impact.html',
    title: 'Cyber Aliens | Impact & Purpose // Mind Empowered'
  },
  '/proposal': {
    template: 'screens/proposal.html',
    title: 'Cyber Aliens | Get A Proposal'
  },
  '/confirmed': {
    template: 'screens/confirmed.html',
    title: 'Cyber Aliens | Transmission Confirmed'
  },
  '/404': {
    template: 'screens/404.html',
    title: 'Cyber Aliens | 404 Page Abducted'
  },
  '*': {
    template: 'screens/404.html',
    title: 'Cyber Aliens | 404 Page Abducted'
  }
};

window.cyberRouter = new CyberRouter(routerConfig, 'app-view');
