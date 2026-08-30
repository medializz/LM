import React from 'react';
import { Sparkles, Phone, MessageCircle } from 'lucide-react';
import { SiteSettings } from '../types';
import { createWhatsAppUrl, createTelUrl, createMailtoUrl } from '../utils/whatsapp';
import { navigateTo } from '../utils/router';

interface MobileQuickBarProps {
  siteSettings: SiteSettings;
  onOpenContact?: () => void;
  isModalOpen?: boolean;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({
  siteSettings,
  onOpenContact,
  isModalOpen = false
}) => {
  // Auto-hide when modal is open
  if (isModalOpen) return null;

  const whatsappUrl = createWhatsAppUrl(
    siteSettings.whatsappNumber,
    siteSettings.whatsappPrefilledMessage || `Hi ${siteSettings.siteName || 'Lizzdo Media'}! I'd like to discuss a project with your team.`
  );

  const phoneOrMailUrl = siteSettings.phone 
    ? createTelUrl(siteSettings.phone) 
    : createMailtoUrl(siteSettings.contactEmail, `Inquiry for ${siteSettings.siteName || 'Lizzdo Media'}`);

  return (
    <div
      id="mobile-quick-action-bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 px-3 pt-2 pb-[calc(0.6rem+env(safe-area-inset-bottom,0px))] bg-[#090b10]/95 backdrop-blur-xl border-t border-white/10 shadow-[0_-10px_30px_rgba(0,0,0,0.85)] transition-transform duration-300"
      role="region"
      aria-label="Mobile Quick Actions"
    >
      <div className="max-w-md mx-auto flex items-center justify-between gap-2">
        {/* Quick WhatsApp Button */}
        {whatsappUrl && whatsappUrl !== '#' ? (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] px-3.5 py-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] active:bg-[#25D366]/20 border border-white/15 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shrink-0"
            aria-label={`Chat with ${siteSettings.siteName || 'Lizzdo Media'} on WhatsApp`}
          >
            <div className="w-4 h-4 rounded-full bg-[#25D366] flex items-center justify-center text-black shrink-0">
              <MessageCircle className="w-2.5 h-2.5 text-black" />
            </div>
            <span>WhatsApp</span>
          </a>
        ) : null}

        {/* Primary Action Button: Navigate to Contact Page (Touch Target >= 44px) */}
        <a
          href="/contact"
          onClick={(e) => {
            e.preventDefault();
            navigateTo('/contact');
          }}
          className="flex-1 min-h-[44px] px-4 py-2.5 rounded-full bg-gradient-to-r from-[#ffbe1a] to-[#f5b318] hover:from-[#ffc83b] hover:to-[#e5a20e] active:scale-[0.98] text-black font-extrabold text-xs sm:text-sm font-['Outfit'] flex items-center justify-center gap-1.5 shadow-[0_0_20px_rgba(255,190,26,0.4)] transition-all cursor-pointer"
          aria-label={`Start a project with ${siteSettings.siteName || 'Lizzdo Media'}`}
        >
          <Sparkles className="w-3.5 h-3.5 fill-black" />
          <span>{siteSettings.primaryCtaText || "Let's Talk"}</span>
        </a>

        {/* Quick Call / Email Button */}
        {phoneOrMailUrl && phoneOrMailUrl !== '#' ? (
          <a
            href={phoneOrMailUrl}
            className="min-h-[44px] min-w-[44px] p-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] active:bg-white/20 border border-white/15 text-slate-300 hover:text-white flex items-center justify-center transition-colors shrink-0"
            aria-label={`Call or Email ${siteSettings.siteName || 'Lizzdo Media'}`}
          >
            <Phone className="w-4 h-4 text-[#ffbe1a]" />
          </a>
        ) : null}
      </div>
    </div>
  );
};
