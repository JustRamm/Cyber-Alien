import React, { createContext, useContext, useState, useEffect } from 'react';

const RouterContext = createContext();

export function RouterProvider({ children }) {
  const [route, setRoute] = useState(() => getRouteFromHash());
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  function getRouteFromHash() {
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

    if (!path.startsWith('/')) path = '/' + path;
    return { path, anchor };
  }

  useEffect(() => {
    function handleHashChange() {
      const newRoute = getRouteFromHash();
      setRoute(newRoute);

      if (newRoute.anchor) {
        setTimeout(() => {
          const el = document.getElementById(newRoute.anchor);
          if (el) {
            const navOffset = 84;
            const top = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
            window.scrollTo({ top, behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  function navigate(path, anchor = null) {
    let hash = path;
    if (anchor) hash += `#${anchor}`;
    window.location.hash = hash;
    setMobileDrawerOpen(false);
  }

  return (
    <RouterContext.Provider
      value={{
        currentPath: route.path,
        currentAnchor: route.anchor,
        navigate,
        mobileDrawerOpen,
        setMobileDrawerOpen
      }}
    >
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}

