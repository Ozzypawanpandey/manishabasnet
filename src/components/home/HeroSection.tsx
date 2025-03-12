
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      container.style.setProperty('--mouse-x', `${x}`);
      container.style.setProperty('--mouse-y', `${y}`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center justify-center py-20 overflow-hidden"
      style={{
        '--mouse-x': '0.5',
        '--mouse-y': '0.5',
      } as React.CSSProperties}
    >
      {/* Background subtle gradient that follows mouse */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-white via-secondary to-accent opacity-50"
        style={{
          backgroundPosition: 'calc(var(--mouse-x) * 100%) calc(var(--mouse-y) * 100%)',
          transition: 'background-position 0.2s ease-out',
          backgroundSize: '200% 200%',
        }}
      />

      <div className="container relative z-10 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-muted-foreground mb-3">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 balance-text">
              Manisha Basnet
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground balance-text">
              Samsung Experience Consultant with expertise in customer relations and product knowledge
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="pt-4"
          >
            <div className="inline-flex px-6 py-3 rounded-full bg-secondary text-primary font-medium hover:bg-primary hover:text-white transition-colors">
              Based in Gorkha, Nepal
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-sm text-muted-foreground mb-4">Scroll to explore</p>
          <div className="animate-float">
            <ArrowDown size={20} className="text-muted-foreground" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
