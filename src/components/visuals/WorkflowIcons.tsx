import React from 'react';

export interface WorkflowIconProps {
  size?: number;
  className?: string;
  title?: string;
}

/**
 * 01. DISCOVERY & RESEARCH
 * Concept: Research → Investigation → Data → Insights
 * Combines an analytical magnifying lens with data growth bars,
 * a trending milestone node, and an insight discovery spark.
 */
export const DiscoveryIcon: React.FC<WorkflowIconProps> = ({
  size = 28,
  className = "text-white",
  title = "Discovery & Research"
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
    
    {/* Main Magnifying Lens */}
    <circle
      cx="21"
      cy="20"
      r="13"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    
    {/* Sturdy Angled Handle */}
    <path
      d="M30.5 29.5 L40.5 39.5"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
    />
    {/* Handle Grip Terminal Accent */}
    <circle cx="41.5" cy="40.5" r="1.2" fill="currentColor" />

    {/* Analytical Baseline inside lens */}
    <line
      x1="12"
      y1="26"
      x2="28"
      y2="26"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      opacity="0.8"
    />

    {/* Research Data Bars (Ascending Growth Trend) */}
    <line
      x1="14.5"
      y1="26"
      x2="14.5"
      y2="21.5"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <line
      x1="19"
      y1="26"
      x2="19"
      y2="17.5"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <line
      x1="23.5"
      y1="26"
      x2="23.5"
      y2="13.5"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    />

    {/* Trend Line connecting data peaks */}
    <path
      d="M14.5 21.5 L19 17.5 L23.5 13.5 L27 15"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Peak Milestone Node */}
    <circle cx="23.5" cy="13.5" r="1.6" fill="currentColor" />

    {/* Insight Discovery Sparkle at top right */}
    <path
      d="M36 6 L36 14 M32 10 L40 10"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <circle cx="36" cy="10" r="1" fill="currentColor" />
  </svg>
);

/**
 * 02. STRATEGY & CONCEPTUALIZATION
 * Concept: Planning → Direction → Strategy → Framework
 * Combines strategic crosshair alignment circles with a structured roadmap,
 * blueprint coordinate nodes, and a directional vector arrow.
 */
