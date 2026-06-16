import React from 'react';
import { ArrowRight, CalendarRange } from 'lucide-react';
import { WORKFLOW_STEPS } from '../data';

interface WorkflowProps {
  onScheduleClick: () => void;
}

export default function Workflow({ onScheduleClick }: WorkflowProps) {
  return (
    <section 
      id="workflow" 
      className="relative scroll-mt-20 py-24 sm:py-32 border-t border-surface-container-high/40 bg-surface-navy tech-grid-dots"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Visual Introduction */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-vibrant-cyan font-semibold">
              MY PROCESS
            </p>
            <h2 className="font-geist text-4xl font-extrabold text-white tracking-tight sm:text-5xl leading-tight">
              My Creative <br className="hidden sm:inline" /> Workflow
            </h2>
            <div className="h-1 w-12 bg-primary-container rounded-full mt-4"></div>
            
            <p className="font-sans text-base leading-relaxed text-on-surface-variant font-light max-w-md">
              A systematic, results-oriented approach to solving complex problems through technology. From roadmap formulation to scaling the live servers.
            </p>

            <div className="pt-4">
              <button
                onClick={onScheduleClick}
                className="group inline-flex items-center justify-center gap-2.5 rounded bg-primary-container px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-opacity-95 active:scale-98 shadow-[0_0_15px_rgba(0,103,255,0.2)] cursor-pointer"
              >
                Schedule a consultation
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform animate-pulse" />
              </button>
            </div>
          </div>

          {/* Right Column: Detailed Workflow Nodes */}
          <div className="lg:col-span-7 space-y-8">
            {WORKFLOW_STEPS.map((step, index) => (
              <div 
                key={step.id}
                className="group relative flex flex-col sm:flex-row items-start gap-4 p-6 rounded-lg border border-transparent hover:border-outline-variant/30 hover:bg-surface-container-low/40 transition-all duration-300"
              >
                {/* Step Index Box */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded border border-outline-variant/30 bg-surface-container font-mono text-sm font-bold text-vibrant-cyan group-hover:scale-105 group-hover:border-vibrant-cyan/50 group-hover:shadow-[0_0_10px_rgba(0,209,255,0.2)] transition-all">
                  {step.number}
                </div>

                {/* Content block */}
                <div className="space-y-1.5 pt-1">
                  <h3 className="font-geist text-xl font-bold text-white tracking-tight transition-colors group-hover:text-vibrant-cyan">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed text-on-surface-variant font-light group-hover:text-on-surface transition-colors">
                    {step.description}
                  </p>
                </div>
                
                {/* Connector line for workflow trail */}
                {index < WORKFLOW_STEPS.length - 1 && (
                  <div className="hidden sm:block absolute left-[38px] top-20 bottom-[-24px] w-[1px] bg-gradient-to-b from-outline-variant/30 to-transparent pointer-events-none"></div>
                )}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
