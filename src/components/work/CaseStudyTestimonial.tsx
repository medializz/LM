import React from 'react';
import { Star } from 'lucide-react';
import { PortfolioItem } from '../../types';

interface CaseStudyTestimonialProps {
  project?: PortfolioItem;
  quote?: string;
  author?: string;
  role?: string;
  avatar?: string;
}

export const CaseStudyTestimonial: React.FC<CaseStudyTestimonialProps> = ({
  project,
  quote: propQuote,
  author: propAuthor,
  role: propRole,
}) => {
  const quote = propQuote || project?.testimonial || 
    `Working with Lizzdo transformed how our market perceives us. The design quality, speed of delivery, and depth of strategic direction surpassed all expectations.`;

  const author = propAuthor || project?.testimonialAuthor || project?.client || 'Managing Director';
  const role = propRole || project?.testimonialCompany || 'Leadership Team';

  return (
    <section 
      id="case-study-testimonial"
      className="p-8 sm:p-10 rounded-3xl bg-[#10131d] border border-[#ffbe1a]/30 relative overflow-hidden shadow-2xl space-y-6"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffbe1a]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="flex items-center gap-1 text-[#ffbe1a]">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[#ffbe1a]" />
        ))}
      </div>

      <blockquote className="text-lg sm:text-2xl font-['Outfit'] font-bold text-white leading-relaxed max-w-3xl">
        "{quote}"
      </blockquote>

      <div className="flex items-center gap-4 pt-2 border-t border-white/[0.06]">
        <div className="w-10 h-10 rounded-full bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 flex items-center justify-center font-black font-['Outfit'] text-[#ffbe1a]">
          {author.charAt(0)}
        </div>
        <div>
          <div className="font-bold text-white font-['Outfit'] text-sm sm:text-base">
            {author}
          </div>
          <div className="text-xs font-mono text-slate-400">
            {role}
          </div>
        </div>
      </div>
    </section>
  );
};