export const StrategyIcon: React.FC<WorkflowIconProps> = ({
  size = 28,
  className = "text-white",
  title = "Strategy & Conceptualization"
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

    {/* Outer Strategic Framework Target (Segmented Blueprint Circle) */}
    <circle
      cx="24"
      cy="24"
      r="17"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeDasharray="4 3"
      opacity="0.6"
    />

    {/* Inner Strategic Ring */}
    <circle
      cx="24"
      cy="24"
      r="10"
      stroke="currentColor"
      strokeWidth="2.2"
    />

    {/* Core Strategic Objective Bullseye */}
    <circle
      cx="24"
      cy="24"
      r="3"
      stroke="currentColor"
      strokeWidth="2"
      fill="currentColor"
      fillOpacity="0.2"
    />

    {/* Coordinate Alignment Guides (Crosshair Ticks) */}
    <line x1="24" y1="3" x2="24" y2="8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="24" y1="40" x2="24" y2="45" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="3" y1="24" x2="8" y2="24" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="40" y1="24" x2="45" y2="24" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />

    {/* Strategic Roadmap Trajectory Path */}
    <path
      d="M10 37 L17 30 L24 24 L33 15"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Milestone Nodes along Roadmap */}
    <circle cx="10" cy="37" r="2.2" stroke="currentColor" strokeWidth="2" fill="#120f1e" />
    <circle cx="17" cy="30" r="1.8" fill="currentColor" />

    {/* Directional Goal Vector Arrowhead */}
    <path
      d="M33 15 L40 8"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <path
      d="M33 8 L40 8 L40 15"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * 03. DESIGN & PROTOTYPING
 * Concept: Design → Visual Identity → UI → Prototype
 * Combines an interactive UI artboard frame with browser/mobile header dots,
 * wireframe layout blocks, a Bezier curve with anchor points, and a vector pen tool.
 */
export const DesignIcon: React.FC<WorkflowIconProps> = ({
  size = 28,
  className = "text-white",
  title = "Design & Prototyping"
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

    {/* Layered Background Artboard (Depth & Dimension) */}
    <rect
      x="14"
      y="6"
      width="27"
      height="31"
      rx="3"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeDasharray="3 3"
      opacity="0.45"
    />

    {/* Foreground Interactive Prototype Canvas */}
    <rect
      x="7"
      y="11"
      width="27"
      height="31"
      rx="3"
      stroke="currentColor"
      strokeWidth="2.2"
    />

    {/* Browser/Canvas Header Bar */}
    <line
      x1="7"
      y1="18"
      x2="34"
      y2="18"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    {/* UI Dots */}
    <circle cx="11.5" cy="14.5" r="1.2" fill="currentColor" />
    <circle cx="15.5" cy="14.5" r="1.2" fill="currentColor" />
    <circle cx="19.5" cy="14.5" r="1.2" fill="currentColor" />

    {/* Internal Wireframe Mockup Elements */}
    <rect
      x="11"
      y="22"
      width="8"
      height="7"
      rx="1.5"
      stroke="currentColor"
      strokeWidth="1.5"
      opacity="0.75"
    />
    <line
      x1="22"
      y1="23.5"
      x2="30"
      y2="23.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      opacity="0.75"
    />
    <line
      x1="22"
      y1="27.5"
      x2="27"
      y2="27.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      opacity="0.75"
    />

    {/* Bezier Vector Curve across canvas */}
    <path
      d="M11 36 C18 31 25 32 30 36"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />

    {/* Bezier Control Tangent Line */}
    <line
      x1="18"
      y1="34"
      x2="32"
      y2="30"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeDasharray="2 2"
      opacity="0.7"
    />
    {/* Square Bezier Anchor Handles */}
    <rect x="16.5" y="32.5" width="3" height="3" fill="currentColor" />
    <rect x="30.5" y="28.5" width="3" height="3" fill="currentColor" />

    {/* Vector Pen Tool Nib at Active Point */}
    <g transform="rotate(45 35 24)">
      <path
        d="M35 15 L40 25 L36 30 L34 30 L30 25 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="#120f1e"
      />
      <line x1="35" y1="21" x2="35" y2="30" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="35" cy="21" r="1" fill="currentColor" />
    </g>
  </svg>
);

/**
 * 04. ENGINEERING & PRODUCTION
 * Concept: Development → Engineering → Production → Technical Execution
 * Combines an 8-tooth mechanical engineering gear with embedded < / > developer code brackets,
 * representing modern React architecture, digital production, and technical precision.
 */
export const EngineeringIcon: React.FC<WorkflowIconProps> = ({
  size = 28,
  className = "text-white",
  title = "Engineering & Production"
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

    {/* Precision Mechanical Gear Cog (Outer Engineering Framework) */}
    {/* 8 Tooth Perimeter Path */}
    <path
      d="
        M 22 4 L 26 4 L 26.5 8.2 C 28 8.7 29.4 9.4 30.6 10.4 L 34.4 8.5 L 37.2 11.3 L 35.3 15.1 C 36.3 16.3 37 17.7 37.5 19.2 L 41.7 19.7 L 41.7 23.7 L 41.7 24.3 L 41.7 28.3 L 37.5 28.8 C 37 30.3 36.3 31.7 35.3 32.9 L 37.2 36.7 L 34.4 39.5 L 30.6 37.6 C 29.4 38.6 28 39.3 26.5 39.8 L 26 44 L 22 44 L 21.5 39.8 C 20 39.3 18.6 38.6 17.4 37.6 L 13.6 39.5 L 10.8 36.7 L 12.7 32.9 C 11.7 31.7 11 30.3 10.5 28.8 L 6.3 28.3 L 6.3 24.3 L 6.3 23.7 L 6.3 19.7 L 10.5 19.2 C 11 17.7 11.7 16.3 12.7 15.1 L 10.8 11.3 L 13.6 8.5 L 17.4 10.4 C 18.6 9.4 20 8.7 21.5 8.2 Z
      "
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />

    {/* Inner Gear Core Housing */}
    <circle
      cx="24"
      cy="24"
      r="12.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeDasharray="3 2"
      opacity="0.5"
    />

    {/* Left Code Bracket < */}
    <path
      d="M19 18.5 L13.5 24 L19 29.5"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Right Code Bracket > */}
    <path
      d="M29 18.5 L34.5 24 L29 29.5"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Center Forward Slash / */}
    <line
      x1="26"
      y1="17"
      x2="22"
      y2="31"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
    />

    {/* Subtle Logic Core Accents */}
    <circle cx="24" cy="11" r="1" fill="currentColor" />
    <circle cx="24" cy="37" r="1" fill="currentColor" />
  </svg>
);

/**
 * 05. REFINEMENT & TESTING
 * Concept: Testing → QA → Proofing → Cross-device Validation
 * Combines a QA audit clipboard checklist, structured proofing items with verification checks,
 * and an inspection lens performing final validation.
 */
export const TestingIcon: React.FC<WorkflowIconProps> = ({
  size = 28,
  className = "text-white",
  title = "Refinement & Testing"
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

    {/* QA Audit Document Frame */}
    <rect
      x="9"
      y="8"
      width="30"
      height="35"
      rx="3"
      stroke="currentColor"
      strokeWidth="2.2"
    />

    {/* Clipboard Top Binder Clip */}
    <path
      d="M19 8 V5.5 C19 4.7 19.7 4 20.5 4 H27.5 C28.3 4 29 4.7 29 5.5 V8"
      stroke="currentColor"
      strokeWidth="2.2"
    />
    <rect
      x="17"
      y="7"
      width="14"
      height="4"
      rx="1.5"
      stroke="currentColor"
      strokeWidth="2"
      fill="#120f1e"
    />

    {/* QA Check item 1 (Passed verification) */}
    <path
      d="M14 17.5 L16.5 20 L21 15"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="24.5"
      y1="17.5"
      x2="33"
      y2="17.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* QA Check item 2 (Passed verification) */}
    <path
      d="M14 25.5 L16.5 28 L21 23"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="24.5"
      y1="25.5"
      x2="31"
      y2="25.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Item 3 wireframe line */}
    <line
      x1="14"
      y1="34"
      x2="19"
      y2="34"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* QA Inspection Lens validating bottom item */}
    <circle
      cx="29"
      cy="34"
      r="6.5"
      stroke="currentColor"
      strokeWidth="2.2"
      fill="#120f1e"
    />
    {/* Lens handle */}
    <line
      x1="34"
      y1="39"
      x2="41"
      y2="45"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
    />
    {/* Validated checkmark inside inspection lens */}
    <path
      d="M26.5 34 L28.2 35.8 L31.5 32"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * 06. LAUNCH & DEPLOYMENT
 * Concept: Deployment → Launch → Global Delivery → Live Website
 * Combines an aerodynamic ascending rocket ship launching upward from
 * a curved global edge network horizon with connected digital nodes and exhaust thrust.
 */
export const LaunchIcon: React.FC<WorkflowIconProps> = ({
  size = 28,
  className = "text-white",
  title = "Launch & Deployment"
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

    {/* Global Edge Network Planetary Horizon */}
    <path
      d="M5 43 C7 31 17 22 30 20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Global Latitude / Edge Network Arc */}
    <path
      d="M5 35 C11 27 18 24 26 24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeDasharray="3 2.5"
      opacity="0.6"
    />

    {/* Global Edge Delivery Nodes */}
    <circle cx="8" cy="40" r="1.8" fill="currentColor" />
    <circle cx="15" cy="30" r="1.8" fill="currentColor" />
    <circle cx="26" cy="22" r="1.8" fill="currentColor" />
    {/* Node connection lines */}
    <line x1="8" y1="40" x2="15" y2="30" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
    <line x1="15" y1="30" x2="26" y2="22" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />

    {/* Thrust Exhaust Smoke Trails */}
    <line
      x1="22"
      y1="28"
      x2="15"
      y2="35"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <line
      x1="25"
      y1="31"
      x2="19"
      y2="37"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <line
      x1="19"
      y1="25"
      x2="14"
      y2="30"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />

    {/* Aerodynamic Ascending Rocket Fuselage */}
    <path
      d="M41 7 C41 7 32.5 10 27 16 C23.5 19.8 21.5 24 21 27 L27 27 C30 26.5 34.2 24.5 38 21 C44 15.5 41 7 41 7 Z"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinejoin="round"
      fill="#120f1e"
    />

    {/* Rocket Porthole Viewport */}
    <circle
      cx="33"
      cy="15"
      r="2.2"
      stroke="currentColor"
      strokeWidth="1.8"
      fill="currentColor"
      fillOpacity="0.25"
    />

    {/* Left Rocket Wing Fin */}
    <path
      d="M25 21 L19 22 L22 26 Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />

    {/* Right Rocket Wing Fin */}
    <path
      d="M33 13 L34 7 L38 11 Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />

    {/* Atmosphere Live Launch Stars */}
    <circle cx="41" cy="27" r="1.2" fill="currentColor" />
    <circle cx="28" cy="8" r="1.2" fill="currentColor" />
    <path
      d="M11 11 L12 8 L13 11 L16 12 L13 13 L12 16 L11 13 L8 12 Z"
      fill="currentColor"
      opacity="0.85"
    />
  </svg>
);

/**
 * Unified WorkflowIcon dispatcher:
 * Resolves by stepNumber ("01", "02", "1", "2") or name/id/iconKey ("discovery", "strategy", etc.)
 */
export const WorkflowIcon: React.FC<{
  name?: string;
  stepNumber?: string;
  id?: string;
  size?: number;
  className?: string;
}> = ({ name = '', stepNumber = '', id = '', size = 28, className = 'text-purple-400 group-hover:text-[#ffbe1a] transition-colors duration-300' }) => {
  const normalizedKey = (name || id || '').toLowerCase();
  const normalizedNum = String(stepNumber).replace(/^0+/, '');

  // Step 1: Discovery & Research
  if (normalizedNum === '1' || normalizedKey.includes('discovery') || normalizedKey.includes('research') || normalizedKey === 'step-1') {
    return <DiscoveryIcon size={size} className={className} />;
  }

  // Step 2: Strategy & Conceptualization
  if (normalizedNum === '2' || normalizedKey.includes('strategy') || normalizedKey.includes('concept') || normalizedKey === 'step-2') {
    return <StrategyIcon size={size} className={className} />;
  }

  // Step 3: Design & Prototyping
  if (normalizedNum === '3' || normalizedKey.includes('design') || normalizedKey.includes('proto') || normalizedKey === 'step-3') {
    return <DesignIcon size={size} className={className} />;
  }

  // Step 4: Engineering & Production
  if (normalizedNum === '4' || normalizedKey.includes('engineering') || normalizedKey.includes('production') || normalizedKey.includes('development') || normalizedKey === 'step-4') {
    return <EngineeringIcon size={size} className={className} />;
  }

  // Step 5: Refinement & Testing
  if (normalizedNum === '5' || normalizedKey.includes('refine') || normalizedKey.includes('test') || normalizedKey.includes('qa') || normalizedKey === 'step-5') {
    return <TestingIcon size={size} className={className} />;
  }

  // Step 6: Launch & Deployment
  if (normalizedNum === '6' || normalizedKey.includes('launch') || normalizedKey.includes('deploy') || normalizedKey === 'step-6') {
    return <LaunchIcon size={size} className={className} />;
  }

  // Fallback to Discovery if unknown
  return <DiscoveryIcon size={size} className={className} />;
};
