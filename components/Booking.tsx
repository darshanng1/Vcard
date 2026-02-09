
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SERVICES, COMPANY_INFO } from '../constants';

const Booking: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selection, setSelection] = useState({ service: '', time: '' });

  return (
    <div className="h-full flex flex-col bg-zinc-950 text-white">
      {/* Mini Nav */}
      <nav className="p-8 flex items-center justify-between">
        <Link to="/" className="text-[9px] font-black uppercase tracking-widest text-zinc-500">Dashboard</Link>
        <span className="text-[9px] font-black uppercase tracking-widest text-emerald-500">Scheduler</span>
      </nav>

      <div className="flex-grow px-8 overflow-y-auto no-scrollbar">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div 
              key="1" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, y: -20 }}
              className="pt-4 pb-20"
            >
              <h1 className="text-heading text-4xl font-black mb-8 leading-tight tracking-tighter">Choose Audit<br/>Protocol.</h1>
              <div className="space-y-3">
                {SERVICES.map(s => (
                  <button 
                    key={s.id} 
                    onClick={() => { setSelection({...selection, service: s.title}); setStep(2); }}
                    className="w-full flex items-center justify-between glass p-6 rounded-3xl border-white/5 hover:border-emerald-500/40 transition-all text-left group"
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl filter grayscale brightness-150 group-hover:grayscale-0 transition-all">{s.icon}</span>
                      <span className="text-sm font-bold">{s.title}</span>
                    </div>
                    <svg className="w-5 h-5 text-zinc-700 group-hover:text-emerald-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              key="2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
              className="pt-4"
            >
              <h1 className="text-heading text-4xl font-black mb-4 tracking-tighter">Timeline.</h1>
              <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-10">Select preferred dispatch slot</p>
              
              <div className="grid grid-cols-2 gap-3 mb-12">
                {['09:00 AM', '11:00 AM', '02:00 PM', '04:00 PM', '06:00 PM'].map(t => (
                  <button 
                    key={t}
                    onClick={() => { setSelection({...selection, time: t}); setStep(3); }}
                    className="glass py-6 rounded-3xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                  >
                    {t}
                  </button>
                ))}
              </div>

              <button onClick={() => setStep(1)} className="text-[9px] font-black uppercase tracking-widest text-zinc-600">Re-scope protocol</button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
              key="3" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              className="text-center pt-20"
            >
              <div className="w-20 h-20 bg-emerald-500 text-white rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-emerald-500/20">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h2 className="text-heading text-3xl font-black mb-4">Registry Success.</h2>
              <p className="text-zinc-500 text-xs leading-relaxed max-w-xs mx-auto mb-12 uppercase tracking-widest font-bold">
                Engagement for {selection.service} at {selection.time} logged to {COMPANY_INFO.shortName}.
              </p>
              <Link to="/" className="inline-block bg-white text-black px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest shadow-2xl">Return to Dashboard</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Booking;
