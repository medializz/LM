import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, Phone, MessageCircle, Send, CheckCircle2, 
  Sparkles, Clock, ShieldCheck, ChevronDown, ChevronUp, ArrowRight, ExternalLink
} from 'lucide-react';
import { DecapCMSData } from '../../types';
import { Breadcrumb } from '../Breadcrumb';
import { SEOHead } from '../SEOHead';
import { navigateTo } from '../../utils/router';

interface ContactPageProps {
  cmsData: DecapCMSData;
  initialService?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ cmsData, initialService = '' }) => {
  const { siteSettings, services = [] } = cmsData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: initialService || (services[0]?.title || 'Brand Identity'),
    budget: '$3,000 - $5,000',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const rawNumber = siteSettings.whatsappNumber || "+1234567890";
    const cleanNumber = rawNumber.replace(/[^0-9]/g, '');
    const message = encodeURIComponent(`Hi ${siteSettings.siteName}, I would like to inquire about ${formData.service || 'your services'}.`);
    window.open(`https://wa.me/${cleanNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const canonicalUrl = "https://media.lizzdo.com/contact";
  const seoTitle = "Contact Lizzdo Media | Start a Project or Request an Estimate";
  const seoDescription = "Get in touch with Lizzdo Media to discuss your branding, packaging, web development, or digital marketing project. Receive a tailored estimate and creative plan.";

  const contactFaqs = [
    {
      question: "How do you provide project estimates without fixed price sheets?",
      answer: "Every brand has distinct objectives, deliverables, and timelines. We evaluate your specific scope—such as number of packaging SKUs, web architecture, or collateral requirements—and prepare a transparent, itemized proposal within 24 to 48 hours."
    },
    {
      question: "What is your standard project payment schedule?",
      answer: "Standard project milestones are structured as a 50% deposit upon kickoff to allocate dedicated studio resources, with the remaining 50% balance due upon final asset sign-off and delivery."
    },
    {
      question: "How quickly will we hear back after submitting an inquiry?",
      answer: "Our team reviews all inquiries during business hours and guarantees a detailed response with potential discussion slots within 24 business hours."
    },
    {
      question: "Do we receive master vector and code ownership?",
      answer: "Yes, 100%. Upon final settlement, all intellectual property, source vector files (AI, EPS, SVG), 3D render masters, and React/Tailwind source code belong exclusively to you."
    }
  ];

  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Lizzdo Media",
      "description": seoDescription,
      "url": canonicalUrl,
      "mainEntity": {
        "@type": "Organization",
        "name": siteSettings.siteName,
        "url": "https://media.lizzdo.com/",
        "logo": "https://media.lizzdo.com/uploads/lizzdo-media-logo.svg",
        "email": siteSettings.contactEmail,
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Support & Inquiries",
          "email": siteSettings.contactEmail,
          "availableLanguage": ["English"]
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": contactFaqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://media.lizzdo.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Contact",
          "item": canonicalUrl
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#07090e] text-white selection:bg-[#ffbe1a] selection:text-black font-['Plus_Jakarta_Sans']">
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonicalUrl={canonicalUrl}
        type="website"
        schemaData={schemaData}
      />

      {/* Hero Header */}
      <section className="relative pt-24 sm:pt-32 pb-14 sm:pb-20 border-b border-white/[0.08] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffbe1a0a_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none opacity-60" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: "Contact", href: "/contact" }]} />

          <div className="max-w-3xl mx-auto text-center space-y-5 pt-6 sm:pt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 text-[#ffbe1a] text-xs font-mono tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Studio Inquiries</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-['Outfit'] text-white tracking-tight">
              Start a Project or <span className="text-[#ffbe1a]">Get an Estimate</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Tell us about your brand goals, target timeline, and requirements. We'll analyze your project and deliver an itemized creative plan and timeline estimate.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Info */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left Column: Direct Communication Channels & Guarantee */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="space-y-3">
              <span className="text-xs uppercase font-mono tracking-widest text-[#ffbe1a]">Fast Channels</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-white">
                How to Reach Us
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Connect directly with our creative team via email, WhatsApp, or the inquiry form.
              </p>
            </div>

            <div className="space-y-4">
              
              {/* Direct Email Card */}
              <a
                href={`mailto:${siteSettings.contactEmail || 'contact@media.lizzdo.com'}`}
                className="p-5 rounded-2xl bg-[#10131d] border border-white/[0.08] hover:border-[#ffbe1a]/50 transition-all flex items-start gap-4 group block"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 text-[#ffbe1a] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Email Us Directly</div>
                  <div className="text-sm sm:text-base font-bold text-white group-hover:text-[#ffbe1a] transition-colors mt-0.5">
                    {siteSettings.contactEmail || 'contact@media.lizzdo.com'}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">Typical response within 24 business hours</div>
                </div>
              </a>

              {/* WhatsApp Card */}
              <button
                onClick={handleWhatsApp}
                className="w-full text-left p-5 rounded-2xl bg-[#10131d] border border-white/[0.08] hover:border-[#25D366]/60 transition-all flex items-start gap-4 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Instant Messaging</div>
                  <div className="text-sm sm:text-base font-bold text-white group-hover:text-[#25D366] transition-colors mt-0.5">
                    Chat on WhatsApp →
                  </div>
                  <div className="text-xs text-slate-400 mt-1">Direct message our creative lead</div>
                </div>
              </button>

              {/* Corporate Network */}
              <a
                href={siteSettings.parentCompanyUrl || "https://lizzdo.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[#10131d] border border-white/[0.08] hover:border-white/20 transition-all flex items-start gap-4 group block"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 text-slate-300 flex items-center justify-center shrink-0 group-hover:text-[#ffbe1a] transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Parent Company</div>
                  <div className="text-sm sm:text-base font-bold text-white group-hover:text-[#ffbe1a] transition-colors mt-0.5">
                    Lizzdo Network
                  </div>
                  <div className="text-xs text-slate-400 mt-1">Explore our global ecosystem</div>
                </div>
              </a>

            </div>

            {/* Response Time & Guarantee Banner */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#ffbe1a]">
                <Clock className="w-4 h-4" />
                <span>Our Turnaround Standard</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We respect your launch timelines. Every inquiry receives an initial scope review and consultation booking within 24 hours.
              </p>
            </div>

          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#10131d] border border-white/[0.1] p-6 sm:p-10 shadow-2xl space-y-6">
              
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold font-['Outfit'] text-white">
                  Send Project Details
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Fill out this brief form and our team will get back to you promptly.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#ffbe1a] text-black flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold font-['Outfit'] text-white">Inquiry Received!</h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out to {siteSettings.siteName}. We have received your project details and will review them shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-white text-xs font-bold font-['Outfit']"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300 block">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] focus:border-[#ffbe1a] focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300 block">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] focus:border-[#ffbe1a] focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300 block">Service Needed</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#171a24] border border-white/[0.1] focus:border-[#ffbe1a] focus:outline-none text-sm text-white transition-colors"
                      >
                        {services.map((s) => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                        <option value="Multiple Services / Full Suite">Multiple Services / Full Suite</option>
                        <option value="Custom Strategic Consultation">Custom Strategic Consultation</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300 block">Estimated Budget</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#171a24] border border-white/[0.1] focus:border-[#ffbe1a] focus:outline-none text-sm text-white transition-colors"
                      >
                        <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                        <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                        <option value="$10,000+">$10,000+</option>
                        <option value="Flexible / Need Advice">Flexible / Need Advice</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 block">Project Description & Timeline *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your brand, deliverables required, target launch date, and any specific aesthetic inspirations..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] focus:border-[#ffbe1a] focus:outline-none text-sm text-white placeholder-slate-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#ffbe1a] hover:bg-amber-400 text-black font-extrabold text-base font-['Outfit'] transition-all shadow-[0_0_20px_rgba(255,190,26,0.35)] hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    <span>Submit Project Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <div className="text-[11px] text-slate-400 text-center pt-2">
                    We respect your confidentiality. We never share your contact details.
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-14 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-[#ffbe1a]">Clear & Honest Terms</span>
          <h2 className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-white">
            Client Inquiries FAQ
          </h2>
        </div>

        <div className="space-y-3">
          {contactFaqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div 
                key={idx}
                className="rounded-xl bg-[#10131d] border border-white/[0.08] overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer hover:text-[#ffbe1a] transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base text-white">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#ffbe1a] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-sm text-slate-300 leading-relaxed border-t border-white/[0.04] pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
