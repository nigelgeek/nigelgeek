import React from 'react';
import { Share2 } from 'lucide-react';
import portrait from '../assets/images/profile.jpeg';

export default function WhoIAm() {
  return (
    <section 
      id="about" 
      className="relative scroll-mt-20 py-24 sm:py-32 border-t border-surface-container-high/40 bg-surface-container-lowest tech-grid"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Text copy */}
          <div className="lg:col-span-7 space-y-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-vibrant-cyan font-semibold">
              WHO I AM
            </p>
            <h2 className="font-geist text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
              Nigel Henaku
            </h2>
            <div className="h-1 w-12 bg-primary-container rounded-full mt-4"></div>

            <div className="space-y-4 font-sans text-base leading-relaxed text-on-surface-variant font-light">
              <p>
                Hello! I'm Nigel Henaku, a <strong className="font-semibold text-white">tech-driven innovator and IT strategist</strong> with a strong focus on <strong className="font-semibold text-white">digital transformation, AI adoption, and practical technology education</strong>.
              </p>
              <p>
                I operate at the intersection of technology, business, and leadership, often bridging the gap between technical implementation and strategic decision-making. No system is too complex when styled with analytical rigor.
              </p>
              <p>
                My passion lies in using technology to solve real-world challenges, whether through robust systems, secure networks, or intelligent automation. I bridge the gap between strategy and execution.
              </p>
            </div>

            {/* LinkedIn Action Button */}
            <div className="pt-4">
              <a
                href="https://www.linkedin.com/in/nigel-henaku/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded border border-outline-variant/60 bg-surface-container-low px-5 py-3 text-sm font-semibold text-on-surface hover:text-white hover:border-vibrant-cyan hover:bg-surface-container-high transition-colors"
              >
                <Share2 className="h-4 w-4 text-vibrant-cyan scale-110" />
                Follow my journey on LinkedIn
              </a>
            </div>
          </div>

          {/* Right Column: Beautifully cropped Blueprint Image Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-full">
              
              {/* Offset grid background outline */}
              <div className="absolute -inset-4 rounded-lg border border-dashed border-vibrant-cyan/20 bg-surface-container-high/10 pointer-events-none group-hover:border-vibrant-cyan/45 transition-colors"></div>
              
              {/* Highlight Blueprint corners */}
              <div className="absolute -top-4 -left-4 h-6 w-6 border-t border-l border-vibrant-cyan/40"></div>
              <div className="absolute -bottom-4 -right-4 h-6 w-6 border-b border-r border-vibrant-cyan/40"></div>
              
              {/* Main Image Container and portrait image with interactive focus */}
              <div className="relative overflow-hidden rounded-lg border border-outline-variant/60 bg-surface-charcoal p-1.5 transition-transform duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_0_40px_rgba(0,209,255,0.1)]">
                <img 
                  src={portrait} 
                  alt="Nigel Henaku Portfolio Portrait" 
                  referrerPolicy="no-referrer"
                  className="rounded-md object-cover w-full h-[450px] sm:w-[350px] lg:w-[400px] filter grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
