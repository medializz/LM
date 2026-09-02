import React from 'react';

export interface ServiceVisualIconProps {
  size?: number;
  className?: string;
  title?: string;
}

/**
 * 01. BRAND IDENTITY
 * Concept: Brand system, guidelines, geometric construction, signature monogram, color swatches.
 * Bounding coordinate frame with corner anchor nodes, precision 45° drafting guide,
 * intersecting geometric brand mark, and palette hierarchy swatches.
 */
export const BrandIdentityIcon: React.FC<ServiceVisualIconProps> = ({
  size = 32,
  className = "text-[#ffbe1a]",
  title = "Brand Identity"
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={title}
  >
    {title && <title>{title}</title>}
    
    {/* Architectural Bounding Box with Dashed Construction Lines */}
    <rect
      x="8"
      y="8"
      width="32"
      height="32"
      rx="3"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeDasharray="3.5 2.5"
      opacity="0.5"
    />

    {/* Corner Anchor Coordinates */}
    <rect x="6" y="6" width="4" height="4" fill="currentColor" rx="0.8" />
    <rect x="38" y="6" width="4" height="4" fill="currentColor" rx="0.8" />
    <rect x="6" y="38" width="4" height="4" fill="currentColor" rx="0.8" />
    <rect x="38" y="38" width="4" height="4" fill="currentColor" rx="0.8" />

    {/* Center Monogram Geometric Diamond / Emblem */}
    <path
      d="M24 13 L35 24 L24 35 L13 24 Z"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />

    {/* Inner Concentric Circle Brand Core */}
    <circle
      cx="24"
      cy="24"
      r="6"
      stroke="currentColor"
      strokeWidth="1.8"
    />

    {/* Focal Identity Center Spark Node */}
    <circle cx="24" cy="24" r="2" fill="currentColor" />

    {/* Diagonal 45-Degree Alignment Tangent */}
    <line
      x1="11"
      y1="11"
      x2="37"
      y2="37"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeDasharray="2 2"
      opacity="0.6"
    />

    {/* Brand Color Hierarchy Swatches */}
    <circle cx="16" cy="42" r="1.6" fill="currentColor" />
    <circle cx="24" cy="42" r="1.6" fill="currentColor" opacity="0.75" />
    <circle cx="32" cy="42" r="1.6" fill="currentColor" opacity="0.5" />
  </svg>
);

/**
 * 02. LOGO DESIGN
 * Concept: Vector mark sculpting, golden ratio curve arcs, drafting compass/pen, anchor handles.
 * Balanced bezier emblem with precision control anchor handles and active drafting stylus nib.
 */
export const LogoDesignIcon: React.FC<ServiceVisualIconProps> = ({
  size = 32,
  className = "text-[#ffbe1a]",
  title = "Logo Design"
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={title}
  >
    {title && <title>{title}</title>}

    {/* Golden Ratio Construction Arc Guidelines */}
    <circle
      cx="21"
      cy="24"
      r="13"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeDasharray="3 2"
      opacity="0.4"
    />
    <circle
      cx="29"
      cy="24"
      r="9"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeDasharray="2 2"
      opacity="0.3"
    />

    {/* Sculpted Dynamic Vector Ribbon / Infinite Loop Logo Mark */}
    <path
      d="M11 28 C11 20 18 14 26 14 C33 14 38 19 38 25 C38 31 33 34 27 34 C19 34 15 27 21 21 C25 17 31 18 34 22"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Bezier Tangent Handle Line */}
    <line
      x1="20"
      y1="10"
      x2="32"
      y2="18"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeDasharray="2 2"
      opacity="0.7"
    />
    {/* Square Bezier Anchor Handles */}
    <rect x="18.5" y="8.5" width="3.2" height="3.2" fill="currentColor" />
    <rect x="30.5" y="16.5" width="3.2" height="3.2" fill="currentColor" />

    {/* Active Vector Drafting Pen Stylus Nib */}
    <g transform="rotate(45 36 34)">
      <path
        d="M36 26 L40 34 L37 38 L35 38 L32 34 Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill="#0f1118"
      />
      <circle cx="36" cy="31" r="0.9" fill="currentColor" />
    </g>
  </svg>
);

/**
 * 03. GRAPHIC DESIGN
 * Concept: Spatial composition, visual triad geometry, typography & layout artboards.
 * Overlapping layered artboards with isometric depth, typography serif, and geometric balance.
 */
export const GraphicDesignIcon: React.FC<ServiceVisualIconProps> = ({
  size = 32,
  className = "text-[#ffbe1a]",
  title = "Graphic Design"
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={title}
  >
    {title && <title>{title}</title>}

    {/* Background Canvas Layer with Blueprint Dashes */}
    <rect
      x="14"
      y="7"
      width="26"
      height="30"
      rx="3"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeDasharray="3 2"
      opacity="0.4"
    />

    {/* Foreground Artboard Canvas */}
    <rect
      x="8"
      y="12"
      width="27"
      height="29"
      rx="3"
      stroke="currentColor"
      strokeWidth="2.2"
    />

    {/* Geometric Visual Composition Triad */}
    {/* Triangle */}
    <polygon
      points="21,17 27,27 15,27"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    {/* Circle Accent */}
    <circle
      cx="28"
      cy="20"
      r="4"
      stroke="currentColor"
      strokeWidth="1.8"
      fill="currentColor"
      fillOpacity="0.15"
    />
    {/* Square Base */}
    <rect
      x="12"
      y="30"
      width="8"
      height="7"
      rx="1.2"
      stroke="currentColor"
      strokeWidth="1.8"
    />

    {/* Composition Alignment Guides & Grid Lines */}
    <line x1="23" y1="32" x2="31" y2="32" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="23" y1="35.5" x2="28" y2="35.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.75" />

    {/* Creative Palette Color Drops */}
    <circle cx="38" cy="13" r="1.5" fill="currentColor" />
    <circle cx="41" cy="18" r="1.5" fill="currentColor" opacity="0.7" />
  </svg>
);

/**
 * 04. FLYER & LEAFLET DESIGN
 * Concept: Editorial print collateral, tri-fold brochure, crease dielines, crop marks.
 * Tri-fold layout in isometric accordion perspective with clean typography blocks.
 */
export const FlyerDesignIcon: React.FC<ServiceVisualIconProps> = ({
  size = 32,
  className = "text-[#ffbe1a]",
  title = "Flyer & Leaflet Design"
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={title}
  >
    {title && <title>{title}</title>}

    {/* Tri-Fold Leaflet Accordion Perimeter Path */}
    {/* Left Panel */}
    <path
      d="M7 12 L18 8 L18 36 L7 40 Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    {/* Center Panel */}
    <path
      d="M18 8 L30 11 L30 39 L18 36 Z"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinejoin="round"
      fill="#0f1118"
      fillOpacity="0.5"
    />
    {/* Right Panel (Folding inward) */}
    <path
      d="M30 11 L41 7 L41 35 L30 39 Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />

    {/* Vertical Crease Fold Lines */}
    <line x1="18" y1="8" x2="18" y2="36" stroke="currentColor" strokeWidth="1.8" strokeDasharray="2 1.5" />
    <line x1="30" y1="11" x2="30" y2="39" stroke="currentColor" strokeWidth="1.8" strokeDasharray="2 1.5" />

    {/* Center Panel Editorial Headline & Layout */}
    <line x1="21" y1="16" x2="27" y2="17.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="21" y1="21" x2="27" y2="22.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
    <line x1="21" y1="25" x2="26" y2="26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />

    {/* Center Image Placeholder Box */}
    <rect x="21" y="28" width="6" height="5" rx="0.8" stroke="currentColor" strokeWidth="1.3" opacity="0.75" />

    {/* Precision Print Registration Target Corner Tick */}
    <path d="M4 6 L4 9 M4 6 L7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M44 42 L44 39 M44 42 L41 42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/**
 * 05. PACKAGING DESIGN
 * Concept: 3D structural package, unrolled flap dieline tabs, crease dashes, luxury seal.
 * Isometric structural box with top flap fold dielines and brand badge.
 */
export const PackagingDesignIcon: React.FC<ServiceVisualIconProps> = ({
  size = 32,
  className = "text-[#ffbe1a]",
  title = "Packaging Design"
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={title}
  >
    {title && <title>{title}</title>}

    {/* 3D Isometric Package Box */}
    {/* Top Diamond Face */}
    <path
      d="M24 8 L39 16 L24 24 L9 16 Z"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinejoin="round"
      fill="#0f1118"
      fillOpacity="0.4"
    />

    {/* Left Vertical Face */}
    <path
      d="M9 16 L9 32 L24 40 L24 24 Z"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />

    {/* Right Vertical Face */}
    <path
      d="M39 16 L39 32 L24 40 L24 24 Z"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />

    {/* Dieline Folding Flap Tabs (Packaging Construction) */}
    {/* Top Right Flap Tab */}
    <path
      d="M39 16 L44 13 L36 8 L31 11"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      strokeDasharray="2 1.5"
      opacity="0.8"
    />
    {/* Top Left Flap Tab */}
    <path
      d="M9 16 L4 13 L12 8 L17 11"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      strokeDasharray="2 1.5"
      opacity="0.8"
    />

    {/* Luxury Brand Label Badge on Front Face */}
    <path
      d="M14 26 L19 23.5 L19 32 L14 34.5 Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
      opacity="0.9"
    />
    <circle cx="16.5" cy="28.5" r="1" fill="currentColor" />

    {/* Packaging Barcode / Spec Lines on Right Face */}
    <line x1="28" y1="28" x2="35" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
    <line x1="28" y1="32" x2="35" y2="28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
  </svg>
);

/**
 * 06. WEB DEVELOPMENT
 * Concept: Full-stack code architecture, component modules, syntax brackets, logic nodes.
 * Modern code tags encasing modular component tree blocks and responsive terminals.
 */
export const WebDevelopmentIcon: React.FC<ServiceVisualIconProps> = ({
  size = 32,
  className = "text-[#ffbe1a]",
  title = "Web Development"
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={title}
  >
    {title && <title>{title}</title>}

    {/* Modular Component Architecture Frame */}
    <rect
      x="6"
      y="8"
      width="36"
      height="32"
      rx="4"
      stroke="currentColor"
      strokeWidth="2"
    />

    {/* Terminal Header Bar */}
    <line x1="6" y1="16" x2="42" y2="16" stroke="currentColor" strokeWidth="1.8" />
    {/* Terminal Window Dots */}
    <circle cx="11" cy="12" r="1.2" fill="currentColor" />
    <circle cx="15" cy="12" r="1.2" fill="currentColor" />
    <circle cx="19" cy="12" r="1.2" fill="currentColor" />

    {/* Left Code Bracket < */}
    <path
      d="M18 21.5 L12.5 27 L18 32.5"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Right Code Bracket > */}
    <path
      d="M30 21.5 L35.5 27 L30 32.5"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Center Forward Slash / */}
    <line
      x1="26.5"
      y1="20"
      x2="21.5"
      y2="34"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    />

    {/* Full-Stack Architecture Logic Accent Nodes */}
    <circle cx="24" cy="12" r="1" fill="currentColor" opacity="0.6" />
    <path
      d="M24 37 L24 43 M18 43 L30 43"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * 07. WEBSITE DEVELOPMENT
 * Concept: Responsive multi-device web experience, browser window and mobile viewport.
 * High-fidelity browser viewport overlapping with an adaptive smartphone frame.
 */
export const WebsiteDevelopmentIcon: React.FC<ServiceVisualIconProps> = ({
  size = 32,
  className = "text-[#ffbe1a]",
  title = "Website Development"
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={title}
  >
    {title && <title>{title}</title>}

    {/* Primary Desktop Browser Viewport */}
    <rect
      x="5"
      y="8"
      width="34"
      height="26"
      rx="3"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line x1="5" y1="15" x2="39" y2="15" stroke="currentColor" strokeWidth="1.8" />
    {/* Browser dots */}
    <circle cx="9" cy="11.5" r="1.1" fill="currentColor" />
    <circle cx="12.5" cy="11.5" r="1.1" fill="currentColor" />
    <circle cx="16" cy="11.5" r="1.1" fill="currentColor" />

    {/* Desktop Wireframe Layout Content */}
    <line x1="9" y1="20" x2="20" y2="20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <rect x="9" y="24" width="6" height="5" rx="1" stroke="currentColor" strokeWidth="1.4" opacity="0.8" />
    <line x1="18" y1="24" x2="24" y2="24" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.8" />
    <line x1="18" y1="27.5" x2="23" y2="27.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.8" />

    {/* Overlapping Mobile Device Viewport (Foreground Right) */}
    <rect
      x="27"
      y="18"
      width="16"
      height="25"
      rx="3"
      stroke="currentColor"
      strokeWidth="2.2"
      fill="#0f1118"
    />
    {/* Mobile Screen Notch/Speaker */}
    <line x1="33" y1="21" x2="37" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    {/* Mobile Content Grid */}
    <rect x="30" y="24" width="10" height="6" rx="1" stroke="currentColor" strokeWidth="1.4" />
    <line x1="30" y1="33" x2="37" y2="33" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <line x1="30" y1="36" x2="35" y2="36" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.75" />
    {/* Mobile Home Bar Indicator */}
    <line x1="33" y1="40" x2="37" y2="40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/**
 * 08. SOCIAL MEDIA DESIGN
 * Concept: Multi-format visual content (1:1 feed square, 9:16 story frame), engagement heart, visual canvas.
 * Layered aspect-ratio frames with photo scenic vector graphics and love/engagement badge.
 */
export const SocialMediaDesignIcon: React.FC<ServiceVisualIconProps> = ({
  size = 32,
  className = "text-[#ffbe1a]",
  title = "Social Media Design"
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={title}
  >
    {title && <title>{title}</title>}

    {/* Background Vertical 9:16 Story/Reel Canvas Frame */}
    <rect
      x="23"
      y="6"
      width="19"
      height="31"
      rx="3"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeDasharray="3 2"
      opacity="0.45"
    />

    {/* Primary 1:1 Feed Post Container */}
    <rect
      x="6"
      y="11"
      width="28"
      height="28"
      rx="3.5"
      stroke="currentColor"
      strokeWidth="2.2"
      fill="#0f1118"
      fillOpacity="0.6"
    />

    {/* Visual Media Graphic (Sun & Mountains Composition) */}
    <circle cx="13" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="M9 32 L16 23 L22 30 L26 26 L31 32 Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />

    {/* Floating Engagement Heart Badge (Top Right of 1:1 post) */}
    <g transform="translate(26, 7)">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.8" fill="#0f1118" />
      <path
        d="M8 11.5 C8 11.5 5 9.5 5 7.5 C5 6.2 6 5.2 7.2 5.2 C7.9 5.2 8 5.6 8 5.6 C8 5.6 8.1 5.2 8.8 5.2 C10 5.2 11 6.2 11 7.5 C11 9.5 8 11.5 8 11.5 Z"
        fill="currentColor"
      />
    </g>

    {/* Carousel Pagination Dots */}
    <circle cx="16" cy="35" r="1" fill="currentColor" />
    <circle cx="20" cy="35" r="1.3" fill="currentColor" />
    <circle cx="24" cy="35" r="1" fill="currentColor" />
  </svg>
);

/**
 * 09. CONTENT POSTING
 * Concept: Editorial schedule, publishing queue, automated dispatch, verified post check.
 * Calendar schedule card with active time clock dial and ascending dispatch arrow.
 */
export const ContentPostingIcon: React.FC<ServiceVisualIconProps> = ({
  size = 32,
  className = "text-[#ffbe1a]",
  title = "Content Posting"
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={title}
  >
    {title && <title>{title}</title>}

    {/* Editorial Calendar Card Body */}
    <rect
      x="8"
      y="9"
      width="32"
      height="31"
      rx="3.5"
      stroke="currentColor"
      strokeWidth="2.2"
    />

    {/* Calendar Binder Rings */}
    <line x1="16" y1="5" x2="16" y2="11" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="32" y1="5" x2="32" y2="11" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />

    {/* Calendar Header Divider */}
    <line x1="8" y1="18" x2="40" y2="18" stroke="currentColor" strokeWidth="1.8" />

    {/* Schedule Grid Cells */}
    <rect x="13" y="23" width="5" height="4" rx="1" fill="currentColor" opacity="0.3" />
    <rect x="21.5" y="23" width="5" height="4" rx="1" fill="currentColor" opacity="0.3" />
    <rect x="30" y="23" width="5" height="4" rx="1" fill="currentColor" opacity="0.3" />
    <rect x="13" y="30" width="5" height="4" rx="1" fill="currentColor" opacity="0.3" />

    {/* Active Schedule Time Dispatch Badge (Bottom Right) */}
    <circle
      cx="31"
      cy="31"
      r="8"
      stroke="currentColor"
      strokeWidth="2"
      fill="#0f1118"
    />

    {/* Outbound Dispatch Launch Arrow */}
    <path
      d="M31 35 L31 27 M28 30 L31 27 L34 30"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Broadcast Signal Radiance Accents */}
    <path d="M38 12 C40 14 41 17 41 20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

/**
 * 10. CONTENT CREATION
 * Concept: Multimedia production, studio video camera, audio soundwaves, creative spark star.
 * Cinema video camera lens with sound frequency bars and inspiration spark.
 */
export const ContentCreationIcon: React.FC<ServiceVisualIconProps> = ({
  size = 32,
  className = "text-[#ffbe1a]",
  title = "Content Creation"
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={title}
  >
    {title && <title>{title}</title>}

    {/* Cinema Studio Camera Body */}
    <rect
      x="8"
      y="17"
      width="22"
      height="18"
      rx="3"
      stroke="currentColor"
      strokeWidth="2.2"
    />

    {/* Dual Film Spools / Top Audio Reels */}
    <circle cx="14" cy="11" r="4.5" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="14" cy="11" r="1.5" fill="currentColor" />
    <circle cx="24" cy="11" r="4.5" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="24" cy="11" r="1.5" fill="currentColor" />

    {/* Forward Projection Lens Viewfinder */}
    <path
      d="M30 22 L39 16 L39 36 L30 30 Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
      fill="#0f1118"
      fillOpacity="0.4"
    />

    {/* Lens Core Aperture concentric line */}
    <circle cx="19" cy="26" r="4.5" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="19" cy="26" r="1.5" fill="currentColor" />

    {/* Dynamic Soundwave Frequency Bars (Creative Audio/Video Sync) */}
    <line x1="8" y1="41" x2="8" y2="39" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="12" y1="42" x2="12" y2="38" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="16" y1="43" x2="16" y2="37" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="20" y1="42" x2="20" y2="38" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="24" y1="41" x2="24" y2="39" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />

    {/* Four-Point Creative Sparkle Star */}
    <path
      d="M39 6 L40 10 L44 11 L40 12 L39 16 L38 12 L34 11 L38 10 Z"
      fill="currentColor"
    />
  </svg>
);

/**
 * 11. DIGITAL MARKETING
 * Concept: Growth amplification, bullhorn / megaphone, ascending conversion chart, ROI arrow.
 * High-impact broadcast megaphone emitting growth waves paired with an ascending growth trend.
 */
export const DigitalMarketingIcon: React.FC<ServiceVisualIconProps> = ({
  size = 32,
  className = "text-[#ffbe1a]",
  title = "Digital Marketing"
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={title}
  >
    {title && <title>{title}</title>}

    {/* Broadcast Megaphone Horn */}
    <path
      d="M10 20 L26 13 L26 33 L10 26 Z"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    {/* Megaphone Mouthpiece Terminal */}
    <rect x="6" y="19" width="4" height="8" rx="1.2" stroke="currentColor" strokeWidth="2" />
    {/* Megaphone Grip Handle */}
    <path
      d="M14 26 L14 35 C14 36.5 15.5 37.5 17 37.5 L19 37.5 C20.5 37.5 21.5 36.5 21.5 35 L21.5 24"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    />

    {/* Audio Broadcast Acoustic Wave Arcs */}
    <path
      d="M31 17 C34 19.5 35 22 35 23 C35 24 34 26.5 31 29"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M36 12 C41 16 42 20 42 23 C42 26 41 30 36 34"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    />

    {/* Exponential Market Growth Trajectory Vector Arrow */}
    <path
      d="M26 38 L32 32 L37 35 L43 28"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M39 28 H43 V32"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="26" cy="38" r="1.5" fill="currentColor" />
  </svg>
);

/**
 * 12. SOCIAL MEDIA MANAGEMENT
 * Concept: Community orchestration, connected user network nodes, engagement chat dialogues.
 * Three interconnected network profile nodes with active conversation bubbles.
 */
export const SocialMediaManagementIcon: React.FC<ServiceVisualIconProps> = ({
  size = 32,
  className = "text-[#ffbe1a]",
  title = "Social Media Management"
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={title}
  >
    {title && <title>{title}</title>}

    {/* Interconnected Community User Nodes */}
    {/* Center High-Level Account Node */}
    <circle cx="24" cy="13" r="4.5" stroke="currentColor" strokeWidth="2" />
    <path
      d="M17 25 C17 21.5 20 20 24 20 C28 20 31 21.5 31 25"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Left Community Member Node */}
    <circle cx="11" cy="24" r="3.5" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="M5 34 C5 31.5 7.5 30 11 30 C12.5 30 13.8 30.3 14.8 30.8"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />

    {/* Right Community Member Node */}
    <circle cx="37" cy="24" r="3.5" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="M43 34 C43 31.5 40.5 30 37 30 C35.5 30 34.2 30.3 33.2 30.8"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />

    {/* Interconnecting Social Network Topology Lines */}
    <line x1="14" y1="21" x2="20" y2="16" stroke="currentColor" strokeWidth="1.4" strokeDasharray="2 1.5" opacity="0.6" />
    <line x1="34" y1="21" x2="28" y2="16" stroke="currentColor" strokeWidth="1.4" strokeDasharray="2 1.5" opacity="0.6" />
    <line x1="16" y1="32" x2="32" y2="32" stroke="currentColor" strokeWidth="1.4" strokeDasharray="2 1.5" opacity="0.6" />

    {/* Overlapping Conversation Speech Bubbles */}
    <g transform="translate(18, 30)">
      <rect x="0" y="0" width="12" height="9" rx="2.5" stroke="currentColor" strokeWidth="1.8" fill="#0f1118" />
      <path d="M4 9 L4 12 L7 9 Z" fill="currentColor" />
      {/* Activity Dots inside bubble */}
      <circle cx="3.5" cy="4.5" r="0.9" fill="currentColor" />
      <circle cx="6" cy="4.5" r="0.9" fill="currentColor" />
      <circle cx="8.5" cy="4.5" r="0.9" fill="currentColor" />
    </g>
  </svg>
);

/**
 * 13. ADVERTISING CREATIVES
 * Concept: High-converting display ads, targeted consumer bullseye, click vector arrow, ROI spark.
 * Display ad billboard frame centering a precision target bullseye pierced by a click arrow.
 */
export const AdvertisingCreativesIcon: React.FC<ServiceVisualIconProps> = ({
  size = 32,
  className = "text-[#ffbe1a]",
  title = "Advertising Creatives"
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={title}
  >
    {title && <title>{title}</title>}

    {/* Display Billboard Ad Container */}
    <rect
      x="7"
      y="8"
      width="34"
      height="32"
      rx="3.5"
      stroke="currentColor"
      strokeWidth="2"
    />

    {/* Ad Creative Sponsor Header Tag */}
    <rect x="11" y="12" width="7" height="3.5" rx="1" fill="currentColor" opacity="0.8" />
    <line x1="21" y1="13.8" x2="31" y2="13.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />

    {/* Precision Target Bullseye */}
    <circle cx="24" cy="27" r="11" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="24" cy="27" r="6.5" stroke="currentColor" strokeWidth="1.6" strokeDasharray="3 2" opacity="0.8" />
    <circle cx="24" cy="27" r="2.5" fill="currentColor" />

    {/* High-Velocity Click-Through Conversion Arrow */}
    <path
      d="M38 13 L26 25"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <path
      d="M38 13 L31 14 M38 13 L37 20"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Conversion Sparkle Burst */}
    <path
      d="M12 24 L13 26 L15 27 L13 28 L12 30 L11 28 L9 27 L11 26 Z"
      fill="currentColor"
      opacity="0.8"
    />
  </svg>
);

/**
 * 14. AI VISUALS CONTENT
 * Concept: Generative AI, neural processor core, synthetic prompt diffusion, generative sparkles.
 * Stylized neural brain processor core with expanding diffusion rays and multi-point AI sparkles.
 */
export const AiVisualsContentIcon: React.FC<ServiceVisualIconProps> = ({
  size = 32,
  className = "text-[#ffbe1a]",
  title = "AI Visuals Content"
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={title}
  >
    {title && <title>{title}</title>}

    {/* Algorithmic Neural Cortex (Left Hemisphere) */}
    <path
      d="M19 13 C14 13 10 17 10 22 C10 24 11 26 12 27.5 C10.5 29 10 31 10 33 C10 37 13 40 17 40 C18 40 19 39.5 19 39"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Algorithmic Neural Cortex (Right Hemisphere) */}
    <path
      d="M29 13 C34 13 38 17 38 22 C38 24 37 26 36 27.5 C37.5 29 38 31 38 33 C38 37 35 40 31 40 C30 40 29 39.5 29 39"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Central Neural Synapse Highway */}
    <line
      x1="24"
      y1="11"
      x2="24"
      y2="39"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeDasharray="3 2"
      opacity="0.8"
    />

    {/* Neural Synapse Circuit Nodes */}
    <circle cx="16" cy="19" r="2.2" fill="currentColor" />
    <circle cx="32" cy="19" r="2.2" fill="currentColor" />
    <circle cx="15" cy="34" r="2.2" fill="currentColor" />
    <circle cx="33" cy="34" r="2.2" fill="currentColor" />

    {/* Inter-Synapse Data Vector Bus */}
    <line x1="16" y1="19" x2="24" y2="25" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    <line x1="32" y1="19" x2="24" y2="25" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    <line x1="15" y1="34" x2="24" y2="27" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    <line x1="33" y1="34" x2="24" y2="27" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />

    {/* Prominent Generative AI Sparkle (Top Center Core) */}
    <path
      d="M24 4 L25.5 8.5 L30 10 L25.5 11.5 L24 16 L22.5 11.5 L18 10 L22.5 8.5 Z"
      fill="currentColor"
    />

    {/* Accent Generative Sparkle (Bottom Right) */}
    <path
      d="M40 28 L41 31 L44 32 L41 33 L40 36 L39 33 L36 32 L39 31 Z"
      fill="currentColor"
      opacity="0.85"
    />
  </svg>
);

/**
 * Unified ServiceVisualIcon Resolver
 * Maps any service slug, id, or iconKey to its corresponding bespoke SVG icon.
 */
export const ServiceVisualIcon: React.FC<{
  name?: string;
  iconKey?: string;
  slug?: string;
  size?: number;
  className?: string;
  title?: string;
}> = ({
  name = '',
  iconKey = '',
  slug = '',
  size = 32,
  className = 'text-[#ffbe1a]',
  title
}) => {
  const rawKey = (iconKey || name || slug || '').toLowerCase().trim();
  const normalizedKey = rawKey.replace(/[_\s]+/g, '-');

  // 1. Brand Identity
  if (normalizedKey.includes('brand') || normalizedKey.includes('identity')) {
    return <BrandIdentityIcon size={size} className={className} title={title || "Brand Identity"} />;
  }

  // 2. Logo Design
  if (normalizedKey.includes('logo')) {
    return <LogoDesignIcon size={size} className={className} title={title || "Logo Design"} />;
  }

  // 3. Graphic Design
  if (normalizedKey.includes('graphic')) {
    return <GraphicDesignIcon size={size} className={className} title={title || "Graphic Design"} />;
  }

  // 4. Flyer & Leaflet Design
  if (normalizedKey.includes('flyer') || normalizedKey.includes('leaflet')) {
    return <FlyerDesignIcon size={size} className={className} title={title || "Flyer & Leaflet Design"} />;
  }

  // 5. Packaging Design
  if (normalizedKey.includes('packaging') || normalizedKey.includes('package')) {
    return <PackagingDesignIcon size={size} className={className} title={title || "Packaging Design"} />;
  }

  // 6. Web Development (Full-stack code)
  if (normalizedKey === 'web-development' || normalizedKey === 'web-dev' || normalizedKey === 'develop') {
    return <WebDevelopmentIcon size={size} className={className} title={title || "Web Development"} />;
  }

  // 7. Website Development (Responsive multi-device viewport)
  if (normalizedKey.includes('website') || normalizedKey.includes('web-design')) {
    return <WebsiteDevelopmentIcon size={size} className={className} title={title || "Website Development"} />;
  }

  // 8. Social Media Design
  if (normalizedKey.includes('social-media-design') || normalizedKey === 'social-design') {
    return <SocialMediaDesignIcon size={size} className={className} title={title || "Social Media Design"} />;
  }

  // 9. Content Posting
  if (normalizedKey.includes('posting') || normalizedKey.includes('schedule')) {
    return <ContentPostingIcon size={size} className={className} title={title || "Content Posting"} />;
  }

  // 10. Content Creation
  if (normalizedKey.includes('content-creation') || normalizedKey === 'creation') {
    return <ContentCreationIcon size={size} className={className} title={title || "Content Creation"} />;
  }

  // 11. Digital Marketing
  if (normalizedKey.includes('marketing') || normalizedKey.includes('digital-market') || normalizedKey.includes('grow')) {
    return <DigitalMarketingIcon size={size} className={className} title={title || "Digital Marketing"} />;
  }

  // 12. Social Media Management
  if (normalizedKey.includes('management') || (normalizedKey.includes('social') && !normalizedKey.includes('design'))) {
    return <SocialMediaManagementIcon size={size} className={className} title={title || "Social Media Management"} />;
  }

  // 13. Advertising Creatives
  if (normalizedKey.includes('ad') || normalizedKey.includes('advertising') || normalizedKey.includes('creative')) {
    return <AdvertisingCreativesIcon size={size} className={className} title={title || "Advertising Creatives"} />;
  }

  // 14. AI Visuals Content
  if (normalizedKey.includes('ai') || normalizedKey.includes('neural') || normalizedKey.includes('visual')) {
    return <AiVisualsContentIcon size={size} className={className} title={title || "AI Visuals Content"} />;
  }

  // Fallback: Website Development icon as elegant default
  return <WebsiteDevelopmentIcon size={size} className={className} title={title || "Creative Service"} />;
};
