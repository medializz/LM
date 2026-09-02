import React, { useEffect } from 'react';
import { X, MessageCircle, Mail, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { SiteSettings } from '../types';
import { createWorkWhatsAppUrl, createServiceWhatsAppUrl } from '../utils/whatsapp';
import { navigateTo } from '../utils/router';

export interface ProjectInquiryChoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  category?: string;
  client?: string;
  slug?: string;
  type?: 'work' | 'service';
  siteSettings: SiteSettings;
  customWhatsAppMessage?: string;
}

export const ProjectInquiryChoiceModal: React.FC<ProjectInquiryChoiceModalProps> = ({
  isOpen,
  onClose,
  title,
  category,
  client,
  slug,
  type = 'work',
  siteSettings,
  customWhatsAppMessage,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isWork = type === 'work';
  const modalHeading = isWork ? 'Start a Similar Project' : 'Start a Project';
  const subHeading = isWork
    ? `Discuss a project similar to ${title}`
    : `Discuss your ${title} project with our creative team`;

  // WhatsApp generation
  const whatsAppUrl = isWork
    ? createWorkWhatsAppUrl(
        siteSettings.whatsappNumber,
        title,
        client,
        siteSettings.siteName,
        customWhatsAppMessage,
        category
      )
    : createServiceWhatsAppUrl(
        siteSettings.whatsappNumber,
        title,
        siteSettings.siteName,
        customWhatsAppMessage,
        category
      );

  // Contact page URL with query parameter context
  const contactUrl = isWork
    ? `/contact?project=${encodeURIComponent(slug || title)}&service=${encodeURIComponent(category || '')}`
    : `/contact?service=${encodeURIComponent(slug || title)}`;

  const handleGoToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    onClose();
    navigateTo(contactUrl);
  };

  const handleOpenWhatsApp = () => {
    if (whatsAppUrl && whatsAppUrl !== '#') {
      window.open(whatsAppUrl, '_blank', 'noopener,noreferrer');
      onClose();
    }
  };

  return (
    <div
      id="inquiry-choice-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-choice-title"
    >
      <div className="relative w-full max-w-lg bg-[#10131d] border border-[#ffbe1a]/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/80 overflow-hidden text-white">
        
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-24 bg-[#ffbe1a]/15 blur-3xl rounded-full pointer-events-none" />

        {/* Close Button */}
        <button
          id="close-inquiry-choice-modal-btn"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 hover:text-white transition-colors cursor-pointer border border-white/10"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Content */}
        <div className="space-y-6 relative z-10">
          
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 text-xs font-mono text-[#ffbe1a] font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{category || (isWork ? 'Portfolio Case Study' : 'Service Offering')}</span>
            </div>
            
            <h3 id="inquiry-choice-title" className="text-2xl sm:text-3xl font-black font-['Outfit'] text-white">
              {modalHeading}
            </h3>
            
            <p className="text-slate-300 text-sm leading-relaxed">
              {subHeading}. Choose your preferred communication channel below:
            </p>
          </div>

          {/* Project Reference Card */}
          <div className="p-4 rounded-2xl bg-[#090b11] border border-white/[0.08] flex items-center justify-between gap-3">
            <div className="min-w-0">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                {isWork ? 'Referenced Case Study' : 'Selected Service'}
              </span>
              <span className="text-sm font-bold text-white truncate block">
                {title}
              </span>
            </div>
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 flex items-center justify-center text-[#ffbe1a]">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>

          {/* Action Choices */}
          <div className="space-y-3 pt-2">
            
            {/* 1. WhatsApp Button */}
            <button
              id="inquiry-choice-whatsapp-btn"
              onClick={handleOpenWhatsApp}
              className="w-full p-4 rounded-2xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/40 hover:border-[#25D366] text-white transition-all flex items-center justify-between group cursor-pointer shadow-lg hover:shadow-[#25D366]/10"
            >
              <div className="flex items-center gap-3.5 text-left">
                <div className="w-10 h-10 rounded-xl bg-[#25D366] text-black flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-md">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <div className="text-base font-bold font-['Outfit'] text-white flex items-center gap-2">
                    <span>Chat on WhatsApp</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30">Instant</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Direct conversation with our creative directors
                  </p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#25D366] group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </button>

            {/* 2. Contact Form Button */}
            <a
              id="inquiry-choice-contact-btn"
              href={contactUrl}
              onClick={handleGoToContact}
              className="w-full p-4 rounded-2xl bg-[#ffbe1a]/10 hover:bg-[#ffbe1a]/20 border border-[#ffbe1a]/40 hover:border-[#ffbe1a] text-white transition-all flex items-center justify-between group cursor-pointer shadow-lg hover:shadow-[#ffbe1a]/10 block"
            >
              <div className="flex items-center gap-3.5 text-left">
                <div className="w-10 h-10 rounded-xl bg-[#ffbe1a] text-black flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-md">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base font-bold font-['Outfit'] text-white">
                    <span>Detailed Contact Form</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Submit scope specs, timeline, and deliverables
                  </p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#ffbe1a] group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </a>

          </div>

          <div className="pt-2 text-center text-xs text-slate-400 font-mono">
            <span>Official response within 24 business hours • Free discovery session</span>
          </div>

        </div>
      </div>
    </div>
  );
};
