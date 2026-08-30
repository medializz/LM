import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, CheckCircle2, ArrowRight, ShieldCheck, 
  Layers, Compass, Zap, MessageCircle, HeartHandshake, Eye
} from 'lucide-react';
import { DecapCMSData } from '../../types';
import { Breadcrumb } from '../Breadcrumb';
import { SEOHead } from '../SEOHead';
import { navigateTo } from '../../utils/router';
import { TeamSection } from '../body/TeamSection';

interface AboutPageProps {
  cmsData: DecapCMSData;
  onOpenContact: (customService?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ cmsData, onOpenContact }) => {
  const { siteSettings, services = [], clients = [] } = cmsData;
  const publishedClients = clients.filter(c => c.published !== false);

  const handleWhatsApp = () => {
    const rawNumber = siteSettings.whatsappNumber || "+1234567890";
    const cleanNumber = rawNumber.replace(/[^0-9]/g, '');
    const message = encodeURIComponent(`Hi ${siteSettings.siteName}, I visited your About page and would like to connect about an upcoming project.`);
    window.open(`https://wa.me/${cleanNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const canonicalUrl = "https://media.lizzdo.com/about";
  const seoTitle = "About Lizzdo Media | Creative & Digital Agency";
  const seoDescription = "Learn about Lizzdo Media, our design philosophy, creative disciplines, and how we help brands build lasting authority through branding, packaging, web engineering, and digital growth.";

  const publishedTeam = (cmsData.teamMembers || []).filter(m => m.published !== false);

  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Lizzdo Media",
      "description": seoDescription,
      "url": canonicalUrl,
      "mainEntity": {
        "@type": "Organization",
        "name": siteSettings.siteName,
        "url": "https://media.lizzdo.com/",
        "logo": "https://media.lizzdo.com/uploads/lizzdo-media-logo.svg",
        "email": siteSettings.contactEmail,
        "description": "Lizzdo Media is a premier creative and digital agency crafting high-impact brand identities, packaging systems, web development, and digital marketing.",
        ...(publishedTeam.length > 0 ? {
          "member": publishedTeam.map(m => ({
            "@type": "Person",
            "name": m.name,
            "jobTitle": m.jobTitle || m.position || m.role,
            "image": m.profilePhoto || m.photo || m.avatar,
            "description": m.shortDescription || m.shortBio || m.bio
          }))
        } : {})
      }
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
          "name": "About",
          "item": canonicalUrl
        }
      ]
    }
  ];

  const coreValues = [
    {
      icon: Compass,
      title: "Strategic Clarity Over Visual Noise",
      description: "We don't design for vanity metrics or fleeting aesthetics. Every vector curve, typographic scale, and digital interface is anchored in rigorous market research and genuine brand differentiation."
    },
    {
      icon: Layers,
      title: "Mathematical Craft & Precision",
      description: "From millimeter-exact packaging dielines to sub-100ms web application performance, our studio holds every creative deliverable to uncompromising engineering standards."
    },
    {
      icon: Zap,
      title: "Speed, Reliability & Transparency",
      description: "We respect your time and business milestones. Our transparent workflow, proactive communication, and clear timelines ensure you are always informed and ahead of schedule."
    },
    {
      icon: HeartHandshake,
      title: "Long-Term Creative Partnership",
      description: "We don't view client engagements as transactional handoffs. We build durable partnerships, continuously optimizing and scaling your brand assets as your business grows."
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

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 border-b border-white/[0.08] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffbe1a0a_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none opacity-60" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#ffbe1a]/[0.03] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: "About", href: "/about" }]} />

          <div className="max-w-3xl mx-auto text-center space-y-6 pt-6 sm:pt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 text-[#ffbe1a] text-xs font-mono tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Agency Overview & Philosophy</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-['Outfit'] text-white tracking-tight leading-[1.1]">
              Design. Build. <span className="text-[#ffbe1a]">Grow. Together.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              {siteSettings.siteName} is a creative and digital studio built for companies that demand distinction. We unite brand identity design, structural packaging, high-speed web engineering, and result-driven marketing into one cohesive execution powerhouse.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href="/services"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo('/services');
                }}
                className="px-6 sm:px-8 py-3.5 rounded-full bg-[#ffbe1a] hover:bg-amber-400 text-black font-extrabold text-sm font-['Outfit'] transition-all shadow-[0_0_20px_rgba(255,190,26,0.3)] hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/work"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo('/work');
                }}
                className="px-6 sm:px-8 py-3.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/20 font-bold text-sm font-['Outfit'] transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>View Case Studies</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Narrative & Story */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase font-mono tracking-widest text-[#ffbe1a]">Our Story & Purpose</span>
              <h2 className="text-2xl sm:text-4xl font-bold font-['Outfit'] text-white">
                Eliminating the Gap Between Strategy and Craft
              </h2>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Too often, businesses find themselves caught between large, sluggish agencies that deliver abstract slide decks with no execution, and isolated freelancers who lack the breadth to build an integrated brand ecosystem.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {siteSettings.siteName} was founded to eliminate that friction. We bridge deep strategic insight with agile, hands-on production. Whether we are crafting a mathematical vector logo mark, engineering millimeter-accurate packaging dielines, or building sub-second loading web applications, our multidisciplinary team handles every detail with pride and ownership.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <div className="text-2xl font-black font-['Outfit'] text-[#ffbe1a]">100%</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Bespoke Vector & Code Craft</div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <div className="text-2xl font-black font-['Outfit'] text-white">Sub-100ms</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Fast Global Edge Delivery</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-gradient-to-br from-neutral-900 via-[#12151e] to-black border border-white/10 p-8 sm:p-10 shadow-2xl relative overflow-hidden space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 flex items-center justify-center text-[#ffbe1a]">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-['Outfit'] text-white">Our Creative Standards</h3>
                  <p className="text-xs text-slate-400 font-mono">Disciplined Production Quality</p>
                </div>
              </div>

              <ul className="space-y-3.5 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#ffbe1a] shrink-0 mt-0.5" />
                  <span><strong>Zero Template Shortcuts:</strong> Every logo, packaging dieline, and web frontend is created from a blank canvas tailored to your goals.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#ffbe1a] shrink-0 mt-0.5" />
                  <span><strong>Full Vector Ownership:</strong> You own 100% of master source files (AI, SVG, EPS, PDF, Figma, React code) with no restrictive licensing clauses.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#ffbe1a] shrink-0 mt-0.5" />
                  <span><strong>Technical SEO & Performance First:</strong> Websites are engineered for sub-second loading, 100 Core Web Vitals, and semantic crawlability.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#ffbe1a] shrink-0 mt-0.5" />
                  <span><strong>Accessible Direct Communication:</strong> Direct access to creative directors and engineers without bureaucratic layers.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Core Principles Grid */}
      <section className="py-16 sm:py-24 bg-white/[0.02] border-y border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase font-mono tracking-widest text-[#ffbe1a]">Our DNA</span>
            <h2 className="text-2xl sm:text-4xl font-bold font-['Outfit'] text-white">
              Principles That Guide Every Project
            </h2>
            <p className="text-slate-400 text-sm">
              Our studio operates on fundamental beliefs that ensure consistent creative excellence and lasting business impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div 
                  key={idx}
                  className="p-8 rounded-2xl bg-[#10131d] border border-white/[0.08] hover:border-[#ffbe1a]/50 transition-all duration-300 group space-y-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 group-hover:bg-[#ffbe1a]/10 group-hover:border-[#ffbe1a]/40 group-hover:text-[#ffbe1a] text-slate-300 flex items-center justify-center transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-['Outfit'] text-white group-hover:text-[#ffbe1a] transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Team / Leadership Section (from CMS) */}
      <TeamSection 
        teamMembers={cmsData.teamMembers || []} 
        siteSettings={cmsData.siteSettings} 
      />

      {/* Services Directory Strip */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-[#ffbe1a]">Comprehensive Capabilities</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-white">
              Our Core Disciplines
            </h2>
          </div>
          <a
            href="/services"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('/services');
            }}
            className="text-xs sm:text-sm text-slate-400 hover:text-[#ffbe1a] flex items-center gap-1 font-mono transition-colors"
          >
            <span>View All 11 Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {services.slice(0, 8).map((srv) => (
            <a
              key={srv.id}
              href={`/services/${srv.slug}`}
              onClick={(e) => {
                e.preventDefault();
                navigateTo(`/services/${srv.slug}`);
              }}
              className="p-4 rounded-xl bg-[#10131d] border border-white/[0.08] hover:border-[#ffbe1a]/50 transition-all group block"
            >
              <div className="text-sm font-bold text-white group-hover:text-[#ffbe1a] transition-colors">
                {srv.title}
              </div>
              <div className="text-[11px] text-slate-400 mt-1 font-mono">{srv.category}</div>
            </a>
          ))}
        </div>
      </section>

      {/* Client Brands Showcase */}
      {publishedClients.length > 0 && (
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 border-t border-white/[0.06]">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs uppercase font-mono tracking-widest text-[#ffbe1a]">
              Trusted Partnerships
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-white">
              Brands &amp; Companies We've Worked With
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Delivering high-impact identity, packaging, digital engineering, and marketing creatives for world-class businesses.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 pt-4">
            {publishedClients.map((client) => (
              <div
                key={client.id}
                className="p-5 rounded-xl bg-[#10131d] border border-white/[0.08] hover:border-[#ffbe1a]/40 transition-all flex flex-col items-center justify-center text-center space-y-3 group"
              >
                <div className="h-9 flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={client.logoAlt || `${client.name} logo`}
                    loading="lazy"
                    className="max-h-8 max-w-full object-contain filter grayscale group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
                <div className="text-xs font-bold text-white group-hover:text-[#ffbe1a] transition-colors">
                  {client.name}
                </div>
                {client.services && client.services.length > 0 && (
                  <div className="text-[10px] text-slate-400 font-mono">
                    {client.services.slice(0, 2).join(' • ')}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Final Call to Action */}
      <section className="py-16 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#171a24] via-[#12151e] to-[#0d0f16] border border-[#ffbe1a]/30 p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl space-y-6">
          <div className="absolute inset-0 bg-[radial-gradient(#ffbe1a15_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          
          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <span className="text-xs uppercase font-mono tracking-widest text-[#ffbe1a]">Ready to Collaborate?</span>
            <h2 className="text-2xl sm:text-4xl font-black font-['Outfit'] text-white">
              Let's Build Something Exceptional Together.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Reach out with your project requirements to receive a customized creative strategy, timeline estimate, and production plan.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo('/contact');
                }}
                className="px-8 py-3.5 rounded-full bg-[#ffbe1a] hover:bg-amber-400 text-black font-extrabold text-base font-['Outfit'] transition-all shadow-xl shadow-[#ffbe1a]/20 hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <span>Start a Conversation →</span>
              </a>
              <button
                onClick={handleWhatsApp}
                className="px-6 py-3.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/20 font-bold text-base font-['Outfit'] transition-all hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Us</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
