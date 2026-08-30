import React, { useMemo } from 'react';
import { TestimonialItem, TestimonialsSectionContent, SiteSettings, ClientItem, PortfolioItem } from '../../types';
import { TestimonialCard } from './TestimonialCard';
import { LizzdoLogo } from '../LizzdoLogo';
import { motion } from 'motion/react';
import { MessageSquareQuote, Star } from 'lucide-react';
import { navigateTo } from '../../utils/router';

interface TestimonialsSectionProps {
  testimonials?: TestimonialItem[];
  content?: TestimonialsSectionContent;
  siteSettings?: SiteSettings;
  clients?: ClientItem[];
  portfolio?: PortfolioItem[];
  onSelectProject?: (item: PortfolioItem) => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials = [],
  content,
  siteSettings,
  clients = [],
  portfolio = [],
  onSelectProject
}) => {
  // Filter published testimonials and sort by order
  const publishedTestimonials = useMemo(() => {
    return [...testimonials]
      .filter(t => t.published !== false)
      .sort((a, b) => (a.order || 0) - (b.order || 0));
  }, [testimonials]);

  // If no published testimonials, gracefully return null (Empty state mandate)
  if (!publishedTestimonials || publishedTestimonials.length === 0) {
    return null;
  }

  const handleSelectRelatedWorkSlug = (workSlug: string) => {
    const matched = portfolio.find(p => p.slug === workSlug || p.id === workSlug);
    if (matched && onSelectProject) {
      onSelectProject(matched);
    } else {
      navigateTo(`/work/${workSlug}`);
    }
  };

  const eyebrowText = content?.eyebrow || "CLIENT TESTIMONIALS";
  const headingPrefix = content?.headingPrefix || "Trusted by ";
  const headingHighlight = content?.headingHighlight || "Industry Leaders";
  const descriptionText = content?.description || "What founders, marketing directors, and product teams say about partnering with Lizzdo Media.";

  return (
    <section
      id="testimonials"
      className="relative z-20 py-16 sm:py-20 lg:py-24 border-t border-white/[0.06] bg-[#07090e] overflow-hidden"
      aria-label="Client Reviews and Testimonials"
    >
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[300px] bg-[#ffbe1a]/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-blue-900/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 sm:space-y-12">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER & INTRO */}
        {/* ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.06]">
          <div className="space-y-3 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 text-[#ffbe1a] text-[11px] font-mono font-bold uppercase tracking-widest"
            >
              <LizzdoLogo 
                variant="mark-only" 
                size="xxs" 
                theme="gold" 
                logoSrc={siteSettings?.logo || siteSettings?.logoLight} 
                markSrc={siteSettings?.logoMark} 
              />
              <span>{eyebrowText}</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Outfit'] tracking-tight leading-[1.1]"
            >
              {headingPrefix}
              <span className="text-[#ffbe1a]">{headingHighlight}</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl"
            >
              {descriptionText}
            </motion.p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400 bg-white/[0.03] px-3.5 py-2 rounded-xl border border-white/[0.06]">
            <MessageSquareQuote className="w-4 h-4 text-[#ffbe1a]" />
            <span>Verified Client Partnerships</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TESTIMONIAL CARDS GRID */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {publishedTestimonials.map((testimonial, idx) => {
            const clientMatch = clients.find(
              c => c.slug === testimonial.relatedCompany || c.id === testimonial.relatedCompany || c.name === testimonial.companyName || c.name === testimonial.company
            );

            return (
              <motion.div
                key={testimonial.id || `testimonial-${idx}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
              >
                <TestimonialCard
                  testimonial={testimonial}
                  clientInfo={clientMatch}
                  onSelectRelatedWork={handleSelectRelatedWorkSlug}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom subtle assurance */}
        <div className="pt-4 text-center">
          <p className="text-xs text-slate-500 font-mono">
            Every partnership is built on strategic clarity, design excellence, and measurable growth.
          </p>
        </div>

      </div>
    </section>
  );
};
