import React, { useState, useEffect } from 'react';
import { X, Send, Mail, CheckCircle, ArrowRight } from 'lucide-react';
import { SiteSettings } from '../types';
import { LizzdoLogo } from './LizzdoLogo';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  siteSettings: SiteSettings;
  preselectedService?: string | null;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  siteSettings,
  preselectedService,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(preselectedService || 'Brand Identity');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
    setMessage('');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div 
        className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-2xl bg-[#10121a] border border-white/15 p-5 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.95)] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button (44px min touch target) */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 min-w-[44px] min-h-[44px] p-2.5 rounded-full bg-white/5 hover:bg-white/10 active:bg-white/20 text-slate-400 hover:text-white transition-colors cursor-pointer flex items-center justify-center"
          aria-label="Close Contact Dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="mb-5 sm:mb-6 pr-8">
              <div className="mb-2.5 sm:mb-3">
                <LizzdoLogo 
                  size="sm" 
                  logoSrc={siteSettings.logo} 
                  markSrc={siteSettings.logoMark} 
                  decorative={true} 
                />
              </div>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#ffbe1a] font-['Plus_Jakarta_Sans']">
                Start A Conversation
              </span>
              <h2 id="contact-modal-title" className="text-xl sm:text-2xl md:text-3xl font-black text-white font-['Outfit'] mt-1">
                Let's Build Something Iconic.
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 font-['Plus_Jakarta_Sans']">
                Direct inquiry to <span className="text-white font-medium">{siteSettings.contactEmail || "lizzdostudio@gmail.com"}</span>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Morgan"
                  className="w-full bg-[#181a24] border border-white/10 rounded-xl px-4 py-3 sm:py-2.5 text-base sm:text-sm text-white focus:outline-none focus:border-[#ffbe1a] focus:ring-1 focus:ring-[#ffbe1a] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Your Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@company.com"
                  className="w-full bg-[#181a24] border border-white/10 rounded-xl px-4 py-3 sm:py-2.5 text-base sm:text-sm text-white focus:outline-none focus:border-[#ffbe1a] focus:ring-1 focus:ring-[#ffbe1a] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Service of Interest</label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-[#181a24] border border-white/10 rounded-xl px-4 py-3 sm:py-2.5 text-base sm:text-sm text-white focus:outline-none focus:border-[#ffbe1a] focus:ring-1 focus:ring-[#ffbe1a] transition-colors"
                >
                  <option value="Brand Identity">Brand Identity</option>
                  <option value="Logo Design">Logo Design</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Social Media Design">Social Media Design</option>
                  <option value="Content Posting">Content Posting</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Social Media Management">Social Media Management</option>
                  <option value="Advertising Creatives">Advertising Creatives</option>
                  <option value="AI Visuals Content">AI Visuals Content</option>
                  <option value="Website Development">Website Development</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Project Brief / Goals</label>
                <textarea
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your brand vision, target timeline, or specific creative needs..."
                  className="w-full bg-[#181a24] border border-white/10 rounded-xl px-4 py-2.5 sm:py-2 text-base sm:text-sm text-white focus:outline-none focus:border-[#ffbe1a] focus:ring-1 focus:ring-[#ffbe1a] transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  type="submit"
                  className="w-full min-h-[48px] py-3.5 px-6 rounded-full bg-[#ffbe1a] text-black font-bold text-sm sm:text-base hover:bg-yellow-400 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,190,26,0.4)] cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Project Inquiry</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-[#ffbe1a]/15 text-[#ffbe1a] flex items-center justify-center mx-auto mb-4 border border-[#ffbe1a]/40 shadow-[0_0_25px_rgba(255,190,26,0.3)]">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white font-['Outfit'] mb-2">
              Inquiry Sent Successfully!
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-6 max-w-sm mx-auto font-['Plus_Jakarta_Sans']">
              Thank you, <span className="text-white font-semibold">{name}</span>. The Lizzdo Media team will review your <span className="text-[#ffbe1a]">{service}</span> brief and reply within 24 hours.
            </p>
            <button
              onClick={handleReset}
              className="min-h-[44px] py-2.5 px-7 rounded-full bg-[#ffbe1a] text-black font-bold text-sm hover:bg-yellow-400 active:scale-95 transition-all"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
