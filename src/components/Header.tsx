import React, { useState, useEffect, useRef } from 'react';
import { LizzdoLogo } from './LizzdoLogo';
import { NavigationItem, SiteSettings } from '../types';
import { Send, ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';
import { navigateTo } from '../utils/router';

interface HeaderProps {
  siteSettings: SiteSettings;
  navigation: NavigationItem[];
  currentPath?: string;
  onOpenContactModal?: () => void;
  onSelectService?: (slug: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  siteSettings,
  navigation,
  currentPath = '/',
  onOpenContactModal,
  onSelectService,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Handle scroll state for sticky header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Handle click outside desktop dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle escape key to close menus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setIsServicesDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavigationItem) => {
    if (item.hasDropdown) {
      e.preventDefault();
      setIsServicesDropdownOpen(!isServicesDropdownOpen);
      return;
    } 
    
    if (item.id === 'contact' && onOpenContactModal) {
      e.preventDefault();
      onOpenContactModal();
      setIsMobileMenuOpen(false);
      return;
    }

    if (item.href.startsWith('#')) {
      if (currentPath !== '/') {
        e.preventDefault();
        navigateTo(`/${item.href}`);
      }
      setIsMobileMenuOpen(false);
      return;
    }

    if (item.href.startsWith('/')) {
      e.preventDefault();
      navigateTo(item.href);
      setIsMobileMenuOpen(false);
      return;
    }

    setIsMobileMenuOpen(false);
  };

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, item: NavigationItem) => {
    if (item.hasDropdown) {
      e.preventDefault();
      setIsMobileServicesOpen(!isMobileServicesOpen);
    } else if (item.id === 'contact' && onOpenContactModal) {
      e.preventDefault();
      onOpenContactModal();
      setIsMobileMenuOpen(false);
    } else if (item.href.startsWith('/')) {
      e.preventDefault();
      navigateTo(item.href);
      setIsMobileMenuOpen(false);
    } else if (item.href.startsWith('#')) {
      if (currentPath !== '/') {
        e.preventDefault();
        navigateTo(`/${item.href}`);
      }
      setIsMobileMenuOpen(false);
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  const handleDropdownServiceClick = (slug: string) => {
    setIsServicesDropdownOpen(false);
    setIsMobileMenuOpen(false);
    navigateTo(`/services/${slug}`);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090a0f]/95 backdrop-blur-md border-b border-white/10 py-2.5 sm:py-3 shadow-xl'
          : 'bg-[#090a0f]/60 backdrop-blur-sm py-3 sm:py-4 lg:py-4.5'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* LEFT: Official Brand Logo */}
        <div className="flex items-center">
          <a 
            href="/" 
            className="outline-none focus-visible:ring-2 focus-visible:ring-[#ffbe1a] rounded-lg p-0.5 flex items-center cursor-pointer"
            aria-label="Lizzdo Media Home"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsMobileMenuOpen(false);
            }}
          >
            <LizzdoLogo 
              size="md" 
              logoSrc={siteSettings.logo} 
              markSrc={siteSettings.logoMark} 
            />
          </a>
        </div>

        {/* CENTER: Desktop Navigation Menu */}
        <nav 
          id="desktop-navigation" 
          className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-9"
          aria-label="Primary Navigation"
        >
          {navigation.map((item) => {
            const isServicesActive = currentPath.startsWith('/services') && item.id === 'services';
            const isWorkActive = currentPath.startsWith('/work') && item.id === 'work';
            const isHomeActive = currentPath === '/' && item.id === 'home';
            const isActive = isHomeActive || isServicesActive || isWorkActive || item.active;

            return (
              <div 
                key={item.id} 
                className="relative flex items-center" 
                ref={item.hasDropdown ? dropdownRef : undefined}
                onMouseEnter={() => item.hasDropdown && setIsServicesDropdownOpen(true)}
                onMouseLeave={() => item.hasDropdown && setIsServicesDropdownOpen(false)}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`group relative text-[14px] lg:text-[15px] font-medium tracking-wide transition-colors duration-200 py-1 flex items-center gap-1.5 outline-none focus-visible:text-[#ffbe1a] focus-visible:ring-1 focus-visible:ring-[#ffbe1a] rounded ${
                    isActive 
                      ? 'text-[#ffbe1a] font-semibold' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                  aria-haspopup={item.hasDropdown ? 'true' : undefined}
                  aria-expanded={item.hasDropdown ? isServicesDropdownOpen : undefined}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown 
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isServicesDropdownOpen ? 'rotate-180 text-[#ffbe1a]' : 'text-slate-400 group-hover:text-white'
                      }`} 
                    />
                  )}
                  {/* Active bottom underline indicator */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ffbe1a] rounded-full shadow-[0_0_8px_#ffbe1a]" />
                  )}
                </a>

                {/* Dropdown Menu for Services */}
                {item.hasDropdown && isServicesDropdownOpen && item.dropdownItems && (
                  <div 
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50"
                  >
                    <div 
                      className="w-72 rounded-2xl bg-[#10131d] border border-white/15 p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.95)] backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200"
                      role="menu"
                      aria-label="Services Menu"
                    >
                      <div className="flex items-center justify-between px-3 py-1.5 border-b border-white/10 mb-1">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-[#ffbe1a]">Our Capabilities</span>
                        <button
                          onClick={() => {
                            setIsServicesDropdownOpen(false);
                            navigateTo('/services');
                          }}
                          className="text-[10px] text-slate-400 hover:text-white underline cursor-pointer"
                        >
                          View All
                        </button>
                      </div>
                      <div className="max-h-[340px] overflow-y-auto space-y-0.5 no-scrollbar">
                        {item.dropdownItems.map((subItem) => (
                          <button
                            key={subItem.slug}
                            onClick={() => handleDropdownServiceClick(subItem.slug)}
                            className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/5 text-slate-300 hover:text-[#ffbe1a] transition-colors flex items-center justify-between text-xs font-medium group cursor-pointer"
                            role="menuitem"
                          >
                            <div>
                              <div className="font-semibold text-white group-hover:text-[#ffbe1a]">{subItem.title}</div>
                              {subItem.description && (
                                <div className="text-[11px] text-slate-400">{subItem.description}</div>
                              )}
                            </div>
                            <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#ffbe1a]" />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* RIGHT: CTA Button ("Let's Talk") */}
        <div className="hidden md:flex items-center">
          <button
            id="header-cta-button"
            onClick={onOpenContactModal}
            className="group relative inline-flex items-center gap-2 px-4.5 py-2 rounded-full border border-[#ffbe1a] bg-transparent text-[#ffbe1a] text-sm font-semibold tracking-wide hover:bg-[#ffbe1a] hover:text-black transition-all duration-300 shadow-[0_0_12px_-2px_rgba(255,190,26,0.25)] hover:shadow-[0_0_18px_rgba(255,190,26,0.55)] cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#ffbe1a]"
            aria-label="Let's Talk - Contact Lizzdo Media"
          >
            <Send className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            <span>{siteSettings.primaryCtaText || "Let's Talk"}</span>
          </button>
        </div>

        {/* MOBILE MENU TOGGLE BUTTON (Touch target >= 44px) */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="min-w-[44px] min-h-[44px] p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:text-[#ffbe1a] hover:bg-white/10 active:scale-95 transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#ffbe1a]"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-drawer"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-[#ffbe1a]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE NAVIGATION DRAWER & BACKDROP OVERLAY */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop overlay */}
          <div 
            className="md:hidden fixed inset-0 top-[60px] sm:top-[68px] bg-black/70 backdrop-blur-sm z-40 animate-in fade-in duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Content */}
          <div 
            id="mobile-nav-drawer"
            ref={mobileMenuRef}
            className="md:hidden fixed inset-x-0 top-[60px] sm:top-[68px] max-h-[calc(100vh-70px)] overflow-y-auto bg-[#0c0e15]/98 border-b border-white/15 p-5 sm:p-6 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.95)] z-50 animate-in slide-in-from-top-4 duration-300"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            <div className="flex flex-col gap-2">
              {navigation.map((item) => {
                const isServicesActive = currentPath.startsWith('/services') && item.id === 'services';
                const isWorkActive = currentPath.startsWith('/work') && item.id === 'work';
                const isHomeActive = currentPath === '/' && item.id === 'home';
                const isActive = isHomeActive || isServicesActive || isWorkActive || item.active;
                
                if (item.hasDropdown) {
                  return (
                    <div key={item.id} className="rounded-xl overflow-hidden bg-white/[0.03] border border-white/5">
                      <button
                        onClick={(e) => handleMobileNavClick(e, item)}
                        className={`w-full min-h-[48px] text-base font-semibold py-3 px-4 transition-colors flex items-center justify-between ${
                          isMobileServicesOpen || isActive
                            ? 'text-[#ffbe1a]'
                            : 'text-slate-200 hover:text-white'
                        }`}
                        aria-expanded={isMobileServicesOpen}
                      >
                        <span className="flex items-center gap-2">{item.label}</span>
                        <ChevronDown 
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isMobileServicesOpen ? 'rotate-180 text-[#ffbe1a]' : 'text-slate-400'
                          }`} 
                        />
                      </button>

                      {/* Mobile Accordion Submenu */}
                      {isMobileServicesOpen && item.dropdownItems && (
                        <div className="px-3 pb-3 pt-1 space-y-1 border-t border-white/5 bg-[#090b10]/60">
                          <button
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              navigateTo('/services');
                            }}
                            className="w-full text-left min-h-[40px] py-2 px-3 rounded-lg text-[#ffbe1a] font-semibold text-xs border border-[#ffbe1a]/20 bg-[#ffbe1a]/5"
                          >
                            Explore All Services →
                          </button>
                          {item.dropdownItems.map((subItem) => (
                            <button
                              key={subItem.slug}
                              onClick={() => handleDropdownServiceClick(subItem.slug)}
                              className="w-full text-left min-h-[44px] py-2 px-3 rounded-lg hover:bg-white/5 text-slate-300 hover:text-[#ffbe1a] active:bg-[#ffbe1a]/10 flex items-center justify-between text-xs font-medium transition-colors"
                            >
                              <span>{subItem.title}</span>
                              <ArrowUpRight className="w-3.5 h-3.5 text-[#ffbe1a]" />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`min-h-[48px] text-base font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-between ${
                      isActive
                        ? 'text-[#ffbe1a] bg-[#ffbe1a]/10 border border-[#ffbe1a]/30'
                        : 'text-slate-200 hover:text-[#ffbe1a] hover:bg-white/5 active:bg-white/10'
                    }`}
                  >
                    <span>{item.label}</span>
                  </a>
                );
              })}

              {/* Mobile CTA Button (Min 48px touch target) */}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (onOpenContactModal) onOpenContactModal();
                }}
                className="mt-4 w-full min-h-[48px] py-3.5 px-6 rounded-full bg-[#ffbe1a] text-black font-bold text-base flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,190,26,0.4)] active:scale-[0.98] transition-transform cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{siteSettings.primaryCtaText || "Let's Talk"}</span>
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  );
};



