import React, { useState, useMemo } from 'react';
import { ClientItem, ClientsSectionContent, SiteSettings, PortfolioItem } from '../../types';
import { ClientCard } from './ClientCard';
import { LizzdoLogo } from '../LizzdoLogo';
import { motion, AnimatePresence } from 'motion/react';
import { Building2, Sparkles, Filter } from 'lucide-react';
import { navigateTo } from '../../utils/router';

interface ClientsSectionProps {
  clients?: ClientItem[];
  content?: ClientsSectionContent;
  siteSettings?: SiteSettings;
  portfolio?: PortfolioItem[];
  onSelectProject?: (item: PortfolioItem) => void;
}

export const ClientsSection: React.FC<ClientsSectionProps> = ({
  clients = [],
  content,
  siteSettings,
  portfolio = [],
  onSelectProject
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Filter published clients only and sort by order
  const publishedClients = useMemo(() => {
    return [...clients]
      .filter(c => c.published !== false)
      .sort((a, b) => (a.order || 0) - (b.order || 0));
  }, [clients]);

  // If no published clients, gracefully hide section (Empty State mandate)
  if (!publishedClients || publishedClients.length === 0) {
    return null;
  }

  const hasFeatured = publishedClients.some(c => c.featured);

  // Dynamic filter tabs
  const filterTabs = useMemo(() => {
    const tabs = [
      { id: 'all', label: 'All Brands', count: publishedClients.length }
    ];

    if (hasFeatured) {
      tabs.push({
        id: 'featured',
        label: 'Featured',
        count: publishedClients.filter(c => c.featured).length
      });
    }

    const brandingCount = publishedClients.filter(c => 
      (c.services || []).some(s => s.toLowerCase().includes('brand') || s.toLowerCase().includes('logo') || s.toLowerCase().includes('graphic'))
    ).length;
    if (brandingCount > 0) {
      tabs.push({ id: 'branding', label: 'Brand & Identity', count: brandingCount });
    }

    const packagingCount = publishedClients.filter(c => 
      (c.services || []).some(s => s.toLowerCase().includes('packag'))
    ).length;
    if (packagingCount > 0) {
      tabs.push({ id: 'packaging', label: 'Packaging', count: packagingCount });
    }

    const webCount = publishedClients.filter(c => 
      (c.services || []).some(s => s.toLowerCase().includes('web') || s.toLowerCase().includes('ecommerce') || s.toLowerCase().includes('saas'))
    ).length;
    if (webCount > 0) {
      tabs.push({ id: 'web', label: 'Web & E-Commerce', count: webCount });
    }

    const marketingCount = publishedClients.filter(c => 
      (c.services || []).some(s => s.toLowerCase().includes('social') || s.toLowerCase().includes('market') || s.toLowerCase().includes('advertis') || s.toLowerCase().includes('content'))
    ).length;
    if (marketingCount > 0) {
      tabs.push({ id: 'marketing', label: 'Marketing & Social', count: marketingCount });
    }

    return tabs;
  }, [publishedClients, hasFeatured]);

  // Filtered client list
  const filteredClients = useMemo(() => {
    if (activeFilter === 'all') return publishedClients;
    if (activeFilter === 'featured') return publishedClients.filter(c => c.featured);
    if (activeFilter === 'branding') {
      return publishedClients.filter(c => 
        (c.services || []).some(s => s.toLowerCase().includes('brand') || s.toLowerCase().includes('logo') || s.toLowerCase().includes('graphic'))
      );
    }
    if (activeFilter === 'packaging') {
      return publishedClients.filter(c => 
        (c.services || []).some(s => s.toLowerCase().includes('packag'))
      );
    }
    if (activeFilter === 'web') {
      return publishedClients.filter(c => 
        (c.services || []).some(s => s.toLowerCase().includes('web') || s.toLowerCase().includes('ecommerce') || s.toLowerCase().includes('saas'))
      );
    }
    if (activeFilter === 'marketing') {
      return publishedClients.filter(c => 
        (c.services || []).some(s => s.toLowerCase().includes('social') || s.toLowerCase().includes('market') || s.toLowerCase().includes('advertis') || s.toLowerCase().includes('content'))
      );
    }
    return publishedClients;
  }, [publishedClients, activeFilter]);

  const handleSelectRelatedWorkSlug = (workSlug: string) => {
    const matched = portfolio.find(p => p.slug === workSlug || p.id === workSlug);
    if (matched && onSelectProject) {
      onSelectProject(matched);
    } else {
      navigateTo(`/work/${workSlug}`);
    }
  };

  const eyebrowText = content?.eyebrow || "BRANDS WE'VE WORKED WITH";
  const headingPrefix = content?.headingPrefix || "Companies We've ";
  const headingHighlight = content?.headingHighlight || "Worked With";
  const descriptionText = content?.description || "From brand identity and social content to websites and digital campaigns, we've partnered with forward-thinking businesses across diverse industries.";

  return (
    <section
      id="clients"
      className="relative z-20 py-16 sm:py-20 lg:py-24 border-t border-white/[0.06] bg-[#07090e] overflow-hidden"
      aria-label="Companies and Brands We Have Worked With"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#ffbe1a]/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-purple-900/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER & INTRO */}
        {/* ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.06]">
          <div className="space-y-3 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 text-[#ffbe1a] text-[11px] font-mono font-bold uppercase tracking-widest"
            >
              <LizzdoLogo 
                variant="mark-only" 
                size="xxs" 
                theme="gold" 
                logoSrc={siteSettings?.logo || siteSettings?.logoLight} 
                markSrc={siteSettings?.logoMark} 
              />
              <span>{eyebrowText}</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Outfit'] tracking-tight leading-[1.1]"
            >
              {headingPrefix}
              <span className="text-[#ffbe1a]">{headingHighlight}</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl"
            >
              {descriptionText}
            </motion.p>
          </div>

          {/* Quick Filter Bar (When multiple categories exist) */}
          {filterTabs.length > 2 && (
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/[0.08]">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-['Outfit'] font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeFilter === tab.id
                      ? 'bg-[#ffbe1a] text-black shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    activeFilter === tab.id ? 'bg-black/20 text-black' : 'bg-white/10 text-slate-300'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* CLIENT CARDS GRID */}
        {/* ========================================================================= */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredClients.map((client) => (
              <motion.div
                key={client.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                <ClientCard
                  client={client}
                  onSelectRelatedWork={handleSelectRelatedWorkSlug}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Partnership Callout */}
        <div className="pt-6 text-center">
          <p className="text-xs text-slate-500 font-mono">
            Partnering with startups, luxury labels, and established enterprises globally.
          </p>
        </div>

      </div>
    </section>
  );
};
