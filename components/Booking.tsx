
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SERVICES, CONTACT_INFO } from '../constants';

const Booking: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    propertyType: 'Residential',
    severity: 'Medium',
    name: '',
    contact: '',
    address: '',
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(4); // Success
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="pt-10 px-6 pb-20">
        <Link to="/" className="inline-flex items-center text-zinc-400 font-bold text-sm mb-10 hover:text-emerald-600 transition-colors">
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"></path></svg>
          Back
        </Link>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h1 className="text-4xl font-black text-zinc-900 leading-tight mb-4">Select<br/>Service.</h1>
              <p className="text-zinc-400 text-sm mb-10">What do you need assistance with?</p>
              <div className="grid grid-cols-1 gap-3">
                {SERVICES.map(s => (
                  <button 
                    key={s.id} 
                    onClick={() => { setFormData({...formData, service: s.title}); nextStep(); }}
                    className="flex items-center space-x-5 bg-zinc-50 border border-zinc-100 p-6 rounded-3xl text-left active:scale-95 transition-all"
                  >
                    <span className="text-3xl">{s.icon}</span>
                    <span className="font-extrabold text-zinc-900">{s.title}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h2 className="text-3xl font-black text-zinc-900 mb-2">Qualification.</h2>
              <p className="text-zinc-400 text-sm mb-10">Help me prepare for the site audit.</p>
              
              <div className="space-y-10">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4 block">Property Type</label>
                  <div className="flex flex-wrap gap-2">
                    {['Home', 'Office', 'Factory', 'Villa'].map(t => (
                      <button 
                        key={t} 
                        onClick={() => setFormData({...formData, propertyType: t})}
                        className={`px-8 py-3 rounded-full font-bold text-xs transition-all ${formData.propertyType === t ? 'bg-zinc-900 text-white shadow-xl' : 'bg-zinc-100 text-zinc-500'}`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4 block">Severity Level</label>
                  <div className="flex gap-2">
                    {['Low', 'Medium', 'High'].map(s => (
                      <button 
                        key={s} 
                        onClick={() => setFormData({...formData, severity: s})}
                        className={`flex-1 py-4 rounded-2xl font-black text-xs transition-all ${formData.severity === s ? 'bg-emerald-600 text-white shadow-xl shadow-emerald-200' : 'bg-zinc-100 text-zinc-500'}`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-20 flex space-x-3">
                <button onClick={prevStep} className="flex-1 py-5 rounded-2xl font-black text-sm bg-zinc-50 text-zinc-400">Back</button>
                <button onClick={nextStep} className="flex-[2] py-5 rounded-2xl font-black text-sm bg-emerald-600 text-white shadow-xl action-shadow">Continue</button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h2 className="text-3xl font-black text-zinc-900 mb-2">Contact.</h2>
              <p className="text-zinc-400 text-sm mb-10">Finalize your slot.</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input required placeholder="Your Name" className="w-full bg-zinc-50 border-2 border-zinc-100 p-6 rounded-3xl outline-none focus:border-emerald-500 font-bold transition-all" onChange={e => setFormData({...formData, name: e.target.value})} />
                <input required placeholder="Bengaluru Phone" className="w-full bg-zinc-50 border-2 border-zinc-100 p-6 rounded-3xl outline-none focus:border-emerald-500 font-bold transition-all" onChange={e => setFormData({...formData, contact: e.target.value})} />
                <textarea required placeholder="Area / Landmark" className="w-full bg-zinc-50 border-2 border-zinc-100 p-6 rounded-3xl outline-none focus:border-emerald-500 font-bold transition-all h-32" onChange={e => setFormData({...formData, address: e.target.value})} />
                <div className="pt-10 flex space-x-3">
                  <button type="button" onClick={prevStep} className="flex-1 py-5 rounded-2xl font-black text-sm bg-zinc-50 text-zinc-400">Back</button>
                  <button type="submit" className="flex-[2] py-5 rounded-2xl font-black text-sm bg-emerald-600 text-white shadow-xl action-shadow">Confirm Slot</button>
                </div>
              </form>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div key="4" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center pt-10">
              <div className="w-24 h-24 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h2 className="text-4xl font-black text-zinc-900 mb-4">Confirmed!</h2>
              <p className="text-zinc-500 text-sm leading-relaxed mb-12">
                Darshan will personally contact you in <span className="text-emerald-600 font-black">15 minutes</span> to finalize the technician dispatch.
              </p>
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi%20Darshan,%20I%20just%20booked%20an%20audit%20for%20${formData.service}`} 
                className="block w-full bg-emerald-600 text-white py-6 rounded-3xl font-black shadow-xl shadow-emerald-200"
              >
                Send Fast Notification
              </a>
              <Link to="/" className="block w-full py-6 mt-4 text-zinc-400 font-black text-xs uppercase tracking-widest">Done</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Booking;
