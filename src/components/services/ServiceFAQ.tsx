import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { ServiceCategory } from '../../types';

interface ServiceFAQProps {
  service: ServiceCategory;
}

export const ServiceFAQ: React.FC<ServiceFAQProps> = ({ service }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = service.faqs && service.faqs.length > 0
    ? service.faqs
    : [
        {
          question: `How long does a typical ${service.title} project take?`,
          answer: 'Standard projects typically range from 2 to 4 weeks depending on the selected package tier, scope depth, and stakeholder review turnaround times. Expedited timelines are available upon consultation.'
        },
        {
          question: 'Do I own all the final vector and design source files?',
          answer: 'Yes, 100%. Upon project completion and final milestone approval, full commercial rights and master vector files (.AI, .EPS, .SVG, .PDF, .Figma) are transferred directly to you with zero royalty clauses.'
        },
        {
          question: 'What is your revision policy?',
          answer: 'All our packages include dedicated revision rounds to guarantee that the final execution aligns seamlessly with your creative vision and brand strategy.'
        },
        {
          question: 'Can we pay in milestone installments?',
          answer: 'Yes. We standardly operate on a 50% initiation deposit and 50% upon final sign-off, or milestone-based structures for larger bespoke projects.'
        }
      ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section 
      id="service-faqs" 
      className="space-y-6 pt-4 border-t border-white/[0.08]"
      aria-label={`Frequently Asked Questions about ${service.title}`}
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/[0.08] pb-4">
        <div className="space-y-1.5 max-w-2xl">
          <span className="text-xs uppercase font-mono tracking-widest text-[#ffbe1a] font-bold">
            Service Inquiries
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-300 font-['Plus_Jakarta_Sans'] leading-relaxed pt-1">
            Common questions regarding our workflow, licensing, handoff, and turnaround for {service.title}.
          </p>
        </div>

        <span className="text-xs font-mono text-slate-400 bg-white/[0.04] px-3 py-1 rounded-full border border-white/10 shrink-0">
          {faqs.length} Questions Answered
        </span>
      </div>

      <div className="space-y-3 max-w-4xl">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div 
              key={idx}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen 
                  ? 'bg-[#10131d] border-[#ffbe1a]/50 shadow-lg' 
                  : 'bg-[#0c0e17] border-white/[0.08] hover:border-white/20'
              }`}
            >
              <button
                id={`faq-toggle-${idx}`}
                onClick={() => toggleFaq(idx)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${idx}`}
                className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer hover:text-[#ffbe1a] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono shrink-0 ${
                    isOpen ? 'bg-[#ffbe1a] text-black font-bold' : 'bg-white/[0.06] text-slate-400'
                  }`}>
                    {idx + 1}
                  </div>
                  <span className="font-bold text-sm sm:text-base text-white font-['Outfit']">
                    {faq.question}
                  </span>
                </div>
                {isOpen ? (
                  <ChevronUp className="w-4 h-4 text-[#ffbe1a] shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                )}
              </button>

              {isOpen && (
                <div 
                  id={`faq-answer-${idx}`}
                  role="region"
                  aria-labelledby={`faq-toggle-${idx}`}
                  className="px-5 sm:px-6 pb-5 text-sm text-slate-300 font-['Plus_Jakarta_Sans'] leading-relaxed border-t border-white/[0.06] pt-3 pl-12"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
