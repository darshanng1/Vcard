
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SERVICES, CONTACT_INFO, COMPANY_INFO } from '../constants';

const Booking: React.FC = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    area: ''
  });

  const handleFinalize = () => {
    const message = `*NEW AUDIT REQUEST*%0A%0A*Service:* ${form.service}%0A*Date:* ${form.date}%0A*Time:* ${form.time}%0A%0A*Client:* ${form.name}%0A*Phone:* ${form.phone}%0A*Area:* ${form.area}%0A%0A_SIPC Dashboard Automated Notification_`;
    window.location.href = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`;
  };

  return (
    <div className="h-full flex flex-col bg-zinc-950 text-white overflow-hidden">
      <nav className="p-8 flex items-center justify-between glass z-10">
        <Link to="/" className="text-[9px] font-black uppercase tracking-widest text-zinc-500">Exit</Link>
        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-emerald-500">Service Audit Dispatch</span>
        <div className="w-6 h-6 bg-emerald-600 rounded"></div>
      </nav>

      <div className="flex-grow p-8 overflow-y-auto no-scrollbar">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="s1" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
              <h1 className="text-heading text-3xl font-black mb-10 tracking-tighter">Choose Protocol.</h1>
              <div className="space-y-3">
                {SERVICES.map(s => (
                  <button 
                    key={s.id} 
                    onClick={() => { setForm({...form, service: s.title}); setStep(2); }}
                    className={`w-full flex items-center justify-between glass p-6 rounded-[2rem] border-white/5 transition-all text-left ${form.service === s.title ? 'border-emerald-500/50 bg-emerald-500/10' : ''}`}
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl grayscale brightness-150">{s.icon}</span>
                      <span className="text-sm font-bold">{s.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="s2" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
              <h1 className="text-heading text-3xl font-black mb-2 tracking-tighter">Timeline.</h1>
              <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest mb-10">Select deployment window</p>
              
              <div className="space-y-6">
                <div>
                  <label className="text-[9px] font-black uppercase text-zinc-600 mb-3 block tracking-widest">Date</label>
                  <input type="date" className="w-full glass p-5 rounded-2xl outline-none text-sm font-bold" onChange={e => setForm({...form, date: e.target.value})} />
                </div>
                <div>
                  <label className="text-[9px] font-black uppercase text-zinc-600 mb-3 block tracking-widest">Available Slots</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['09:00 AM', '11:00 AM', '02:00 PM', '04:00 PM', '06:00 PM'].map(t => (
                      <button 
                        key={t}
                        onClick={() => setForm({...form, time: t})}
                        className={`glass py-5 rounded-2xl font-black text-[10px] tracking-widest transition-all ${form.time === t ? 'bg-emerald-600 text-white' : 'text-zinc-500'}`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12 flex space-x-3">
                <button onClick={() => setStep(1)} className="flex-1 py-5 rounded-full font-black text-[9px] uppercase tracking-widest text-zinc-600">Back</button>
                <button onClick={() => setStep(3)} className="flex-[2] py-5 rounded-full font-black text-[9px] uppercase tracking-widest bg-white text-black shadow-2xl">Continue</button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="s3" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
              <h1 className="text-heading text-3xl font-black mb-2 tracking-tighter">Verification.</h1>
              <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest mb-10">Facility Access Details</p>
              
              <div className="space-y-4">
                <input placeholder="Full Name" className="w-full glass p-5 rounded-2xl outline-none text-sm font-bold" onChange={e => setForm({...form, name: e.target.value})} />
                <input placeholder="Phone / WhatsApp" className="w-full glass p-5 rounded-2xl outline-none text-sm font-bold" onChange={e => setForm({...form, phone: e.target.value})} />
                <textarea placeholder="Facility Area / Landmark" className="w-full glass p-5 rounded-2xl outline-none text-sm font-bold h-24" onChange={e => setForm({...form, area: e.target.value})} />
              </div>

              <div className="mt-12 space-y-3">
                <button onClick={handleFinalize} className="w-full py-6 rounded-full font-black text-[10px] uppercase tracking-widest bg-emerald-600 text-white shadow-2xl shadow-emerald-500/20">Finalize Dispatch</button>
                <button onClick={() => setStep(2)} className="w-full py-4 text-[9px] font-black uppercase tracking-widest text-zinc-700">Adjust Time</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Booking;
