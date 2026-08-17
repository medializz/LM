import React, { useState, useEffect, useRef } from 'react';

interface SuccessStoryIllustration3DProps {
  className?: string;
  envelopeColor?: 'blue' | 'gold' | 'obsidian';
  companyName?: string;
  forceOpen?: boolean;
}

export const SuccessStoryIllustration3D: React.FC<SuccessStoryIllustration3DProps> = ({
  className = "w-full h-full",
  companyName = "Lizzdo Media",
  forceOpen
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeOpen = Boolean(forceOpen || isOpen);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      ref={containerRef}
      id="cta-envelope-3d-interactive"
      onClick={handleToggle}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className={`relative flex items-center justify-center select-none cursor-pointer group/envelope transition-transform duration-300 active:scale-[0.98] ${className}`}
      title="Click or hover to open/close letter"
      aria-label="Interactive 3D Envelope with Letter & Trophy"
    >
      <svg
        viewBox="0 0 540 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-[540px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)] overflow-visible"
      >
        <defs>
          {/* ========================================================================= */}
          {/* MASTER 3D SHADING GRADIENTS & FILTERS */}
          {/* ========================================================================= */}
          
          {/* Realistic Ground Contact Shadows */}
          <radialGradient id="envGroundShadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.85" />
            <stop offset="45%" stopColor="#000000" stopOpacity="0.4" />
            <stop offset="80%" stopColor="#000000" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="trophyGroundShadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#000000" stopOpacity="0.45" />
            <stop offset="85%" stopColor="#000000" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>

          {/* Envelope 3D Matte Royal Sky Blue Shading */}
          <linearGradient id="envBackWallGrad" x1="180" y1="90" x2="180" y2="310" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2542a8" />
            <stop offset="50%" stopColor="#1a3285" />
            <stop offset="100%" stopColor="#122463" />
          </linearGradient>

          {/* Open Top Flap (pointing upward) */}
          <linearGradient id="envBackFlapGrad" x1="180" y1="50" x2="180" y2="185" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3d62df" />
            <stop offset="50%" stopColor="#2c4cb8" />
            <stop offset="100%" stopColor="#1e3894" />
          </linearGradient>

          {/* Closed Front Top Flap (pointing downward over pocket) */}
          <linearGradient id="envFrontClosedFlapGrad" x1="180" y1="180" x2="180" y2="295" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4f77f7" />
            <stop offset="45%" stopColor="#3558d4" />
            <stop offset="100%" stopColor="#1f3da8" />
          </linearGradient>

          <linearGradient id="envLeftFlapGrad" x1="60" y1="180" x2="190" y2="280" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4f77f7" />
            <stop offset="50%" stopColor="#3b62e3" />
            <stop offset="100%" stopColor="#2547bd" />
          </linearGradient>

          <linearGradient id="envRightFlapGrad" x1="300" y1="180" x2="170" y2="280" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#5d84ff" />
            <stop offset="50%" stopColor="#436be8" />
            <stop offset="100%" stopColor="#2a4ec2" />
          </linearGradient>

          <linearGradient id="envBottomFlapGrad" x1="180" y1="210" x2="180" y2="325" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#567efb" />
            <stop offset="45%" stopColor="#4168e7" />
            <stop offset="100%" stopColor="#294dc5" />
          </linearGradient>

          {/* Letter Document Sheet 3D Shading */}
          <linearGradient id="docPaperGrad" x1="100" y1="50" x2="260" y2="240" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="70%" stopColor="#f8faff" />
            <stop offset="100%" stopColor="#e4e9f5" />
          </linearGradient>

          {/* Lizzdo Brand Mark Vector Gradients */}
          <linearGradient id="lzDocGold" x1="20%" y1="10%" x2="80%" y2="90%">
            <stop offset="0%" stopColor="#FFF266" />
            <stop offset="25%" stopColor="#FFCE00" />
            <stop offset="60%" stopColor="#FF9E00" />
            <stop offset="100%" stopColor="#E85D04" />
          </linearGradient>

          <linearGradient id="lzDocRim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF7A00" />
            <stop offset="50%" stopColor="#FF9500" />
            <stop offset="100%" stopColor="#D04000" />
          </linearGradient>

          <linearGradient id="lzDocDiag" x1="0%" y1="70%" x2="100%" y2="30%">
            <stop offset="0%" stopColor="#FF9900" />
            <stop offset="35%" stopColor="#FFC700" />
            <stop offset="70%" stopColor="#FFDE43" />
            <stop offset="100%" stopColor="#FFA800" />
          </linearGradient>

          <radialGradient id="lzDocDot" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#FFF599" />
            <stop offset="40%" stopColor="#FFBE00" />
            <stop offset="85%" stopColor="#FF8800" />
            <stop offset="100%" stopColor="#DE4E00" />
          </radialGradient>

          {/* Trophy 3D Ultra-Realistic Gold Gradients */}
          <linearGradient id="trophyCupShine" x1="330" y1="130" x2="480" y2="245" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fff8cf" />
            <stop offset="15%" stopColor="#fedd62" />
            <stop offset="40%" stopColor="#eab233" />
            <stop offset="75%" stopColor="#ba7711" />
            <stop offset="100%" stopColor="#7a4603" />
          </linearGradient>

          <linearGradient id="trophyCupInterior" x1="360" y1="130" x2="440" y2="160" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#5c3402" />
            <stop offset="50%" stopColor="#804a04" />
            <stop offset="100%" stopColor="#ad6e0d" />
          </linearGradient>

          <linearGradient id="trophyHandleLeft" x1="310" y1="150" x2="355" y2="235" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffef99" />
            <stop offset="35%" stopColor="#f0b938" />
            <stop offset="75%" stopColor="#bd7b12" />
            <stop offset="100%" stopColor="#784402" />
          </linearGradient>

          <linearGradient id="trophyHandleRight" x1="450" y1="150" x2="495" y2="235" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffef99" />
            <stop offset="35%" stopColor="#f0b938" />
            <stop offset="75%" stopColor="#bd7b12" />
            <stop offset="100%" stopColor="#784402" />
          </linearGradient>

          <linearGradient id="trophyStem" x1="388" y1="240" x2="412" y2="295" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#f2bd3f" />
            <stop offset="45%" stopColor="#c58315" />
            <stop offset="85%" stopColor="#854d03" />
            <stop offset="100%" stopColor="#5c3402" />
          </linearGradient>

          <linearGradient id="trophyPlinth" x1="360" y1="285" x2="440" y2="325" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fff2a8" />
            <stop offset="25%" stopColor="#f4bf39" />
            <stop offset="65%" stopColor="#be7c13" />
            <stop offset="100%" stopColor="#6e3d02" />
          </linearGradient>

          {/* Medal Badge & Ribbon Gradients */}
          <radialGradient id="medalBadgeRadial" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="35%" stopColor="#ffe67a" />
            <stop offset="70%" stopColor="#f3be34" />
            <stop offset="100%" stopColor="#aa6b0b" />
          </radialGradient>

          <linearGradient id="ribbonTailGrad" x1="390" y1="210" x2="410" y2="250" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffd86b" />
            <stop offset="60%" stopColor="#d6921b" />
            <stop offset="100%" stopColor="#8f5204" />
          </linearGradient>

          {/* 3D Soft Drop Shadow Filter */}
          <filter id="soft3DShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="-2" dy="10" stdDeviation="12" floodColor="#000000" floodOpacity="0.45" />
          </filter>

          <filter id="softTrophyGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="4" dy="12" stdDeviation="10" floodColor="#000000" floodOpacity="0.5" />
          </filter>

          {/* Envelope Body Clip to ensure paper never overflows envelope bounds */}
          <clipPath id="envelopeBodyClip">
            <rect x="68" y="0" width="224" height="326" rx="14" />
          </clipPath>
        </defs>

        {/* ========================================================================= */}
        {/* 1. GROUND PLANE CONTACT SHADOWS */}
        {/* ========================================================================= */}
        <ellipse 
          cx="175" 
          cy="330" 
          rx={activeOpen ? 115 : 100} 
          ry="22" 
          fill="url(#envGroundShadow)" 
          className="transition-all duration-500 ease-out"
        />
        <ellipse cx="400" cy="328" rx="65" ry="18" fill="url(#trophyGroundShadow)" />

        {/* ========================================================================= */}
        {/* 2. 3D ENVELOPE BACK WALL & TOP BACK OPEN FLAP */}
        {/* ========================================================================= */}
        <g filter="url(#soft3DShadow)">
          
          {/* Back Open Flap (Visible when OPEN - Pointing Upward) */}
          <g
            className="transition-all duration-400 ease-in-out"
            style={{
              transformOrigin: '180px 185px',
              transform: activeOpen 
                ? 'scaleY(1)' 
                : 'scaleY(0)',
              opacity: activeOpen ? 1 : 0
            }}
          >
            <path
              d="M 66 182 
                 L 173 62
                 C 176 58, 184 58, 187 62
                 L 294 182
                 C 298 186, 292 192, 284 192
                 L 76 192
                 C 68 192, 62 186, 66 182 Z"
              fill="url(#envBackFlapGrad)"
            />
            {/* Flap top highlight rim */}
            <path
              d="M 68 182 L 180 63 L 292 182"
              stroke="#6b8eff"
              strokeWidth="1.5"
              fill="none"
              opacity="0.6"
            />
          </g>

          {/* Inside Envelope Pocket Wall (Dark Occlusion Chamber) */}
          <path
            d="M 68 185
               L 292 185
               L 292 300
               C 292 314, 280 322, 268 322
               L 92 322
               C 80 322, 68 314, 68 300
               Z"
            fill="url(#envBackWallGrad)"
          />

          {/* ========================================================================= */}
          {/* 3. PROTRUDING LETTER DOCUMENT (FULLY INSIDE ENVELOPE WHEN CLOSED) */}
          {/* ========================================================================= */}
          <g 
            clipPath="url(#envelopeBodyClip)"
            className="transition-all duration-500 ease-out"
            style={{
              transformOrigin: '180px 220px',
              transform: activeOpen 
                ? 'translateY(-42px) rotate(-3.5deg)' 
                : 'translateY(130px) rotate(0deg)',
              opacity: activeOpen ? 1 : 0
            }}
          >
            {/* Sheet Occlusion Shadow inside pocket */}
            <rect
              x="96"
              y="74"
              width="168"
              height="192"
              rx="12"
              fill="#080f24"
              opacity={activeOpen ? 0.35 : 0.6}
            />
            {/* Main Sheet Card */}
            <rect
              x="94"
              y="68"
              width="168"
              height="192"
              rx="12"
              fill="url(#docPaperGrad)"
              stroke="#cfd8ea"
              strokeWidth="1.5"
            />

            {/* Top Sheet Specular Rim */}
            <line x1="102" y1="70" x2="254" y2="70" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.9" />

            {/* LETTER HEADER: AUTHENTIC LIZZDO MASTER BRAND LOGO */}
            <g transform="translate(108, 86)">
              {/* Lizzdo Vector Mark Glyph */}
              <svg width="22" height="22" viewBox="0 0 1000 1000" fill="none" className="shrink-0">
                {/* 1. Delta Chevron */}
                <path 
                  d="M 215 65 C 140 65 105 110 105 195 L 105 805 C 105 890 145 930 220 930 C 285 930 330 875 350 815 L 350 720 C 325 760 295 780 260 780 C 225 780 205 760 205 700 L 205 270 C 205 230 225 210 265 210 C 290 210 320 225 355 250 L 615 425 C 655 450 670 435 660 400 L 620 355 C 600 330 575 310 540 285 L 280 95 C 255 75 235 65 215 65 Z" 
                  fill="url(#lzDocRim)" 
                />
                <path 
                  d="M 215 70 C 148 70 115 112 115 195 L 115 805 C 115 880 150 920 220 920 C 275 920 318 870 338 815 L 338 725 C 315 760 288 775 258 775 C 230 775 215 755 215 700 L 215 270 C 215 235 230 218 268 218 C 292 218 322 232 355 255 L 610 425 C 645 448 655 435 645 405 L 610 360 C 592 335 568 316 535 292 L 278 100 C 255 80 235 70 215 70 Z" 
                  fill="url(#lzDocGold)" 
                />
                {/* 2. Diagonal Bar */}
                <path 
                  d="M 270 705 L 840 360 C 890 330 930 365 910 415 C 895 450 860 480 815 508 L 245 850 C 200 878 165 845 185 795 C 200 758 232 728 270 705 Z" 
                  fill="url(#lzDocRim)" 
                />
                <path 
                  d="M 275 708 L 838 368 C 882 342 918 372 900 415 C 888 445 855 474 815 498 L 252 840 C 210 865 178 838 195 795 C 208 762 238 732 275 708 Z" 
                  fill="url(#lzDocDiag)" 
                />
                {/* 3. Circular Dot */}
                <ellipse cx="808" cy="710" rx="112" ry="94" fill="url(#lzDocRim)" />
                <ellipse cx="806" cy="706" rx="106" ry="88" fill="url(#lzDocDot)" />
                {/* 4. Horizontal Pill */}
                <rect x="435" y="782" width="280" height="134" rx="67" fill="url(#lzDocRim)" />
                <rect x="438" y="786" width="274" height="128" rx="64" fill="url(#lzDocGold)" />
              </svg>

              {/* Brand Typography */}
              <g transform="translate(28, 0)">
                <text
                  x="0"
                  y="13"
                  fill="#0f172a"
                  fontFamily="'Outfit', sans-serif"
                  fontSize="13"
                  fontWeight="900"
                  letterSpacing="-0.3"
                >
                  {companyName.split(' ')[0] || "Lizzdo"}
                </text>
                <text
                  x="48"
                  y="13"
                  fill="#f59e0b"
                  fontFamily="'Outfit', sans-serif"
                  fontSize="10.5"
                  fontWeight="800"
                  letterSpacing="0.8"
                >
                  {companyName.split(' ').slice(1).join(' ') || "MEDIA"}
                </text>
              </g>
            </g>

            {/* Stylized High-Craft Letter Typography Lines */}
            <g transform="translate(108, 122)">
              {/* Line 1: Header subject bar with subtle pulse glow */}
              <rect x="0" y="0" width="75" height="6.5" rx="3.25" fill="#475569" />
              {/* Body lines */}
              <rect x="0" y="14" width="138" height="5.5" rx="2.75" fill="#64748b" />
              <rect x="0" y="25" width="130" height="5.5" rx="2.75" fill="#94a3b8" />
              <rect x="0" y="36" width="134" height="5.5" rx="2.75" fill="#cbd5e1" />
              <rect x="0" y="47" width="90" height="5.5" rx="2.75" fill="#e2e8f0" />
            </g>
          </g>

          {/* ========================================================================= */}
          {/* 4. ENVELOPE FRONT FOLDS & POCKET */}
          {/* ========================================================================= */}
          {/* Left Triangular Fold */}
          <path
            d="M 68 185
               L 180 265
               L 68 316
               Z"
            fill="url(#envLeftFlapGrad)"
            opacity="0.96"
          />

          {/* Right Triangular Fold */}
          <path
            d="M 292 185
               L 180 265
               L 292 316
               Z"
            fill="url(#envRightFlapGrad)"
            opacity="0.94"
          />

          {/* Bottom Front Triangle Flap with Rounded Base Corners */}
          <path
            d="M 68 318
               L 180 238
               C 182 236, 186 236, 188 238
               L 292 318
               C 288 324, 278 326, 268 326
               L 92 326
               C 82 326, 72 324, 68 318 Z"
            fill="url(#envBottomFlapGrad)"
          />

          {/* Front Closed Top Flap (Visible when CLOSED - Pointing Downward over pocket) */}
          <g
            className="transition-all duration-400 ease-in-out"
            style={{
              transformOrigin: '180px 185px',
              transform: activeOpen 
                ? 'scaleY(0)' 
                : 'scaleY(1)',
              opacity: activeOpen ? 0 : 1
            }}
          >
            <path
              d="M 68 185
                 L 173 285
                 C 176 288, 184 288, 187 285
                 L 292 185
                 Z"
              fill="url(#envFrontClosedFlapGrad)"
              filter="drop-shadow(0 4px 6px rgba(0,0,0,0.3))"
            />
            {/* Crease line & gold seal */}
            <circle cx="180" cy="275" r="5" fill="#f59e0b" opacity="0.9" />
          </g>

          {/* Subtle Crease Shadow Lines for 3D realism */}
          <path
            d="M 70 186 L 180 265"
            stroke="#162e80"
            strokeWidth="1.5"
            opacity="0.45"
          />
          <path
            d="M 290 186 L 180 265"
            stroke="#162e80"
            strokeWidth="1.5"
            opacity="0.45"
          />
          <path
            d="M 70 316 L 180 238 L 290 316"
            stroke="#142973"
            strokeWidth="1.5"
            opacity="0.35"
          />
        </g>

        {/* ========================================================================= */}
        {/* 5. 3D REALISTIC GOLD CHAMPIONSHIP TROPHY */}
        {/* ========================================================================= */}
        <g 
          filter="url(#softTrophyGlow)"
          className="transition-all duration-400 ease-out"
          style={{
            transformOrigin: '400px 315px',
            transform: activeOpen ? 'translateY(-4px) scale(1.02)' : 'translateY(0px) scale(1)'
          }}
        >
          
          {/* Trophy Left Handle (Smooth 3D curved C-loop) */}
          <path
            d="M 360 162
               C 322 162, 312 202, 322 226
               C 332 246, 354 246, 368 234
               L 368 218
               C 356 226, 342 224, 336 212
               C 328 196, 336 174, 360 174
               Z"
            fill="url(#trophyHandleLeft)"
          />

          {/* Trophy Right Handle (Smooth 3D curved C-loop) */}
          <path
            d="M 440 162
               C 478 162, 488 202, 478 226
               C 468 246, 446 246, 432 234
               L 432 218
               C 444 226, 458 224, 464 212
               C 472 196, 464 174, 440 174
               Z"
            fill="url(#trophyHandleRight)"
          />

          {/* Trophy Stem & Pillar Base */}
          <path
            d="M 388 244
               L 412 244
               C 412 244, 410 278, 417 294
               L 383 294
               C 390 278, 388 244, 388 244 Z"
            fill="url(#trophyStem)"
          />

          {/* Tiered Round Base Plinth (Step 1) */}
          <ellipse cx="400" cy="294" rx="26" ry="6" fill="#ba7a12" />
          <path
            d="M 374 294 H 426 V 303 C 426 307, 374 307, 374 303 Z"
            fill="url(#trophyPlinth)"
          />
          {/* Step 2 (Wide Bottom Foot) */}
          <ellipse cx="400" cy="303" rx="38" ry="8" fill="#d9971a" />
          <path
            d="M 362 303 H 438 V 315 C 438 322, 362 322, 362 315 Z"
            fill="url(#trophyPlinth)"
          />
          <ellipse cx="400" cy="315" rx="38" ry="7" fill="#6e3d02" />

          {/* Base Rim Specular Highlight */}
          <ellipse cx="400" cy="303" rx="37" ry="5.5" fill="none" stroke="#fff8cf" strokeWidth="1.5" opacity="0.85" />

          {/* Main Cup Body */}
          {/* Cup Interior Chamber (Depth & Ambient Shading) */}
          <ellipse cx="400" cy="148" rx="42" ry="11" fill="url(#trophyCupInterior)" />

          {/* Cup Outer Chalice Body */}
          <path
            d="M 358 148
               C 358 148, 355 210, 382 240
               C 388 246, 400 248, 400 248
               C 400 248, 412 246, 418 240
               C 445 210, 442 148, 442 148
               Z"
            fill="url(#trophyCupShine)"
          />

          {/* Cup Top Rim Golden Rings */}
          <ellipse
            cx="400"
            cy="148"
            rx="43"
            ry="11"
            fill="none"
            stroke="#fff8d1"
            strokeWidth="3.5"
          />
          <ellipse
            cx="400"
            cy="148"
            rx="42"
            ry="9.5"
            fill="none"
            stroke="#c98715"
            strokeWidth="1.5"
          />

          {/* Specular Light Curve Highlight along left cup flank */}
          <path
            d="M 368 156 C 368 185, 375 220, 390 238"
            stroke="#ffffff"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.8"
          />

          {/* Secondary Soft Rim Light along right cup flank */}
          <path
            d="M 432 156 C 432 185, 426 220, 412 238"
            stroke="#fff5b8"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.55"
          />

          {/* ========================================================================= */}
          {/* 6. MEDAL AWARD SEAL & RIBBON ON TROPHY */}
          {/* ========================================================================= */}
          <g>
            {/* Ribbon Tails hanging down */}
            <path
              d="M 394 212
                 L 387 242
                 L 394 238
                 L 401 242
                 L 398 212 Z"
              fill="url(#ribbonTailGrad)"
            />
            <path
              d="M 402 212
                 L 399 242
                 L 406 238
                 L 413 242
                 L 406 212 Z"
              fill="url(#ribbonTailGrad)"
            />

            {/* Circular Medallion Disc */}
            <circle
              cx="400"
              cy="202"
              r="13"
              fill="url(#medalBadgeRadial)"
              filter="drop-shadow(0 2px 5px rgba(0,0,0,0.35))"
            />
            {/* Scalloped Gold Star Edge */}
            <circle
              cx="400"
              cy="202"
              r="13"
              fill="none"
              stroke="#e8aa25"
              strokeWidth="2"
              strokeDasharray="2.5 1.5"
            />
            {/* Inner Ring */}
            <circle
              cx="400"
              cy="202"
              r="9.5"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1"
              opacity="0.85"
            />
            {/* 5-Point Center Star */}
            <path
              d="M 400 196.5 L 401.8 200.5 L 405.8 201 L 402.8 203.8 L 403.6 207.8 L 400 205.6 L 396.4 207.8 L 397.2 203.8 L 394.2 201 L 398.2 200.5 Z"
              fill="#9e6205"
            />
          </g>

        </g>

        {/* Ambient Floating Sparkles / Golden Particles with Dynamic Glow */}
        <g 
          className="transition-all duration-400 ease-out"
          style={{
            transform: activeOpen ? 'scale(1.08) translateY(-2px)' : 'scale(1)',
            transformOrigin: '400px 100px'
          }}
          opacity={activeOpen ? 1 : 0.75}
        >
          <circle cx="82" cy="110" r="3" fill="#ffbe1a" />
          <circle cx="340" cy="85" r="2.5" fill="#ffe585" />
          <circle cx="478" cy="125" r="3" fill="#ffbe1a" />
          <circle cx="435" cy="65" r="2.5" fill="#ffffff" />
          {/* Subtle 4-point star sparkle */}
          <path
            d="M 470 85 Q 470 92 477 92 Q 470 92 470 99 Q 470 92 463 92 Q 470 92 470 85 Z"
            fill="#ffbe1a"
            opacity="0.85"
          />
        </g>
      </svg>
    </div>
  );
};
