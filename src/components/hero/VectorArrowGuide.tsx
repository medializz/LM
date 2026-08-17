import React from 'react';

interface VectorArrowGuideProps {
  className?: string;
}

export const VectorArrowGuide: React.FC<VectorArrowGuideProps> = ({ className = '' }) => {
  return (
    <div 
      id="hero-vector-arrow"
      className={`relative pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <svg 
        viewBox="0 0 240 180" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_15px_rgba(255,190,26,0.35)]"
      >
        <defs>
          <linearGradient id="vectorArrowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="40%" stopColor="#ffbe1a" />
            <stop offset="100%" stopColor="#ffd866" />
          </linearGradient>
          <marker 
            id="arrowhead-gold" 
            markerWidth="10" 
            markerHeight="10" 
            refX="6" 
            refY="3.5" 
            orient="auto"
          >
            <polygon points="0 0, 7 3.5, 0 7, 2 3.5" fill="#ffd866" />
          </marker>
        </defs>

        {/* Construction Guide Tangent Lines */}
        <line x1="30" y1="140" x2="70" y2="70" stroke="#a855f7" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.6" />
        <line x1="200" y1="50" x2="140" y2="40" stroke="#ffbe1a" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.6" />

        {/* Main Smooth Bezier Vector Curve */}
        <path 
          d="M30 140 C70 60, 130 35, 205 48" 
          stroke="url(#vectorArrowGrad)" 
          strokeWidth="3.5" 
          strokeLinecap="round"
          markerEnd="url(#arrowhead-gold)"
        />

        {/* Vector Start Node */}
        <circle cx="30" cy="140" r="4.5" fill="#090a0f" stroke="#a855f7" strokeWidth="2" />
        <rect x="28" y="138" width="4" height="4" fill="#a855f7" />

        {/* Bezier Control Handle Point 1 */}
        <circle cx="70" cy="70" r="3" fill="#a855f7" />
        
        {/* Bezier Control Handle Point 2 */}
        <circle cx="140" cy="40" r="3" fill="#ffbe1a" />

        {/* Midpoint Anchor Node with Coordinate Pill */}
        <g transform="translate(110, 48)">
          <circle cx="0" cy="0" r="4" fill="#090a0f" stroke="#ffbe1a" strokeWidth="2" />
          <rect x="-2" y="-2" width="4" height="4" fill="#ffbe1a" />
        </g>
      </svg>
    </div>
  );
};
