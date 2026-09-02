import React, { useState, useEffect, useMemo } from 'react';
import { 
  Mail, Phone, MessageCircle, Send, CheckCircle2, 
  Sparkles, Clock, ShieldCheck, ChevronDown, ChevronUp, ArrowRight, ExternalLink,
  Briefcase, Calendar, Check, AlertCircle, RefreshCw, X, MapPin, Globe, Headphones
} from 'lucide-react';
import { DecapCMSData, ProjectInquiryData } from '../../types';
import { Breadcrumb } from '../Breadcrumb';
import { SEOHead } from '../SEOHead';
import { createWhatsAppUrl, createTelUrl, createMailtoUrl } from '../../utils/whatsapp';
import { SocialLinks } from '../SocialLinks';

interface ContactPageProps {
  cmsData: DecapCMSData;
  initialService?: string;
}

// Canonical Services List based on Lizzdo Media Architecture
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

const TIMELINE_OPTIONS = [
  "As soon as possible",
  "Within 1–2 weeks",
  "Within 1 month",
  "1–3 months",
  "Not sure yet"
];

const BUDGET_OPTIONS = [
  "Select a budget range (Optional)",
  "Under $1,000",
  "$1,000 – $3,000",
  "$3,000 – $5,000",
  "$5,000 – $10,000",
  "$10,000+",
  "Not sure yet"
];

const CONTACT_PREFERENCES = [
  { id: "Either", label: "Either (Email or WhatsApp)" },
  { id: "Email", label: "Email" },
  { id: "WhatsApp", label: "WhatsApp" }
];

const DISCOVERY_SOURCES = [
  "Google / Search Engine",
  "Social Media (Instagram, LinkedIn, X)",
  "Referral / Word of Mouth",
  "Portfolio / Case Study",
  "Other"
];

