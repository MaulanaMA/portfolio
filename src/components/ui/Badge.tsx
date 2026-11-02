import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'cyan' | 'neutral' | 'success' | 'amber';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'blue',
  size = 'sm',
  className = '',
}) => {
  const variantStyles = {
    blue: 'bg-brand-blue/10 text-brand-electric border-brand-blue/30',
    cyan: 'bg-brand-cyan/10 text-brand-cyan border-brand-cyan/30',
    neutral: 'bg-slate-800/80 light:bg-slate-100 text-slate-300 light:text-slate-700 border-slate-700 light:border-slate-300',
    success: 'bg-emerald-500/10 text-emerald-400 light:text-emerald-600 border-emerald-500/30',
    amber: 'bg-amber-500/10 text-amber-400 light:text-amber-600 border-amber-500/30',
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5',
    md: 'text-sm px-3 py-1',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono font-medium rounded-md border ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
};
