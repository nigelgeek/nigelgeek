import React from 'react';
import { LayoutGrid, Activity, Sparkles, LucideProps } from 'lucide-react';
import { STRATEGIC_VALUES } from '../data';

// Map icon name string to Lucide component
const getIcon = (name: string) => {
  switch (name) {
    case 'LayoutGrid':
      return <LayoutGrid className="h-6 w-6 text-vibrant-cyan" />;
    case 'Activity':
      return <Activity className="h-6 w-6 text-vibrant-cyan" />;
    case 'Sparkles':
      return <Sparkles className="h-6 w-6 text-vibrant-cyan" />;
    default:
      return <LayoutGrid className="h-6 w-6 text-vibrant-cyan" />;
  }
};

export default function WhyWorkWithMe() {
  return (
    <section 
      id="why-me" 
      className="relative scroll-mt-20 py-24 sm:py-32 border-t border-surface-container-high/40 bg-surface-navy tech-grid-dots"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16 md:mb-20">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-vibrant-cyan font-semibold">
            WHY CHOOSE ME
          </p>
          <h2 className="font-geist text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
            Why Work with Me
          </h2>
          <div className="h-1 w-12 bg-primary-container mx-auto rounded-full mt-4"></div>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STRATEGIC_VALUES.map((value) => (
            <div 
              key={value.id}
              className="group relative rounded-lg border border-outline-variant/40 bg-surface-container-low p-8 text-left transition-all duration-300 hover:border-vibrant-cyan/50 hover:bg-surface-container-high/70 hover:shadow-[0_0_20px_rgba(0,209,255,0.05)]"
            >
              {/* Corner tech lines to emphasize "Blueprint/Engineered" design style */}
              <div className="absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-transparent group-hover:border-vibrant-cyan/20 transition-colors"></div>
              <div className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-transparent group-hover:border-vibrant-cyan/20 transition-colors"></div>

              {/* Icon Container with subtle glow */}
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded bg-surface-container-high border border-outline-variant/35 text-white transition-transform group-hover:scale-105">
                {getIcon(value.iconName)}
              </div>

              {/* Title */}
              <h3 className="font-geist text-xl font-bold text-white tracking-tight mb-3">
                {value.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-sm leading-relaxed text-on-surface-variant font-light group-hover:text-on-surface transition-colors">
                {value.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
