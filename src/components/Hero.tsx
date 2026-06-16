import React from 'react';
import { ArrowRight, ChevronDown, CheckCircle } from 'lucide-react';

interface HeroProps {
  onScheduleClick: () => void;
}

export default function Hero({ onScheduleClick }: HeroProps) {
  return (
    <section 
      id="hero" 
      className="relative flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center px-6 py-20 text-center tech-grid"
    >
      {/* Decorative Blueprint Accent Circles */}
      <div className="absolute top-1/4 left-1/10 h-72 w-72 rounded-full bg-primary-container/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/10 h-72 w-72 rounded-full bg-vibrant-cyan/5 blur-[120px] pointer-events-none"></div>

      {/* Available for Work Pill Badge */}
      <div className="animate-fade-in-up duration-500 mb-8 inline-flex items-center space-x-2 rounded-full border border-success-green/20 bg-success-green/5 px-4 py-1.5 font-mono text-xs tracking-wider text-success-green sm:px-5">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-green opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-success-green"></span>
        </span>
        <span className="uppercase font-semibold select-none">AVAILABLE FOR STRATEGIC ENGAGEMENTS</span>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {/* Main Majestic Title */}
        <h1 className="font-geist text-5xl font-black tracking-tight text-white sm:text-7xl lg:text-8xl">
          Hi, I'm <span className="text-primary-container relative inline-block">Nigel<span className="absolute bottom-2 left-0 h-[6px] w-[full] bg-vibrant-cyan/20 rounded-full"></span></span>
        </h1>

        {/* Professional Subheading */}
        <p className="mx-auto max-w-2xl font-sans text-lg leading-relaxed text-on-surface-variant sm:text-xl md:text-2xl font-light">
          A tech-driven innovator and IT strategist bridging the gap between high-level strategic vision and precision technical execution.
        </p>

        {/* Buttons Action Group */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button
            onClick={onScheduleClick}
            id="hero-schedule-btn"
            className="w-full sm:w-auto relative group inline-flex items-center justify-center gap-2.5 rounded-lg bg-primary-container px-8 py-4 text-base font-semibold text-white transition-all hover:bg-opacity-95 active:scale-98 shadow-[0_0_30px_rgba(0,103,255,0.3)] hover:shadow-[0_0_35px_rgba(0,103,255,0.45)] cursor-pointer text-center"
          >
            Schedule a consultation
            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform animate-pulse" />
          </button>
          
          <a
            href="#services"
            className="w-full sm:w-auto relative inline-flex items-center justify-center rounded-lg border border-outline-variant px-8 py-4 text-base font-semibold text-on-surface hover:text-white hover:border-white hover:bg-white/5 transition-all active:scale-98"
          >
            View Services
          </a>
        </div>
      </div>

      {/* Down arrow indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-1 animate-bounce opacity-40 hover:opacity-100 transition-opacity">
        <span className="font-mono text-[10px] tracking-widest text-on-surface-variant uppercase">EXPLORE</span>
        <a href="#why-me" aria-label="Scroll to Why Choose Me" className="p-1 rounded-full text-on-surface-variant hover:text-white">
          <ChevronDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}
