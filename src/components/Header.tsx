import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onScheduleClick: () => void;
}

export default function Header({ onScheduleClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on route/anchor click
  const handleNavClick = () => {
    setIsOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { href: '#why-me', label: 'Why Me' },
    { href: '#services', label: 'Services' },
    { href: '#workflow', label: 'Workflow' },
    { href: '#about', label: 'About' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-surface-container-high/60 bg-surface-navy/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8">

        {/* Brand Logo */}
        <a href="#hero" className="flex items-center space-x-2 group" onClick={handleNavClick}>
          <img
            src="/src/assets/images/logo mark.png"
            alt="Nigel Henaku Logo"
            className="h-9 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-on-surface-variant hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA + Mobile Hamburger */}
        <div className="flex items-center space-x-3">
          <button
            onClick={onScheduleClick}
            id="header-cta-btn"
            className="relative inline-flex items-center justify-center rounded-md bg-primary-container px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-opacity-90 active:scale-95 shadow-[0_0_15px_rgba(0,103,255,0.35)] cursor-pointer"
          >
            Contact Me
          </button>

          {/* Hamburger Toggle (mobile only) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative inline-flex items-center justify-center h-10 w-10 rounded-md text-on-surface-variant hover:text-white hover:bg-surface-container-higher transition-colors cursor-pointer"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 top-0 z-50 transition-all duration-300 ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={handleNavClick}
        />

        {/* Slide-in Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-72 max-w-[85vw] bg-surface-navy border-l border-surface-container-high/60 shadow-2xl transition-transform duration-300 ease-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Close button inside panel */}
          <div className="flex items-center justify-end px-6 pt-5 pb-2">
            <button
              onClick={handleNavClick}
              className="inline-flex items-center justify-center h-10 w-10 rounded-md text-on-surface-variant hover:text-white hover:bg-surface-container-higher transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          {/* Navigation links */}
          <nav className="flex flex-col px-6 mt-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="block px-4 py-3.5 rounded-lg text-base font-medium text-on-surface-variant hover:text-white hover:bg-surface-container-higher transition-colors"
              >
                {link.label}
              </a>
            ))}
            <hr className="my-4 border-surface-container-high/60" />
            <button
              onClick={() => {
                handleNavClick();
                // slight delay so menu closes before modal opens
                setTimeout(() => onScheduleClick(), 300);
              }}
              className="block w-full px-4 py-3.5 rounded-lg text-base font-semibold text-white bg-primary-container hover:bg-opacity-90 transition-all text-center"
            >
              Schedule a Consultation
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
