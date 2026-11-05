import React, { useState, useEffect } from 'react';
import { portfolioData } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { DoorsShowcase } from './components/DoorsShowcase';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsGrid } from './components/SkillsGrid';
import { TimelineSection } from './components/TimelineSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { GitHubConfigModal } from './components/GitHubConfigModal';
import { CommandPalette } from './components/CommandPalette';
import { toggleSound, getSoundEnabled, playSound } from './utils/soundEffects';

export function App() {
  const [soundEnabled, setSoundEnabled] = useState(getSoundEnabled());
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isGithubConfigOpen, setIsGithubConfigOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [githubUrl, setGithubUrl] = useState(() => {
    try {
      const saved = localStorage.getItem('ashvani_github_url');
      return saved || portfolioData.personal.contact.defaultGithub;
    } catch (e) {
      return portfolioData.personal.contact.defaultGithub;
    }
  });

  // Mouse spotlight glow tracker
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Global keyboard listener for Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleToggleSound = () => {
    const newState = toggleSound();
    setSoundEnabled(newState);
    if (newState) {
      playSound('success');
    }
  };

  const handleSaveGithubUrl = (newUrl) => {
    setGithubUrl(newUrl);
    try {
      localStorage.setItem('ashvani_github_url', newUrl);
    } catch (e) {}
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-zinc-100 relative selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Dynamic Cursor Spotlight Effect */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(6, 182, 212, 0.04), transparent 80%)`
        }}
      />

      {/* Top Navbar */}
      <Navbar
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
        githubUrl={githubUrl}
      />

      <main id="main">
        {/* Hero Section with 3D Holographic Developer Card */}
        <Hero 
          personalData={portfolioData.personal} 
          onOpenResume={() => setIsResumeOpen(true)} 
        />

        {/* About Section featuring Ashvani's Professional Photograph & Academic Background */}
        <AboutSection 
          personalData={portfolioData.personal} 
          githubUrl={githubUrl} 
        />

        {/* Interactive Domain Vaults / Doors */}
        <DoorsShowcase doors={portfolioData.doors} />

        {/* Featured Projects with Interactive Simulators */}
        <ProjectsSection projects={portfolioData.projects} />

        {/* Categorized Technical Skills Matrix */}
        <SkillsGrid skills={portfolioData.skills} />

        {/* Time Travel Journey & Academic Credentials */}
        <TimelineSection 
          journey={portfolioData.journey} 
          education={portfolioData.personal.education} 
        />

        {/* Contact Channels & Message Dispatcher */}
        <ContactSection
          personalData={portfolioData.personal}
          githubUrl={githubUrl}
          onEditGithub={() => setIsGithubConfigOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        personalData={portfolioData.personal}
        githubUrl={githubUrl}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Modals and Overlays */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        personalData={portfolioData.personal}
        githubUrl={githubUrl}
      />

      <GitHubConfigModal
        isOpen={isGithubConfigOpen}
        onClose={() => setIsGithubConfigOpen(false)}
        currentUrl={githubUrl}
        onSave={handleSaveGithubUrl}
      />

      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenGithubConfig={() => setIsGithubConfigOpen(true)}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        personalData={portfolioData.personal}
        githubUrl={githubUrl}
      />
    </div>
  );
}

export default App;
