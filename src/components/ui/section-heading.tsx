
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  overline?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  overline,
  title,
  description,
  align = 'left',
  className,
}) => {
  return (
    <div 
      className={cn(
        'space-y-3 mb-8',
        align === 'center' && 'text-center',
        align === 'right' && 'text-right',
        className
      )}
    >
      {overline && (
        <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase animate-fade-in">
          {overline}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight animate-fade-in balance-text">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground max-w-2xl animate-fade-in delay-100 balance-text">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
