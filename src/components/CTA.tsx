import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';

export default function CTA() {
  return (
    <section 
      id="contact" 
      className="relative py-24 sm:py-32 border-t border-surface-container-high/40 bg-surface-navy tech-grid-dots"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-primary-container/10 blur-[130px] pointer-events-none"></div>

        <div className="relative mx-auto max-w-4xl rounded-2xl border border-outline-variant/55 bg-gradient-to-b from-surface-container-low to-surface-navy p-10 sm:p-16 text-center shadow-[0_0_50px_rgba(0,103,255,0.05)] overflow-hidden">
          
          {/* Blueprint background grid for the card */}
          <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none"></div>

          <div className="relative space-y-6">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-vibrant-cyan font-bold">
              HAVE PROJECT IN MIND?
            </p>
            
            <h2 className="font-geist text-4xl font-extrabold text-white tracking-tight sm:text-6xl max-w-2xl mx-auto">
              Let's Turn your Ideas <br className="hidden sm:inline" /> into Reality
            </h2>

            {/* Underlined beautiful large direct email link */}
            <div className="pt-6">
              <a 
                href="mailto:hello@nigelgeek.com"
                className="relative inline-block font-geist text-2xl sm:text-4xl lg:text-5xl font-semibold text-white hover:text-vibrant-cyan transition-colors duration-200 group"
              >
                hello@nigelgeek.com
                <span className="absolute bottom-[-6px] left-0 h-[2px] w-full bg-gradient-to-r from-primary-container to-vibrant-cyan transition-all duration-300"></span>
              </a>
            </div>

            {/* Secondary direct contact button */}
            <div className="pt-8 flex justify-center">
              <a 
                href="tel:+233232787277"
                className="inline-flex items-center gap-3 rounded-lg border border-outline-variant/60 bg-surface-container-high/85 px-6 py-3.5 font-mono text-sm tracking-wider text-on-surface hover:text-white hover:border-vibrant-cyan hover:bg-surface-navy transition-all duration-200"
              >
                <MessageSquare className="h-4 w-4 text-vibrant-cyan animate-pulse shrink-0" />
                <span>+233 23 278 7277</span>
              </a>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}
