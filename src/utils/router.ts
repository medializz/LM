import { useState, useEffect } from 'react';
import { AppRoute } from '../types';

/**
 * Parses a pathname/search query into an AppRoute object
 */
export function parseRoute(pathname: string, search: string = window.location.search): AppRoute {
  let path = pathname.trim();

  // Handle GitHub Pages SPA redirection (where 404.html forwards to ?p=/path)
  const searchParams = new URLSearchParams(search);
  const pParam = searchParams.get('p');
  if (pParam) {
    path = pParam;
  }

  // Handle hash fallback if present (e.g., #/services/brand-identity)
  if (window.location.hash.startsWith('#/')) {
    path = window.location.hash.replace(/^#/, '');
  }

  // Remove trailing slashes (except root '/')
  if (path.length > 1 && path.endsWith('/')) {
    path = path.slice(0, -1);
  }

  // Route matching
  if (path === '' || path === '/' || path === '/home') {
    return { view: 'home', path: '/' };
  }

  if (path === '/services') {
    return { view: 'services-index', path: '/services' };
  }

  const serviceMatch = path.match(/^\/services\/([a-zA-Z0-9_-]+)$/);
  if (serviceMatch) {
    return { view: 'service-detail', slug: serviceMatch[1].toLowerCase(), path };
  }

  if (path === '/work' || path === '/projects') {
    return { view: 'work-index', path: '/work' };
  }

  const workMatch = path.match(/^\/work\/([a-zA-Z0-9_-]+)$/);
  if (workMatch) {
    return { view: 'work-detail', slug: workMatch[1].toLowerCase(), path };
  }

  // Fallback for unmapped paths
  return { view: '404', path };
}

/**
 * Programmatically navigates to a new URL within the app
 */
export function navigateTo(path: string, options: { replace?: boolean } = {}): void {
  // Check if it's an external link or anchor on home
  if (path.startsWith('http') || path.startsWith('mailto:') || path.startsWith('tel:')) {
    window.location.href = path;
    return;
  }

  if (options.replace) {
    window.history.replaceState({}, '', path);
  } else {
    window.history.pushState({}, '', path);
  }

  // Dispatch custom popstate event so listeners update
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
}

/**
 * Custom React Hook for SPA navigation state
 */
export function useAppRoute(): AppRoute {
  const [route, setRoute] = useState<AppRoute>(() => 
    parseRoute(window.location.pathname, window.location.search)
  );

  useEffect(() => {
    const handleLocationChange = () => {
      setRoute(parseRoute(window.location.pathname, window.location.search));
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  return route;
}

