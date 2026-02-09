
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, SERVICES, TRUST_POINTS, PROCESS_STEPS } from '../constants';

const VCard: React.FC = () => {
  const [isSaving, setIsSaving] = useState(false);

  const handleSaveContact = () => {
    setIsSaving(true);
    setTimeout(() => {
      const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${CONTACT_INFO.name}\nTITLE:${CONTACT_INFO.role}\nTEL;TYPE=CELL:${CONTACT_INFO.phone}\nEMAIL:${CONTACT_INFO.email}\nADR;TYPE=WORK:;;Bengaluru;Karnataka;;India\nEND:VCARD`;
      const blob = new Blob([vcard], { type: 'text/vcard' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${CONTACT_INFO.name.replace(/\s+/g, '_')}.vcf`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsSaving(false);
    }, 800);
  };

  return (
    <div className="bg-white selection:bg-emerald-100 selection:text-emerald-900">
      {/* High-Conversion Hero */}
      <section className="relative pt-24 pb-32 px-6 overflow-hidden bg-zinc-900 rounded-b-[4rem]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] -mr-20 -mt-20"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-5 py-2 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Pest Emergency Bengaluru Wide</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black text-white leading-[1] mb-8 tracking-tighter"
          >
            Pest Problem?<br/><span className="text-emerald-500 italic">Solved.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-lg md:text-2xl font-medium max-w-2xl mx-auto mb-12"
          >
            Book your professional inspection in 60 seconds. Direct specialist coordination for homes & high-rises.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/book" className="w-full sm:w-auto bg-emerald-500 text-zinc-950 px-12 py-6 rounded-full font-black text-lg hover:bg-emerald-400 transition-all shadow-2xl shadow-emerald-500/20 active:scale-95">
              Book Inspection Slot
            </Link>
            <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} className="w-full sm:w-auto bg-zinc-800 text-white px-12 py-6 rounded-full font-black text-lg hover:bg-zinc-700 transition-all active:scale-95">
              WhatsApp Specialist
            </a>
          </motion.div>
        </div>
      </section>

      {/* Digital vCard Block - The Trust Element */}
      <section className="-mt-16 px-6 mb-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto bg-white rounded-[3.5rem] p-10 md:p-14 premium-shadow border border-zinc-50 flex flex-col items-center text-center"
        >
          <div className="w-32 h-32 rounded-[2.5rem] bg-zinc-100 mb-8 border-4 border-white shadow-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
             <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${CONTACT_INFO.name}&backgroundColor=b6e3f4`} alt={CONTACT_INFO.name} className="w-full h-full object-cover"/>
          </div>
          <h2 className="text-4xl font-black text-zinc-900 tracking-tight">{CONTACT_INFO.name}</h2>
          <div className="text-emerald-600 font-black uppercase text-[10px] tracking-[0.3em] mt-3 mb-6">{CONTACT_INFO.role}</div>
          <p className="text-zinc-500 text-lg leading-relaxed italic mb-10 max-w-xs mx-auto">"{CONTACT_INFO.bio}"</p>
          <div className="grid grid-cols-2 gap-3 w-full">
            <button onClick={handleSaveContact} disabled={isSaving} className="bg-zinc-50 text-zinc-900 border border-zinc-100 py-5 rounded-[2rem] font-bold text-sm hover:bg-zinc-100 transition-all">
              {isSaving ? '...' : 'Save Specialist Contact'}
            </button>
            <Link to="/blog" className="bg-zinc-50 text-zinc-900 border border-zinc-100 py-5 rounded-[2rem] font-bold text-sm hover:bg-zinc-100 transition-all">
              Authority Engine
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Sales Agitation Section */}
      <section className="max-w-4xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black text-zinc-900 leading-tight mb-6">Pest control in Bengaluru is usually <span className="text-red-600">frustrating.</span></h2>
            <p className="text-zinc-500 text-lg leading-relaxed">Most companies use call centers. You talk to a sales agent who has never seen a termite mud tube. Execution is outsourced. Responsibility is zero.</p>
          </div>
          <div className="bg-zinc-50 p-10 rounded-[3rem] border border-zinc-100">
            <h3 className="text-xl font-bold text-zinc-900 mb-6 flex items-center">
              <span className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs mr-3">✔</span>
              The Darshan Difference
            </h3>
            <ul className="space-y-4 text-zinc-600 font-medium">
              <li className="flex items-start"><span className="text-emerald-500 mr-3">•</span> Single Responsible Specialist</li>
              <li className="flex items-start"><span className="text-emerald-500 mr-3">•</span> Scientific Qualification First</li>
              <li className="flex items-start"><span className="text-emerald-500 mr-3">•</span> 24hr Rapid Site Inspection</li>
              <li className="flex items-start"><span className="text-emerald-500 mr-3">•</span> Transparent Pricing No Upsell</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Authority Services Section */}
      <section className="bg-zinc-50 py-32 px-6 rounded-[5rem]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
             <h2 className="text-4xl font-black text-zinc-900 mb-4">Core Specialist Services</h2>
             <p className="text-zinc-500 font-medium">Ranked #1 for reliability and scientific execution.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map(s => (
              <Link key={s.id} to={`/service/${s.slug}`} className="group bg-white p-8 rounded-[3rem] border border-zinc-100 hover:border-emerald-300 transition-all duration-300 premium-shadow">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
                <h3 className="text-xl font-black text-zinc-900 leading-tight mb-4">{s.title}</h3>
                <div className="text-xs font-black text-emerald-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">View Solution</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final Conversion Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto bg-emerald-600 rounded-[4rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-400/20 rounded-full blur-[80px] -mb-20 -mr-20"></div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1]">Ready for a pest-free property?</h2>
          <p className="text-emerald-100 text-xl mb-12 max-w-xl mx-auto">Stop browsing. Book an inspection today and let Darshan handle the complexity.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book" className="bg-white text-emerald-700 px-12 py-6 rounded-full font-black text-lg hover:bg-emerald-50 transition-all">Book Now</Link>
            <a href={`tel:${CONTACT_INFO.phone}`} className="bg-emerald-700 text-white px-12 py-6 rounded-full font-black text-lg hover:bg-emerald-800 transition-all">Call Specialist</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VCard;
