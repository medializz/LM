import React from 'react';
import { motion } from 'motion/react';
import { Home, Layers, Briefcase, BookOpen, Mail, ArrowRight, Compass } from 'lucide-react';
import { SEOHead } from '../SEOHead';
import { navigateTo } from '../../utils/router';

interface NotFoundPageProps {
  attemptedPath?: string;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ attemptedPath = '' }) => {
  return (
    <div className="min-h-screen bg-[#07090e] text-white selection:bg-[#ffbe1a] selection:text-black font-['Plus_Jakarta_Sans'] flex flex-col justify-center py-20 px-4 sm:px-6 lg:px-8">
      <SEOHead
        title="404 - Page Not Found | Lizzdo Media"
        description="The page you are looking for does not exist or has been moved. Explore our services, portfolio case studies, and insights articles."
        canonicalUrl="https://media.lizzdo.com/404"
        noindex={true}
      />

      <div className="max-w-2xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 text-[#ffbe1a] text-xs font-mono tracking-wider uppercase">
          <Compass className="w-3.5 h-3.5" />
          <span>Error 404 • Resource Not Found</span>
        </div>

        <h1 className="text-6xl sm:text-8xl font-black font-['Outfit'] text-white tracking-tight">
          4<span className="text-[#ffbe1a]">0</span>4
        </h1>

        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-white">
            Looking for something specific?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-md mx-auto leading-relaxed">
            The page {attemptedPath ? <span className="font-mono text-[#ffbe1a]">"{attemptedPath}"</span> : 'you requested'} could not be located. It may have been updated or moved.
          </p>
        </div>

        {/* Helpful navigation routes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 text-left">
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); navigateTo('/'); }}
            className="p-4 rounded-xl bg-[#10131d] border border-white/[0.08] hover:border-[#ffbe1a]/50 transition-all group"
          >
            <div className="flex items-center gap-2 text-xs font-bold text-white group-hover:text-[#ffbe1a]">
              <Home className="w-3.5 h-3.5 text-[#ffbe1a]" />
              <span>Home Overview</span>
            </div>
            <div className="text-[11px] text-slate-400 mt-1">Main agency platform</div>
          </a>

          <a
            href="/services"
            onClick={(e) => { e.preventDefault(); navigateTo('/services'); }}
            className="p-4 rounded-xl bg-[#10131d] border border-white/[0.08] hover:border-[#ffbe1a]/50 transition-all group"
          >
            <div className="flex items-center gap-2 text-xs font-bold text-white group-hover:text-[#ffbe1a]">
              <Layers className="w-3.5 h-3.5 text-[#ffbe1a]" />
              <span>All Services</span>
            </div>
            <div className="text-[11px] text-slate-400 mt-1">11 Core Disciplines</div>
          </a>

          <a
            href="/work"
            onClick={(e) => { e.preventDefault(); navigateTo('/work'); }}
            className="p-4 rounded-xl bg-[#10131d] border border-white/[0.08] hover:border-[#ffbe1a]/50 transition-all group"
          >
            <div className="flex items-center gap-2 text-xs font-bold text-white group-hover:text-[#ffbe1a]">
              <Briefcase className="w-3.5 h-3.5 text-[#ffbe1a]" />
              <span>Our Work</span>
            </div>
            <div className="text-[11px] text-slate-400 mt-1">Case study library</div>
          </a>

          <a
            href="/about"
            onClick={(e) => { e.preventDefault(); navigateTo('/about'); }}
            className="p-4 rounded-xl bg-[#10131d] border border-white/[0.08] hover:border-[#ffbe1a]/50 transition-all group"
          >
            <div className="flex items-center gap-2 text-xs font-bold text-white group-hover:text-[#ffbe1a]">
              <Compass className="w-3.5 h-3.5 text-[#ffbe1a]" />
              <span>About Us</span>
            </div>
            <div className="text-[11px] text-slate-400 mt-1">Philosophy & standards</div>
          </a>

          <a
            href="/blog"
            onClick={(e) => { e.preventDefault(); navigateTo('/blog'); }}
            className="p-4 rounded-xl bg-[#10131d] border border-white/[0.08] hover:border-[#ffbe1a]/50 transition-all group"
          >
            <div className="flex items-center gap-2 text-xs font-bold text-white group-hover:text-[#ffbe1a]">
              <BookOpen className="w-3.5 h-3.5 text-[#ffbe1a]" />
              <span>Blog & Insights</span>
            </div>
            <div className="text-[11px] text-slate-400 mt-1">Design & code guides</div>
          </a>

          <a
            href="/contact"
            onClick={(e) => { e.preventDefault(); navigateTo('/contact'); }}
            className="p-4 rounded-xl bg-[#10131d] border border-white/[0.08] hover:border-[#ffbe1a]/50 transition-all group"
          >
            <div className="flex items-center gap-2 text-xs font-bold text-white group-hover:text-[#ffbe1a]">
              <Mail className="w-3.5 h-3.5 text-[#ffbe1a]" />
              <span>Contact Us</span>
            </div>
            <div className="text-[11px] text-slate-400 mt-1">Direct project inquiry</div>
          </a>
        </div>

        <div className="pt-4">
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); navigateTo('/'); }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#ffbe1a] hover:bg-amber-400 text-black font-extrabold text-sm font-['Outfit'] transition-all shadow-xl hover:scale-105"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </a>
        </div>
      </div>
    </div>
  );
};
