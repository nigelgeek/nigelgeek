import React from 'react';
import { Code, ShieldCheck, Bot, Terminal } from 'lucide-react';
import { SERVICE_OFFERS } from '../data';

const getServiceIcon = (name: string) => {
  switch (name) {
    case 'Code':
      return <Code className="h-6 w-6 text-primary-container" />;
    case 'ShieldAlert':
      return <ShieldCheck className="h-6 w-6 text-primary-container" />;
    case 'Bot':
      return <Bot className="h-6 w-6 text-primary-container" />;
    default:
      return <Code className="h-6 w-6 text-primary-container" />;
  }
};

export default function Services() {
  return (
    <section 
      id="services" 
      className="relative scroll-mt-20 py-24 sm:py-32 border-t border-surface-container-high/40 bg-surface-container-lowest tech-grid"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16 md:mb-20">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-vibrant-cyan font-semibold">
            WHAT I OFFER
          </p>
          <h2 className="font-geist text-4xl font-extrabold text-white tracking-tight sm:text-5xl leading-tight">
            Empowering Businesses with <br className="hidden sm:inline" /> Smart IT Solutions
          </h2>
          <div className="h-1 w-12 bg-primary-container mx-auto rounded-full mt-4"></div>
        </div>

        {/* 3 Columns Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICE_OFFERS.map((offer) => (
            <div 
              key={offer.id}
              className="group relative flex flex-col justify-between rounded-lg border border-outline-variant/30 bg-surface-container-low/90 p-8 pt-10 text-left transition-all duration-300 hover:border-primary-container/60 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,103,255,0.08)]"
            >
              <div>
                {/* Tech Sequence Code Badge at top right */}
                <div className="absolute top-6 right-6 font-mono text-xs font-semibold text-on-surface-variant/30 group-hover:text-vibrant-cyan/60 transition-colors">
                  // {offer.number}
                </div>

                {/* Icon Circle Container with Hover Glow */}
                <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded bg-surface-container border border-outline-variant/30 text-white transition-transform group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(0,103,255,0.15)]">
                  {getServiceIcon(offer.iconName)}
                </div>

                {/* Service Title */}
                <h3 className="font-geist text-2xl font-bold text-white tracking-tight mb-4">
                  {offer.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm leading-relaxed text-on-surface-variant font-light mb-8 group-hover:text-on-surface transition-colors">
                  {offer.description}
                </p>
              </div>

              {/* Badges container */}
              <div className="flex flex-wrap items-center gap-2 mt-auto pt-4 border-t border-outline-variant/20">
                {offer.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="inline-flex items-center rounded bg-surface-container-high/50 border border-outline-variant/20 px-2.5 py-1 font-mono text-[10px] font-semibold text-on-surface-variant uppercase tracking-wider hover:border-vibrant-cyan/30 hover:text-white transition-all cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