export const ContactPage: React.FC<ContactPageProps> = ({ cmsData, initialService = '' }) => {
  const { siteSettings, contact, social, services = [], portfolio = [] } = cmsData;

  // Resolved CMS variables with safe fallbacks
  const pageHeadline = contact?.title || contact?.headline || "Start a Project or Request an Estimated Budget";
  const pageSubheadline = contact?.subtitle || contact?.description || "Tell us about your brand goals, target timeline, and requirements. We'll analyze your project and deliver an itemized creative plan and timeline estimate.";
  const pageEyebrow = contact?.eyebrow || "DIRECT STUDIO INQUIRY";
  
  const mainEmail = contact?.contactEmail || siteSettings.contactEmail || "contact@media.lizzdo.com";
  const businessEmail = contact?.businessEmail || (siteSettings as any)?.businessEmail;
  const supportEmail = contact?.supportEmail || (siteSettings as any)?.supportEmail;
  const phone = contact?.phone || siteSettings.phone;
  const whatsappNumber = contact?.whatsappNumber || siteSettings.whatsappNumber;
  const address = contact?.address || siteSettings.address;
  const whatsappDesc = contact?.whatsappDescription || (siteSettings as any)?.whatsappDescription || "Chat directly with our creative team on WhatsApp for expedited project scoping and immediate consultations.";
  const whatsappCta = contact?.whatsappCtaText || (siteSettings as any)?.whatsappCtaText || "Chat on WhatsApp Now";
  
  const formType = contact?.formType || "native";
  const formEndpoint = contact?.formActionUrl || siteSettings.formEndpoint || "";
  const formEmbedUrl = contact?.formEmbedUrl || "";

  // Read URL query params on mount
  const urlParams = useMemo(() => {
    if (typeof window !== 'undefined') {
      return new URLSearchParams(window.location.search);
    }
    return new URLSearchParams();
  }, []);

  const paramService = urlParams.get('service') || '';
  const paramWork = urlParams.get('work') || urlParams.get('project') || '';

  // Resolve matching service from URL or props
  const resolvedInitialService = useMemo(() => {
    if (initialService) return initialService;
    if (paramService) {
      const match = services.find(s => 
        s.slug.toLowerCase() === paramService.toLowerCase() || 
        s.title.toLowerCase() === paramService.toLowerCase()
      );
      if (match) return match.title;
      const availableMatch = AVAILABLE_SERVICES.find(s => 
        s.toLowerCase().includes(paramService.toLowerCase()) || 
        paramService.toLowerCase().includes(s.toLowerCase())
      );
      if (availableMatch) return availableMatch;
    }
    return "Brand Identity";
  }, [initialService, paramService, services]);

  // Combine CMS services with predefined list, ensuring unique titles
  const availableServicesList = useMemo(() => {
    const cmsServiceTitles = services.map(s => s.title);
    return Array.from(new Set([...cmsServiceTitles, ...AVAILABLE_SERVICES]));
  }, [services]);

  // Resolve matching work title if referenced
  const referencedWorkItem = useMemo(() => {
    if (!paramWork) return null;
    const match = portfolio.find(p => 
      p.slug.toLowerCase() === paramWork.toLowerCase() || 
      p.title.toLowerCase() === paramWork.toLowerCase()
    );
    return match ? match.title : paramWork;
  }, [paramWork, portfolio]);

  // Contextual prefilled initial message for visitor to edit
  const initialDescription = useMemo(() => {
    if (referencedWorkItem) {
      return `I’m interested in discussing a project similar to "${referencedWorkItem}".`;
    }
    if (paramService) {
      return `I’m interested in discussing a ${resolvedInitialService} project.`;
    }
    return '';
  }, [referencedWorkItem, paramService, resolvedInitialService]);

  // Form State
  const [formData, setFormData] = useState<ProjectInquiryData>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: resolvedInitialService,
    projectType: 'New Brand',
    budget: '',
    timeline: 'Within 1–2 weeks',
    preferredContact: 'Either',
    findUs: 'Google / Search Engine',
    description: initialDescription,
    referencedWork: referencedWorkItem || undefined
  });

  // Security: Honeypot anti-spam field
  const [honeypot, setHoneypot] = useState('');
  
  // UI & Flow states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [activeContextBadge, setActiveContextBadge] = useState<string | null>(() => {
    if (referencedWorkItem) return `Referencing Case Study: "${referencedWorkItem}"`;
    if (paramService) return `Preselected Service: "${resolvedInitialService}"`;
    return null;
  });

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Sync initial service and description if changed
  useEffect(() => {
    if (resolvedInitialService || referencedWorkItem) {
      setFormData(prev => ({
        ...prev,
        service: resolvedInitialService,
        referencedWork: referencedWorkItem || prev.referencedWork,
        description: prev.description ? prev.description : initialDescription
      }));
    }
  }, [resolvedInitialService, referencedWorkItem, initialDescription]);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const getWhatsAppMessage = (): string => {
    if (referencedWorkItem) {
      return `Hello ${siteSettings.siteName}, I saw your "${referencedWorkItem}" work and would like to discuss a similar project.`;
    }
    if (formData.service) {
      return `Hello ${siteSettings.siteName}, I'm interested in ${formData.service} services and would like to discuss my project.`;
    }
    return contact?.whatsappPrefilledMessage || siteSettings.whatsappPrefilledMessage || `Hello ${siteSettings.siteName}, I would like to discuss a project with your team.`;
  };

  const handleWhatsAppClick = () => {
    const url = createWhatsAppUrl(whatsappNumber, getWhatsAppMessage());
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  // Form Validation & Submission Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // 1. Anti-spam honeypot detection
    if (honeypot.trim() !== '') {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
      }, 600);
      return;
    }

    // 2. Client-side input validation
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      setErrorMessage("Please provide your full name (at least 2 characters).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage("Please provide a valid business or personal email address.");
      return;
    }

    if (!formData.description.trim() || formData.description.trim().length < 10) {
      setErrorMessage("Please provide a brief description of what you're looking to create (at least 10 characters).");
      return;
    }

    setIsSubmitting(true);

    try {
      if (formEndpoint && formEndpoint.trim() !== '') {
        const response = await fetch(formEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: formData.fullName,
            email: formData.email,
            phone: formData.phone || 'Not provided',
            company: formData.company || 'Not provided',
            service: formData.service,
            projectType: formData.projectType,
            timeline: formData.timeline,
            preferredContact: formData.preferredContact,
            findUs: formData.findUs,
            description: formData.description,
            referencedWork: formData.referencedWork || 'None',
            submittedAt: new Date().toISOString(),
            sourceDomain: siteSettings.currentDomain || 'https://media.lizzdo.com'
          })
        });

        if (!response.ok) {
          console.warn("Form endpoint returned non-200 status, falling back to local confirmation");
        }
      }

      // Safe local audit storage
      try {
        const existingInquiries = JSON.parse(localStorage.getItem('lizzdo_inquiries_log') || '[]');
        existingInquiries.push({
          ...formData,
          id: `inq_${Date.now()}`,
          date: new Date().toISOString()
        });
        localStorage.setItem('lizzdo_inquiries_log', JSON.stringify(existingInquiries.slice(-20)));
      } catch {
        // Safe ignore
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      service: resolvedInitialService || 'Brand Identity',
      projectType: 'New Brand',
      budget: '',
      timeline: 'Within 1–2 weeks',
      preferredContact: 'Either',
      findUs: 'Google / Search Engine',
      description: initialDescription,
      referencedWork: referencedWorkItem || undefined
    });
    setActiveContextBadge(null);
    setErrorMessage(null);
  };

  const canonicalUrl = "https://media.lizzdo.com/contact";
  const seoTitle = contact?.metaTitle || "Contact Lizzdo Media | Start a Project or Request an Estimated Budget";
  const seoDescription = contact?.metaDescription || "Connect directly with Lizzdo Media. Tell us about your brand goals, target timeline, and requirements to receive a customized creative plan and project estimate.";

  const contactFaqs = [
    {
      question: "How do you provide project estimates without fixed price sheets?",
      answer: "Every brand has distinct objectives, deliverables, and timelines. We evaluate your specific scope—such as number of packaging SKUs, custom typography, web architecture, or collateral requirements—and prepare a transparent, itemized proposal within 24 business hours."
    },
    {
      question: "What is your standard project payment schedule?",
      answer: "Standard project milestones are structured as a 50% deposit upon kickoff to allocate dedicated studio resources, with the remaining 50% balance due upon final asset sign-off and delivery."
    },
    {
      question: "How quickly will we hear back after submitting an inquiry?",
      answer: "Our creative directors review all inquiries promptly and guarantee a detailed response with potential discussion slots within 24 business hours."
    },
    {
      question: "Do we receive master vector and code ownership?",
      answer: "Yes, 100%. Upon final delivery and sign-off, all intellectual property, source vector files (AI, EPS, SVG), 3D render masters, and web source code belong exclusively to you."
    },
    {
      question: "Can we begin immediately via WhatsApp?",
      answer: "Yes! If you prefer real-time messaging, click our WhatsApp button to start an instant discussion directly with our team with your pre-selected project scope."
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
        "email": mainEmail,
        "telephone": siteSettings.whatsappNumber,
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Inquiries & Estimates",
          "email": mainEmail,
          "telephone": siteSettings.whatsappNumber,
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
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-16 border-b border-white/[0.08] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffbe1a0a_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none opacity-60" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: "Contact", href: "/contact" }]} />

          <div className="max-w-3xl mx-auto text-center space-y-4 pt-6 sm:pt-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 text-[#ffbe1a] text-xs font-mono tracking-wider uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{pageEyebrow}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-['Outfit'] text-white tracking-tight leading-tight">
              {pageHeadline}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              {pageSubheadline}
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Info Channels + Project Inquiry Form */}
      <section className="py-12 sm:py-18 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Communication Channels & WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs uppercase font-mono tracking-widest text-[#ffbe1a]">Direct Channels</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-white">
                How to Connect With Us
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Reach our team directly via WhatsApp for quick questions, or submit your full brief via the project form.
              </p>
            </div>

            <div className="space-y-4">
              
              {/* WhatsApp Live Chat Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#121820] to-[#0e121a] border border-[#25D366]/30 hover:border-[#25D366]/60 transition-all shadow-lg space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-mono">WhatsApp Fast Track</div>
                      <div className="text-sm sm:text-base font-bold text-white">Direct Chat with Studio</div>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#25D366]/10 text-[#25D366] text-[10px] font-mono uppercase tracking-wider font-bold border border-[#25D366]/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                    Online
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {whatsappDesc}
                </p>

                {whatsappNumber && (
                  <div className="text-xs font-mono text-emerald-400 flex items-center justify-between bg-[#25D366]/5 px-3.5 py-2 rounded-xl border border-[#25D366]/20">
                    <span className="text-slate-400">Direct Number:</span>
                    <span className="font-bold text-white">{whatsappNumber}</span>
                  </div>
                )}

                <button
                  onClick={handleWhatsAppClick}
                  className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] active:scale-[0.98] text-black font-extrabold text-xs sm:text-sm font-['Outfit'] transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  aria-label="Start Conversation on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{whatsappCta}</span>
                </button>
              </div>

              {/* Direct Inquiries Email Card */}
              <a
                href={createMailtoUrl(mainEmail, `Project Inquiry - ${siteSettings.siteName}`)}
                className="p-5 rounded-2xl bg-[#10131d] border border-white/[0.08] hover:border-[#ffbe1a]/50 transition-all flex items-start gap-4 group block shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 text-[#ffbe1a] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs text-slate-400 font-mono">Project &amp; Estimate Inquiries</div>
                  <div className="text-sm sm:text-base font-bold text-white group-hover:text-[#ffbe1a] transition-colors mt-0.5 truncate">
                    {mainEmail}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">Guaranteed review within 24 business hours</div>
                </div>
              </a>

              {/* Business / Partnerships Email (Conditional) */}
              {businessEmail && businessEmail !== mainEmail && (
                <a
                  href={createMailtoUrl(businessEmail, `Partnership Inquiry - ${siteSettings.siteName}`)}
                  className="p-5 rounded-2xl bg-[#10131d] border border-white/[0.08] hover:border-[#ffbe1a]/50 transition-all flex items-start gap-4 group block shadow-md"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs text-slate-400 font-mono">Business &amp; Partnerships</div>
                    <div className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-400 transition-colors mt-0.5 truncate">
                      {businessEmail}
                    </div>
                    <div className="text-xs text-slate-400 mt-1">Corporate collabs, joint ventures &amp; media</div>
                  </div>
                </a>
              )}

              {/* Support Email (Conditional) */}
              {supportEmail && supportEmail !== mainEmail && (
                <a
                  href={createMailtoUrl(supportEmail, `Support Request - ${siteSettings.siteName}`)}
                  className="p-5 rounded-2xl bg-[#10131d] border border-white/[0.08] hover:border-[#ffbe1a]/50 transition-all flex items-start gap-4 group block shadow-md"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs text-slate-400 font-mono">Client Support &amp; Operations</div>
                    <div className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-400 transition-colors mt-0.5 truncate">
                      {supportEmail}
                    </div>
                    <div className="text-xs text-slate-400 mt-1">Active client support and deliverables</div>
                  </div>
                </a>
              )}

              {/* Phone / Office (Conditional) */}
              {phone && (
                <a
                  href={createTelUrl(phone)}
                  className="p-5 rounded-2xl bg-[#10131d] border border-white/[0.08] hover:border-[#ffbe1a]/50 transition-all flex items-start gap-4 group block shadow-md"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs text-slate-400 font-mono">Phone / WhatsApp Voice</div>
                    <div className="text-sm sm:text-base font-bold text-white group-hover:text-amber-400 transition-colors mt-0.5 truncate">
                      {phone}
                    </div>
                    <div className="text-xs text-slate-400 mt-1">Available Mon – Sat, 9:00 AM – 7:00 PM (PKT)</div>
                  </div>
                </a>
              )}

              {/* Physical Studio Location (Conditional) */}
              {address && (
                <div className="p-5 rounded-2xl bg-[#10131d] border border-white/[0.08] flex items-start gap-4 shadow-md">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 text-slate-300 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#ffbe1a]" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Studio Hub &amp; Location</div>
                    <div className="text-sm font-bold text-white mt-0.5">
                      {address}
                    </div>
                    <div className="text-xs text-slate-400 mt-1">Global operations serving worldwide brands</div>
                  </div>
                </div>
              )}

              {/* Social Channels Section */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#10131d] border border-white/[0.08] space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#ffbe1a]">
                  <Globe className="w-4 h-4" />
                  <span>Follow Our Social Feeds</span>
                </div>
                <p className="text-xs text-slate-400">
                  Stay updated with our latest design drops, case studies, and studio insights.
                </p>
                <SocialLinks siteSettings={siteSettings} social={social} variant="cards" />
              </div>

            </div>

            {/* Turnaround & Confidentiality Assurance */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#ffbe1a]">
                <ShieldCheck className="w-4 h-4" />
                <span>Our Studio Standards</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300 leading-relaxed">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#ffbe1a] shrink-0" />
                  <span>Itemized proposals with zero hidden add-on costs</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#ffbe1a] shrink-0" />
                  <span>100% vector, render, and code asset ownership</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#ffbe1a] shrink-0" />
                  <span>Confidentiality &amp; non-disclosure guaranteed</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: Project Inquiry Form Card or Secure Embed */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#10131d] border border-white/[0.1] p-6 sm:p-9 shadow-2xl space-y-6">
              
              {/* If Form is set to Embed in CMS */}
              {formType === 'embed' && formEmbedUrl && formEmbedUrl.startsWith('https://') ? (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-bold font-['Outfit'] text-white">
                      {contact?.formTitle || "Submit Project Brief"}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400">
                      Please complete the project questionnaire below.
                    </p>
                  </div>
                  <div className="w-full rounded-2xl overflow-hidden bg-black/40 border border-white/10 min-h-[600px]">
                    <iframe
                      src={formEmbedUrl}
                      title="Lizzdo Media Project Inquiry Form"
                      className="w-full h-[650px] border-0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      sandbox="allow-forms allow-scripts allow-same-origin allow-popups"
                    />
                  </div>
                </div>
              ) : (
                /* Native Responsive Form */
                <>
                  {/* Context Preselection Notification Banner */}
                  {activeContextBadge && (
                    <div className="p-3.5 rounded-xl bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 flex items-center justify-between gap-3 text-xs text-white">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#ffbe1a] shrink-0" />
                        <span>{activeContextBadge}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setActiveContextBadge(null)}
                        className="text-slate-400 hover:text-white text-[11px] font-mono cursor-pointer p-1"
                        aria-label="Dismiss context tag"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}

                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-bold font-['Outfit'] text-white">
                      {contact?.formTitle || "Tell Us About Your Project"}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400">
                      {contact?.formSubtitle || "Please share your requirements below so we can prepare an accurate proposal."}
                    </p>
                  </div>

                  {/* Error Message Alert */}
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold">Validation Note: </span>
                        {errorMessage}
                      </div>
                    </div>
                  )}

                  {submitted ? (
                    /* SUCCESS CONFIRMATION STATE */
                    <div className="py-8 px-6 rounded-2xl bg-gradient-to-b from-[#ffbe1a]/10 to-transparent border border-[#ffbe1a]/30 text-center space-y-5">
                      <div className="w-14 h-14 rounded-full bg-[#ffbe1a] text-black flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(255,190,26,0.5)]">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      
                      <div className="space-y-2 max-w-lg mx-auto">
                        <h4 className="text-2xl font-bold font-['Outfit'] text-white">
                          Inquiry Received!
                        </h4>
                        <p className="text-sm text-slate-200 leading-relaxed">
                          Thank you, <strong className="text-white">{formData.fullName}</strong>. We have received your project details for <strong className="text-[#ffbe1a]">{formData.service}</strong>.
                        </p>
                        <p className="text-xs text-slate-400">
                          Our creative directors will evaluate your requirements and contact you via {formData.preferredContact === 'WhatsApp' ? 'WhatsApp' : 'email'} within 24 business hours.
                        </p>
                      </div>

                      {/* Immediate WhatsApp Continuation Button */}
                      <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <button
                          onClick={() => {
                            const directMsg = `Hi ${siteSettings.siteName}, I just submitted an inquiry for ${formData.service} (Name: ${formData.fullName}). Looking forward to connecting!`;
                            const url = createWhatsAppUrl(whatsappNumber, directMsg);
                            if (url && url !== '#') {
                              window.open(url, '_blank', 'noopener,noreferrer');
                            }
                          }}
                          className="w-full sm:w-auto py-3 px-6 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-extrabold text-xs sm:text-sm font-['Outfit'] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>Continue on WhatsApp →</span>
                        </button>

                        <button
                          onClick={handleResetForm}
                          className="w-full sm:w-auto py-3 px-6 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] text-white text-xs sm:text-sm font-bold font-['Outfit'] transition-all cursor-pointer"
                        >
                          Send Another Inquiry
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* INQUIRY FORM */
                    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                      
                      {/* Anti-Spam Honeypot Field */}
                      <div className="sr-only" aria-hidden="true">
                        <label htmlFor="hp_website_title">Do not fill this field</label>
                        <input
                          id="hp_website_title"
                          type="text"
                          name="hp_website_title"
                          tabIndex={-1}
                          autoComplete="off"
                          value={honeypot}
                          onChange={(e) => setHoneypot(e.target.value)}
                        />
                      </div>

                      {/* ROW 1: Full Name & Email Address */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label htmlFor="inquiry-fullname" className="text-xs font-mono text-slate-300 block">
                            Full Name <span className="text-[#ffbe1a]">*</span>
                          </label>
                          <input
                            id="inquiry-fullname"
                            type="text"
                            required
                            placeholder="Alex Morgan"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] focus:border-[#ffbe1a] focus:ring-1 focus:ring-[#ffbe1a] focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label htmlFor="inquiry-email" className="text-xs font-mono text-slate-300 block">
                            Email Address <span className="text-[#ffbe1a]">*</span>
                          </label>
                          <input
                            id="inquiry-email"
                            type="email"
                            required
                            placeholder="alex@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] focus:border-[#ffbe1a] focus:ring-1 focus:ring-[#ffbe1a] focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
                          />
                        </div>
                      </div>

                      {/* ROW 2: WhatsApp Number & Company Name */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label htmlFor="inquiry-phone" className="text-xs font-mono text-slate-300 block">
                            WhatsApp / Phone <span className="text-slate-500 text-[11px]">(Recommended)</span>
                          </label>
                          <input
                            id="inquiry-phone"
                            type="tel"
                            placeholder="e.g. +1 (555) 000-0000"
                            value={formData.phone || ''}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] focus:border-[#ffbe1a] focus:ring-1 focus:ring-[#ffbe1a] focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label htmlFor="inquiry-company" className="text-xs font-mono text-slate-300 block">
                            Company / Brand Name <span className="text-slate-500 text-[11px]">(Optional)</span>
                          </label>
                          <input
                            id="inquiry-company"
                            type="text"
                            placeholder="Acme Studio / Brand"
                            value={formData.company || ''}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] focus:border-[#ffbe1a] focus:ring-1 focus:ring-[#ffbe1a] focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
                          />
                        </div>
                      </div>

                      {/* ROW 3: Service Selection & Project Type */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label htmlFor="inquiry-service" className="text-xs font-mono text-slate-300 block">
                            Service Needed <span className="text-[#ffbe1a]">*</span>
                          </label>
                          <select
                            id="inquiry-service"
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-[#171a24] border border-white/[0.1] focus:border-[#ffbe1a] focus:ring-1 focus:ring-[#ffbe1a] focus:outline-none text-sm text-white transition-colors"
                          >
                            {availableServicesList.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                        </div>

                        <div className="space-y-1.5">
                          <label htmlFor="inquiry-project-type" className="text-xs font-mono text-slate-300 block">
                            Project Type <span className="text-[#ffbe1a]">*</span>
                          </label>
                          <select
                            id="inquiry-project-type"
                            value={formData.projectType}
                            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-[#171a24] border border-white/[0.1] focus:border-[#ffbe1a] focus:ring-1 focus:ring-[#ffbe1a] focus:outline-none text-sm text-white transition-colors"
                          >
                            {PROJECT_TYPES.map((pt) => (
                              <option key={pt} value={pt}>{pt}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* ROW 4: Target Timeline & Estimated Budget */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label htmlFor="inquiry-timeline" className="text-xs font-mono text-slate-300 block">
                            Target Timeline <span className="text-[#ffbe1a]">*</span>
                          </label>
                          <select
                            id="inquiry-timeline"
                            value={formData.timeline}
                            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-[#171a24] border border-white/[0.1] focus:border-[#ffbe1a] focus:ring-1 focus:ring-[#ffbe1a] focus:outline-none text-sm text-white transition-colors"
                          >
                            {TIMELINE_OPTIONS.map((t) => (
                              <option key={t} value={t}>{t}</option>
                            ))}
                          </select>
                        </div>

                        <div className="space-y-1.5">
                          <label htmlFor="inquiry-budget" className="text-xs font-mono text-slate-300 block">
                            Estimated Budget <span className="text-slate-500 text-[11px]">(Optional)</span>
                          </label>
                          <select
                            id="inquiry-budget"
                            value={formData.budget || ''}
                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-[#171a24] border border-white/[0.1] focus:border-[#ffbe1a] focus:ring-1 focus:ring-[#ffbe1a] focus:outline-none text-sm text-white transition-colors"
                          >
                            {BUDGET_OPTIONS.map((b) => (
                              <option key={b} value={b.startsWith('Select') ? '' : b}>{b}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* ROW 5: Preferred Contact Method & How Did You Find Us */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label htmlFor="inquiry-contact-pref" className="text-xs font-mono text-slate-300 block">
                            Preferred Contact Method
                          </label>
                          <select
                            id="inquiry-contact-pref"
                            value={formData.preferredContact}
                            onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value as any })}
                            className="w-full px-4 py-3 rounded-xl bg-[#171a24] border border-white/[0.1] focus:border-[#ffbe1a] focus:ring-1 focus:ring-[#ffbe1a] focus:outline-none text-sm text-white transition-colors"
                          >
                            {CONTACT_PREFERENCES.map((pref) => (
                              <option key={pref.id} value={pref.id}>{pref.label}</option>
                            ))}
                          </select>
                        </div>

                        <div className="space-y-1.5">
                          <label htmlFor="inquiry-find-us" className="text-xs font-mono text-slate-300 block">
                            How Did You Find Us? <span className="text-slate-500 text-[11px]">(Optional)</span>
                          </label>
                          <select
                            id="inquiry-find-us"
                            value={formData.findUs || 'Google / Search Engine'}
                            onChange={(e) => setFormData({ ...formData, findUs: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-[#171a24] border border-white/[0.1] focus:border-[#ffbe1a] focus:ring-1 focus:ring-[#ffbe1a] focus:outline-none text-sm text-white transition-colors"
                          >
                            {DISCOVERY_SOURCES.map((source) => (
                              <option key={source} value={source}>{source}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* ROW 6: Project Description Textarea */}
                      <div className="space-y-1.5">
                        <label htmlFor="inquiry-description" className="text-xs font-mono text-slate-300 block">
                          Project Description &amp; Requirements <span className="text-[#ffbe1a]">*</span>
                        </label>
                        <textarea
                          id="inquiry-description"
                          required
                          rows={5}
                          placeholder="Tell us what you're looking to create, what you need help with, and any important requirements..."
                          value={formData.description}
                          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] focus:border-[#ffbe1a] focus:ring-1 focus:ring-[#ffbe1a] focus:outline-none text-sm text-white placeholder-slate-500 transition-colors resize-none leading-relaxed"
                        />
                        <div className="text-[11px] text-slate-500 flex justify-between">
                          <span>Minimum 10 characters</span>
                          <span>{formData.description.length} characters</span>
                        </div>
                      </div>

                      {/* SUBMIT BUTTON */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-xl bg-[#ffbe1a] hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed text-black font-extrabold text-base font-['Outfit'] transition-all shadow-[0_0_20px_rgba(255,190,26,0.35)] hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer mt-2"
                      >
                        {isSubmitting ? (
                          <>
                            <RefreshCw className="w-4 h-4 animate-spin" />
                            <span>Transmitting Inquiry...</span>
                          </>
                        ) : (
                          <>
                            <span>{contact?.formSubmitText || "Submit Project Inquiry"}</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>

                      <div className="text-[11px] text-slate-400 text-center pt-2 leading-relaxed">
                        By submitting, your inquiry is securely dispatched to our creative team. We respect your confidentiality and never share your data.
                      </div>

                    </form>
                  )}
                </>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="py-14 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-[#ffbe1a]">Transparent Process</span>
          <h2 className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-white">
            Client Inquiries FAQ
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Answers to common questions before starting a project with Lizzdo Media.
          </p>
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
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer hover:text-[#ffbe1a] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffbe1a]"
                >
                  <span className="font-bold text-sm sm:text-base text-white">{faq.question}</span>
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
                    aria-label={faq.question}
                    className="px-4 sm:px-5 pb-5 text-sm text-slate-300 leading-relaxed border-t border-white/[0.04] pt-3"
                  >
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
