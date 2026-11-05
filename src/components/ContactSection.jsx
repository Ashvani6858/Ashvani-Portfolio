import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  Send, 
  Clock, 
  Globe, 
  Sparkles, 
  ExternalLink, 
  MessageSquare, 
  MapPin, 
  ShieldCheck, 
  Edit3,
  Loader2,
  AlertCircle
} from 'lucide-react';
import { Github, Linkedin, LeetCode } from './BrandIcons';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';
import { playSound } from '../utils/soundEffects';

export const ContactSection = ({ personalData, githubUrl, onEditGithub }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  // Interactive Form State
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formTopic, setFormTopic] = useState('Full-Time Software Engineer Role');
  const [formMessage, setFormMessage] = useState('');
  
  // Status states
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionFeedback, setSubmissionFeedback] = useState(null);
  const [formError, setFormError] = useState(null);

  // Update IST Clock in real-time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setCurrentTime(new Intl.DateTimeFormat('en-IN', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    playSound('success');
    navigator.clipboard.writeText(personalData.contact.email);
    setCopiedEmail(true);
    try {
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.8 }
      });
    } catch (e) {}
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleCopyPhone = () => {
    playSound('success');
    navigator.clipboard.writeText(personalData.contact.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);

    // Validation
    if (!formName.trim() || !formEmail.trim() || !formMessage.trim()) {
      setFormError('Please fill in your name, email, and message.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formEmail.trim())) {
      setFormError('Please enter a valid email address.');
      return;
    }

    setIsLoading(true);
    playSound('click');

    // Check for EmailJS configuration
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      try {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formName,
            reply_to: formEmail,
            subject: formTopic,
            message: formMessage,
            to_email: personalData.contact.email
          },
          publicKey
        );

        playSound('success');
        try {
          confetti({
            particleCount: 70,
            spread: 80,
            origin: { y: 0.6 }
          });
        } catch (e) {}

        setSubmissionFeedback({
          type: 'emailjs',
          message: `Your message has been directly sent to ${personalData.contact.email}. Ashvani will get back to you shortly!`
        });
        setIsSubmitted(true);
        setIsLoading(false);
        return;
      } catch (err) {
        console.warn('EmailJS delivery encounter:', err);
        // Fall back gracefully to direct mailto dispatcher below
      }
    }

    // Direct Mailto Client Fallback (Guaranteed to work without exposing secret keys)
    setTimeout(() => {
      playSound('success');
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch (e) {}

      const subject = encodeURIComponent(`[Portfolio Inquiry] ${formTopic} - From ${formName}`);
      const body = encodeURIComponent(
        `Hi Ashvani,\n\nName: ${formName}\nEmail: ${formEmail}\nInquiry: ${formTopic}\n\nMessage:\n${formMessage}\n\n---\nSent via portfolio website contact form.`
      );
      window.location.href = `mailto:${personalData.contact.email}?subject=${subject}&body=${body}`;

      setSubmissionFeedback({
        type: 'mailto',
        message: `Your default email client has opened with your message drafted to ${personalData.contact.email}. Press Send there and Ashvani will receive it!`
      });
      setIsSubmitted(true);
      setIsLoading(false);
    }, 400);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute bottom-0 right-1/4 w-[700px] h-[500px] bg-gradient-to-t from-emerald-500/10 via-cyan-500/10 to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Mail className="w-4 h-4" />
            <span>Direct Channels</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Tell Me What You <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Need Built</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Open to Software Engineering internships, full-stack development, and enterprise Java roles.
          </p>
        </div>

        {/* Status Dashboard Bar */}
        <div className="mb-12 p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 grid grid-cols-1 sm:grid-cols-3 gap-4 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping shrink-0" />
            <div>
              <div className="text-xs font-mono text-zinc-500">Current Status</div>
              <div className="text-xs font-bold text-emerald-400 font-heading">
                {personalData.contact.status}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
            <div>
              <div className="text-xs font-mono text-zinc-500">Local Time (IST UTC+5:30)</div>
              <div className="text-xs font-bold text-white font-mono">
                {currentTime || 'Calculating...'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
            <div>
              <div className="text-xs font-mono text-zinc-500">Origin & Location</div>
              <div className="text-xs font-bold text-zinc-200 font-heading">
                {personalData.contact.location}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card with 1-click copy */}
            <div className="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/80 hover:border-emerald-500/40 transition-all space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">Direct Gmail</span>
                    <a 
                      href={`mailto:${personalData.contact.email}`}
                      className="text-sm font-bold text-white hover:text-emerald-300 font-mono transition-colors"
                    >
                      {personalData.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 pt-2 border-t border-zinc-800">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-mono text-zinc-200 transition-colors flex items-center justify-center gap-1.5"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied to Clipboard!' : 'Copy Email'}</span>
                </button>
                <a
                  href={`mailto:${personalData.contact.email}`}
                  className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs font-mono transition-colors flex items-center gap-1"
                >
                  <span>Open Gmail</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Phone Card with 1-click copy */}
            <div className="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/80 hover:border-emerald-500/40 transition-all space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">Phone & WhatsApp</span>
                    <a 
                      href={`tel:${personalData.contact.phone}`}
                      className="text-sm font-bold text-white hover:text-emerald-300 font-mono transition-colors"
                    >
                      {personalData.contact.phoneFormatted}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 pt-2 border-t border-zinc-800">
                <button
                  onClick={handleCopyPhone}
                  className="flex-1 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-mono text-zinc-200 transition-colors flex items-center justify-center gap-1.5"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPhone ? 'Copied to Clipboard!' : 'Copy Phone'}</span>
                </button>
                <a
                  href={`https://wa.me/${personalData.contact.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs font-mono transition-colors flex items-center gap-1"
                >
                  <span>WhatsApp</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Social & Coding Profiles: LinkedIn, GitHub & LeetCode */}
            <div className="grid grid-cols-3 gap-2.5">
              <a
                href={personalData.contact.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-blue-500/50 hover:bg-zinc-900 transition-all flex flex-col justify-between group"
              >
                <div className="flex justify-between items-center mb-2">
                  <Linkedin className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                  <ExternalLink className="w-3 h-3 text-zinc-500 group-hover:text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">LinkedIn</div>
                  <div className="text-[10px] font-mono text-zinc-500 truncate">Ashvani Singh</div>
                </div>
              </a>

              <div className="p-3.5 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 transition-all flex flex-col justify-between group relative">
                <div className="flex justify-between items-center mb-2">
                  <Github className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                  <button
                    onClick={onEditGithub}
                    title="Customize GitHub Profile URL"
                    className="p-0.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
                  >
                    <Edit3 className="w-2.5 h-2.5" />
                  </button>
                </div>
                <div>
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold text-white hover:text-emerald-300 block truncate"
                  >
                    GitHub
                  </a>
                  <div className="text-[10px] font-mono text-zinc-500 truncate">
                    Ashvani6858
                  </div>
                </div>
              </div>

              <a
                href={personalData.contact.leetCode}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-amber-500/50 hover:bg-zinc-900 transition-all flex flex-col justify-between group"
              >
                <div className="flex justify-between items-center mb-2">
                  <LeetCode className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                  <ExternalLink className="w-3 h-3 text-zinc-500 group-hover:text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">LeetCode</div>
                  <div className="text-[10px] font-mono text-zinc-500 truncate">Ashvani6858</div>
                </div>
              </a>
            </div>
          </div>

          {/* Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <h4 className="font-heading font-bold text-lg text-white">
                    Send an Instant Message
                  </h4>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  EmailJS & Gmail Enabled
                </span>
              </div>

              {formError && (
                <div className="mb-4 p-3 rounded-xl bg-red-950/50 border border-red-500/40 text-red-300 text-xs font-mono flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              {isSubmitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-7 h-7" />
                  </div>
                  <h5 className="font-heading font-bold text-xl text-white">Message Dispatched!</h5>
                  <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                    {submissionFeedback?.message}
                  </p>
                  <button
                    onClick={() => { setIsSubmitted(false); setSubmissionFeedback(null); }}
                    className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-mono text-white transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-mono text-zinc-400 block mb-1.5">Your Full Name *</label>
                      <input
                        type="text"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="e.g. Jane Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white font-sans text-xs focus:outline-none focus:border-emerald-400 transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-mono text-zinc-400 block mb-1.5">Your Email *</label>
                      <input
                        type="email"
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        placeholder="e.g. jane@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white font-sans text-xs focus:outline-none focus:border-emerald-400 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-zinc-400 block mb-1.5">Inquiry Subject</label>
                    <select
                      value={formTopic}
                      onChange={(e) => setFormTopic(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-300 font-sans text-xs focus:outline-none focus:border-emerald-400 transition-colors"
                    >
                      <option value="Full-Time Software Engineer Role">Full-Time Software Engineer Role</option>
                      <option value="Software Engineering Internship">Software Engineering Internship</option>
                      <option value="Full-Stack Web Development Project">Full-Stack Project Collaboration</option>
                      <option value="General Technical Inquiry">Technical Discussion / Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-zinc-400 block mb-1.5">Your Message *</label>
                    <textarea
                      rows={4}
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      placeholder="Tell me about the engineering opportunity, project requirements, or technical challenge..."
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white font-sans text-xs focus:outline-none focus:border-emerald-400 transition-colors resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 text-zinc-950 font-bold text-xs font-mono uppercase tracking-wider shadow-lg shadow-emerald-500/25 hover:opacity-95 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-zinc-950" />
                        <span>Transmitting Message to Ashvani...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Dispatch Message to Ashvani's Gmail</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
