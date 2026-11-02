import React from 'react';
import { useScrollPosition } from '../../hooks/useScrollPosition';

export const ScrollProgress: React.FC = () => {
  const { scrollProgress } = useScrollPosition();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-neon transition-all duration-150 ease-out shadow-[0_0_10px_rgba(37,99,235,0.7)]"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
};
