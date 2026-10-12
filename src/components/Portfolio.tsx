import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, Globe, FolderGit2 } from 'lucide-react';
import { PORTFOLIO_WORKS } from '../data';

export default function Portfolio() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="work"
      className="relative scroll-mt-20 py-24 sm:py-32 border-t border-surface-container-high/40 bg-surface-container-lowest tech-grid"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16 md:mb-20">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-vibrant-cyan font-semibold">
            SELECTED WORK
          </p>
          <h2 className="font-geist text-4xl font-extrabold text-white tracking-tight sm:text-5xl leading-tight">
            Websites I've <br className="hidden sm:inline" /> Built &amp; Shipped
          </h2>
          <div className="h-1 w-12 bg-primary-container mx-auto rounded-full mt-4"></div>
          <p className="font-sans text-base leading-relaxed text-on-surface-variant font-light max-w-2xl mx-auto">
            Real-world web development projects — from corporate platforms and institutional sites to modern Next.js applications, each engineered for performance, clarity, and impact.
          </p>
        </div>

        {/* Accordion List — 2 columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 items-start">
          {PORTFOLIO_WORKS.map((work, index) => {
            const isOpen = openId === work.id;
            return (
              <div
                key={work.id}
                className={`group rounded-lg border transition-all duration-300 ${
                  isOpen
                    ? 'border-primary-container/60 bg-surface-container-low shadow-[0_0_25px_rgba(0,103,255,0.08)]'
                    : 'border-outline-variant/30 bg-surface-container-low/70 hover:border-outline-variant/60 hover:bg-surface-container-low'
                }`}
              >
                {/* Accordion Header (always visible) */}
                <button
                  type="button"
                  onClick={() => toggle(work.id)}
                  aria-expanded={isOpen}
                  aria-controls={`work-panel-${work.id}`}
                  className="w-full flex items-center gap-4 px-5 sm:px-6 py-5 text-left cursor-pointer"
                >
                  {/* Index */}
                  <span className={`hidden sm:inline-flex font-mono text-xs font-semibold transition-colors ${isOpen ? 'text-vibrant-cyan' : 'text-on-surface-variant/30 group-hover:text-vibrant-cyan/60'}`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  {/* Title */}
                  <span className="flex-1 min-w-0">
                    <span className="block font-geist text-lg sm:text-xl font-bold text-white tracking-tight transition-colors group-hover:text-vibrant-cyan">
                      {work.title}
                    </span>
                    {/* Tech tags always visible */}
                    <span className="mt-1.5 flex flex-wrap items-center gap-1.5">
                      {work.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded bg-surface-container-high/50 border border-outline-variant/20 px-2 py-0.5 font-mono text-[10px] font-semibold text-on-surface-variant uppercase tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </span>
                  </span>

                  {/* Chevron */}
                  <span className={`shrink-0 inline-flex h-8 w-8 items-center justify-center rounded border transition-all duration-300 ${
                    isOpen
                      ? 'border-vibrant-cyan/50 text-vibrant-cyan rotate-180'
                      : 'border-outline-variant/30 text-on-surface-variant group-hover:border-vibrant-cyan/40 group-hover:text-vibrant-cyan'
                  }`}>
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>

                {/* Expanded Details */}
                <div
                  id={`work-panel-${work.id}`}
                  role="region"
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-outline-variant/20">
                      <div className="pt-4 space-y-4">
                        {/* Category + Year */}
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-vibrant-cyan/80">
                            <Globe className="h-3.5 w-3.5" />
                            {work.category}
                          </span>
                          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-on-surface-variant/60">
                            <FolderGit2 className="h-3.5 w-3.5" />
                            {work.year}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="font-sans text-sm leading-relaxed text-on-surface-variant font-light">
                          {work.description}
                        </p>

                        {/* Visit link */}
                        <a
                          href={work.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded border border-outline-variant/60 bg-surface-container-high/50 px-4 py-2 text-xs font-semibold text-on-surface hover:text-white hover:border-vibrant-cyan hover:bg-surface-container-high transition-colors"
                        >
                          Visit site
                          <ArrowUpRight className="h-3.5 w-3.5 text-vibrant-cyan" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="font-mono text-xs text-on-surface-variant/60">
            More projects available on request — <a href="mailto:hello@nigelgeek.com" className="text-vibrant-cyan hover:text-white transition-colors">let's discuss yours</a>.
          </p>
        </div>

      </div>
    </section>
  );
}