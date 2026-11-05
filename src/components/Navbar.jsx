import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Command, 
  Volume2, 
  VolumeX, 
  FileText, 
  Menu, 
  X,
  ShieldCheck,
  Terminal
} from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { playSound } from '../utils/soundEffects';

export const Navbar = ({ 
  soundEnabled, 
  onToggleSound, 
  onOpenCommandPalette, 
  onOpenResume,
  githubUrl 
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Featured Work', href: '#projects' },
    { label: 'Domain Vaults', href: '#doors' },
    { label: 'Skills Matrix', href: '#skills' },
    { label: 'My Journey', href: '#timeline' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = () => {
    playSound('click');
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-[#08080a]/90 backdrop-blur-xl border-b border-zinc-800/80 shadow-2xl' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a 
            href="#" 
            onClick={() => playSound('click')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden p-[1px] bg-gradient-to-tr from-emerald-400 via-teal-300 to-cyan-500 shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform shrink-0">
              <img
                src="/images/profile.jpg"
                alt="Ashvani Singh"
                className="w-full h-full object-cover object-top rounded-xl"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div className="hidden sm:block">
              <span className="font-heading font-bold text-sm text-white group-hover:text-emerald-300 transition-colors block leading-tight">
                Ashvani Singh
              </span>
              <span className="text-[10px] font-mono text-emerald-400">
                Full Stack Developer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 p-1 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3.5 py-1.5 rounded-xl text-xs font-mono text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions & Utilities */}
          <div className="flex items-center gap-2">
            {/* Quick Command Palette Button */}
            <button
              onClick={() => { playSound('click'); onOpenCommandPalette(); }}
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 text-xs font-mono text-zinc-400 hover:text-zinc-200 transition-colors"
              title="Search Portfolio (Ctrl + K)"
            >
              <Command className="w-3.5 h-3.5 text-cyan-400" />
              <span>Search</span>
              <kbd className="px-1.5 py-0.5 rounded bg-zinc-950 text-[10px] text-zinc-500 border border-zinc-800">
                ⌘K
              </kbd>
            </button>

            {/* Sound Toggle */}
            <button
              onClick={() => { onToggleSound(); }}
              className="p-2 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors"
              title={soundEnabled ? 'Mute Interactive Sound' : 'Enable Interactive Sound'}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4 text-zinc-600" />}
            </button>

            {/* Resume Action */}
            <button
              onClick={() => { playSound('click'); onOpenResume(); }}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-medium transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* GitHub profile link */}
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => { playSound('click'); setMobileMenuOpen(!mobileMenuOpen); }}
              className="md:hidden p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-zinc-950/95 border border-zinc-800 shadow-2xl backdrop-blur-xl animate-fadeIn space-y-3">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="px-4 py-2.5 rounded-xl text-sm font-mono text-zinc-300 hover:bg-zinc-900 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-zinc-800 flex gap-2">
              <button
                onClick={() => { playSound('click'); onOpenResume(); setMobileMenuOpen(false); }}
                className="flex-1 py-2.5 rounded-xl bg-cyan-500 text-zinc-950 font-bold font-mono text-xs text-center"
              >
                View Resume
              </button>
              <button
                onClick={() => { playSound('click'); onOpenCommandPalette(); setMobileMenuOpen(false); }}
                className="px-3 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono"
              >
                ⌘K Search
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
