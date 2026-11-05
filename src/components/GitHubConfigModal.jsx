import React, { useState } from 'react';
import { 
  X, 
  Check, 
  ExternalLink, 
  Save, 
  RefreshCw 
} from 'lucide-react';
import { Github } from './BrandIcons';
import { playSound } from '../utils/soundEffects';

export const GitHubConfigModal = ({ isOpen, onClose, currentUrl, onSave }) => {
  if (!isOpen) return null;

  const [inputUrl, setInputUrl] = useState(currentUrl);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    playSound('success');
    let formatted = inputUrl.trim();
    if (!formatted.startsWith('http://') && !formatted.startsWith('https://')) {
      formatted = `https://${formatted}`;
    }
    onSave(formatted);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1000);
  };

  const handleReset = () => {
    playSound('click');
    setInputUrl('https://github.com/ashvani-singh');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-md bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-7 shadow-2xl space-y-5">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
          <div className="flex items-center gap-2.5">
            <Github className="w-5 h-5 text-white" />
            <h3 className="font-heading font-bold text-white text-base">
              Customize GitHub Profile URL
            </h3>
          </div>
          <button
            onClick={() => { playSound('click'); onClose(); }}
            className="p-1 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-zinc-400 leading-relaxed">
          Update the editable GitHub profile placeholder. Any URL entered here will immediately update across all links, cards, and the command palette.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-[11px] font-mono text-zinc-400 block mb-1.5">
              GitHub URL
            </label>
            <input
              type="text"
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              placeholder="https://github.com/your-username"
              className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700/80 text-white font-mono text-xs focus:outline-none focus:border-cyan-400"
              required
            />
          </div>

          <div className="flex items-center justify-between text-xs pt-1">
            <button
              type="button"
              onClick={handleReset}
              className="text-zinc-500 hover:text-zinc-300 font-mono text-[11px] flex items-center gap-1"
            >
              <RefreshCw className="w-3 h-3" /> Reset Default
            </button>
            <a
              href={inputUrl}
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400 hover:underline font-mono text-[11px] flex items-center gap-1"
            >
              <span>Test Link</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="flex gap-2 pt-2">
            <button
              type="button"
              onClick={() => { playSound('click'); onClose(); }}
              className="flex-1 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-mono text-xs transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold font-mono text-xs transition-colors flex items-center justify-center gap-1.5 shadow-lg shadow-cyan-500/20"
            >
              {savedSuccess ? <Check className="w-3.5 h-3.5" /> : <Save className="w-3.5 h-3.5" />}
              <span>{savedSuccess ? 'Updated!' : 'Save URL'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
