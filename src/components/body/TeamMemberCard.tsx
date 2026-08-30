import React, { useState } from 'react';
import { TeamMember } from '../../types';
import { 
  Linkedin, Instagram, Twitter, Github, Facebook, 
  Youtube, Globe, ExternalLink, Palette, Layers, Video
} from 'lucide-react';

interface TeamMemberCardProps {
  member: TeamMember;
}

/**
 * Validates external URLs to ensure they only use safe protocols (http/https)
 * and rejects dangerous protocols like javascript:, data:, etc.
 */
function isValidExternalUrl(url?: string): boolean {
  if (!url || typeof url !== 'string') return false;
  const trimmed = url.trim();
  if (trimmed.length === 0) return false;
  
  // Reject unsafe schemes
  const lower = trimmed.toLowerCase();
  if (
    lower.startsWith('javascript:') || 
    lower.startsWith('data:') || 
    lower.startsWith('vbscript:') ||
    lower.startsWith('file:')
  ) {
    return false;
  }

  // Must start with http:// or https:// (or relative /)
  return lower.startsWith('https://') || lower.startsWith('http://') || lower.startsWith('/');
}

interface SocialItemConfig {
  platform: string;
  url: string;
  label: string;
  icon: React.FC<{ className?: string }>;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  const [imgError, setImgError] = useState(false);

  const name = member.name || "Team Member";
  const jobTitle = member.jobTitle || member.position || member.role || "Specialist";
  const shortDescription = member.shortDescription || member.shortBio || member.bio || "";
  const photo = member.profilePhoto || member.photo || member.avatar || "";
  const photoAlt = member.photoAlt || member.avatarAlt || `${name}, ${jobTitle} at Lizzdo Media`;
  const skills = Array.isArray(member.skills) ? member.skills.filter(Boolean) : [];

  // Extract all valid social profiles from direct fields or socialLinks array
  const socialList: SocialItemConfig[] = [];

  const addSocial = (platform: string, url: string | undefined, label: string, icon: React.FC<{ className?: string }>) => {
    if (url && isValidExternalUrl(url)) {
      socialList.push({ platform, url: url.trim(), label, icon });
    }
  };

  // Direct fields
  addSocial('linkedin', member.linkedin, 'LinkedIn', Linkedin);
  addSocial('instagram', member.instagram, 'Instagram', Instagram);
  addSocial('twitter', member.twitter || member.x, 'X (Twitter)', Twitter);
  addSocial('github', member.github, 'GitHub', Github);
  addSocial('facebook', member.facebook, 'Facebook', Facebook);
  addSocial('youtube', member.youtube, 'YouTube', Youtube);
  addSocial('tiktok', member.tiktok, 'TikTok', Video);
  addSocial('behance', member.behance, 'Behance', Palette);
  addSocial('dribbble', member.dribbble, 'Dribbble', Layers);
  addSocial('website', member.website || member.portfolioUrl, 'Personal Website', Globe);

  // If socialLinks array exists in CMS, parse additional or custom items
  if (Array.isArray(member.socialLinks)) {
    member.socialLinks.forEach(item => {
      if (item && item.url && item.enabled !== false && isValidExternalUrl(item.url)) {
        const plat = (item.platform || '').toLowerCase();
        // Avoid duplicate if already added
        if (!socialList.some(s => s.platform === plat)) {
          let IconComp: React.FC<{ className?: string }> = ExternalLink;
          let label = item.platform || 'Profile';
          if (plat.includes('linkedin')) { IconComp = Linkedin; label = 'LinkedIn'; }
          else if (plat.includes('instagram')) { IconComp = Instagram; label = 'Instagram'; }
          else if (plat.includes('twitter') || plat === 'x') { IconComp = Twitter; label = 'X (Twitter)'; }
          else if (plat.includes('github')) { IconComp = Github; label = 'GitHub'; }
          else if (plat.includes('facebook')) { IconComp = Facebook; label = 'Facebook'; }
          else if (plat.includes('youtube')) { IconComp = Youtube; label = 'YouTube'; }
          else if (plat.includes('tiktok')) { IconComp = Video; label = 'TikTok'; }
          else if (plat.includes('behance')) { IconComp = Palette; label = 'Behance'; }
          else if (plat.includes('dribbble')) { IconComp = Layers; label = 'Dribbble'; }
          else if (plat.includes('web') || plat.includes('site') || plat.includes('portfolio')) { IconComp = Globe; label = 'Website'; }

          socialList.push({
            platform: plat,
            url: item.url.trim(),
            label,
            icon: IconComp
          });
        }
      }
    });
  }

  return (
    <article
      id={`team-member-${member.slug || member.id}`}
      className="group flex flex-col justify-between rounded-2xl bg-[#10131d] border border-white/[0.08] hover:border-[#ffbe1a]/40 p-5 sm:p-6 transition-all duration-300 hover:shadow-[0_12px_36px_rgba(0,0,0,0.6)]"
      aria-label={`${name}, ${jobTitle}`}
    >
      <div className="space-y-4">
        
        {/* Profile Photo Frame */}
        <div className="aspect-square w-full rounded-xl overflow-hidden bg-white/[0.03] border border-white/[0.08] relative">
          {!imgError && photo ? (
            <img
              src={photo}
              alt={photoAlt}
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 filter contrast-[1.02]"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#181d2c] to-[#0a0d14] text-[#ffbe1a]">
              <span className="font-['Outfit'] font-black text-3xl sm:text-4xl">
                {name.charAt(0)}
              </span>
              <span className="text-[10px] font-mono text-slate-500 uppercase mt-1 tracking-wider">
                Lizzdo Team
              </span>
            </div>
          )}

          {/* Subtitle tag overlay on top of frame */}
          <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#ffbe1a] font-bold uppercase tracking-wider">
            Creative Core
          </div>
        </div>

        {/* Member Name and Job Title */}
        <div className="space-y-1 pt-1">
          <h3 className="text-base sm:text-lg font-bold font-['Outfit'] text-white group-hover:text-[#ffbe1a] transition-colors leading-snug">
            {name}
          </h3>
          <p className="text-xs font-mono font-semibold text-[#ffbe1a] uppercase tracking-wider">
            {jobTitle}
          </p>
        </div>

        {/* Short Description */}
        {shortDescription && (
          <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed line-clamp-4">
            {shortDescription}
          </p>
        )}

        {/* Skills / Specialties Badges */}
        {skills.length > 0 && (
          <div className="pt-2 flex flex-wrap gap-1.5" aria-label={`Skills of ${name}`}>
            {skills.map((skill, sIdx) => (
              <span
                key={sIdx}
                className="text-[10.5px] font-mono text-slate-300 bg-white/[0.04] border border-white/[0.08] px-2 py-0.5 rounded-md group-hover:border-[#ffbe1a]/20 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

      </div>

      {/* Footer: Social Links */}
      {socialList.length > 0 && (
        <div className="mt-5 pt-3.5 border-t border-white/[0.06] flex items-center gap-2">
          {socialList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${name}'s ${item.label} profile`}
                title={`${item.label}: ${name}`}
                className="w-8 h-8 rounded-lg bg-white/[0.04] hover:bg-[#ffbe1a] text-slate-400 hover:text-black border border-white/[0.08] hover:border-[#ffbe1a] flex items-center justify-center transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#ffbe1a]/50"
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            );
          })}
        </div>
      )}
    </article>
  );
};
