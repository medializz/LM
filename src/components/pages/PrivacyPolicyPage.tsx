import React from 'react';
import { DecapCMSData } from '../../types';
import { Breadcrumb } from '../Breadcrumb';
import { SEOHead } from '../SEOHead';
import { LizzdoLogo } from '../LizzdoLogo';
import { ShieldCheck, Lock, Eye, FileText, Mail, Globe, Sparkles, ChevronRight } from 'lucide-react';
import { navigateTo } from '../../utils/router';

interface PrivacyPolicyPageProps {
  cmsData: DecapCMSData;
  onOpenContact?: () => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({
  cmsData,
  onOpenContact
}) => {
  const siteSettings = cmsData.siteSettings;
  const lastUpdated = "February 17, 2026";

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-300 font-['Plus_Jakarta_Sans'] selection:bg-[#ffbe1a]/30 selection:text-white">
      <SEOHead
        title={`Privacy Policy | ${siteSettings.siteName}`}
        description={`Read the Privacy Policy for ${siteSettings.siteName}. Learn how we collect, protect, and handle your data across our creative and digital design services.`}
        canonicalUrl={`${siteSettings.currentDomain}privacy`}
        siteSettings={siteSettings}
      />

      {/* Breadcrumb Navigation */}
      <div className="border-b border-white/[0.06] bg-[#0c0e15]/60 backdrop-blur-md">
        <Breadcrumb items={[{ label: 'Privacy Policy', active: true }]} />
      </div>

      {/* Hero Header Banner */}
      <section className="relative py-16 sm:py-20 lg:py-24 border-b border-white/[0.06] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#ffbe1a]/[0.03] rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 text-[#ffbe1a] text-xs font-mono font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>TRANSPARENCY & DATA PROTECTION</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Outfit'] tracking-tight">
            Privacy <span className="text-[#ffbe1a]">Policy</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            At {siteSettings.siteName}, we are dedicated to protecting your privacy, maintaining data security, and safeguarding all personal and client information entrusted to us.
          </p>

          <div className="pt-2 text-xs font-mono text-slate-500">
            Last Updated: <span className="text-slate-300 font-semibold">{lastUpdated}</span> • Effective Immediately
          </div>
        </div>
      </section>

      {/* Main Policy Content */}
      <section className="py-12 sm:py-16 lg:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">

          {/* Quick Summary Box */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#121520] to-[#0a0c12] border border-[#ffbe1a]/20 shadow-xl space-y-3">
            <div className="flex items-center gap-2.5 text-[#ffbe1a] font-bold text-sm sm:text-base font-['Outfit']">
              <Sparkles className="w-4 h-4" />
              <span>Core Commitments</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We never sell, lease, or monetize your personal data or project briefs to third parties. We collect only what is strictly necessary to communicate, execute design and development engagements, deliver high-quality digital assets, and optimize website performance.
            </p>
          </div>

          {/* Section 1: Information We Collect */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#ffbe1a] font-mono text-xs font-bold">
                01
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-['Outfit']">
                Information We Collect
              </h2>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed pl-11">
              We collect information that you directly provide to us when you request a proposal, contact us via forms or email, subscribe to our newsletter, or engage our creative services:
            </p>
            <ul className="space-y-2.5 pl-11 text-xs sm:text-sm text-slate-400 list-disc list-inside">
              <li><strong className="text-slate-200">Contact Details:</strong> Full name, corporate email address, phone number, company name, and job title.</li>
              <li><strong className="text-slate-200">Project Briefs & Assets:</strong> Brand assets, design specifications, technical requirements, target audience data, and project timelines submitted for quote requests.</li>
              <li><strong className="text-slate-200">Usage & Technical Data:</strong> Anonymized browser type, operating system, IP address, referral URLs, and interaction metrics gathered to ensure website uptime and speed.</li>
            </ul>
          </div>

          {/* Section 2: How We Use Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#ffbe1a] font-mono text-xs font-bold">
                02
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-['Outfit']">
                How We Use Your Information
              </h2>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed pl-11">
              The information we gather is used strictly for legitimate business purposes:
            </p>
            <ul className="space-y-2.5 pl-11 text-xs sm:text-sm text-slate-400 list-disc list-inside">
              <li>Providing customized creative services including brand identity, packaging design, web development, and digital marketing.</li>
              <li>Responding promptly to inquiries, preparing Statements of Work (SOW), and managing ongoing client project deliverables.</li>
              <li>Sending periodic newsletters, product insights, or creative case studies (you may unsubscribe at any time with a single click).</li>
              <li>Maintaining the security, performance, and legal compliance of our digital infrastructure.</li>
            </ul>
          </div>

          {/* Section 3: Data Protection & Security */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#ffbe1a] font-mono text-xs font-bold">
                03
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-['Outfit']">
                Security & Data Retention
              </h2>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed pl-11">
              We employ enterprise-grade administrative, technical, and physical safeguards to protect all client deliverables and personal information against unauthorized access, loss, or alteration. Data is retained only for as long as necessary to fulfill project agreements and statutory tax/accounting requirements.
            </p>
          </div>

          {/* Section 4: Cookies & Analytics */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#ffbe1a] font-mono text-xs font-bold">
                04
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-['Outfit']">
                Cookies & Web Technologies
              </h2>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed pl-11">
              Our website uses standard essential cookies and anonymized telemetry to remember your interface preferences and measure site performance. You can instruct your browser to refuse all cookies or notify you when a cookie is being sent.
            </p>
          </div>

          {/* Section 5: Your Rights & Contact */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#ffbe1a] font-mono text-xs font-bold">
                05
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-['Outfit']">
                Your Data Rights & Inquiries
              </h2>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed pl-11">
              Depending on your jurisdiction (including GDPR in Europe and CCPA in California), you have the right to access, update, export, or delete your personal data. To exercise any of these rights, please contact our privacy team directly:
            </p>
            <div className="pl-11 pt-2">
              <div className="inline-flex flex-col sm:flex-row items-start sm:items-center gap-3 p-4 rounded-2xl bg-[#10131d] border border-white/[0.08]">
                <a 
                  href={`mailto:${siteSettings.contactEmail}`}
                  className="flex items-center gap-2 text-[#ffbe1a] hover:underline font-mono text-xs sm:text-sm font-semibold"
                >
                  <Mail className="w-4 h-4" />
                  <span>{siteSettings.contactEmail}</span>
                </a>
                <span className="text-slate-600 hidden sm:inline">•</span>
                <span className="text-xs text-slate-400 font-mono">
                  {siteSettings.siteName} Privacy & Legal Desk
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Bottom Cross Navigation */}
      <section className="py-12 border-t border-white/[0.06] bg-[#0c0e15]/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium">
          <div className="flex items-center gap-4 text-slate-400">
            <button onClick={() => navigateTo('/terms')} className="hover:text-white transition-colors cursor-pointer">
              Terms of Use
            </button>
            <span>•</span>
            <button onClick={() => navigateTo('/legal')} className="hover:text-white transition-colors cursor-pointer">
              Legal Notice
            </button>
            <span>•</span>
            <button onClick={() => navigateTo('/sitemap')} className="hover:text-white transition-colors cursor-pointer">
              Site Map
            </button>
          </div>

          <button
            onClick={() => navigateTo('/services')}
            className="inline-flex items-center gap-1.5 text-[#ffbe1a] hover:underline font-['Outfit'] font-bold cursor-pointer"
          >
            <span>Explore Services</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>
    </div>
  );
};
