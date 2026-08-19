import React from 'react';

interface StylusPenProps {
  className?: string;
}

export const StylusPen: React.FC<StylusPenProps> = ({ className = '' }) => {
  return (
    <div 
      id="hero-stylus-pen"
      className={`relative pointer-events-none select-none gpu-layer ${className}`}
      aria-hidden="true"
    >
      <svg 
        viewBox="0 0 280 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          {/* Stylus Body Matte Dark Gradient */}
          <linearGradient id="stylusBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="30%" stopColor="#1e293b" />
            <stop offset="70%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>

          {/* Grip Texture Gradient */}
          <linearGradient id="stylusGripGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e2433" />
            <stop offset="50%" stopColor="#11141e" />
            <stop offset="100%" stopColor="#0a0c13" />
          </linearGradient>

          {/* Gold Accent Ring Gradient */}
          <linearGradient id="stylusGoldRing" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fff385" />
            <stop offset="50%" stopColor="#ffbe1a" />
            <stop offset="100%" stopColor="#b47400" />
          </linearGradient>

          {/* Precision Nib Gradient */}
          <linearGradient id="stylusNibGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="60%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>

        {/* 1. Precision Drawing Nib Tip */}
        <path d="M6 20 L28 14 L28 26 Z" fill="url(#stylusNibGrad)" />
        <circle cx="5.5" cy="20" r="1.5" fill="#ffffff" />

        {/* 2. Ergonomic Silicone Front Cone */}
        <path d="M28 13 L85 10 L85 30 L28 27 Z" fill="url(#stylusGripGrad)" />

        {/* 3. Brushed Gold Accent Chamfer Ring */}
        <rect x="85" y="9.5" width="6" height="21" rx="1" fill="url(#stylusGoldRing)" />

        {/* 4. Dual Rocker Action Buttons on Grip */}
        <rect x="42" y="16" width="28" height="8" rx="3" fill="#090a0f" stroke="#334155" strokeWidth="0.75" />
        <line x1="56" y1="16" x2="56" y2="24" stroke="#475569" strokeWidth="1" />
        <circle cx="49" cy="20" r="1.5" fill="#ffbe1a" />
        <circle cx="63" cy="20" r="1.5" fill="#94a3b8" />

        {/* 5. Main Tapered Barrel */}
        <path d="M91 10 L255 12 L255 28 L91 30 Z" fill="url(#stylusBodyGrad)" />
        
        {/* Subtle Specular Highlight Stripe along barrel */}
        <line x1="91" y1="13" x2="255" y2="15" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />

        {/* 6. Rear Metallic Trim & Eraser Cap */}
        <rect x="255" y="12" width="4" height="16" fill="url(#stylusGoldRing)" />
        <path d="M259 13.5 C275 14, 275 26, 259 26.5 Z" fill="#1e293b" />
      </svg>
    </div>
  );
};
