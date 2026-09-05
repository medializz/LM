import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, MessageSquare, Sparkles } from 'lucide-react';
import { AboutContent, SiteSettings } from '../../types';
import { navigateTo } from '../../utils/router';
import { createWhatsAppUrl } from '../../utils/whatsapp';

interface AboutCTAProps {
  content?: AboutContent;
  siteSettings?: SiteSettings;
  onOpenContact?: () => void;
}

export const AboutCTA: React.FC<AboutCTAProps> = ({
  content,
  siteSettings,
  onOpenContact
}) => {
  const ctaTitle = content?.ctaTitle || "Ready to Build Something Extraordinary?";
  const ctaDescription = content?.ctaDescription || "Join forces with our creative directors, designers, and engineers to elevate your brand presence and scale your digital growth.";
  const ctaButtonText = content?.ctaButtonText || "Start a Project";
  const ctaButtonUrl = content?.ctaButtonUrl || "/contact";

  const whatsappUrl = createWhatsAppUrl(
    siteSettings?.whatsappNumber || "",
    "Hello Lizzdo Media, I visited your About page and would like to discuss a project with your team.",
    "Hello Lizzdo Media, I would like to discuss a project."
  );

  return (
    <section 
      className="relative z-20 py-20 sm:py-24 border-b border-white/[0.08] bg-gradient-to-b from-[#07090e] via-[#0d101c] to-[#07090e] overflow-hidden"
      aria-label="Start a Project CTA"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 text-[#ffbe1a] text-xs font-mono font-bold uppercase tracking-wider"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>JOIN AMBITIOUS BRANDS</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-black font-['Outfit'] text-white tracking-tight leading-tight max-w-3xl mx-auto"
        >
          {ctaTitle}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
        >
          {ctaDescription}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
          <button
            type="button"
            onClick={() => {
              if (onOpenContact) {
                onOpenContact();
              } else {
                navigateTo(ctaButtonUrl);
              }
            }}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#ffbe1a] text-black font-bold font-['Outfit'] text-base hover:bg-amber-400 transition-all shadow-xl hover:shadow-[#ffbe1a]/20 cursor-pointer active:scale-95"
          >
            <span>{ctaButtonText}</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href="/work"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('/work');
            }}
            className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] text-white border border-white/[0.1] hover:border-white/[0.2] font-semibold font-['Outfit'] text-base transition-all"
          >
            <span>View Our Work</span>
            <ArrowUpRight className="w-4 h-4 text-slate-400" />
          </a>

          {siteSettings?.whatsappNumber && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30 font-semibold font-['Outfit'] text-base transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          )}
        </motion.div>

        {/* Reassurance text */}
        <div className="pt-4 text-xs font-mono text-slate-400">
          <span>Cardiff Creative Studio • Reviewing inquiries within 24 business hours</span>
        </div>

      </div>
    </section>
  );
};
