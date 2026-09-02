import React from 'react';

interface LogoProps {
  variant?: 'full' | 'compact' | 'light' | 'white';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  className = '',
  size = 'md'
}) => {
  const isWhite = variant === 'white' || variant === 'light';

  // Size scalers
  const sizeClasses = {
    sm: 'h-9',
    md: 'h-12',
    lg: 'h-16 md:h-20'
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <div className="relative flex items-center">
        {/* SVG Recreation of Metro Cleaners & Renovators Brand Icon & Text */}
        <svg
          viewBox="0 0 420 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${sizeClasses[size]} w-auto transition-transform duration-300 hover:scale-[1.02]`}
          aria-label="Metro Cleaners & Renovators Ltd Logo"
        >
          <defs>
            <linearGradient id="swirlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0EA5E9" />
              <stop offset="50%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#84CC16" />
            </linearGradient>
            <linearGradient id="swirlGradInner" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="60%" stopColor="#22C55E" />
              <stop offset="100%" stopColor="#15803D" />
            </linearGradient>
            <linearGradient id="blueGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0047BA" />
              <stop offset="100%" stopColor="#00358E" />
            </linearGradient>
          </defs>

          {/* Wordmark "metro" */}
          <g fill={isWhite ? '#FFFFFF' : 'url(#blueGlow)'}>
            {/* m */}
            <path
              d="M 28 85 V 36 C 28 32 30 30 35 30 H 42 C 46 30 48 32 48 36 V 43 C 52 34 60 29 70 29 C 78 29 84 33 87 40 C 92 33 100 29 110 29 C 122 29 130 37 130 50 V 85 C 130 89 128 91 123 91 H 115 C 111 91 109 89 109 85 V 53 C 109 46 105 42 99 42 C 92 42 88 47 88 54 V 85 C 88 89 86 91 81 91 H 73 C 69 91 67 89 67 85 V 53 C 67 46 63 42 57 42 C 50 42 47 47 47 54 V 85 C 47 89 45 91 40 91 H 33 C 29 91 28 89 28 85 Z"
            />
            {/* e */}
            <path
              d="M 140 60 C 140 42 153 29 171 29 C 188 29 200 42 200 60 C 200 63 199 65 196 65 H 159 C 160 74 166 79 174 79 C 180 79 185 76 188 71 C 190 68 193 68 196 69 L 200 73 C 202 75 201 78 198 81 C 192 88 184 92 173 92 C 154 92 140 79 140 60 Z M 171 41 C 164 41 160 46 159 54 H 182 C 181 46 177 41 171 41 Z"
            />
            {/* t */}
            <path
              d="M 215 85 V 43 H 207 C 203 43 201 41 201 37 V 33 C 201 29 203 27 207 27 H 215 V 14 C 215 10 217 8 221 8 H 229 C 233 8 235 10 235 14 V 27 H 249 C 253 27 255 29 255 33 V 37 C 255 41 253 43 249 43 H 235 V 82 C 235 87 238 89 243 89 C 246 89 249 88 251 86 C 254 84 257 85 258 88 L 260 92 C 261 95 259 98 255 100 C 250 102 243 102 237 100 C 223 96 215 89 215 85 Z"
            />
            {/* r */}
            <path
              d="M 268 85 V 36 C 268 32 270 30 274 30 H 282 C 286 30 288 32 288 36 V 46 C 293 35 301 30 311 30 C 314 30 317 31 319 32 C 322 34 322 37 320 40 L 316 46 C 314 49 311 49 308 48 C 304 47 300 48 296 52 C 290 57 288 64 288 73 V 85 C 288 89 286 91 282 91 H 274 C 270 91 268 89 268 85 Z"
            />
          </g>

          {/* Emblem: Swirling Eco & Water Diamond Icon replacing / accompanying 'o' */}
          <g transform="translate(320, 16)">
            {/* Outer Diamond / Droplet swirl */}
            <path
              d="M 46 4 C 48 2 52 2 54 4 L 78 28 C 94 44 94 70 78 86 C 62 102 36 102 20 86 C 4 70 4 44 20 28 Z"
              fill="url(#swirlGrad)"
            />
            {/* Inner dynamic wave swirl creating circular aperture */}
            <path
              d="M 50 15 C 68 15 82 29 82 47 C 82 65 68 79 50 79 C 32 79 18 65 18 47 C 18 29 32 15 50 15 Z"
              fill={isWhite ? '#0B1B3D' : '#FFFFFF'}
            />
            {/* Stylized sweeping vortex blade in lime green */}
            <path
              d="M 50 20 C 65 20 76 31 76 45 C 76 60 63 71 48 71 C 32 71 22 59 25 43 C 26 37 30 31 36 26 C 40 23 44 21 50 20 Z"
              fill="url(#swirlGradInner)"
            />
            {/* Center light core */}
            <circle cx="49" cy="45" r="14" fill={isWhite ? '#0B1B3D' : '#FFFFFF'} />
          </g>

          {/* Subtitle: CLEANERS & RENOVATORS */}
          <text
            x="28"
            y="118"
            fill={isWhite ? '#93C5FD' : '#0047BA'}
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontWeight="800"
            fontSize="18"
            letterSpacing="2.8"
          >
            CLEANERS & RENOVATORS
          </text>

          {/* Tagline: We clean so you don't have to */}
          <text
            x="36"
            y="142"
            fill={isWhite ? '#E2E8F0' : '#0B3B95'}
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontWeight="600"
            fontSize="14"
            fontStyle="italic"
            letterSpacing="0.4"
          >
            We clean so you don't have to
          </text>
        </svg>
      </div>
    </div>
  );
};
