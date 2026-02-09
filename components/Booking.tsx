
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SERVICES, CONTACT_INFO, COMPANY_INFO } from '../constants';

const Booking: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    propertyType: 'Corporate HQ',
    severity: 'Audit Compliance',
    name: '',
    contact: '',
    address: '',
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(4);
  };

  return (
    <div className="bg-zinc-950 min-h-screen text-white">
      <div className="pt-10 px-8 pb-32">
        <Link to="/" className="inline-flex items-center text-zinc-500 font-bold text-[10px] uppercase tracking-widest mb-12 hover:text-emerald-500 transition-colors">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"></path></svg>
          Exit Consultation
        </Link>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h1 className="text-heading text-4xl font-black text-white leading-tight mb-4 tracking-tighter">Strategic Audit<br/><span className="text-emerald-500">Selection.</span></h1>
              <p className="text-zinc-500 text-sm mb-12 font-medium">Which hygiene protocol requires assessment?</p>
              <div className="space-y-4">
                {SERVICES.map(s => (
                  <button 
                    key={s.id} 
                    onClick={() => { setFormData({...formData, service: s.title}); nextStep(); }}
                    className="w-full flex items-center justify-between glass p-6 rounded-3xl text-left border-white/5 hover:border-emerald-500/30 transition-all"
                  >
                    <div className="flex items-center space-x-5">
                      <span className="text-3xl filter grayscale brightness-150">{s.icon}</span>
                      <span className="font-bold text-white text-sm">{s.title}</span>
                    </div>
                    <svg className="w-5 h-5 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h2 className="text-heading text-3xl font-black text-white mb-2">Technical Scoping.</h2>
              <p className="text-zinc-500 text-sm mb-12 font-medium tracking-tight">Qualifying the audit parameters for {COMPANY_INFO.shortName}.</p>
              
              <div className="space-y-12">
                <div>
                  <label className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-600 mb-6 block">Facility Profile</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['Corporate HQ', 'Data Center', 'Factory', 'Premium Estate'].map(t => (
                      <button 
                        key={t} 
                        onClick={() => setFormData({...formData, propertyType: t})}
                        className={`px-4 py-4 rounded-2xl font-bold text-[10px] uppercase tracking-widest transition-all border ${formData.propertyType === t ? 'bg-white text-zinc-950 border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]' : 'bg-white/5 text-zinc-500 border-white/5'}`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-600 mb-6 block">Strategic Urgency</label>
                  <div className="flex gap-3">
                    {['Routine', 'Audit Compliance', 'Emergency'].map(s => (
                      <button 
                        key={s} 
                        onClick={() => setFormData({...formData, severity: s})}
                        className={`flex-1 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all border ${formData.severity === s ? 'bg-emerald-600 text-white border-emerald-600 shadow-[0_0_20px_rgba(16,185,129,0.3)]' : 'bg-white/5 text-zinc-500 border-white/5'}`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-20 flex space-x-3">
                <button onClick={prevStep} className="flex-1 py-5 rounded-full font-black text-xs uppercase tracking-widest bg-zinc-900 text-zinc-500">Back</button>
                <button onClick={nextStep} className="flex-[2] py-5 rounded-full font-black text-xs uppercase tracking-widest bg-white text-zinc-950 shadow-2xl">Confirm Parameters</button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h2 className="text-heading text-3xl font-black text-white mb-2">Coordination.</h2>
              <p className="text-zinc-500 text-sm mb-12">Enter professional contact details.</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="group">
                  <input required placeholder="Full Name" className="w-full bg-white/5 border border-white/5 p-6 rounded-3xl outline-none focus:border-emerald-500 font-bold transition-all text-sm" onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                <input required placeholder="Direct Phone Line" className="w-full bg-white/5 border border-white/5 p-6 rounded-3xl outline-none focus:border-emerald-500 font-bold transition-all text-sm" onChange={e => setFormData({...formData, contact: e.target.value})} />
                <textarea required placeholder="Facility Address / Corporate Landmark" className="w-full bg-white/5 border border-white/5 p-6 rounded-3xl outline-none focus:border-emerald-500 font-bold transition-all h-32 text-sm" onChange={e => setFormData({...formData, address: e.target.value})} />
                <div className="pt-12 flex space-x-3">
                  <button type="button" onClick={prevStep} className="flex-1 py-5 rounded-full font-black text-xs uppercase tracking-widest bg-zinc-900 text-zinc-500">Back</button>
                  <button type="submit" className="flex-[2] py-5 rounded-full font-black text-xs uppercase tracking-widest bg-emerald-600 text-white shadow-xl glow-green">Submit Request</button>
                </div>
              </form>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div key="4" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center pt-10">
              <div className="w-24 h-24 bg-emerald-600/20 text-emerald-500 rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 shadow-2xl border border-emerald-500/20">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h2 className="text-heading text-4xl font-black text-white mb-6 tracking-tighter">Protocol Engaged.</h2>
              <p className="text-zinc-500 text-sm leading-relaxed mb-16 max-w-xs mx-auto">
                Consultation request logged. Darshan N G will initiate coordination within <span className="text-white font-black">30 minutes</span> during business hours.
              </p>
              <div className="space-y-4">
                <a 
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=URGENT:%20Consultation%20ID%20SIPC-${Math.floor(Math.random()*10000)}`} 
                  className="block w-full bg-white text-zinc-950 py-6 rounded-full font-black uppercase tracking-widest text-xs shadow-2xl"
                >
                  Priority WhatsApp Notification
                </a>
                <Link to="/" className="block w-full py-4 text-zinc-600 font-black text-[9px] uppercase tracking-[0.4em] hover:text-white transition-colors">Return to Dashboard</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Booking;
