import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';
import { navigateTo } from '../utils/router';

interface CookieBannerProps {
  enabled?: boolean;
}

const COOKIE_CONSENT_KEY = 'lizzdo_cookie_consent_status';

export const CookieBanner: React.FC<CookieBannerProps> = ({ enabled = true }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    try {
      const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (!stored) {
        // Small delay for smooth entry
        const timer = setTimeout(() => setIsVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // localStorage may fail in strict private windows
    }
  }, [enabled]);

  const handleAcceptAll = () => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    } catch {}
    setIsVisible(false);
  };

  const handleEssentialOnly = () => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, 'essential_only');
    } catch {}
    setIsVisible(false);
  };

  if (!enabled || !isVisible) return null;

  return (
    <div 
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50 p-4 sm:p-5 rounded-2xl bg-[#10131d]/95 backdrop-blur-md border border-white/15 shadow-[0_15px_40px_rgba(0,0,0,0.85)] text-slate-300 font-['Plus_Jakarta_Sans'] animate-in slide-in-from-bottom duration-300"
      role="region"
      aria-label="Cookie and Privacy Consent"
    >
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 flex items-center justify-center text-[#ffbe1a] shrink-0 mt-0.5">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div className="flex-1 space-y-2">
          <div className="text-xs font-bold text-white font-['Outfit']">
            Cookie & Privacy Preferences
          </div>
          <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
            We use essential cookies for platform stability and anonymous analytics to deliver a seamless creative browsing experience.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-2">
            <button
              onClick={handleAcceptAll}
              className="px-3.5 py-1.5 rounded-full bg-[#ffbe1a] hover:bg-yellow-400 text-black font-extrabold text-[11px] font-['Outfit'] transition-all cursor-pointer shadow-sm"
            >
              Accept All
            </button>
            <button
              onClick={handleEssentialOnly}
              className="px-3 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/10 font-medium text-[11px] transition-all cursor-pointer"
            >
              Essential Only
            </button>
            <a
              href="/cookie-policy"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('/cookie-policy');
              }}
              className="text-[11px] text-slate-400 hover:text-[#ffbe1a] underline ml-1 cursor-pointer transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
        <button
          onClick={handleEssentialOnly}
          className="text-slate-400 hover:text-white p-1 cursor-pointer"
          aria-label="Close cookie banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
