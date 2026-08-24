import React from 'react';
import { motion } from 'motion/react';
import { Home, Layers, Briefcase, BookOpen, Mail, ArrowRight, Compass, Sparkles } from 'lucide-react';
import { SEOHead } from '../SEOHead';
import { navigateTo } from '../../utils/router';

interface NotFoundPageProps {
  attemptedPath?: string;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ attemptedPath = '' }) => {
  return (
    <div id="not-found-page" className="min-h-screen bg-[#07090e] text-white selection:bg-[#ffbe1a] selection:text-black font-['Plus_Jakarta_Sans'] flex flex-col justify-center items-center py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <SEOHead
        title="404 - Page Not Found | Lizzdo Media"
        description="The page you are looking for does not exist or has been moved. Explore our services, portfolio case studies, and insights articles."
        canonicalUrl="https://media.lizzdo.com/404"
        noindex={true}
      />

      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#ffbe1a]/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-2xl w-full mx-auto text-center space-y-8 relative z-10"
      >
        {/* Error Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 text-[#ffbe1a] text-xs font-mono tracking-wider uppercase">
          <Compass className="w-3.5 h-3.5" />
          <span>Error 404 • Page Not Found</span>
        </div>

        {/* Big Branded 404 Display */}
        <div className="space-y-2">
          <h1 className="text-7xl sm:text-9xl font-black font-['Outfit'] text-white tracking-tight leading-none">
            4<span className="text-[#ffbe1a] drop-shadow-[0_0_24px_rgba(255,190,26,0.3)]">0</span>4
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-white tracking-tight">
            Looking for something specific?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-md mx-auto leading-relaxed pt-2">
            The page {attemptedPath ? <span className="font-mono text-[#ffbe1a] font-semibold">"{attemptedPath}"</span> : 'you requested'} could not be located. It may have been updated, renamed, or moved.
          </p>
        </div>

        {/* Primary Return to Homepage CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            id="return-home-btn"
            href="/"
            onClick={(e) => { e.preventDefault(); navigateTo('/'); }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#ffbe1a] hover:bg-amber-400 text-black font-extrabold text-sm font-['Outfit'] transition-all shadow-xl shadow-[#ffbe1a]/20 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </a>

          <a
            id="browse-services-btn"
            href="/services"
            onClick={(e) => { e.preventDefault(); navigateTo('/services'); }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.12] text-white font-bold text-sm font-['Outfit'] transition-all cursor-pointer"
          >
            <Layers className="w-4 h-4 text-[#ffbe1a]" />
            <span>Browse Services</span>
          </a>
        </div>

        {/* Helpful Direct Hub Navigation */}
        <div className="pt-4 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-400">
            <Sparkles className="w-3 h-3 text-[#ffbe1a]" />
            <span>Quick Destination Directory</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
            <a
              id="nav-dest-work"
              href="/work"
              onClick={(e) => { e.preventDefault(); navigateTo('/work'); }}
              className="p-4 rounded-2xl bg-[#10131d] border border-white/[0.08] hover:border-[#ffbe1a]/50 transition-all group hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-white group-hover:text-[#ffbe1a] transition-colors">
                  <Briefcase className="w-3.5 h-3.5 text-[#ffbe1a]" />
                  <span>Our Work</span>
                </div>
                <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-[#ffbe1a] group-hover:translate-x-0.5 transition-all" />
              </div>
              <div className="text-[11px] text-slate-400 mt-1.5">Case study library</div>
            </a>

            <a
              id="nav-dest-about"
              href="/about"
              onClick={(e) => { e.preventDefault(); navigateTo('/about'); }}
              className="p-4 rounded-2xl bg-[#10131d] border border-white/[0.08] hover:border-[#ffbe1a]/50 transition-all group hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-white group-hover:text-[#ffbe1a] transition-colors">
                  <Compass className="w-3.5 h-3.5 text-[#ffbe1a]" />
                  <span>About Us</span>
                </div>
                <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-[#ffbe1a] group-hover:translate-x-0.5 transition-all" />
              </div>
              <div className="text-[11px] text-slate-400 mt-1.5">Philosophy & team</div>
            </a>

            <a
              id="nav-dest-blog"
              href="/blog"
              onClick={(e) => { e.preventDefault(); navigateTo('/blog'); }}
              className="p-4 rounded-2xl bg-[#10131d] border border-white/[0.08] hover:border-[#ffbe1a]/50 transition-all group hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-white group-hover:text-[#ffbe1a] transition-colors">
                  <BookOpen className="w-3.5 h-3.5 text-[#ffbe1a]" />
                  <span>Blog & Insights</span>
                </div>
                <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-[#ffbe1a] group-hover:translate-x-0.5 transition-all" />
              </div>
              <div className="text-[11px] text-slate-400 mt-1.5">Design & tech guides</div>
            </a>

            <a
              id="nav-dest-contact"
              href="/contact"
              onClick={(e) => { e.preventDefault(); navigateTo('/contact'); }}
              className="p-4 rounded-2xl bg-[#10131d] border border-white/[0.08] hover:border-[#ffbe1a]/50 transition-all group hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-white group-hover:text-[#ffbe1a] transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#ffbe1a]" />
                  <span>Contact Us</span>
                </div>
                <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-[#ffbe1a] group-hover:translate-x-0.5 transition-all" />
              </div>
              <div className="text-[11px] text-slate-400 mt-1.5">Direct project inquiry</div>
            </a>

            <a
              id="nav-dest-services"
              href="/services"
              onClick={(e) => { e.preventDefault(); navigateTo('/services'); }}
              className="p-4 rounded-2xl bg-[#10131d] border border-white/[0.08] hover:border-[#ffbe1a]/50 transition-all group hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-white group-hover:text-[#ffbe1a] transition-colors">
                  <Layers className="w-3.5 h-3.5 text-[#ffbe1a]" />
                  <span>Capabilities</span>
                </div>
                <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-[#ffbe1a] group-hover:translate-x-0.5 transition-all" />
              </div>
              <div className="text-[11px] text-slate-400 mt-1.5">11 Core Disciplines</div>
            </a>

            <a
              id="nav-dest-home"
              href="/"
              onClick={(e) => { e.preventDefault(); navigateTo('/'); }}
              className="p-4 rounded-2xl bg-[#10131d] border border-white/[0.08] hover:border-[#ffbe1a]/50 transition-all group hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-white group-hover:text-[#ffbe1a] transition-colors">
                  <Home className="w-3.5 h-3.5 text-[#ffbe1a]" />
                  <span>Main Portal</span>
                </div>
                <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-[#ffbe1a] group-hover:translate-x-0.5 transition-all" />
              </div>
              <div className="text-[11px] text-slate-400 mt-1.5">Lizzdo Media Home</div>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

