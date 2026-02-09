
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
    urgency: 'Urgent',
    name: '',
    contact: '',
    address: '',
    date: '',
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(4); // Success step
  };

  return (
    <div className="min-h-screen bg-zinc-50 py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <nav className="mb-10">
          <Link to="/" className="inline-flex items-center text-zinc-400 font-bold hover:text-emerald-600 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Cancel & Return
          </Link>
        </nav>

        <div className="bg-white rounded-[3rem] premium-shadow overflow-hidden p-8 md:p-12">
          {step < 4 && (
            <div className="mb-12">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-black uppercase tracking-widest text-emerald-600">Step {step} of 3</span>
                <span className="text-zinc-400 text-xs font-bold">{Math.round((step/3)*100)}% Complete</span>
              </div>
              <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${(step/3)*100}%` }}
                  className="h-full bg-emerald-500"
                />
              </div>
            </div>
          )}

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="text-3xl font-extrabold text-zinc-900 mb-2">What's the issue?</h2>
                <p className="text-zinc-500 mb-10">Select the service required for your property.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {SERVICES.map(s => (
                    <button
                      key={s.id}
                      onClick={() => { setFormData({...formData, service: s.title}); nextStep(); }}
                      className={`p-6 rounded-3xl border-2 text-left transition-all ${formData.service === s.title ? 'border-emerald-500 bg-emerald-50' : 'border-zinc-100 hover:border-zinc-300'}`}
                    >
                      <div className="text-3xl mb-3">{s.icon}</div>
                      <div className="font-bold text-zinc-900">{s.title}</div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="text-3xl font-extrabold text-zinc-900 mb-2">Lead Qualification</h2>
                <p className="text-zinc-500 mb-8">This helps us prepare the right equipment.</p>
                
                <div className="space-y-8">
                  <div>
                    <label className="block text-sm font-black uppercase text-zinc-400 mb-3 tracking-widest">Property Type</label>
                    <div className="flex gap-3 flex-wrap">
                      {['Residential', 'Commercial', 'IT Park', 'Villa'].map(t => (
                        <button key={t} onClick={() => setFormData({...formData, propertyType: t})} className={`px-6 py-3 rounded-full font-bold text-sm border-2 transition-all ${formData.propertyType === t ? 'bg-zinc-900 text-white border-zinc-900' : 'bg-white text-zinc-600 border-zinc-100'}`}>{t}</button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-black uppercase text-zinc-400 mb-3 tracking-widest">Severity Level</label>
                    <div className="flex gap-3">
                      {['Low', 'Medium', 'High'].map(s => (
                        <button key={s} onClick={() => setFormData({...formData, severity: s})} className={`flex-1 px-4 py-3 rounded-2xl font-bold text-sm border-2 transition-all ${formData.severity === s ? 'bg-emerald-500 text-white border-emerald-500' : 'bg-white text-zinc-600 border-zinc-100'}`}>{s}</button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex space-x-4">
                  <button onClick={prevStep} className="px-8 py-4 bg-zinc-100 text-zinc-600 rounded-2xl font-bold">Back</button>
                  <button onClick={nextStep} className="flex-1 px-8 py-4 bg-zinc-900 text-white rounded-2xl font-bold shadow-xl">Continue</button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="text-3xl font-extrabold text-zinc-900 mb-2">Final Details</h2>
                <p className="text-zinc-500 mb-8">Enter your coordination details.</p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input required placeholder="Your Full Name" className="w-full p-5 rounded-2xl border-2 border-zinc-100 focus:border-emerald-500 outline-none transition-all font-medium" onChange={e => setFormData({...formData, name: e.target.value})} />
                  <input required placeholder="Contact Number (Bengaluru)" className="w-full p-5 rounded-2xl border-2 border-zinc-100 focus:border-emerald-500 outline-none transition-all font-medium" onChange={e => setFormData({...formData, contact: e.target.value})} />
                  <textarea required placeholder="Address / Landmark" className="w-full p-5 rounded-2xl border-2 border-zinc-100 focus:border-emerald-500 outline-none transition-all font-medium h-32" onChange={e => setFormData({...formData, address: e.target.value})} />
                  <div className="flex space-x-4">
                    <button type="button" onClick={prevStep} className="px-8 py-4 bg-zinc-100 text-zinc-600 rounded-2xl font-bold">Back</button>
                    <button type="submit" className="flex-1 px-8 py-4 bg-emerald-600 text-white rounded-2xl font-bold shadow-xl shadow-emerald-200">Confirm Inspection</button>
                  </div>
                </form>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
                <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h2 className="text-4xl font-extrabold text-zinc-900 mb-4">Slot Booked!</h2>
                <p className="text-zinc-500 mb-10 leading-relaxed">Thank you {formData.name}. Darshan will personally call you within 15-30 minutes to confirm the technician's arrival at your address.</p>
                <div className="space-y-4">
                  <a href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi%20Darshan,%20I%20just%20booked%20an%20inspection%20for%20${formData.service}`} className="block w-full bg-emerald-600 text-white p-5 rounded-3xl font-bold shadow-lg shadow-emerald-200">Notify via WhatsApp</a>
                  <Link to="/" className="block w-full bg-zinc-100 text-zinc-900 p-5 rounded-3xl font-bold">Back to Profile</Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Booking;
