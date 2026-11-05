import React, { useState, useEffect } from 'react';
import { 
  Search, 
  X, 
  FolderGit2, 
  Cpu, 
  History, 
  Mail, 
  FileText, 
  Volume2, 
  Copy, 
  Check, 
  DoorOpen,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { playSound } from '../utils/soundEffects';

export const CommandPalette = ({ 
  isOpen, 
  onClose, 
  onOpenResume, 
  onOpenGithubConfig, 
  soundEnabled, 
  onToggleSound, 
  personalData, 
  githubUrl 
}) => {
  const [query, setQuery] = useState('');
  const [copiedAction, setCopiedAction] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        playSound('click');
        if (isOpen) {
          onClose();
        } else {
          // Trigger open via parent
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'nav-about',
      title: 'About Ashvani Singh (Profile, Education & AIDS 2027 Batch)',
      category: 'Navigation',
      icon: History,
      action: () => { window.location.href = '#about'; onClose(); }
    },
    {
      id: 'proj-parkease',
      title: 'PARKEASE — Full-Stack Smart Parking Platform',
      category: 'Projects',
      icon: FolderGit2,
      action: () => { window.location.href = '#projects'; onClose(); }
    },
    {
      id: 'proj-medimatrix',
      title: 'MEDIMATRIX — Hospital Management System (Spring Boot)',
      category: 'Projects',
      icon: FolderGit2,
      action: () => { window.location.href = '#projects'; onClose(); }
    },
    {
      id: 'nav-doors',
      title: 'Interactive Domain Vaults & Blueprints',
      category: 'Navigation',
      icon: DoorOpen,
      action: () => { window.location.href = '#doors'; onClose(); }
    },
    {
      id: 'nav-skills',
      title: 'Technical Skills Matrix & Architecture Toolkit',
      category: 'Navigation',
      icon: Cpu,
      action: () => { window.location.href = '#skills'; onClose(); }
    },
    {
      id: 'nav-timeline',
      title: 'Let\'s Go Back in Time (Academic Milestones & B.Tech)',
      category: 'Navigation',
      icon: History,
      action: () => { window.location.href = '#timeline'; onClose(); }
    },
    {
      id: 'nav-contact',
      title: 'Contact Channels & Message Dispatcher',
      category: 'Navigation',
      icon: Mail,
      action: () => { window.location.href = '#contact'; onClose(); }
    },
    {
      id: 'act-leetcode',
      title: 'Open LeetCode Profile (Ashvani6858)',
      category: 'Profiles',
      icon: ExternalLink,
      action: () => { window.open(personalData.contact.leetCode, '_blank'); onClose(); }
    },
    {
      id: 'act-resume',
      title: 'View & Print Official Resume',
      category: 'Actions',
      icon: FileText,
      action: () => { onClose(); onOpenResume(); }
    },
    {
      id: 'act-copy-email',
      title: `Copy Email (${personalData.contact.email})`,
      category: 'Actions',
      icon: Copy,
      action: () => {
        navigator.clipboard.writeText(personalData.contact.email);
        playSound('success');
        setCopiedAction('email');
        setTimeout(() => { setCopiedAction(null); onClose(); }, 800);
      }
    },
    {
      id: 'act-copy-phone',
      title: `Copy Phone (${personalData.contact.phoneFormatted})`,
      category: 'Actions',
      icon: Copy,
      action: () => {
        navigator.clipboard.writeText(personalData.contact.phone);
        playSound('success');
        setCopiedAction('phone');
        setTimeout(() => { setCopiedAction(null); onClose(); }, 800);
      }
    },
    {
      id: 'act-edit-github',
      title: `Customize GitHub URL (${githubUrl.replace('https://', '')})`,
      category: 'Configuration',
      icon: Github,
      action: () => { onClose(); onOpenGithubConfig(); }
    },
    {
      id: 'act-toggle-sound',
      title: soundEnabled ? 'Mute Interactive Sound Effects' : 'Enable Interactive Sound Effects',
      category: 'Preferences',
      icon: Volume2,
      action: () => { onToggleSound(); }
    }
  ];

  const filtered = actions.filter(a => 
    a.title.toLowerCase().includes(query.toLowerCase()) || 
    a.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-xl bg-zinc-950 border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden">
        {/* Search Input Bar */}
        <div className="relative border-b border-zinc-800 flex items-center px-4">
          <Search className="w-5 h-5 text-cyan-400 shrink-0 mr-3" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search (e.g. ParkEase, Resume, Java)..."
            className="w-full py-4 bg-transparent text-white placeholder-zinc-500 font-sans text-sm focus:outline-none"
          />
          <button
            onClick={() => { playSound('click'); onClose(); }}
            className="p-1 rounded-xl bg-zinc-900 text-zinc-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => { playSound('click'); item.action(); }}
                className="w-full p-3 rounded-2xl hover:bg-zinc-900 flex items-center justify-between text-left transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-cyan-400 group-hover:border-cyan-500/40 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </div>
                    <div className="text-[10px] font-mono text-zinc-500">
                      {item.category}
                    </div>
                  </div>
                </div>

                <div className="text-zinc-500 group-hover:text-white">
                  {copiedAction ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </div>
              </button>
            );
          })}

          {filtered.length === 0 && (
            <div className="py-8 text-center text-xs font-mono text-zinc-500">
              No matching commands found.
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-zinc-900/60 border-t border-zinc-800 flex items-center justify-between text-[11px] font-mono text-zinc-500">
          <span>Navigate with mouse or keyboard</span>
          <span>[ESC] to dismiss</span>
        </div>
      </div>
    </div>
  );
};
