import React from 'react';
import { 
  X, 
  Printer, 
  Mail, 
  Phone, 
  GraduationCap, 
  CheckCircle2, 
  ExternalLink,
  Download,
  Briefcase
} from 'lucide-react';
import { Github, Linkedin, LeetCode } from './BrandIcons';
import { playSound } from '../utils/soundEffects';

export const ResumeModal = ({ isOpen, onClose, personalData, githubUrl }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    playSound('click');
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Modal Card Container */}
      <div className="w-full max-w-4xl max-h-[90vh] bg-zinc-950 border border-zinc-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/50">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-400" />
            <h3 className="font-heading font-bold text-white text-sm">
              Ashvani Singh — Official Resume
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-zinc-950 font-mono text-xs font-bold transition-all flex items-center gap-1.5 shadow-md shadow-emerald-500/20"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={() => { playSound('click'); onClose(); }}
              className="p-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable & Scrollable Resume Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 text-zinc-300 font-sans text-xs sm:text-sm bg-[#0a0a0d]">
          {/* Resume Header */}
          <div className="border-b border-zinc-800 pb-6 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-heading font-black text-white">
                  {personalData.name}
                </h1>
                <p className="text-emerald-400 font-medium text-sm sm:text-base mt-0.5">
                  {personalData.title}
                </p>
              </div>

              <div className="space-y-1 font-mono text-xs text-zinc-400 text-left sm:text-right">
                <div>Email: {personalData.contact.email}</div>
                <div>Phone: {personalData.contact.phoneFormatted}</div>
                <div>Gorakhpur, Uttar Pradesh, India</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-3 text-xs font-mono text-emerald-400">
              <a href={personalData.contact.linkedIn} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                <Linkedin className="w-3 h-3" /> LinkedIn Profile
              </a>
              <a href={githubUrl} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                <Github className="w-3 h-3" /> GitHub Profile
              </a>
              <a href={personalData.contact.leetCode} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1 text-amber-400">
                <LeetCode className="w-3 h-3" /> LeetCode Profile
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-zinc-800 pb-1 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" /> Education
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div>
                <span className="font-bold text-white text-sm">
                  {personalData.education.degree}
                </span>
                <div className="text-zinc-400">
                  {personalData.education.institution}
                </div>
              </div>
              <div className="text-left sm:text-right font-mono text-xs text-zinc-400">
                <div>{personalData.education.period}</div>
                <div className="text-cyan-400 font-bold">CGPA: {personalData.education.cgpa} / 10</div>
              </div>
            </div>
          </div>

          {/* Technical Skills Summary */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-zinc-800 pb-1">
              Technical Competencies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="font-bold text-white font-mono">Languages:</span> Java, Python, C
              </div>
              <div>
                <span className="font-bold text-white font-mono">Frontend:</span> React.js, HTML5, CSS3
              </div>
              <div>
                <span className="font-bold text-white font-mono">Backend:</span> Spring Boot, Node.js, Express.js, REST APIs
              </div>
              <div>
                <span className="font-bold text-white font-mono">Databases:</span> MySQL, PostgreSQL, Prisma ORM
              </div>
              <div>
                <span className="font-bold text-white font-mono">Security:</span> JWT Authentication, bcrypt, Role-Based Access Control (RBAC)
              </div>
              <div>
                <span className="font-bold text-white font-mono">Testing:</span> JUnit, Postman
              </div>
              <div>
                <span className="font-bold text-white font-mono">Core CS:</span> Data Structures, Algorithms, OOP, DBMS
              </div>
              <div>
                <span className="font-bold text-white font-mono">Tools & Cloud:</span> Git, GitHub, VS Code, Render, Aiven
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-6">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-zinc-800 pb-1 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" /> Technical Projects
            </h2>

            {/* Project 1 */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <span className="font-bold text-white text-sm">PARKEASE</span> — Smart Parking Management & Booking Platform
                  <div className="text-xs font-mono text-cyan-400 mt-0.5">
                    React.js · Node.js · Express.js · MySQL · Prisma ORM · JWT · bcrypt
                  </div>
                </div>
                <span className="text-xs font-mono text-zinc-500">2024</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-zinc-300 text-xs">
                <li>Developed full-stack parking management platform allowing users to search facilities, view real-time slot availability, and reserve parking spots.</li>
                <li>Engineered atomic database transaction locks in Prisma to guarantee 100% prevention of overlapping slot reservations.</li>
                <li>Implemented secure authentication with JWT and bcrypt password encryption alongside role-based access control for customers and administrators.</li>
                <li>Created vehicle registration, digital QR-based parking tickets, and an administrative dashboard for real-time occupancy and revenue telemetry.</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <span className="font-bold text-white text-sm">MEDIMATRIX</span> — Hospital Service Management System
                  <div className="text-xs font-mono text-purple-400 mt-0.5">
                    React.js · Spring Boot · PostgreSQL · JWT · Spring Security · HTML5 · CSS3
                  </div>
                </div>
                <span className="text-xs font-mono text-zinc-500">2025</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-zinc-300 text-xs">
                <li>Architected hospital service management ecosystem supporting patient admission workflows and Electronic Health Record registries.</li>
                <li>Engineered doctor OPD scheduling with dynamic slot allocation and real-time consultation queue tracking.</li>
                <li>Secured RESTful endpoints using Spring Security and stateless JWT authentication with role hierarchies (Admin, Doctor, Receptionist, Patient).</li>
                <li>Configured normalized PostgreSQL database schemas ensuring ACID compliance and automated transaction rollbacks.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
