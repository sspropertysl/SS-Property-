import React from 'react';

interface SSLogoProps {
  variant?: 'mark' | 'full' | 'badge';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const SSLogo: React.FC<SSLogoProps> = ({
  variant = 'mark',
  className = '',
  size = 'md'
}) => {
  // Dimension presets
  const sizeMap = {
    sm: { mark: 'h-8 w-8', full: 'h-10', badge: 'h-16 w-16' },
    md: { mark: 'h-10 w-10', full: 'h-12', badge: 'h-24 w-24' },
    lg: { mark: 'h-14 w-14', full: 'h-16', badge: 'h-36 w-36' },
    xl: { mark: 'h-20 w-20', full: 'h-24', badge: 'h-52 w-52' },
  };

  const currentSize = sizeMap[size];

  // Pure Vector Interlocking Monogram (exact to the user's official logo)
  const MonogramSVG = ({ className: svgClass = 'h-full w-full' }) => (
    <svg 
      viewBox="0 0 160 170" 
      className={svgClass} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background Left 'S' in warm sand cream */}
      <text
        x="24"
        y="126"
        fontFamily="Cinzel, Georgia, serif"
        fontSize="130"
        fontWeight="700"
        fill="#deb68e"
        opacity="0.95"
      >
        S
      </text>

      {/* Foreground Right 'S' with dark teal stroke & warm sand fill */}
      <text
        x="66"
        y="146"
        fontFamily="Cinzel, Georgia, serif"
        fontSize="130"
        fontWeight="700"
        fill="#deb68e"
        stroke="#094752"
        strokeWidth="6"
        strokeLinejoin="round"
        paintOrder="stroke fill"
      >
        S
      </text>
    </svg>
  );

  if (variant === 'mark') {
    return (
      <div className={`relative flex items-center justify-center shrink-0 rounded-xl bg-[#0a6875] p-1.5 shadow-md shadow-[#0a6875]/25 border border-[#0d7d8c]/30 ${currentSize.mark} ${className}`}>
        <MonogramSVG />
      </div>
    );
  }

  if (variant === 'badge') {
    return (
      <div className={`relative flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-[#0a6875] p-5 shadow-xl border border-[#0d7d8c]/40 text-center ${currentSize.badge} ${className}`}>
        <div className="w-2/3 aspect-square mb-2">
          <MonogramSVG />
        </div>
        <span className="font-sans font-bold text-white text-base tracking-wide" style={{ color: '#deb68e' }}>
          SS Property
        </span>
        <span className="text-[9px] font-medium tracking-tight mt-0.5 leading-tight" style={{ color: '#e5c49e' }}>
          Your Trusted Partner in Property Investment
        </span>
      </div>
    );
  }

  // Full horizontal lockup (Brand mark + Typography)
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <div className={`relative flex items-center justify-center shrink-0 rounded-xl bg-[#0a6875] p-1.5 shadow-md shadow-[#0a6875]/25 border border-[#0d7d8c]/30 ${currentSize.mark}`}>
        <MonogramSVG />
      </div>
      <div className="flex flex-col">
        <span className="font-sans font-bold tracking-tight text-lg text-white leading-tight" style={{ color: '#ffffff' }}>
          SS <span style={{ color: '#deb68e' }}>Property</span>
        </span>
        <span className="text-[10px] uppercase font-medium tracking-wider text-slate-300" style={{ color: '#deb68e' }}>
          Your Trusted Partner in Property Investment
        </span>
      </div>
    </div>
  );
};
