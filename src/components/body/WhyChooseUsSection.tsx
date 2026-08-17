import React, { useState } from 'react';
import { WhyChooseUsContent, StatItem, TestimonialItem } from '../../types';
import { ServiceIcon } from '../ServiceIcons';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface WhyChooseUsSectionProps {
  content?: Partial<WhyChooseUsContent>;
  statistics?: StatItem[];
  testimonials?: TestimonialItem[];
  onCtaClick?: () => void;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({
  content = {} as Partial<WhyChooseUsContent>,
  statistics = [],
  testimonials = [],
  onCtaClick
}) => {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);

  const defaultTestimonials: TestimonialItem[] = [
    {
      id: "test-default",
      quote: "Lizzdo Media transformed our brand completely. Their creativity, communication, and dedication are truly outstanding!",
      author: "Ravi Sharma",
      role: "Founder",
      company: "Urban Mart"
    }
  ];

  const safeTestimonials = testimonials && testimonials.length > 0 ? testimonials : defaultTestimonials;
  const sortedStats = [...(statistics || [])].sort((a, b) => (a.order || 0) - (b.order || 0));

  const currentTestimonial = safeTestimonials[activeTestimonialIndex] || safeTestimonials[0];

  const handlePrevTestimonial = () => {
    setActiveTestimonialIndex((prev) => (prev === 0 ? safeTestimonials.length - 1 : prev - 1));
  };

  const handleNextTestimonial = () => {
    setActiveTestimonialIndex((prev) => (prev === safeTestimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section 
      id="why-us" 
      className="relative z-20 py-12 sm:py-16 lg:py-20 border-t border-white/[0.06] overflow-hidden"
      aria-label="Why Choose Lizzdo Media"
    >
      {/* Ambient background lighting */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-purple-900/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TOP ROW: Split Layout matching reference image (Left Headline/CTA + Right Stats Card + Testimonial Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-stretch">
          
          {/* LEFT COLUMN: Why Choose Us Headline & Action */}
          <div className="lg:col-span-4 flex flex-col justify-between py-2">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 text-[#ffbe1a] text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-3 font-['Plus_Jakarta_Sans']"
              >
                <span>{content.eyebrow || "WHY CHOOSE US"}</span>
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.05 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black text-white font-['Outfit'] tracking-tight leading-[1.15] mb-4"
              >
                {content.headingPrefix || "Why Brands Choose "}
                <span className="text-[#ffbe1a] drop-shadow-[0_0_25px_rgba(255,190,26,0.35)] block sm:inline">
                  {content.headingHighlight || "Lizzdo Media"}
                </span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="text-xs sm:text-sm md:text-base text-slate-400 font-['Plus_Jakarta_Sans'] leading-relaxed mb-6"
              >
                {content.description || "We combine creativity, strategy, and technology to deliver exceptional results that help brands grow faster and stronger."}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              <button
                onClick={onCtaClick}
                className="group inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#ffbe1a] text-black font-bold text-xs sm:text-sm font-['Outfit'] hover:bg-yellow-400 active:scale-95 transition-all shadow-[0_0_25px_rgba(255,190,26,0.3)] cursor-pointer"
                aria-label="Let's work together"
              >
                <span>{content.ctaText || "Let's Work Together"}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>

          {/* CENTER: 4 Statistics Grid Box */}
          <div className="lg:col-span-5 flex">
            <motion.div 
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="w-full bg-[#0e1017] border border-white/[0.08] hover:border-white/20 rounded-2xl p-5 sm:p-6 flex flex-col justify-center shadow-xl transition-all duration-300"
            >
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {sortedStats.map((stat) => (
                  <div key={stat.id} className="flex flex-col group">
                    <div className="mb-2 p-2 w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] group-hover:border-[#ffbe1a]/40 flex items-center justify-center transition-colors">
                      <ServiceIcon name={stat.iconKey} size={22} className="text-[#ffbe1a]" />
                    </div>
                    <span className="text-2xl sm:text-3xl font-black text-white font-['Outfit'] tracking-tight group-hover:text-[#ffbe1a] transition-colors">
                      {stat.value}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-200 font-['Outfit'] mt-0.5">
                      {stat.label}
                    </span>
                    {stat.sublabel && (
                      <span className="text-[10px] sm:text-[11px] text-slate-400 font-['Plus_Jakarta_Sans'] leading-tight mt-0.5">
                        {stat.sublabel}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Testimonial Card */}
          <div className="lg:col-span-3 flex">
            <motion.div 
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="w-full bg-[#0e1017] border border-white/[0.08] hover:border-purple-500/40 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-xl transition-all duration-300 relative group overflow-hidden"
            >
              {/* Purple Quote Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded-xl bg-purple-950/60 border border-purple-500/40 flex items-center justify-center text-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.2)]">
                  <Quote className="w-4 h-4 fill-purple-400/20" />
                </div>
                
                {/* Carousel Controls */}
                {testimonials.length > 1 && (
                  <div className="flex items-center gap-1.5">
                    <button 
                      onClick={handlePrevTestimonial}
                      className="w-7 h-7 rounded-full bg-white/[0.05] hover:bg-[#ffbe1a] text-slate-300 hover:text-black flex items-center justify-center transition-colors"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <button 
                      onClick={handleNextTestimonial}
                      className="w-7 h-7 rounded-full bg-white/[0.05] hover:bg-[#ffbe1a] text-slate-300 hover:text-black flex items-center justify-center transition-colors"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>

              {/* Animated Quote text */}
              <div className="flex-1 flex items-center my-2">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentTestimonial.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="text-xs sm:text-[13px] text-slate-300 font-['Plus_Jakarta_Sans'] leading-relaxed italic"
                  >
                    "{currentTestimonial.quote}"
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Author Info */}
              <div className="pt-3 border-t border-white/[0.06] flex items-center gap-3">
                {currentTestimonial.avatar ? (
                  <img 
                    src={currentTestimonial.avatar} 
                    alt={currentTestimonial.author}
                    referrerPolicy="no-referrer"
                    className="w-9 h-9 rounded-full object-cover border border-[#ffbe1a]/50" 
                  />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-[#ffbe1a]/20 border border-[#ffbe1a] flex items-center justify-center text-[#ffbe1a] font-bold text-xs">
                    {currentTestimonial.author.charAt(0)}
                  </div>
                )}
                <div>
                  <h4 className="text-xs font-bold text-white font-['Outfit']">
                    {currentTestimonial.author}
                  </h4>
                  <p className="text-[10.5px] text-slate-400 font-['Plus_Jakarta_Sans']">
                    {currentTestimonial.role}{currentTestimonial.company ? `, ${currentTestimonial.company}` : ''}
                  </p>
                </div>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
