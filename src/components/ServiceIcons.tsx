import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const ServiceIcon: React.FC<{ name: string; size?: number; className?: string }> = ({
  name,
  size = 36,
  className = "text-[#ffbe1a]"
}) => {
  switch (name) {
    case 'brand-identity':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Bounding box with anchor corner squares */}
          <rect x="8" y="8" width="32" height="32" rx="2" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />
          <rect x="6" y="6" width="4" height="4" fill="currentColor" />
          <rect x="38" y="6" width="4" height="4" fill="currentColor" />
          <rect x="6" y="38" width="4" height="4" fill="currentColor" />
          <rect x="38" y="38" width="4" height="4" fill="currentColor" />
          {/* Pen tool nib centered */}
          <path d="M24 16 L29 27 L25 33 L23 33 L19 27 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <circle cx="24" cy="24" r="1.5" fill="currentColor" />
          <line x1="24" y1="24" x2="24" y2="33" stroke="currentColor" strokeWidth="2" />
        </svg>
      );

    case 'logo-design':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Tilted drafting pencil */}
          <path d="M33 11 L37 15 L20 32 L15 33 L16 28 Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="29" y1="15" x2="33" y2="19" stroke="currentColor" strokeWidth="2" />
          <line x1="12" y1="36" x2="26" y2="36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        </svg>
      );

    case 'graphic-design':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Geometric visual triad: Circle, Triangle, Square */}
          <circle cx="16" cy="18" r="8" stroke="currentColor" strokeWidth="2.2" />
          <polygon points="34,10 42,26 26,26" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
          <rect x="18" y="26" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2.2" />
        </svg>
      );

    case 'flyer-design':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Folded paper leaflet / print flyer with folded corner */}
          <path d="M12 10 C12 8.9 12.9 8 14 8 L28 8 L36 16 L36 38 C36 39.1 35.1 40 34 40 L14 40 C12.9 40 12 39.1 12 38 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M28 8 L28 16 L36 16" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          {/* Content lines */}
          <line x1="17" y1="22" x2="31" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="17" y1="28" x2="27" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="17" y1="34" x2="23" y2="34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'content-creation':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Creative canvas and magic spark */}
          <rect x="10" y="12" width="28" height="24" rx="3" stroke="currentColor" strokeWidth="2" />
          <circle cx="18" cy="20" r="3" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12 30 L20 23 L28 30 L32 26 L36 30" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          {/* Sparkle badge */}
          <path d="M36 8 L37.5 12 L41.5 13.5 L37.5 15 L36 19 L34.5 15 L30.5 13.5 L34.5 12 Z" fill="currentColor" />
        </svg>
      );

    case 'content-posting':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Code/content card frame with </> tags */}
          <rect x="8" y="10" width="32" height="28" rx="4" stroke="currentColor" strokeWidth="2.2" />
          <path d="M19 20 L15 24 L19 28" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M29 20 L33 24 L29 28" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="26" y1="18" x2="22" y2="30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );


    case 'digital-marketing':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Megaphone / Bullhorn */}
          <path d="M12 20 L28 14 L28 32 L12 26 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <rect x="8" y="19" width="4" height="8" rx="1" stroke="currentColor" strokeWidth="2" />
          <path d="M16 26 L16 34 C16 35 17 36 18 36 L20 36 C21 36 22 35 22 34 L22 24" stroke="currentColor" strokeWidth="2" />
          {/* Sound waves */}
          <path d="M33 18 C35 20 36 22 36 23 C36 24 35 26 33 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M37 14 C40 17 41 20 41 23 C41 26 40 29 37 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'social-media-management':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Three connected community user avatars */}
          <circle cx="24" cy="15" r="4" stroke="currentColor" strokeWidth="2" />
          <path d="M16 27 C16 23.5 19.5 22 24 22 C28.5 22 32 23.5 32 27" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          
          <circle cx="12" cy="20" r="3" stroke="currentColor" strokeWidth="1.8" opacity="0.8" />
          <path d="M6 30 C6 27.5 8.5 26 12 26 C13.2 26 14.3 26.2 15.2 26.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />

          <circle cx="36" cy="20" r="3" stroke="currentColor" strokeWidth="1.8" opacity="0.8" />
          <path d="M42 30 C42 27.5 39.5 26 36 26 C34.8 26 33.7 26.2 32.8 26.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />
        </svg>
      );

    case 'advertising-creatives':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Target Bullseye with Arrow in center */}
          <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2" />
          <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="2" />
          <circle cx="24" cy="24" r="4" fill="currentColor" />
          {/* Arrow */}
          <line x1="38" y1="10" x2="26" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <polygon points="38,10 33,11 37,15" fill="currentColor" />
        </svg>
      );

    case 'ai-visuals-content':
    case 'ai-visual-content':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Neural AI Brain with circuit nodes */}
          <path d="M19 12 C14 12 10 16 10 21 C10 23 11 25 12 26.5 C10.5 28 10 30 10 32 C10 36 13 39 17 39 C18 39 19 38.5 19 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M29 12 C34 12 38 16 38 21 C38 23 37 25 36 26.5 C37.5 28 38 30 38 32 C38 36 35 39 31 39 C30 39 29 38.5 29 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="24" y1="10" x2="24" y2="40" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
          <circle cx="16" cy="18" r="2" fill="currentColor" />
          <circle cx="32" cy="18" r="2" fill="currentColor" />
          <circle cx="15" cy="33" r="2" fill="currentColor" />
          <circle cx="33" cy="33" r="2" fill="currentColor" />
          <line x1="16" y1="18" x2="24" y2="24" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
          <line x1="32" y1="18" x2="24" y2="24" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
        </svg>
      );

    case 'website-development':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Wireframe global internet web sphere */}
          <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2" />
          <ellipse cx="24" cy="24" rx="7" ry="16" stroke="currentColor" strokeWidth="1.8" />
          <line x1="8" y1="24" x2="40" y2="24" stroke="currentColor" strokeWidth="1.8" />
          <line x1="11" y1="16" x2="37" y2="16" stroke="currentColor" strokeWidth="1.5" />
          <line x1="11" y1="32" x2="37" y2="32" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );

    /* Process Icons */
    case 'discover':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <path d="M12 14 C12 10.7 14.7 8 18 8 L30 8 C33.3 8 36 10.7 36 14 L36 26 C36 29.3 33.3 32 30 32 L20 32 L12 38 Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
          <circle cx="20" cy="20" r="1.5" fill="currentColor" />
          <circle cx="24" cy="20" r="1.5" fill="currentColor" />
          <circle cx="28" cy="20" r="1.5" fill="currentColor" />
        </svg>
      );

    case 'plan':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <path d="M24 10 C17.4 10 14 14.5 14 20 C14 24 17 27 19 29 L19 33 L29 33 L29 29 C31 27 34 24 34 20 C34 14.5 30.6 10 24 10 Z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="20" y1="37" x2="28" y2="37" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="22" y1="41" x2="26" y2="41" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="24" y1="4" x2="24" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="12" y1="12" x2="14.5" y2="14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="36" y1="12" x2="33.5" y2="14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'design':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <path d="M33 11 L37 15 L20 32 L15 33 L16 28 Z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="29" y1="15" x2="33" y2="19" stroke="currentColor" strokeWidth="2.2" />
          <path d="M12 36 C16 36 20 33 24 33 C28 33 32 36 36 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        </svg>
      );

    case 'develop':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <path d="M18 16 L10 24 L18 32" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M30 16 L38 24 L30 32" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="27" y1="13" x2="21" y2="35" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );

    case 'launch':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <path d="M24 8 C24 8 35 12 35 24 C35 30 31 33 31 33 L17 33 C17 33 13 30 13 24 C13 12 24 8 24 8 Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
          <circle cx="24" cy="20" r="3.5" stroke="currentColor" strokeWidth="2" />
          <path d="M13 26 L8 29 L11 35 L17 33" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M35 26 L40 29 L37 35 L31 33" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M21 37 L24 42 L27 37" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'grow':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <path d="M8 38 L40 38" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M12 30 L22 20 L28 26 L38 12" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="31,12 38,12 38,19" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="14" y="32" width="4" height="6" fill="currentColor" opacity="0.4" />
          <rect x="22" y="24" width="4" height="14" fill="currentColor" opacity="0.4" />
          <rect x="30" y="28" width="4" height="10" fill="currentColor" opacity="0.4" />
        </svg>
      );

    /* Statistics Icons */
    case 'smile':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2.2" />
          <circle cx="18" cy="20" r="2" fill="currentColor" />
          <circle cx="30" cy="20" r="2" fill="currentColor" />
          <path d="M16 27 C18 32 30 32 32 27" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );

    case 'box':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <path d="M24 7 L39 15 L24 23 L9 15 Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M9 15 L9 32 L24 40 L24 23" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M39 15 L39 32 L24 40" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M16 27 L20 31 L32 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'trophy':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <path d="M14 10 L34 10 L32 24 C32 29 28 32 24 32 C20 32 16 29 16 24 Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M14 14 L8 14 C8 20 12 22 15 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M34 14 L40 14 C40 20 36 22 33 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="24" y1="32" x2="24" y2="38" stroke="currentColor" strokeWidth="2.2" />
          <line x1="16" y1="38" x2="32" y2="38" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );

    case 'team':
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <circle cx="24" cy="16" r="5" stroke="currentColor" strokeWidth="2.2" />
          <path d="M14 34 C14 28 18 26 24 26 C30 26 34 28 34 34" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="12" cy="18" r="3.5" stroke="currentColor" strokeWidth="1.8" opacity="0.75" />
          <path d="M6 34 C6 30 9 28 13 28" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.75" />
          <circle cx="36" cy="18" r="3.5" stroke="currentColor" strokeWidth="1.8" opacity="0.75" />
          <path d="M42 34 C42 30 39 28 35 28" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.75" />
        </svg>
      );

    default:
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Wireframe global internet web sphere */}
          <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2" />
          <ellipse cx="24" cy="24" rx="7" ry="16" stroke="currentColor" strokeWidth="1.8" />
          <line x1="8" y1="24" x2="40" y2="24" stroke="currentColor" strokeWidth="1.8" />
          <line x1="11" y1="16" x2="37" y2="16" stroke="currentColor" strokeWidth="1.5" />
          <line x1="11" y1="32" x2="37" y2="32" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
  }
};

