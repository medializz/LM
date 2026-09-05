import React from 'react';
import { motion } from 'motion/react';
import { Building2, ExternalLink, ArrowUpRight, Star } from 'lucide-react';
import { ClientItem, ClientsSectionContent } from '../../types';
import { navigateTo } from '../../utils/router';

interface AboutCompaniesProps {
  clients?: ClientItem[];
  sectionContent?: ClientsSectionContent;
}

export const AboutCompanies: React.FC<AboutCompaniesProps> = ({
  clients,
  sectionContent
}) => {
  if (!clients || clients.length === 0) {
    return null;
  }

  const validClients = clients.filter(c => c.name && (c.published !== false));
  if (validClients.length === 0) return null;

  const eyebrow = sectionContent?.eyebrow || "BRANDS WE'VE WORKED WITH";
  const headingPrefix = sectionContent?.headingPrefix || "Companies We've ";
  const headingHighlight = sectionContent?.headingHighlight || "Worked With";
  const description = sectionContent?.description || "From brand identity and packaging to high-speed web platforms, we partner with forward-thinking businesses.";

  return (
    <section 
      id="clients"
      className="relative z-20 py-16 sm:py-20 lg:py-24 border-b border-white/[0.08] bg-[#090c15]"
      aria-label="Companies and Clients"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffbe1a]/10 border border-[#ffbe1a]/30 text-[#ffbe1a] text-xs font-mono font-bold uppercase tracking-wider"
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>{eyebrow}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black font-['Outfit'] text-white tracking-tight leading-tight"
          >
            {headingPrefix}
            <span className="text-[#ffbe1a]">{headingHighlight}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-sm sm:text-base text-slate-400 leading-relaxed"
          >
            {description}
          </motion.p>
        </div>

        {/* Client Logos / Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {validClients.map((client, idx) => {
            const hasExternalUrl = client.websiteUrl && 
              client.websiteUrl.trim() !== '' && 
              client.websiteUrl !== '#' && 
              (client.websiteUrl.startsWith('http://') || client.websiteUrl.startsWith('https://'));

            return (
              <motion.div
                key={client.id || client.slug || `client-${idx}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="group relative p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#ffbe1a]/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="h-16 flex items-center justify-center mb-3">
                    {client.logo ? (
                      <img
                        src={client.logo}
                        alt={client.logoAlt || `${client.name} logo`}
                        className="max-h-12 max-w-[120px] object-contain opacity-70 group-hover:opacity-100 transition-opacity filter grayscale group-hover:grayscale-0"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <span className="text-sm font-bold font-['Outfit'] text-slate-300 group-hover:text-white">
                        {client.name}
                      </span>
                    )}
                  </div>

                  <div className="text-center">
                    <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider group-hover:text-[#ffbe1a] transition-colors">
                      {client.name}
                    </h3>
                    {client.shortDescription && (
                      <p className="text-[11px] text-slate-400 line-clamp-2 mt-1">
                        {client.shortDescription}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center justify-between text-[10px] font-mono text-slate-400">
                  {client.relatedWork ? (
                    <button
                      type="button"
                      onClick={() => navigateTo(`/work/${client.relatedWork}`)}
                      className="inline-flex items-center gap-1 text-[#ffbe1a] hover:underline cursor-pointer"
                    >
                      <span>Case Study</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  ) : (
                    <span>Partner</span>
                  )}

                  {hasExternalUrl ? (
                    <a
                      href={client.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                      title={`Visit ${client.name}`}
                    >
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : null}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
