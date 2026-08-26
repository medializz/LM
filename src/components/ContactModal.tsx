import React, { useState, useEffect } from 'react';
import { X, Send, Mail, CheckCircle2, MessageCircle, RefreshCw, AlertCircle } from 'lucide-react';
import { SiteSettings } from '../types';
import { LizzdoLogo } from './LizzdoLogo';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  siteSettings: SiteSettings;
  preselectedService?: string | null;
}

const AVAILABLE_SERVICES = [
  "Brand Identity",
  "Logo Design",
  "Graphic Design",
  "Packaging Design",
  "Social Media Design",
  "Social Media Content",
  "Social Media Management",
  "Digital Marketing",
  "Advertising Creatives",
  "AI Visual Content",
  "Website Development",
  "Simple Business Website",
  "Content Posting",
  "Other / Custom Project"
];

const PROJECT_TYPES = [
  "New Brand",
  "Existing Brand",
  "Marketing Campaign",
  "Social Media",
  "Website",
  "Graphic Design",
  "Packaging",
  "Other"
];

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  siteSettings,
  preselectedService,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(preselectedService || 'Brand Identity');
  const [projectType, setProjectType] = useState('New Brand');
  const [description, setDescription] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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

  const rawWhatsApp = siteSettings.whatsappNumber || "+1234567890";
  const cleanWhatsApp = rawWhatsApp.replace(/[^0-9]/g, '');

  const handleWhatsAppQuickChat = () => {
    const msg = encodeURIComponent(`Hi Lizzdo Media, I would like to discuss a ${service} project.`);
    window.open(`https://wa.me/${cleanWhatsApp}?text=${msg}`, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Anti-spam honeypot
    if (honeypot.trim() !== '') {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 500);
      return;
    }

    if (!name.trim() || name.trim().length < 2) {
      setErrorMessage("Please enter your name.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!description.trim() || description.trim().length < 10) {
      setErrorMessage("Please describe your project (at least 10 characters).");
      return;
    }

    setIsSubmitting(true);

    try {
      if (siteSettings.formEndpoint && siteSettings.formEndpoint.trim() !== '') {
        await fetch(siteSettings.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            name,
            email,
            phone: phone || 'Not provided',
            service,
            projectType,
            description,
            submittedAt: new Date().toISOString(),
            sourceDomain: siteSettings.currentDomain || 'https://media.lizzdo.com'
          })
        });
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error("Modal submission error:", err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
    setPhone('');
    setDescription('');
    setErrorMessage(null);
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
        {/* Close button */}
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
                Start A Project
              </span>
              <h2 id="contact-modal-title" className="text-xl sm:text-2xl font-black text-white font-['Outfit'] mt-1">
                Request an Estimated Budget
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 font-['Plus_Jakarta_Sans']">
                Submit your project requirements below or connect via WhatsApp.
              </p>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div 
                id="modal-error-alert" 
                role="alert" 
                className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2"
              >
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4" noValidate>
              
              {/* Honeypot field */}
              <div className="sr-only" aria-hidden="true">
                <label htmlFor="modal-hp-input">Do not fill this field</label>
                <input
                  id="modal-hp-input"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="modal-name" className="block text-xs font-semibold text-slate-300 mb-1">
                  Full Name <span className="text-[#ffbe1a]">*</span>
                </label>
                <input
                  id="modal-name"
                  type="text"
                  required
                  aria-required="true"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Morgan"
                  className="w-full bg-[#181a24] border border-white/10 rounded-xl px-4 py-3 sm:py-2.5 text-base sm:text-sm text-white focus:outline-none focus:border-[#ffbe1a] focus:ring-1 focus:ring-[#ffbe1a] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="modal-email" className="block text-xs font-semibold text-slate-300 mb-1">
                    Email Address <span className="text-[#ffbe1a]">*</span>
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    required
                    aria-required="true"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="w-full bg-[#181a24] border border-white/10 rounded-xl px-4 py-3 sm:py-2.5 text-base sm:text-sm text-white focus:outline-none focus:border-[#ffbe1a] focus:ring-1 focus:ring-[#ffbe1a] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-semibold text-slate-300 mb-1">
                    WhatsApp / Phone
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 555 000-0000"
                    className="w-full bg-[#181a24] border border-white/10 rounded-xl px-4 py-3 sm:py-2.5 text-base sm:text-sm text-white focus:outline-none focus:border-[#ffbe1a] focus:ring-1 focus:ring-[#ffbe1a] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="modal-service" className="block text-xs font-semibold text-slate-300 mb-1">
                    Service Needed <span className="text-[#ffbe1a]">*</span>
                  </label>
                  <select
                    id="modal-service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-[#181a24] border border-white/10 rounded-xl px-4 py-3 sm:py-2.5 text-base sm:text-sm text-white focus:outline-none focus:border-[#ffbe1a] focus:ring-1 focus:ring-[#ffbe1a] transition-colors"
                  >
                    {AVAILABLE_SERVICES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="modal-project-type" className="block text-xs font-semibold text-slate-300 mb-1">
                    Project Type <span className="text-[#ffbe1a]">*</span>
                  </label>
                  <select
                    id="modal-project-type"
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full bg-[#181a24] border border-white/10 rounded-xl px-4 py-3 sm:py-2.5 text-base sm:text-sm text-white focus:outline-none focus:border-[#ffbe1a] focus:ring-1 focus:ring-[#ffbe1a] transition-colors"
                  >
                    {PROJECT_TYPES.map((pt) => (
                      <option key={pt} value={pt}>{pt}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="modal-description" className="block text-xs font-semibold text-slate-300 mb-1">
                  Project Description & Requirements <span className="text-[#ffbe1a]">*</span>
                </label>
                <textarea
                  id="modal-description"
                  rows={3}
                  required
                  aria-required="true"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Tell us what you're looking to create, deliverables needed, and any specific timelines..."
                  className="w-full bg-[#181a24] border border-white/10 rounded-xl px-4 py-2.5 sm:py-2 text-base sm:text-sm text-white focus:outline-none focus:border-[#ffbe1a] focus:ring-1 focus:ring-[#ffbe1a] transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 min-h-[48px] py-3.5 px-6 rounded-full bg-[#ffbe1a] text-black font-extrabold text-sm sm:text-base hover:bg-yellow-400 disabled:opacity-50 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,190,26,0.4)] cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Project Inquiry</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppQuickChat}
                  className="w-full sm:w-auto min-h-[48px] py-3.5 px-5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/15 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* SUCCESS STATE */
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#ffbe1a]/15 text-[#ffbe1a] flex items-center justify-center mx-auto border border-[#ffbe1a]/40 shadow-[0_0_25px_rgba(255,190,26,0.3)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            
            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-black text-white font-['Outfit']">
                Inquiry Sent Successfully!
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto font-['Plus_Jakarta_Sans']">
                Thank you, <span className="text-white font-semibold">{name}</span>. Our creative directors will review your <span className="text-[#ffbe1a]">{service}</span> brief and reply within 24 hours.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => {
                  const directMsg = encodeURIComponent(`Hi Lizzdo Media, I just submitted an inquiry for ${service} (Name: ${name}). Looking forward to connecting!`);
                  window.open(`https://wa.me/${cleanWhatsApp}?text=${directMsg}`, '_blank', 'noopener,noreferrer');
                }}
                className="w-full sm:w-auto py-2.5 px-6 rounded-full bg-[#25D366] text-black font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Continue on WhatsApp →</span>
              </button>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto min-h-[44px] py-2.5 px-6 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-white font-bold text-xs sm:text-sm transition-all cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
