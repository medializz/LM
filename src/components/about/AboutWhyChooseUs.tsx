import React from 'react';
import { motion } from 'motion/react';
import { 
  Palette, Compass, Cpu, Workflow, 
  Maximize2, Handshake, ArrowRight, ShieldCheck 
} from 'lucide-react';
import { WhyChooseUsContent, SiteSettings } from '../../types';
import { navigateTo } from '../../utils/router';

interface AboutWhyChooseUsProps {
  content?: WhyChooseUsContent;
  siteSettings?: SiteSettings;
  onOpenContact?: () => void;
}

export const AboutWhyChooseUs: React.FC<AboutWhyChooseUsProps> = ({
  content,
  onOpenContact
}) => {
  const eyebrow = content?.eyebrow || "WHY LIZZDO MEDIA";
  const headingPrefix = content?.headingPrefix || "Why Brands Choose ";
  const headingHighlight = content?.headingHighlight || "Lizzdo Media";
  const description = content?.description || "We combine design distinction, commercial strategy, and modern digital engineering to deliver tangible market advantages.";

  const whyCards = [
    {
      icon: <Palette className="w-5 h-5 text-[#ffbe1a]" />,
      title: "1. Creative-First Approach",
      desc: "Original brand identities, packaging dielines, and visual systems built from scratch to prevent cookie-cutter similarity.",
      tag: "Distinct Craft"
    },
    {
      icon: <Compass className="w-5 h-5 text-[#ffbe1a]" />,
      title: "2. Strategy-Driven Design",
      desc: "Every visual asset and user experience is backed by competitive research, user psychology, and revenue objectives.",
      tag: "Commercial Focus"
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#ffbe1a]" />,
      title: "3. Modern Technology",
      desc: "High-performance TypeScript web platforms, headless Decap CMS, and sub-second loading speeds engineered for scale.",
      tag: "Sub-100ms Code"
    },
    {
      icon: <Workflow className="w-5 h-5 text-[#ffbe1a]" />,
      title: "4. Client-Focused Workflow",
      desc: "Direct communication with senior design and technical directors. Transparent milestone updates and rapid iterations.",
      tag: "Agile Sprints"
    },
    {
      icon: <Maximize2 className="w-5 h-5 text-[#ffbe1a]" />,
      title: "5. Scalable Solutions",
      desc: "Brand systems and codebases built modularly so your company can expand product lines and traffic without redesigns.",
      tag: "Future-Proof"
    },
    {
      icon: <Handshake className="w-5 h-5 text-[#ffbe1a]" />,
      title: "6. Long-Term Partnership",
      desc: "We stay connected post-launch, acting as an extension of your marketing and engineering teams as you grow.",
      tag: "Dedicated Team"
    }
  ];

  return (
    <section 
      id="why-choose-us"
      className="relative z-20 py-16 sm:py-20 lg:py-24 border-b border-white/[0.08] bg-[#0a0d17] overflow-hidden"
      aria-label="Why Choose Lizzdo Media"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-3 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 text-[#ffbe1a] text-xs font-mono font-bold uppercase tracking-wider"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{eyebrow}</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-2xl sm:text-4xl lg:text-5xl font-black font-['Outfit'] text-white tracking-tight leading-tight"
            >
              {headingPrefix}
              <span className="text-[#ffbe1a]">{headingHighlight}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-sm sm:text-base text-slate-400 leading-relaxed"
            >
              {description}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="shrink-0"
          >
            <button
              type="button"
              onClick={() => {
                if (onOpenContact) {
                  onOpenContact();
                } else {
                  navigateTo('/contact');
                }
              }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/[0.1] hover:border-[#ffbe1a]/40 text-xs sm:text-sm font-bold font-mono transition-all cursor-pointer"
            >
              <span>{content?.ctaText || "Let's Work Together"}</span>
              <ArrowRight className="w-4 h-4 text-[#ffbe1a]" />
            </button>
          </motion.div>
        </div>

        {/* 6 Responsive Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyCards.map((card, idx) => (
            <motion.div
              key={`why-card-${idx}`}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="p-6 rounded-2xl bg-[#0f1321] border border-white/[0.07] hover:border-[#ffbe1a]/40 transition-all duration-300 group space-y-4 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#ffbe1a]/10 border border-[#ffbe1a]/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {card.icon}
                </div>
                <span className="text-[11px] font-mono text-slate-400 bg-white/[0.03] px-2.5 py-1 rounded-md border border-white/[0.05]">
                  {card.tag}
                </span>
              </div>

              <h3 className="text-lg font-bold font-['Outfit'] text-white group-hover:text-[#ffbe1a] transition-colors">
                {card.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
