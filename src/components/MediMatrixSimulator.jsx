import React, { useState } from 'react';
import { 
  Activity, 
  Stethoscope, 
  UserCheck, 
  Send, 
  Terminal, 
  Lock, 
  Database, 
  Server, 
  CheckCircle, 
  Clock, 
  Sparkles,
  RefreshCw,
  FileText
} from 'lucide-react';
import { playSound } from '../utils/soundEffects';

export const MediMatrixSimulator = () => {
  const [activeTab, setActiveTab] = useState('queue'); // 'queue' or 'api'
  const [selectedDept, setSelectedDept] = useState('Cardiology');
  const [patientName, setPatientName] = useState('Rahul Verma');
  const [activeTokenNumber, setActiveTokenNumber] = useState(14);
  const [issuedTokens, setIssuedTokens] = useState([
    { token: '#14', patient: 'Rahul Verma', dept: 'Cardiology', doctor: 'Dr. S. Sharma (MD)', status: 'In Consultation', time: '14:30' },
    { token: '#15', patient: 'Pooja Nair', dept: 'Cardiology', doctor: 'Dr. S. Sharma (MD)', status: 'Waiting (Next)', time: '14:45' },
    { token: '#16', patient: 'Ankit Gupta', dept: 'Cardiology', doctor: 'Dr. S. Sharma (MD)', status: 'Waiting', time: '15:00' },
  ]);

  // Spring Boot API tester state
  const [selectedEndpoint, setSelectedEndpoint] = useState('/api/v1/patients/queue/live');
  const [apiResponse, setApiResponse] = useState(null);
  const [isLoadingApi, setIsLoadingApi] = useState(false);

  const departments = [
    { name: 'Cardiology', doctor: 'Dr. S. Sharma (MD)', room: 'OPD-102', waitTime: '15 min' },
    { name: 'Neurology', doctor: 'Dr. A. Kapoor (DM)', room: 'OPD-204', waitTime: '30 min' },
    { name: 'Orthopedics', doctor: 'Dr. R. Verma (MS)', room: 'OPD-108', waitTime: '10 min' },
  ];

  const handleIssueToken = (e) => {
    e.preventDefault();
    if (!patientName.trim()) return;

    playSound('success');
    const nextTokenNum = `#${issuedTokens.length + 15}`;
    const targetDept = departments.find(d => d.name === selectedDept);

    const newToken = {
      token: nextTokenNum,
      patient: patientName,
      dept: selectedDept,
      doctor: targetDept.doctor,
      status: 'Registered / In Queue',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setIssuedTokens(prev => [...prev, newToken]);
    setPatientName('');
  };

  const runApiTest = (endpoint) => {
    playSound('click');
    setSelectedEndpoint(endpoint);
    setIsLoadingApi(true);

    setTimeout(() => {
      playSound('success');
      setIsLoadingApi(false);

      if (endpoint === '/api/v1/patients/queue/live') {
        setApiResponse({
          status: 200,
          statusText: 'OK',
          latency: '24ms',
          timestamp: new Date().toISOString(),
          headers: {
            'content-type': 'application/json',
            'x-spring-security': 'JWT_ROLE_DOCTOR_VERIFIED',
            'x-database-pool': 'HikariCP-PostgreSQL-Connection-4'
          },
          body: {
            department: selectedDept,
            activeConsultationToken: '#14',
            queueLength: issuedTokens.length,
            patientsWaiting: issuedTokens.map(t => ({ token: t.token, name: t.patient, status: t.status }))
          }
        });
      } else if (endpoint === '/api/v1/doctors/availability') {
        setApiResponse({
          status: 200,
          statusText: 'OK',
          latency: '18ms',
          timestamp: new Date().toISOString(),
          headers: {
            'content-type': 'application/json',
            'x-spring-cache': 'HIT'
          },
          body: {
            availableDoctors: departments.map(d => ({
              specialty: d.name,
              consultant: d.doctor,
              opdRoom: d.room,
              estimatedWait: d.waitTime,
              status: 'ON_DUTY'
            }))
          }
        });
      } else if (endpoint === '/api/v1/auth/jwt-claims') {
        setApiResponse({
          status: 200,
          statusText: 'OK',
          latency: '12ms',
          timestamp: new Date().toISOString(),
          headers: {
            'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
            'x-auth-provider': 'SpringSecurity-JWT-FilterChain'
          },
          body: {
            sub: 'ashvani.singh@medimatrix.internal',
            roles: ['ROLE_ADMIN', 'ROLE_HEALTHCARE_ENGINEER'],
            institution: 'GL Bajaj ITM Hospital Partner Demo',
            exp: Math.floor(Date.now() / 1000) + 86400,
            accessLevel: 'FULL_EHR_CLINICAL_WRITE'
          }
        });
      }
    }, 400);
  };

  return (
    <div className="rounded-3xl bg-zinc-950/90 border border-zinc-800 p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-heading font-bold text-white text-base flex items-center gap-2">
              MediMatrix Enterprise Clinical Console
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950 border border-purple-500/40 text-purple-400">
                SPRING BOOT & POSTGRESQL
              </span>
            </h4>
            <p className="text-xs text-zinc-400">
              Interactive OPD clinic queue scheduler & live Spring Security REST API sandbox
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="bg-zinc-900 p-1 rounded-xl border border-zinc-800 flex items-center gap-1">
            <button
              onClick={() => { playSound('click'); setActiveTab('queue'); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'queue' 
                  ? 'bg-purple-500 text-zinc-950 font-bold shadow-md shadow-purple-500/20' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              OPD Queue Monitor
            </button>
            <button
              onClick={() => { playSound('click'); setActiveTab('api'); if (!apiResponse) runApiTest('/api/v1/patients/queue/live'); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'api' 
                  ? 'bg-purple-500 text-zinc-950 font-bold shadow-md shadow-purple-500/20' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Spring Boot API Inspector
            </button>
          </div>
        </div>
      </div>

      {activeTab === 'queue' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Department and Token Issuance (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-3">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                Select Hospital Department
              </span>
              <div className="space-y-2">
                {departments.map((dept) => {
                  const isSelected = selectedDept === dept.name;
                  return (
                    <button
                      key={dept.name}
                      onClick={() => { playSound('click'); setSelectedDept(dept.name); }}
                      className={`w-full p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
                        isSelected 
                          ? 'bg-purple-950/40 border-purple-500/60 text-white shadow-md' 
                          : 'bg-zinc-950/60 border-zinc-800/80 text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-bold text-white">{dept.name}</div>
                        <div className="text-[11px] font-mono text-zinc-400">{dept.doctor} · {dept.room}</div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-purple-300 border border-zinc-800">
                        {dept.waitTime}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Token Registration */}
            <form onSubmit={handleIssueToken} className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-3">
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                Admit Patient / Issue OPD Token
              </div>
              <div>
                <input
                  type="text"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder="Patient Full Name"
                  className="w-full px-3 py-2 rounded-xl bg-zinc-950 border border-zinc-700/80 text-white font-mono text-xs focus:outline-none focus:border-purple-400"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold text-xs font-mono uppercase tracking-wider shadow-lg shadow-purple-500/20 hover:opacity-95 transition-all flex items-center justify-center gap-1.5"
              >
                <Stethoscope className="w-3.5 h-3.5" /> Issue OPD Queue Pass
              </button>
            </form>
          </div>

          {/* Live Queue Display (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between text-xs text-zinc-400">
              <span className="font-mono">{selectedDept.toUpperCase()} · LIVE CONSULTATION QUEUE</span>
              <span className="flex items-center gap-1.5 text-emerald-400 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Live Sync (JPA Audited)
              </span>
            </div>

            <div className="space-y-2">
              {issuedTokens.map((item, index) => {
                const isCurrent = item.token === '#14';
                return (
                  <div
                    key={index}
                    className={`p-3.5 rounded-2xl border transition-all flex items-center justify-between ${
                      isCurrent
                        ? 'bg-purple-950/30 border-purple-500/60 shadow-lg shadow-purple-500/10'
                        : 'bg-zinc-900/60 border-zinc-800/80'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono font-bold text-xs ${
                        isCurrent ? 'bg-purple-500 text-zinc-950' : 'bg-zinc-800 text-zinc-300'
                      }`}>
                        {item.token}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white flex items-center gap-2">
                          {item.patient}
                          {isCurrent && (
                            <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[9px] font-mono">
                              WITH DOCTOR
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-zinc-400 font-mono">
                          {item.doctor} · {item.time}
                        </div>
                      </div>
                    </div>

                    <span className="text-[11px] font-mono text-zinc-400">
                      {item.status}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        /* Spring Boot REST API Inspector */
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {[
              { path: '/api/v1/patients/queue/live', method: 'GET' },
              { path: '/api/v1/doctors/availability', method: 'GET' },
              { path: '/api/v1/auth/jwt-claims', method: 'GET' }
            ].map((ep) => (
              <button
                key={ep.path}
                onClick={() => runApiTest(ep.path)}
                className={`px-3 py-1.5 rounded-xl border text-xs font-mono flex items-center gap-2 transition-all ${
                  selectedEndpoint === ep.path
                    ? 'bg-purple-950/60 border-purple-500 text-purple-300 shadow-sm'
                    : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white'
                }`}
              >
                <span className="font-bold text-emerald-400">{ep.method}</span>
                <span>{ep.path}</span>
              </button>
            ))}
          </div>

          {/* Terminal API Output Window */}
          <div className="rounded-2xl bg-zinc-950 border border-zinc-800 p-4 font-mono text-xs overflow-x-auto shadow-inner">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-3 text-zinc-500 text-[11px]">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-purple-400" />
                <span>Spring Boot 3.x embedded Tomcat / HikariCP</span>
              </div>
              {apiResponse && (
                <div className="flex items-center gap-3">
                  <span className="text-emerald-400 font-bold">{apiResponse.status} {apiResponse.statusText}</span>
                  <span className="text-zinc-400">{apiResponse.latency}</span>
                </div>
              )}
            </div>

            {isLoadingApi ? (
              <div className="py-8 text-center text-zinc-500 flex items-center justify-center gap-2">
                <RefreshCw className="w-4 h-4 animate-spin text-purple-400" />
                <span>Executing Spring Boot REST controller dispatch...</span>
              </div>
            ) : apiResponse ? (
              <pre className="text-zinc-300 leading-relaxed overflow-x-auto">
                {JSON.stringify(apiResponse, null, 2)}
              </pre>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};
