import React, { useState } from 'react';

export interface LizzdoLogoProps {
  className?: string;
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number | string;
  variant?: 'full' | 'mark-only' | 'monochrome' | 'badge';
  theme?: 'dark' | 'light' | 'gold';
  logoSrc?: string;
  markSrc?: string;
  alt?: string;
  decorative?: boolean;
  onClick?: () => void;
  id?: string;
}

export const LizzdoLogo: React.FC<LizzdoLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'full',
  theme = 'dark',
  logoSrc,
  markSrc,
  alt = 'Lizzdo Media',
  decorative = false,
  onClick,
  id = 'lizzdo-brand-logo',
}) => {
  const [imageError, setImageError] = useState(false);

  const sizeMap: Record<string, { height: number; iconSize: number; textScale: string; subScale: string; gap: string }> = {
    xxs: { height: 16, iconSize: 14, textScale: 'text-[9px]', subScale: 'text-[6px]', gap: 'gap-1' },
    xs: { height: 24, iconSize: 20, textScale: 'text-xs', subScale: 'text-[8px]', gap: 'gap-2' },
    sm: { height: 32, iconSize: 28, textScale: 'text-base', subScale: 'text-[9px]', gap: 'gap-2.5' },
    md: { height: 42, iconSize: 38, textScale: 'text-xl', subScale: 'text-[11px]', gap: 'gap-3.5' },
    lg: { height: 56, iconSize: 50, textScale: 'text-2xl', subScale: 'text-xs', gap: 'gap-4' },
    xl: { height: 72, iconSize: 64, textScale: 'text-3xl', subScale: 'text-sm', gap: 'gap-4.5' },
  };

  // Convert numeric sizes or fallback to 'md'
  const normalizedSizeKey: string = typeof size === 'number'
    ? (size <= 20 ? 'xxs' : size <= 28 ? 'xs' : size <= 36 ? 'sm' : size <= 48 ? 'md' : size <= 60 ? 'lg' : 'xl')
    : (typeof size === 'string' && sizeMap[size] ? size : 'md');

  const currentSize = sizeMap[normalizedSizeKey] || sizeMap.md;

  // If a custom image URL is passed via CMS and hasn't errored
  const effectiveSrc = variant === 'mark-only' ? (markSrc || logoSrc) : logoSrc;

  if (effectiveSrc && !imageError && effectiveSrc !== '/uploads/lizzdo-media-logo.svg' && effectiveSrc !== '/uploads/lizzdo-media-mark.svg') {
    return (
      <div 
        id={id}
        onClick={onClick}
        className={`inline-flex items-center select-none ${onClick ? 'cursor-pointer' : ''} ${className}`}
        aria-hidden={decorative ? 'true' : undefined}
      >
        <img
          src={effectiveSrc}
          alt={decorative ? '' : alt}
          className="h-auto object-contain max-h-[60px]"
          style={{ height: currentSize.height }}
          onError={() => setImageError(true)}
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // Master Vector Geometry Rendering (Single Source of Truth)
  const isLight = theme === 'light';
  const isMonochrome = variant === 'monochrome';

  return (
    <div 
      id={id}
      onClick={onClick}
      className={`inline-flex items-center ${currentSize.gap} select-none ${onClick ? 'cursor-pointer group transition-transform duration-200 hover:scale-[1.02]' : ''} ${className}`}
      aria-hidden={decorative ? 'true' : undefined}
      role={decorative ? undefined : 'img'}
      aria-label={decorative ? undefined : alt}
    >
      {/* Official Geometric Lizzdo Icon Mark */}
      <div className="relative flex items-center justify-center shrink-0">
        <svg 
          width={currentSize.iconSize} 
          height={currentSize.iconSize} 
          viewBox="0 0 1000 1000" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className={`${
            isMonochrome 
              ? 'opacity-90' 
              : 'drop-shadow-[0_2px_14px_rgba(255,190,26,0.45)] transition-all duration-300 group-hover:drop-shadow-[0_4px_22px_rgba(255,190,26,0.7)] group-hover:scale-105'
          }`}
        >
          <defs>
            <linearGradient id={`lzCompGold_${size}_${theme}`} x1="20%" y1="10%" x2="80%" y2="90%">
              <stop offset="0%" stopColor="#FFF266" />
              <stop offset="25%" stopColor="#FFCE00" />
              <stop offset="60%" stopColor="#FF9E00" />
              <stop offset="100%" stopColor="#E85D04" />
            </linearGradient>

            <linearGradient id={`lzCompRim_${size}_${theme}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF7A00" />
              <stop offset="50%" stopColor="#FF9500" />
              <stop offset="100%" stopColor="#D04000" />
            </linearGradient>

            <linearGradient id={`lzCompDiag_${size}_${theme}`} x1="0%" y1="70%" x2="100%" y2="30%">
              <stop offset="0%" stopColor="#FF9900" />
              <stop offset="35%" stopColor="#FFC700" />
              <stop offset="70%" stopColor="#FFDE43" />
              <stop offset="100%" stopColor="#FFA800" />
            </linearGradient>

            <radialGradient id={`lzCompDot_${size}_${theme}`} cx="35%" cy="30%" r="65%">
              <stop offset="0%" stopColor="#FFF599" />
              <stop offset="40%" stopColor="#FFBE00" />
              <stop offset="85%" stopColor="#FF8800" />
              <stop offset="100%" stopColor="#DE4E00" />
            </radialGradient>

            <linearGradient id={`lzCompCap_${size}_${theme}`} x1="0%" y1="20%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFE633" />
              <stop offset="45%" stopColor="#FFAE00" />
              <stop offset="100%" stopColor="#E85000" />
            </linearGradient>

            <linearGradient id={`lzCompSpec_${size}_${theme}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
              <stop offset="35%" stopColor="#FFFFFF" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>

          {isMonochrome ? (
            <g fill={isLight ? '#0f172a' : '#ffffff'}>
              {/* Monochromatic Silhouette */}
              <path d="M 215 70 C 148 70 115 112 115 195 L 115 805 C 115 880 150 920 220 920 C 275 920 318 870 338 815 L 338 725 C 315 760 288 775 258 775 C 230 775 215 755 215 700 L 215 270 C 215 235 230 218 268 218 C 292 218 322 232 355 255 L 610 425 C 645 448 655 435 645 405 L 610 360 C 592 335 568 316 535 292 L 278 100 C 255 80 235 70 215 70 Z" />
              <path d="M 275 708 L 838 368 C 882 342 918 372 900 415 C 888 445 855 474 815 498 L 252 840 C 210 865 178 838 195 795 C 208 762 238 732 275 708 Z" />
              <ellipse cx="806" cy="706" rx="106" ry="88" />
              <rect x="438" y="786" width="274" height="128" rx="64" />
            </g>
          ) : (
            <g>
              {/* 1. DELTA CHEVRON */}
              <path 
                d="M 215 65 C 140 65 105 110 105 195 L 105 805 C 105 890 145 930 220 930 C 285 930 330 875 350 815 L 350 720 C 325 760 295 780 260 780 C 225 780 205 760 205 700 L 205 270 C 205 230 225 210 265 210 C 290 210 320 225 355 250 L 615 425 C 655 450 670 435 660 400 L 620 355 C 600 330 575 310 540 285 L 280 95 C 255 75 235 65 215 65 Z" 
                fill={`url(#lzCompRim_${size}_${theme})`} 
              />
              <path 
                d="M 215 70 C 148 70 115 112 115 195 L 115 805 C 115 880 150 920 220 920 C 275 920 318 870 338 815 L 338 725 C 315 760 288 775 258 775 C 230 775 215 755 215 700 L 215 270 C 215 235 230 218 268 218 C 292 218 322 232 355 255 L 610 425 C 645 448 655 435 645 405 L 610 360 C 592 335 568 316 535 292 L 278 100 C 255 80 235 70 215 70 Z" 
                fill={`url(#lzCompGold_${size}_${theme})`} 
              />
              <path 
                d="M 215 80 C 160 80 130 115 130 195 L 130 790 C 130 810 125 800 120 780 L 120 200 C 120 130 150 95 210 95 L 515 300 C 555 328 580 348 595 365 L 580 350 C 560 330 535 310 495 285 L 265 110 C 245 92 230 80 215 80 Z" 
                fill={`url(#lzCompSpec_${size}_${theme})`} 
              />

              {/* 2. DIAGONAL BAR */}
              <path 
                d="M 270 705 L 840 360 C 890 330 930 365 910 415 C 895 450 860 480 815 508 L 245 850 C 200 878 165 845 185 795 C 200 758 232 728 270 705 Z" 
                fill={`url(#lzCompRim_${size}_${theme})`} 
              />
              <path 
                d="M 275 708 L 838 368 C 882 342 918 372 900 415 C 888 445 855 474 815 498 L 252 840 C 210 865 178 838 195 795 C 208 762 238 732 275 708 Z" 
                fill={`url(#lzCompDiag_${size}_${theme})`} 
              />
              <path 
                d="M 285 715 L 830 380 C 860 362 880 375 870 400 L 310 740 C 275 760 245 770 230 780 C 225 765 245 740 285 715 Z" 
                fill={`url(#lzCompSpec_${size}_${theme})`} 
              />

              {/* 3. GLOSSY CIRCULAR DOT */}
              <ellipse cx="808" cy="710" rx="112" ry="94" fill={`url(#lzCompRim_${size}_${theme})`} />
              <ellipse cx="806" cy="706" rx="106" ry="88" fill={`url(#lzCompDot_${size}_${theme})`} />
              <ellipse cx="780" cy="670" rx="60" ry="32" transform="rotate(-15 780 670)" fill={`url(#lzCompSpec_${size}_${theme})`} />

              {/* 4. HORIZONTAL CAPSULE PILL */}
              <rect x="435" y="790" width="280" height="135" rx="67.5" fill={`url(#lzCompRim_${size}_${theme})`} />
              <rect x="438" y="786" width="274" height="128" rx="64" fill={`url(#lzCompCap_${size}_${theme})`} />
              <path 
                d="M 505 800 L 645 800 C 685 800 700 812 690 828 C 675 840 650 845 615 845 L 510 845 C 470 845 455 832 465 818 C 475 806 490 800 505 800 Z" 
                fill={`url(#lzCompSpec_${size}_${theme})`} 
              />
            </g>
          )}
        </svg>
      </div>

      {variant !== 'mark-only' && (
        <div className="flex flex-col justify-center leading-none">
          <span 
            className={`font-black tracking-tight ${currentSize.textScale} font-['Outfit'] transition-colors duration-200 ${
              isLight ? 'text-slate-900 group-hover:text-[#d97706]' : 'text-white group-hover:text-[#ffbe1a]'
            }`}
          >
            LIZZDO
          </span>
          <span 
            className={`font-bold tracking-[0.38em] mt-0.5 font-['Plus_Jakarta_Sans'] uppercase ${currentSize.subScale} ${
              isLight ? 'text-slate-500' : 'text-slate-300'
            }`}
          >
            MEDIA
          </span>
        </div>
      )}
    </div>
  );
};

// Reusable BrandLogo alias for explicit semantic naming
export const BrandLogo = LizzdoLogo;
