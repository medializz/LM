import React, { useState, useEffect } from 'react';
import { Send, MessageCircle, Phone, Sparkles, ChevronUp, ChevronDown } from 'lucide-react';
import { SiteSettings } from '../types';

interface MobileQuickBarProps {
  siteSettings: SiteSettings;
  onOpenContact: () => void;
  isModalOpen?: boolean;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({
  siteSettings,
  onOpenContact,
  isModalOpen = false
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Auto-hide when contact modal is open to keep UI clean
  if (isModalOpen) return null;

  const whatsappLink = siteSettings.whatsappNumber
    ? `https://wa.me/${siteSettings.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hi Lizzdo Media! I'd like to discuss a project.")}`
    : '#contact';

  return (
    <div
      id="mobile-quick-action-bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 px-3 pt-2 pb-[calc(0.6rem+env(safe-area-inset-bottom,0px))] bg-[#090b10]/95 backdrop-blur-xl border-t border-white/10 shadow-[0_-10px_30px_rgba(0,0,0,0.85)] transition-transform duration-300"
      role="region"
      aria-label="Mobile Quick Actions"
    >
      <div className="max-w-md mx-auto flex items-center justify-between gap-2">
        {/* Quick WhatsApp Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            if (!siteSettings.whatsappNumber) {
              e.preventDefault();
              onOpenContact();
            }
          }}
          className="min-h-[44px] px-3.5 py-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] active:bg-[#25D366]/20 border border-white/15 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shrink-0"
          aria-label="Chat on WhatsApp"
        >
          <div className="w-4 h-4 rounded-full bg-[#25D366] flex items-center justify-center text-black shrink-0">
            <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </div>
          <span>WhatsApp</span>
        </a>

        {/* Primary Action Button: Start a Project (Touch Target >= 44px) */}
        <button
          onClick={onOpenContact}
          className="flex-1 min-h-[44px] px-4 py-2.5 rounded-full bg-gradient-to-r from-[#ffbe1a] to-[#f5b318] hover:from-[#ffc83b] hover:to-[#e5a20e] active:scale-[0.98] text-black font-extrabold text-xs sm:text-sm font-['Outfit'] flex items-center justify-center gap-1.5 shadow-[0_0_20px_rgba(255,190,26,0.4)] transition-all cursor-pointer"
          aria-label="Start a project with Lizzdo Media"
        >
          <Sparkles className="w-3.5 h-3.5 fill-black" />
          <span>{siteSettings.primaryCtaText || "Let's Talk"}</span>
        </button>

        {/* Quick Call / Email Button */}
        <a
          href={siteSettings.whatsappNumber ? `tel:${siteSettings.whatsappNumber.replace(/[^0-9+]/g, '')}` : `mailto:${siteSettings.contactEmail || 'contact@media.lizzdo.com'}`}
          className="min-h-[44px] min-w-[44px] p-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] active:bg-white/20 border border-white/15 text-slate-300 hover:text-white flex items-center justify-center transition-colors shrink-0"
          aria-label="Call or Email Lizzdo Media"
        >
          <Phone className="w-4 h-4 text-[#ffbe1a]" />
        </a>
      </div>
    </div>
  );
};
