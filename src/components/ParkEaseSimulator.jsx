import React, { useState } from 'react';
import { 
  Car, 
  QrCode, 
  ShieldCheck, 
  CheckCircle, 
  AlertCircle, 
  Clock, 
  CreditCard, 
  Key, 
  Radio, 
  Sparkles,
  ArrowRight,
  TrendingUp,
  ScanLine,
  RefreshCw
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { playSound } from '../utils/soundEffects';

export const ParkEaseSimulator = () => {
  const [activeTab, setActiveTab] = useState('driver'); // 'driver' or 'admin'
  const [selectedSlot, setSelectedSlot] = useState('A-04');
  const [vehicleNo, setVehicleNo] = useState('UP-16-AS-2027');
  const [durationHours, setDurationHours] = useState(2);
  const [bookedTicket, setBookedTicket] = useState(null);
  const [adminScanStatus, setAdminScanStatus] = useState(null);

  // Initial slot layout
  const [slots, setSlots] = useState([
    { id: 'A-01', status: 'occupied', vehicle: 'DL-01-AB-1234' },
    { id: 'A-02', status: 'occupied', vehicle: 'HR-26-DK-9871' },
    { id: 'A-03', status: 'available', vehicle: null },
    { id: 'A-04', status: 'available', vehicle: null },
    { id: 'A-05', status: 'occupied', vehicle: 'UP-14-CC-5432' },
    { id: 'A-06', status: 'available', vehicle: null },
    { id: 'A-07', status: 'available', vehicle: null },
    { id: 'A-08', status: 'occupied', vehicle: 'DL-04-XY-8812' }
  ]);

  const handleSelectSlot = (slot) => {
    if (slot.status === 'occupied') {
      playSound('click');
      alert(`Slot ${slot.id} is currently occupied by ${slot.vehicle}. Atomic concurrency locks prevent double-booking!`);
      return;
    }
    playSound('click');
    setSelectedSlot(slot.id);
  };

  const handleBookSlot = (e) => {
    e.preventDefault();
    if (!selectedSlot) return;

    playSound('success');
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch (e) {}

    const ticketId = `PE-TKT-${Math.floor(100000 + Math.random() * 900000)}`;
    const newTicket = {
      id: ticketId,
      slot: selectedSlot,
      vehicle: vehicleNo,
      duration: durationHours,
      price: durationHours * 50,
      timestamp: new Date().toLocaleTimeString(),
      status: 'CONFIRMED'
    };

    setBookedTicket(newTicket);

    // Update slots
    setSlots(prev => prev.map(s => s.id === selectedSlot ? { ...s, status: 'occupied', vehicle: vehicleNo } : s));
  };

  const handleSimulateScan = () => {
    playSound('success');
    setAdminScanStatus({
      success: true,
      message: `Verified Ticket ${bookedTicket ? bookedTicket.id : 'PE-TKT-884912'}: Gate Barrier Lifted. Welcome!`
    });
    setTimeout(() => {
      setAdminScanStatus(null);
    }, 4000);
  };

  const resetDemo = () => {
    playSound('click');
    setBookedTicket(null);
    setSelectedSlot('A-04');
    setSlots([
      { id: 'A-01', status: 'occupied', vehicle: 'DL-01-AB-1234' },
      { id: 'A-02', status: 'occupied', vehicle: 'HR-26-DK-9871' },
      { id: 'A-03', status: 'available', vehicle: null },
      { id: 'A-04', status: 'available', vehicle: null },
      { id: 'A-05', status: 'occupied', vehicle: 'UP-14-CC-5432' },
      { id: 'A-06', status: 'available', vehicle: null },
      { id: 'A-07', status: 'available', vehicle: null },
      { id: 'A-08', status: 'occupied', vehicle: 'DL-04-XY-8812' }
    ]);
  };

  return (
    <div className="rounded-3xl bg-zinc-950/90 border border-zinc-800 p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
      {/* Simulator Navigation Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
            <Car className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-heading font-bold text-white text-base flex items-center gap-2">
              ParkEase Interactive Demo System
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500/40 text-cyan-400">
                LIVE SANDBOX
              </span>
            </h4>
            <p className="text-xs text-zinc-400">
              Test slot selection, atomic concurrency check, and digital QR ticket verification
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="bg-zinc-900 p-1 rounded-xl border border-zinc-800 flex items-center gap-1">
            <button
              onClick={() => { playSound('click'); setActiveTab('driver'); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'driver' 
                  ? 'bg-cyan-500 text-zinc-950 font-bold shadow-md shadow-cyan-500/20' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Driver View
            </button>
            <button
              onClick={() => { playSound('click'); setActiveTab('admin'); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'admin' 
                  ? 'bg-cyan-500 text-zinc-950 font-bold shadow-md shadow-cyan-500/20' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Admin Radar
            </button>
          </div>

          <button
            onClick={resetDemo}
            title="Reset Simulator"
            className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {activeTab === 'driver' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Interactive Parking Grid (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between text-xs text-zinc-400">
              <span className="font-mono">PARKING LOT: BLOCK A (FLOOR 1)</span>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  Available
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                  Occupied
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 ring-2 ring-cyan-400/40" />
                  Selected
                </span>
              </div>
            </div>

            {/* Parking bay visual layout */}
            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
              <div className="grid grid-cols-4 gap-3">
                {slots.map((slot) => {
                  const isSelected = selectedSlot === slot.id;
                  const isOccupied = slot.status === 'occupied';

                  return (
                    <button
                      key={slot.id}
                      onClick={() => handleSelectSlot(slot)}
                      disabled={isOccupied}
                      className={`relative h-24 rounded-xl border flex flex-col justify-between p-2.5 transition-all text-left ${
                        isSelected
                          ? 'bg-cyan-500/15 border-cyan-400 shadow-lg shadow-cyan-500/20 ring-2 ring-cyan-400/50'
                          : isOccupied
                          ? 'bg-zinc-950/80 border-zinc-800/80 cursor-not-allowed opacity-60'
                          : 'bg-emerald-950/20 border-emerald-500/30 hover:border-emerald-400 hover:bg-emerald-950/40'
                      }`}
                    >
                      <div className="flex justify-between items-center w-full">
                        <span className={`text-xs font-mono font-bold ${isSelected ? 'text-cyan-400' : isOccupied ? 'text-zinc-500' : 'text-emerald-400'}`}>
                          {slot.id}
                        </span>
                        <Car className={`w-3.5 h-3.5 ${isSelected ? 'text-cyan-400' : isOccupied ? 'text-zinc-600' : 'text-emerald-500'}`} />
                      </div>

                      <div className="text-[10px] font-mono">
                        {isOccupied ? (
                          <span className="text-zinc-500 truncate block">{slot.vehicle}</span>
                        ) : (
                          <span className="text-emerald-400 font-semibold">₹50/hr</span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Driving lane label */}
              <div className="mt-4 pt-3 border-t border-dashed border-zinc-800 flex items-center justify-center gap-2 text-zinc-600 font-mono text-[10px] uppercase tracking-widest">
                <span>◀ DRIVING LANE · TWO WAY TRAFFIC ▶</span>
              </div>
            </div>
          </div>

          {/* Booking & Ticket Panel (5 cols) */}
          <div className="lg:col-span-5">
            {!bookedTicket ? (
              <form onSubmit={handleBookSlot} className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-4">
                <div className="flex items-center justify-between">
                  <h5 className="font-heading font-bold text-sm text-white">Reserve Selected Spot</h5>
                  <span className="text-xs font-mono font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500/30">
                    Slot {selectedSlot}
                  </span>
                </div>

                <div>
                  <label className="text-[11px] font-mono text-zinc-400 block mb-1">Vehicle License Plate</label>
                  <input
                    type="text"
                    value={vehicleNo}
                    onChange={(e) => setVehicleNo(e.target.value.toUpperCase())}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-950 border border-zinc-700/80 text-white font-mono text-xs focus:outline-none focus:border-cyan-400"
                    placeholder="e.g. UP-16-AS-2027"
                    required
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono text-zinc-400 block mb-1">Reservation Duration</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 4].map((hrs) => (
                      <button
                        type="button"
                        key={hrs}
                        onClick={() => { playSound('click'); setDurationHours(hrs); }}
                        className={`py-1.5 rounded-lg text-xs font-mono border transition-all ${
                          durationHours === hrs 
                            ? 'bg-cyan-500 text-zinc-950 font-bold border-cyan-400' 
                            : 'bg-zinc-950 text-zinc-300 border-zinc-800 hover:border-zinc-700'
                        }`}
                      >
                        {hrs} {hrs === 1 ? 'Hour' : 'Hours'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price summary */}
                <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 flex justify-between items-center text-xs">
                  <span className="text-zinc-400">Total Demo Charge:</span>
                  <span className="font-heading font-bold text-base text-emerald-400">₹{durationHours * 50}</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-zinc-950 font-bold text-xs uppercase tracking-wider font-mono shadow-lg shadow-cyan-500/20 hover:opacity-95 transition-all flex items-center justify-center gap-1.5"
                >
                  <CreditCard className="w-3.5 h-3.5" /> Confirm & Issue QR Ticket
                </button>
              </form>
            ) : (
              /* Generated Digital QR Ticket */
              <div className="p-5 rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-cyan-500/40 space-y-4 shadow-xl">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                    <CheckCircle className="w-4 h-4" />
                    <span>Booking Confirmed</span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500">{bookedTicket.id}</span>
                </div>

                {/* Simulated QR Code Canvas */}
                <div className="flex flex-col items-center justify-center py-2">
                  <div className="p-3 rounded-2xl bg-white shadow-xl flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-28 h-28 text-zinc-950 fill-current">
                      {/* Stylized QR Code Path */}
                      <rect x="0" y="0" width="30" height="30" fill="#000" rx="3" />
                      <rect x="5" y="5" width="20" height="20" fill="#fff" rx="2" />
                      <rect x="9" y="9" width="12" height="12" fill="#000" rx="1" />

                      <rect x="70" y="0" width="30" height="30" fill="#000" rx="3" />
                      <rect x="75" y="5" width="20" height="20" fill="#fff" rx="2" />
                      <rect x="79" y="9" width="12" height="12" fill="#000" rx="1" />

                      <rect x="0" y="70" width="30" height="30" fill="#000" rx="3" />
                      <rect x="5" y="75" width="20" height="20" fill="#fff" rx="2" />
                      <rect x="9" y="79" width="12" height="12" fill="#000" rx="1" />

                      <rect x="36" y="10" width="8" height="8" fill="#000" />
                      <rect x="50" y="10" width="8" height="18" fill="#000" />
                      <rect x="36" y="24" width="8" height="8" fill="#000" />
                      <rect x="10" y="40" width="16" height="8" fill="#000" />
                      <rect x="36" y="40" width="28" height="20" fill="#000" rx="2" />
                      <rect x="70" y="40" width="12" height="8" fill="#000" />
                      <rect x="70" y="55" width="20" height="10" fill="#000" />
                      <rect x="40" y="70" width="15" height="15" fill="#000" />
                      <rect x="65" y="75" width="25" height="15" fill="#000" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400 mt-2">
                    Scan at Entrance Barrier or Admin Scanner
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono p-3 rounded-xl bg-zinc-950 border border-zinc-800">
                  <div>
                    <span className="text-zinc-500">Slot:</span> <span className="text-cyan-400 font-bold">{bookedTicket.slot}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500">Plate:</span> <span className="text-white">{bookedTicket.vehicle}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500">Duration:</span> <span className="text-white">{bookedTicket.duration}h</span>
                  </div>
                  <div>
                    <span className="text-zinc-500">Paid:</span> <span className="text-emerald-400">₹{bookedTicket.price}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => { playSound('click'); setActiveTab('admin'); }}
                    className="flex-1 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-mono text-zinc-200 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <ScanLine className="w-3.5 h-3.5 text-cyan-400" /> Test In Admin Scanner
                  </button>
                  <button
                    onClick={resetDemo}
                    className="px-3 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white text-xs font-mono"
                  >
                    New
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Admin Radar & Analytics View */
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800">
              <div className="text-xs font-mono text-zinc-400 flex items-center justify-between">
                <span>Facility Occupancy</span>
                <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
              </div>
              <div className="text-2xl font-heading font-black text-white mt-1">
                {Math.round((slots.filter(s => s.status === 'occupied').length / slots.length) * 100)}%
              </div>
              <div className="text-[11px] text-zinc-500 font-mono mt-0.5">
                {slots.filter(s => s.status === 'occupied').length} of {slots.length} bays occupied
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800">
              <div className="text-xs font-mono text-zinc-400 flex items-center justify-between">
                <span>Today's Revenue</span>
                <span className="text-[10px] text-emerald-400 font-mono">LIVE</span>
              </div>
              <div className="text-2xl font-heading font-black text-emerald-400 mt-1">
                ₹14,850
              </div>
              <div className="text-[11px] text-zinc-500 font-mono mt-0.5">
                Prisma ORM transactional ledger
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800">
              <div className="text-xs font-mono text-zinc-400 flex items-center justify-between">
                <span>Security Engine</span>
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              </div>
              <div className="text-2xl font-heading font-black text-cyan-300 mt-1">
                Active RBAC
              </div>
              <div className="text-[11px] text-zinc-500 font-mono mt-0.5">
                JWT Auth & Concurrency Locks
              </div>
            </div>
          </div>

          {/* Admin Scanner Simulator */}
          <div className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h5 className="font-heading font-bold text-white text-sm flex items-center gap-2">
                <ScanLine className="w-4 h-4 text-cyan-400" />
                Physical Gate QR Scanner Simulator
              </h5>
              <p className="text-xs text-zinc-400 mt-0.5">
                Simulate reading the digital QR code upon vehicle arrival at barrier.
              </p>
            </div>

            <button
              onClick={handleSimulateScan}
              className="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold text-xs font-mono uppercase tracking-wider shadow-lg shadow-cyan-500/20 transition-all flex items-center gap-2 shrink-0"
            >
              <QrCode className="w-4 h-4" /> Simulate QR Scan Check-In
            </button>
          </div>

          {adminScanStatus && (
            <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/50 text-emerald-300 text-xs font-mono flex items-center gap-2 animate-bounce">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>{adminScanStatus.message}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
