import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SERVICES, CONTACT_INFO } from '../constants';

const Booking: React.FC = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    service: '',
    date: '',
    time: '11:00 AM',
    name: '',
    phone: '',
    location: ''
  });

  const handleFinalize = () => {
    if (!form.name || !form.phone || !form.location || !form.service || !form.date) {
      alert("Please complete all fields to proceed.");
      return;
    }
    const message = `*NEW INSPECTION REQUEST*%0A%0A*Service:* ${form.service}%0A*Date:* ${form.date}%0A*Time:* ${form.time}%0A%0A*Client:* ${form.name}%0A*Phone:* ${form.phone}%0A*Location:* ${form.location}%0A%0A_Requested via Darshan NG Digital Card_`;
    window.location.href = `https://wa.me/8618764541?text=${message}`;
  };

  return (
    <div className="h-full flex flex-col bg-slate-950 text-white overflow-hidden min-h-screen relative">
      <div className="absolute inset-0 texture-structural opacity-10 pointer-events-none" />
      
      <nav className="p-10 flex items-center justify-between glass z-10 border-b border-white/5">
        <Link to="/" className="text-[11px] font-black uppercase tracking-widest text-zinc-500">Cancel</Link>
        <span className="text-[11px] font-black uppercase tracking-[0.4em] text-emerald-500">Inspection Schedule</span>
        <div className="w-10 h-10 bg-white rounded-full p-1.5 flex items-center justify-center">
          <img src="images/logo.png" className="w-full h-full object-contain" />
        </div>
      </nav>

      <div className="flex-grow p-10 overflow-y-auto no-scrollbar pb-32 relative z-10">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h1 className="text-heading text-4xl font-black mb-12 tracking-tighter">Pest Type.</h1>
              <div className="grid grid-cols-1 gap-4">
                {SERVICES.map(s => (
                  <button 
                    key={s.id} 
                    onClick={() => { setForm({...form, service: s.title}); setStep(2); }}
                    className={`w-full flex items-center space-x-6 glass p-8 rounded-3xl border-white/5 transition-all text-left ${form.service === s.title ? 'border-emerald-500 bg-emerald-500/10' : ''}`}
                  >
                    <span className="text-4xl">{s.icon}</span>
                    <span className="text-lg font-black uppercase tracking-widest">{s.title}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h1 className="text-heading text-4xl font-black mb-12 tracking-tighter">Schedule.</h1>
              
              <div className="space-y-10">
                <div>
                  <label className="text-[11px] font-black uppercase text-zinc-600 mb-6 block tracking-widest">Preferred Date</label>
                  <input 
                    type="date" 
                    className="w-full glass p-8 rounded-3xl outline-none text-md font-bold text-white bg-slate-900/50 border border-white/5" 
                    onChange={e => setForm({...form, date: e.target.value})} 
                  />
                </div>
                <div>
                  <label className="text-[11px] font-black uppercase text-zinc-600 mb-6 block tracking-widest">Time Window</label>
                  <div className="grid grid-cols-2 gap-4">
                    {['09:00 AM', '11:00 AM', '02:00 PM', '04:00 PM'].map(t => (
                      <button 
                        key={t}
                        onClick={() => setForm({...form, time: t})}
                        className={`glass py-6 rounded-2xl font-black text-[12px] tracking-widest transition-all ${form.time === t ? 'bg-emerald-600 text-white border-emerald-400' : 'text-zinc-500 border-white/5'}`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-20 flex space-x-6">
                <button onClick={() => setStep(1)} className="flex-1 py-6 rounded-2xl font-black text-[11px] uppercase tracking-widest text-zinc-600 border border-white/5">Back</button>
                <button onClick={() => setStep(3)} className="flex-[2] py-6 rounded-2xl font-black text-[11px] uppercase tracking-widest bg-white text-black shadow-2xl">Confirm Identity</button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="s3" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
              <h1 className="text-heading text-4xl font-black mb-12 tracking-tighter">Final Details.</h1>
              
              <div className="space-y-6">
                <input 
                  placeholder="Full Name" 
                  className="w-full glass p-8 rounded-3xl outline-none text-md font-bold text-white bg-slate-900/50 border border-white/5" 
                  onChange={e => setForm({...form, name: e.target.value})} 
                />
                <input 
                  placeholder="Phone Number" 
                  className="w-full glass p-8 rounded-3xl outline-none text-md font-bold text-white bg-slate-900/50 border border-white/5" 
                  onChange={e => setForm({...form, phone: e.target.value})} 
                />
                <textarea 
                  placeholder="Service Area / Location" 
                  className="w-full glass p-8 rounded-3xl outline-none text-md font-bold text-white bg-slate-900/50 border border-white/5 h-40" 
                  onChange={e => setForm({...form, location: e.target.value})} 
                />
              </div>

              <div className="mt-20 space-y-6">
                <button onClick={handleFinalize} className="w-full py-8 rounded-3xl font-black text-[12px] uppercase tracking-[0.5em] bg-emerald-600 text-white shadow-2xl shadow-emerald-500/40">Book via WhatsApp</button>
                <button onClick={() => setStep(2)} className="w-full py-4 text-[10px] font-black uppercase tracking-widest text-zinc-700">Modify Schedule</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Booking;
