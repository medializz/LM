import React from 'react';
import { HeroContent, SiteSettings } from '../types';
import { HeroGraphicComposition } from './HeroGraphicComposition';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  content: HeroContent;
  siteSettings: SiteSettings;
  onExploreWork?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ content, siteSettings, onExploreWork }) => {
  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onExploreWork) {
      onExploreWork();
    } else {
      const workElem = document.getElementById('services-strip');
      if (workElem) {
        workElem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section 
      id="hero-section"
      className="relative pt-18 sm:pt-22 md:pt-24 lg:pt-24 pb-6 sm:pb-10 lg:pb-14"
      aria-label="Hero Section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-10 lg:gap-6 xl:gap-8 items-center">
          
          {/* LEFT COLUMN: Editorial Typography & Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center z-10 text-left"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-2 sm:mb-2.5">
              <span className="w-4 sm:w-6 h-[2px] bg-[#ffbe1a] rounded-full inline-block" />
              <span className="text-[10.5px] sm:text-xs font-bold tracking-wider text-slate-300 uppercase font-['Plus_Jakarta_Sans']">
                {content.eyebrow || "Creative & Digital Agency"}
              </span>
            </div>

            {/* Main Headline - Single H1 for SEO */}
            <h1 
              id="hero-headline"
              className="text-[28px] xs:text-[32px] sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[54px] font-black text-white tracking-tight leading-[1.1] sm:leading-[1.08] font-['Outfit'] mb-3 sm:mb-3.5 max-w-lg"
            >
              <span className="block">{content.headlineLine1 || "Design. Build."}</span>
              <span className="block">
                {content.headlineLine2Prefix || "Grow. "}
                <span className="text-[#ffbe1a] underline decoration-[#ffbe1a]/20 underline-offset-4 sm:underline-offset-8">
                  {content.headlineHighlightedWord || "Together."}
                </span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-slate-300 text-[13px] xs:text-[13.5px] sm:text-[15px] md:text-base font-normal leading-relaxed max-w-[460px] mb-5 sm:mb-6 font-['Plus_Jakarta_Sans']">
              {content.description || "We help brands stand out and grow with creative design, powerful websites, and result-driven digital solutions."}
            </p>

            {/* Primary CTA Button (Optimized for Mobile Touch) */}
            <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3.5">
              <a
                id="hero-primary-cta"
                href={content.primaryCtaUrl || "#work"}
                onClick={handleCtaClick}
                className="group inline-flex items-center justify-between gap-3.5 min-h-[48px] px-6 sm:px-7 py-3.5 sm:py-3 rounded-full bg-[#ffbe1a] text-black font-bold text-sm sm:text-[15px] tracking-wide hover:bg-yellow-400 active:scale-[0.98] transition-all duration-300 shadow-[0_4px_20px_rgba(255,190,26,0.4)] hover:shadow-[0_6px_30px_rgba(255,190,26,0.6)] cursor-pointer outline-none focus-visible:ring-4 focus-visible:ring-[#ffbe1a]/50"
              >
                <span>{content.primaryCtaText || "Explore Our Work"}</span>
                <div className="w-6 h-6 rounded-full bg-black/10 group-hover:bg-black/20 flex items-center justify-center transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 text-black transform group-hover:translate-x-0.5 transition-transform duration-200" />
                </div>
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Creative Workspace & Brand Ecosystem Graphic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-7 xl:col-span-7 flex justify-center items-center relative my-auto w-full overflow-visible"
          >
            <HeroGraphicComposition siteSettings={siteSettings} />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

