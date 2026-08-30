import React, { useMemo } from 'react';
import { TeamMember, SiteSettings } from '../../types';
import { TeamMemberCard } from './TeamMemberCard';
import { LizzdoLogo } from '../LizzdoLogo';
import { motion } from 'motion/react';
import { Users2 } from 'lucide-react';

interface TeamSectionProps {
  teamMembers?: TeamMember[];
  siteSettings?: SiteSettings;
  title?: string;
  eyebrow?: string;
  description?: string;
}

export const TeamSection: React.FC<TeamSectionProps> = ({
  teamMembers = [],
  siteSettings,
  title = "The Minds Behind the Work",
  eyebrow = "MEET OUR TEAM",
  description = "Multidisciplinary specialists uniting creative direction, digital brand strategy, packaging craft, and full-stack engineering."
}) => {
  // Filter for published team members and sort by order
  const publishedMembers = useMemo(() => {
    return [...teamMembers]
      .filter(m => m.published !== false)
      .sort((a, b) => (a.order || 0) - (b.order || 0));
  }, [teamMembers]);

  // Empty state mandate: If no published team members exist, gracefully unmount section
  if (!publishedMembers || publishedMembers.length === 0) {
    return null;
  }

  return (
    <section
      id="our-team"
      className="relative z-20 py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12"
      aria-label="Meet Our Team"
    >
      {/* Section Header */}
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
            <span>{eyebrow}</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-2xl sm:text-4xl font-bold font-['Outfit'] text-white tracking-tight"
          >
            {title}
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl"
          >
            {description}
          </motion.p>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400 bg-white/[0.03] px-3.5 py-2 rounded-xl border border-white/[0.06]">
          <Users2 className="w-4 h-4 text-[#ffbe1a]" />
          <span>Multidisciplinary Specialists</span>
        </div>
      </div>

      {/* Team Cards Responsive Grid: 1 col mobile, 2 col tablet, 4 col desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {publishedMembers.map((member, idx) => (
          <motion.div
            key={member.slug || member.id || `team-member-${idx}`}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.06 }}
          >
            <TeamMemberCard member={member} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
