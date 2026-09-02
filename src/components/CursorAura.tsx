import React, { useEffect, useState } from 'react';

export const CursorAura: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if viewport is mobile (<768px) or device has no fine pointer
    const checkMobile = () => {
      const match = window.innerWidth < 768 || window.matchMedia('(pointer: coarse)').matches;
      setIsMobile(match);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (isMobile || !isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-300"
      style={{ opacity: isVisible ? 1 : 0 }}
      aria-hidden="true"
    >
      {/* Outer soft glowing blend of Sky Blue (#38BDF8) & Lime Green (#84CC16) */}
      <div
        className="absolute rounded-full filter blur-2xl transition-transform duration-75 ease-out"
        style={{
          width: '320px',
          height: '320px',
          left: `${pos.x - 160}px`,
          top: `${pos.y - 160}px`,
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.18) 0%, rgba(132, 204, 22, 0.12) 45%, rgba(0, 71, 186, 0) 70%)',
        }}
      />
      {/* Small precision follower dot */}
      <div
        className="absolute rounded-full border border-sky-400/40 shadow-sm transition-transform duration-100 ease-out"
        style={{
          width: '28px',
          height: '28px',
          left: `${pos.x - 14}px`,
          top: `${pos.y - 14}px`,
          background: 'radial-gradient(circle, rgba(132, 204, 22, 0.4) 0%, rgba(56, 189, 248, 0.3) 100%)',
        }}
      />
    </div>
  );
};
