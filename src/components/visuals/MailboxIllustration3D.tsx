import React from 'react';

interface MailboxIllustration3DProps {
  className?: string;
  theme?: 'gold' | 'blue';
}

export const MailboxIllustration3D: React.FC<MailboxIllustration3DProps> = ({
  className = "w-full h-full",
  theme = 'gold'
}) => {
  const isGold = theme === 'gold';

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 460 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-[480px] drop-shadow-2xl overflow-visible"
        aria-label="3D Mailbox and Envelope Illustration"
      >
        <defs>
          {/* Ground Soft Contact Shadow */}
          <radialGradient id="groundShadow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.75" />
            <stop offset="60%" stopColor="#000000" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>

          {/* Mailbox Body Gradient */}
          <linearGradient id="mailboxBodyGrad" x1="160" y1="50" x2="340" y2="210" gradientUnits="userSpaceOnUse">
            {isGold ? (
              <>
                <stop offset="0%" stopColor="#ffd866" />
                <stop offset="30%" stopColor="#ffbe1a" />
                <stop offset="70%" stopColor="#d99516" />
                <stop offset="100%" stopColor="#966107" />
              </>
            ) : (
              <>
                <stop offset="0%" stopColor="#87a6ff" />
                <stop offset="25%" stopColor="#5d83ff" />
                <stop offset="70%" stopColor="#3d63ea" />
                <stop offset="100%" stopColor="#2848c7" />
              </>
            )}
          </linearGradient>

          {/* Mailbox Top Curved Highlight */}
          <linearGradient id="mailboxTopHighlight" x1="200" y1="50" x2="300" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="50%" stopColor={isGold ? "#ffe899" : "#a3beff"} stopOpacity="0.35" />
            <stop offset="100%" stopColor={isGold ? "#ffbe1a" : "#5d83ff"} stopOpacity="0" />
          </linearGradient>

          {/* Mailbox Slot Interior Depth */}
          <linearGradient id="slotInterior" x1="200" y1="110" x2="200" y2="126" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#080b12" />
            <stop offset="100%" stopColor="#1a1d27" />
          </linearGradient>

          {/* Mailbox Base Pole Gradient */}
          <linearGradient id="poleGrad" x1="240" y1="190" x2="260" y2="330" gradientUnits="userSpaceOnUse">
            {isGold ? (
              <>
                <stop offset="0%" stopColor="#454a5c" />
                <stop offset="40%" stopColor="#2a2e3d" />
                <stop offset="100%" stopColor="#141722" />
              </>
            ) : (
              <>
                <stop offset="0%" stopColor="#4365dc" />
                <stop offset="40%" stopColor="#314dbb" />
                <stop offset="100%" stopColor="#1f3488" />
              </>
            )}
          </linearGradient>

          {/* Flag Gradient */}
          <linearGradient id="flagGrad" x1="330" y1="15" x2="350" y2="105" gradientUnits="userSpaceOnUse">
            {isGold ? (
              <>
                <stop offset="0%" stopColor="#ffe27a" />
                <stop offset="50%" stopColor="#ffbe1a" />
                <stop offset="100%" stopColor="#c7860b" />
              </>
            ) : (
              <>
                <stop offset="0%" stopColor="#557cff" />
                <stop offset="50%" stopColor="#3b62ee" />
                <stop offset="100%" stopColor="#2342be" />
              </>
            )}
          </linearGradient>

          {/* Manila Envelope Gradient */}
          <linearGradient id="envelopeGrad" x1="80" y1="120" x2="230" y2="240" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fdf0d5" />
            <stop offset="35%" stopColor="#f5d699" />
            <stop offset="85%" stopColor="#e5b86b" />
            <stop offset="100%" stopColor="#c79543" />
          </linearGradient>

          {/* Manila Envelope Flap Inside */}
          <linearGradient id="envelopeInside" x1="120" y1="110" x2="200" y2="170" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#c5913e" />
            <stop offset="100%" stopColor="#7a4f10" />
          </linearGradient>

          {/* White Paper Sheet Gradient */}
          <linearGradient id="paperSheetGrad" x1="100" y1="80" x2="190" y2="170" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>

          {/* Secondary Paper Sheet Gradient */}
          <linearGradient id="paperSheetGrad2" x1="140" y1="65" x2="210" y2="150" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>

          {/* Soft Drop Shadow Filter */}
          <filter id="soft3DShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="4" dy="12" stdDeviation="12" floodColor="#000000" floodOpacity="0.55" />
          </filter>

          <filter id="envelopeShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="-6" dy="14" stdDeviation="14" floodColor="#000000" floodOpacity="0.6" />
          </filter>
        </defs>

        {/* ========================================================================= */}
        {/* 1. CONTACT SHADOWS */}
        {/* ========================================================================= */}
        <ellipse cx="250" cy="335" rx="75" ry="18" fill="url(#groundShadow)" opacity="0.85" />
        <ellipse cx="160" cy="275" rx="65" ry="16" fill="url(#groundShadow)" opacity="0.7" />

        {/* ========================================================================= */}
        {/* 2. MAILBOX POLE / STAND */}
        {/* ========================================================================= */}
        <ellipse cx="250" cy="328" rx="28" ry="8" fill={isGold ? "#10121a" : "#1b2d73"} />
        <path
          d="M239 190 H261 V324 C261 328 239 328 239 324 Z"
          fill="url(#poleGrad)"
        />
        {/* Cylindrical highlight edge */}
        <path
          d="M241 190 H244 V324 C244 326 241 326 241 324 Z"
          fill={isGold ? "#ffbe1a" : "#87a6ff"}
          opacity="0.4"
        />

        {/* ========================================================================= */}
        {/* 3. MAILBOX MAIN 3D HOUSING */}
        {/* ========================================================================= */}
        <g filter="url(#soft3DShadow)">
          {/* Main Mailbox Dome & Vaulted Body */}
          <path
            d="M 180 100
               C 180 40, 320 40, 320 100
               L 320 185
               C 320 200, 305 208, 285 208
               L 215 208
               C 195 208, 180 200, 180 185
               Z"
            fill="url(#mailboxBodyGrad)"
          />

          {/* Right curved rim 3D bevel / rim */}
          <path
            d="M 285 208
               C 310 208, 324 195, 324 182
               L 324 98
               C 324 45, 290 40, 275 42
               C 310 48, 320 80, 320 100
               L 320 185
               C 320 200, 305 208, 285 208 Z"
            fill={isGold ? "#784b04" : "#1d3494"}
            opacity="0.75"
          />

          {/* Top highlight specular curvature */}
          <path
            d="M 195 90
               C 195 50, 305 50, 305 90
               C 305 60, 205 60, 195 90 Z"
            fill="url(#mailboxTopHighlight)"
          />

          {/* Front Mail Opening Slot Frame */}
          <rect
            x="202"
            y="110"
            width="96"
            height="16"
            rx="8"
            fill={isGold ? "#5c3903" : "#1e3488"}
          />
          {/* Mail Slot Dark Recess */}
          <rect
            x="205"
            y="113"
            width="90"
            height="10"
            rx="5"
            fill="url(#slotInterior)"
          />

          {/* Front Mail Slot Lip / Bevel Accent */}
          <path
            d="M 205 125 C 205 125, 250 128, 295 125"
            stroke={isGold ? "#ffe599" : "#7ba0ff"}
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.8"
          />

          {/* Mailbox Lower Front Highlight */}
          <path
            d="M 200 178 C 230 186, 270 186, 300 178"
            stroke={isGold ? "#ffe899" : "#87a6ff"}
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.5"
          />
        </g>

        {/* ========================================================================= */}
        {/* 4. MAILBOX SIGNAL FLAG (UPRIGHT) */}
        {/* ========================================================================= */}
        <g>
          {/* Flag Mast Stem */}
          <path
            d="M 334 100 L 334 25"
            stroke={isGold ? "#805208" : "#213a9c"}
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M 335 100 L 335 25"
            stroke={isGold ? "#ffd866" : "#759aff"}
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Flag Top Blade */}
          <path
            d="M 334 22
               C 334 20, 336 18, 339 18
               L 348 18
               C 351 18, 353 20, 353 23
               L 351 90
               C 351 93, 349 95, 346 95
               L 337 95
               C 334 95, 332 93, 332 90
               Z"
            fill="url(#flagGrad)"
            filter="drop-shadow(2px 4px 6px rgba(0,0,0,0.35))"
          />

          {/* Flag Pivot Pin / Screw Hub */}
          <circle cx="334" cy="100" r="7" fill={isGold ? "#4a3005" : "#1b2d73"} />
          <circle cx="334" cy="100" r="5" fill={isGold ? "#ffbe1a" : "#5078ff"} />
          <circle cx="333" cy="99" r="2" fill="#ffffff" />
        </g>

        {/* ========================================================================= */}
        {/* 5. 3D FLOATING MANILA ENVELOPE & PAPERS */}
        {/* ========================================================================= */}
        <g filter="url(#envelopeShadow)">
          {/* Paper Sheet 2 */}
          <g transform="rotate(-6 175 125)">
            <rect
              x="135"
              y="55"
              width="82"
              height="105"
              rx="6"
              fill="url(#paperSheetGrad2)"
              stroke="#cfd7e5"
              strokeWidth="1.5"
            />
            <path
              d="M 202 55 L 217 70 H 202 Z"
              fill="#c4cfde"
            />
            <rect x="146" y="72" width="48" height="4" rx="2" fill={isGold ? "#ffbe1a" : "#587dff"} opacity="0.85" />
            <rect x="146" y="82" width="60" height="3" rx="1.5" fill="#94a3b8" opacity="0.6" />
            <rect x="146" y="90" width="55" height="3" rx="1.5" fill="#94a3b8" opacity="0.6" />
            <rect x="146" y="98" width="40" height="3" rx="1.5" fill="#94a3b8" opacity="0.6" />
          </g>

          {/* Paper Sheet 1 */}
          <g transform="rotate(4 150 135)">
            <rect
              x="100"
              y="72"
              width="86"
              height="110"
              rx="6"
              fill="url(#paperSheetGrad)"
              stroke="#cbd5e1"
              strokeWidth="1.5"
            />
            <path
              d="M 170 72 L 186 88 H 170 Z"
              fill="#94a3b8"
            />
            <rect x="112" y="90" width="38" height="5" rx="2.5" fill={isGold ? "#d99516" : "#3b66f5"} />
            <rect x="112" y="102" width="60" height="3.5" rx="1.5" fill={isGold ? "#ffbe1a" : "#5078ff"} opacity="0.85" />
            <rect x="112" y="111" width="64" height="3.5" rx="1.5" fill={isGold ? "#ffbe1a" : "#5078ff"} opacity="0.85" />
            <rect x="112" y="120" width="52" height="3.5" rx="1.5" fill={isGold ? "#ffbe1a" : "#5078ff"} opacity="0.85" />
            <rect x="112" y="129" width="36" height="3" rx="1.5" fill="#94a3b8" opacity="0.6" />
          </g>

          {/* Envelope Pocket Back Inside */}
          <path
            d="M 92 128 L 208 128 L 208 215 C 208 222, 202 228, 195 228 L 105 228 C 98 228, 92 222, 92 215 Z"
            fill="url(#envelopeInside)"
          />

          {/* Envelope Pocket Front Face */}
          <path
            d="M 88 140
               C 88 135, 93 130, 98 130
               L 198 130
               C 203 130, 208 135, 208 140
               L 212 218
               C 212 226, 205 232, 197 232
               L 99 232
               C 91 232, 84 226, 84 218
               Z"
            fill="url(#envelopeGrad)"
            stroke="#d89e49"
            strokeWidth="1.5"
          />

          {/* Envelope Flap Fold Crease */}
          <path
            d="M 88 130 L 148 165 L 208 130"
            stroke="#b37c2d"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
          />

          {/* Envelope Top Left Bevel Light */}
          <path
            d="M 90 133 L 196 133"
            stroke="#fffaeb"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.9"
          />

          {/* Envelope String Clasp */}
          <circle cx="186" cy="180" r="4.5" fill="#93611d" />
          <circle cx="186" cy="180" r="3" fill="#dfa552" />
          <circle cx="186" cy="180" r="1.5" fill="#4d3008" />

          <rect x="180" y="190" width="14" height="2.5" rx="1.25" fill="#93611d" opacity="0.7" />
        </g>

        {/* Floating Sparkles */}
        <g opacity="0.75">
          <circle cx="95" cy="85" r="2.5" fill="#ffbe1a" />
          <circle cx="340" cy="140" r="2" fill="#ffd866" />
          <circle cx="210" cy="40" r="3" fill="#ffbe1a" />
        </g>
      </svg>
    </div>
  );
};
