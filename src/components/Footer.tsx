import React from 'react';
import { ArrowUp, Terminal, MessageCircle } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative border-t border-surface-container-high/60 bg-surface-navy py-12">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Brand Credits */}
        <div className="text-center md:text-left space-y-1.5">
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-white">
              Nigel Henaku
            </span>
            <span className="text-on-surface-variant/40">//</span>
            <span className="font-sans text-xs text-on-surface-variant">
              Strategic IT Consultant
            </span>
          </div>
          <p className="font-sans text-[11px] text-on-surface-variant/65">
            &copy; {new Date().getFullYear()} Nigel Henaku. Strategic Innovation & IT Excellence. All Rights Reserved.
          </p>
        </div>

        {/* Middle/Right Side: Legal & Network Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-on-surface-variant">
           <a 
            href="https://www.linkedin.com/in/nigel-henaku/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-vibrant-cyan transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-outline-variant/30 hidden sm:inline">|</span>
          <a 
            href="https://wa.me/233232787277" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-vibrant-cyan transition-colors flex items-center gap-1"
          >
            <MessageCircle className="h-3 w-3 inline text-success-green" />
            WhatsApp
          </a>
        </div>

        {/* Scroll back to Top button */}
        <button
          onClick={scrollToTop}
          id="scrollToTopBtn"
          className="rounded-full bg-surface-container-high border border-outline-variant/50 p-3 text-on-surface-variant hover:text-white hover:border-vibrant-cyan hover:bg-surface-navy transition-all duration-300 md:absolute md:right-8 md:bottom-12 shadow-[0_0_10px_rgba(0,0,0,0.3)] group"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="h-4 w-4 transform group-hover:-translate-y-0.5 transition-transform" />
        </button>

      </div>
    </footer>
  );
}
