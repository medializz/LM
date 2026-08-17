import React from 'react';
import { BodyCtaContent } from '../../types';
import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';

interface BodyCtaSectionProps {
  content?: Partial<BodyCtaContent>;
  whatsappNumber?: string;
  onOpenContact: () => void;
}

export const BodyCtaSection: React.FC<BodyCtaSectionProps> = ({
  content = {} as Partial<BodyCtaContent>,
  whatsappNumber,
  onOpenContact
}) => {
  return (
    <section 
      id="contact" 
      className="relative z-20 py-16 sm:py-20 lg:py-24 border-t border-white/[0.06] overflow-hidden"
      aria-label="Final Call to Action"
    >
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ffbe1a]/[0.04] via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-900/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="p-8 sm:p-12 md:p-14 rounded-3xl bg-gradient-to-b from-[#121520] via-[#0d0f17] to-[#0a0c12] border border-white/[0.1] shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(255,190,26,0.08)] relative overflow-hidden"
        >
          {/* Subtle top golden light line */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#ffbe1a]/80 to-transparent" />

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-black text-white font-['Outfit'] tracking-tight leading-tight mb-4 max-w-2xl mx-auto">
            {content.heading || "Let's Build Something Great Together."}
          </h2>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base text-slate-300 font-['Plus_Jakarta_Sans'] max-w-xl mx-auto leading-relaxed mb-8">
            {content.description || "Have a project in mind? Tell us what you need and let's create something that moves your brand forward."}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3 rounded-full bg-[#ffbe1a] text-black font-extrabold text-sm font-['Outfit'] hover:bg-yellow-400 active:scale-95 transition-all shadow-[0_0_30px_rgba(255,190,26,0.4)] cursor-pointer"
              aria-label="Let's talk about your project"
            >
              <span>{content.ctaText || "Let's Talk"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {whatsappNumber && (
              <a
                href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hi Lizzdo Media! I'm interested in starting a project.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#171b26] hover:bg-[#202533] border border-white/10 hover:border-emerald-500/50 text-white hover:text-emerald-300 font-bold text-sm font-['Outfit'] transition-all shadow-md"
                aria-label="Contact via WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Us</span>
              </a>
            )}
          </div>

        </motion.div>

      </div>
    </section>
  );
};
