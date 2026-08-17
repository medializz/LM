import React from 'react';
import { DecapCMSData } from '../../types';
import { Breadcrumb } from '../Breadcrumb';
import { SEOHead } from '../SEOHead';
import { FileText, CheckCircle2, Shield, Scale, Mail, ChevronRight } from 'lucide-react';
import { navigateTo } from '../../utils/router';

interface TermsOfUsePageProps {
  cmsData: DecapCMSData;
  onOpenContact?: () => void;
}

export const TermsOfUsePage: React.FC<TermsOfUsePageProps> = ({
  cmsData,
  onOpenContact
}) => {
  const siteSettings = cmsData.siteSettings;
  const lastUpdated = "February 17, 2026";

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-300 font-['Plus_Jakarta_Sans'] selection:bg-[#ffbe1a]/30 selection:text-white">
      <SEOHead
        title={`Terms of Use | ${siteSettings.siteName}`}
        description={`Review the Terms of Use and service agreements for ${siteSettings.siteName}. Understand our design deliverables, intellectual property terms, and client responsibilities.`}
        canonicalUrl={`${siteSettings.currentDomain}terms`}
        siteSettings={siteSettings}
      />

      {/* Breadcrumb Navigation */}
      <div className="border-b border-white/[0.06] bg-[#0c0e15]/60 backdrop-blur-md">
        <Breadcrumb items={[{ label: 'Terms of Use', active: true }]} />
      </div>

      {/* Hero Header Banner */}
      <section className="relative py-16 sm:py-20 lg:py-24 border-b border-white/[0.06] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#ffbe1a]/[0.03] rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 text-[#ffbe1a] text-xs font-mono font-bold uppercase tracking-wider">
            <Scale className="w-3.5 h-3.5" />
            <span>AGREEMENT & SERVICE STANDARDS</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Outfit'] tracking-tight">
            Terms of <span className="text-[#ffbe1a]">Use</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            These terms govern your access to the {siteSettings.siteName} website, digital assets, and our professional creative design, branding, and development services.
          </p>

          <div className="pt-2 text-xs font-mono text-slate-500">
            Last Updated: <span className="text-slate-300 font-semibold">{lastUpdated}</span> • Version 2.6
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 lg:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">

          {/* Summary Callout */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#121520] to-[#0a0c12] border border-white/[0.08] shadow-xl space-y-3">
            <div className="flex items-center gap-2.5 text-[#ffbe1a] font-bold text-sm sm:text-base font-['Outfit']">
              <FileText className="w-4 h-4" />
              <span>Acceptance of Terms</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              By browsing this website, requesting project consultations, or engaging {siteSettings.siteName} for branding, packaging design, software engineering, or marketing campaigns, you agree to be bound by these Terms of Use and any specific Statement of Work (SOW) executed between the parties.
            </p>
          </div>

          {/* Section 1: Services & Proposals */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#ffbe1a] font-mono text-xs font-bold">
                01
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-['Outfit']">
                Scope of Services & Project Proposals
              </h2>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed pl-11">
              {siteSettings.siteName} delivers bespoke creative and digital solutions including Brand Identity Design, Graphic & Packaging Engineering, Web & SaaS App Development, Social Media Strategy, and AI Content Production.
            </p>
            <p className="text-sm text-slate-400 leading-relaxed pl-11">
              Each project is governed by a mutually approved Statement of Work detailing deliverables, milestone schedules, revision rounds, and payment terms.
            </p>
          </div>

          {/* Section 2: Intellectual Property */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#ffbe1a] font-mono text-xs font-bold">
                02
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-['Outfit']">
                Intellectual Property & Ownership
              </h2>
            </div>
            <ul className="space-y-2.5 pl-11 text-xs sm:text-sm text-slate-400 list-disc list-inside">
              <li><strong className="text-slate-200">Client Deliverables:</strong> Upon full payment of all contracted fees, all final approved visual assets, logos, packaging dielines, and custom codebases are transferred to the client.</li>
              <li><strong className="text-slate-200">Agency Pre-Existing IP:</strong> Pre-existing tools, proprietary frameworks, and general agency methodology remain the intellectual property of {siteSettings.siteName}.</li>
              <li><strong className="text-slate-200">Portfolio Rights:</strong> Unless otherwise protected by an explicit Non-Disclosure Agreement (NDA), {siteSettings.siteName} reserves the right to showcase completed work in case studies and portfolio showcases.</li>
            </ul>
          </div>

          {/* Section 3: Revisions & Approvals */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#ffbe1a] font-mono text-xs font-bold">
                03
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-['Outfit']">
                Revisions, Feedback & Approvals
              </h2>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed pl-11">
              We provide structured iterative review stages for each creative project. Clients agree to provide timely, consolidated feedback during each milestone. Changes that deviate substantially from the approved project brief are treated as scope modifications and quoted separately.
            </p>
          </div>

          {/* Section 4: Limitation of Liability */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#ffbe1a] font-mono text-xs font-bold">
                04
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-['Outfit']">
                Warranties & Limitation of Liability
              </h2>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed pl-11">
              Our website, showcase presentations, and services are provided with professional care and industry-standard best practices. To the maximum extent permitted by applicable law, {siteSettings.siteName} is not liable for indirect, incidental, or consequential damages resulting from third-party hosting, browser updates, or manufacturing printing tolerances beyond provided dieline specifications.
            </p>
          </div>

          {/* Section 5: Governing Law & Contact */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#ffbe1a] font-mono text-xs font-bold">
                05
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-['Outfit']">
                Questions Regarding Terms
              </h2>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed pl-11">
              If you have any questions or require custom contractual terms or NDA agreements prior to project kick-off, please reach out to us:
            </p>
            <div className="pl-11 pt-2">
              <a 
                href={`mailto:${siteSettings.contactEmail}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#10131d] border border-white/[0.08] text-[#ffbe1a] hover:border-[#ffbe1a]/50 text-xs sm:text-sm font-mono font-semibold transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{siteSettings.contactEmail}</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Bottom Cross Navigation */}
      <section className="py-12 border-t border-white/[0.06] bg-[#0c0e15]/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium">
          <div className="flex items-center gap-4 text-slate-400">
            <button onClick={() => navigateTo('/privacy')} className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
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
            onClick={() => navigateTo('/work')}
            className="inline-flex items-center gap-1.5 text-[#ffbe1a] hover:underline font-['Outfit'] font-bold cursor-pointer"
          >
            <span>View Portfolio</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>
    </div>
  );
};
