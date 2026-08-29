import { useState, useEffect } from 'react';
import { AppRoute } from '../types';

/**
 * Parses a pathname/search query into an AppRoute object
 */
export function parseRoute(pathname: string, search: string = window.location.search): AppRoute {
  let path = pathname.trim();

  // Handle GitHub Pages SPA redirection (where 404.html forwards to ?p=/path or ?p=path)
  const searchParams = new URLSearchParams(search);
  const pParam = searchParams.get('p');
  if (pParam) {
    path = pParam.startsWith('/') ? pParam : `/${pParam}`;
  }

  // Handle hash fallback if present (e.g., #/services/brand-identity)
  if (window.location.hash.startsWith('#/')) {
    path = window.location.hash.replace(/^#/, '');
  }

  // Remove trailing slashes (except root '/')
  if (path.length > 1 && path.endsWith('/')) {
    path = path.slice(0, -1);
  }

  // Normalize path to lowercase for matching
  const normalizedPath = path.toLowerCase();

  // 1. Root / Home matching
  if (normalizedPath === '' || normalizedPath === '/' || normalizedPath === '/home') {
    return { view: 'home', path: '/' };
  }

  // 2. Services routes
  if (normalizedPath === '/services') {
    return { view: 'services-index', path: '/services' };
  }

  const serviceMatch = normalizedPath.match(/^\/services\/([a-zA-Z0-9_-]+)$/);
  if (serviceMatch) {
    return { view: 'service-detail', slug: serviceMatch[1].toLowerCase(), path: `/services/${serviceMatch[1].toLowerCase()}` };
  }

  // 3. Work / Portfolio routes
  if (normalizedPath === '/work' || normalizedPath === '/projects' || normalizedPath === '/portfolio') {
    return { view: 'work-index', path: '/work' };
  }

  const workMatch = normalizedPath.match(/^\/work\/([a-zA-Z0-9_-]+)$/) || normalizedPath.match(/^\/projects\/([a-zA-Z0-9_-]+)$/);
  if (workMatch) {
    return { view: 'work-detail', slug: workMatch[1].toLowerCase(), path: `/work/${workMatch[1].toLowerCase()}` };
  }

  // 4. About page
  if (normalizedPath === '/about' || normalizedPath === '/about-us') {
    return { view: 'about', path: '/about' };
  }

  // 5. Blog routes
  if (normalizedPath === '/blog' || normalizedPath === '/articles' || normalizedPath === '/insights') {
    return { view: 'blog-index', path: '/blog' };
  }

  const blogMatch = normalizedPath.match(/^\/blog\/([a-zA-Z0-9_-]+)$/) || normalizedPath.match(/^\/articles\/([a-zA-Z0-9_-]+)$/);
  if (blogMatch) {
    return { view: 'blog-detail', slug: blogMatch[1].toLowerCase(), path: `/blog/${blogMatch[1].toLowerCase()}` };
  }

  // 6. Contact page
  if (normalizedPath === '/contact' || normalizedPath === '/contact-us') {
    return { view: 'contact', path: '/contact' };
  }

  // 7. Legal and Policy pages
  if (normalizedPath === '/privacy' || normalizedPath === '/privacy-policy') {
    return { view: 'privacy', path: '/privacy-policy' };
  }

  if (normalizedPath === '/terms-and-conditions') {
    return { view: 'terms-and-conditions', path: '/terms-and-conditions' };
  }

  if (normalizedPath === '/terms' || normalizedPath === '/terms-of-use' || normalizedPath === '/terms-of-service') {
    return { view: 'terms', path: '/terms-of-use' };
  }

  if (normalizedPath === '/cookie-policy' || normalizedPath === '/cookies') {
    return { view: 'cookie-policy', path: '/cookie-policy' };
  }

  if (normalizedPath === '/legal' || normalizedPath === '/legal-notice' || normalizedPath === '/disclaimer') {
    return { view: 'legal', path: '/legal-notice' };
  }

  const legalMatch = normalizedPath.match(/^\/legal\/([a-zA-Z0-9_-]+)$/);
  if (legalMatch) {
    return { view: 'legal-page', slug: legalMatch[1].toLowerCase(), path: `/legal/${legalMatch[1].toLowerCase()}` };
  }

  if (normalizedPath === '/sitemap' || normalizedPath === '/site-map') {
    return { view: 'sitemap', path: '/sitemap' };
  }

  // Fallback for unmapped paths -> 404 Not Found
  return { view: '404', path: normalizedPath };
}

/**
 * Programmatically navigates to a new URL within the app
 */
export function navigateTo(path: string, options: { replace?: boolean } = {}): void {
  // Check if it's an external link or protocol link
  if (path.startsWith('http') || path.startsWith('mailto:') || path.startsWith('tel:')) {
    window.location.href = path;
    return;
  }

  // Check if it's an on-page hash jump while on the home page
  if (path.startsWith('#') && window.location.pathname === '/') {
    const elementId = path.replace('#', '');
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    return;
  }

  if (options.replace) {
    window.history.replaceState({}, '', path);
  } else {
    window.history.pushState({}, '', path);
  }

  // Dispatch custom popstate event so listeners update instantly
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
