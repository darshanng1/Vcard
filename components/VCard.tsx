
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, SERVICES, TRUST_STATS } from '../constants';

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

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: CONTACT_INFO.name,
          text: `Contact ${CONTACT_INFO.name} - ${CONTACT_INFO.role}`,
          url: window.location.href,
        });
      } catch (err) { console.log(err); }
    }
  };

  return (
    <div className="pb-32 overflow-hidden">
      {/* 1️⃣ TOP PROFILE SECTION (Above the fold) */}
      <section className="bg-emerald-600 pt-12 pb-24 px-6 relative rounded-b-[3rem] shadow-xl">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-28 h-28 rounded-[2.5rem] bg-white border-4 border-emerald-500 shadow-2xl overflow-hidden mb-6"
          >
            <img 
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${CONTACT_INFO.name}&backgroundColor=b6e3f4`} 
              alt={CONTACT_INFO.name} 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-black text-white tracking-tight"
          >
            {CONTACT_INFO.name}
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-emerald-100 font-bold text-xs uppercase tracking-widest mt-1 opacity-90"
          >
            {CONTACT_INFO.role}
          </motion.div>
          
          <div className="flex items-center space-x-2 mt-4 px-4 py-1.5 bg-black/20 rounded-full text-white text-[10px] font-bold">
            <svg className="w-3 h-3 text-red-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
            <span>{CONTACT_INFO.location}</span>
          </div>
          
          <p className="mt-8 text-emerald-50 text-sm font-medium leading-relaxed max-w-xs">
            Direct coordination. Guaranteed safety. <br/>Scientific elimination within 24 hours.
          </p>
        </div>
      </section>

      {/* 2️⃣ PRIMARY ACTION GRID */}
      <section className="-mt-12 px-6 mb-12 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-[2.5rem] p-6 shadow-2xl space-y-4"
        >
          <Link to="/book" className="w-full flex items-center justify-center space-x-3 bg-emerald-600 text-white p-5 rounded-2xl font-black text-lg active:scale-95 transition-transform action-shadow">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
             <span>Book Free Inspection</span>
          </Link>
          
          <div className="grid grid-cols-2 gap-3">
            <button onClick={handleSaveContact} className="flex flex-col items-center justify-center space-y-2 bg-zinc-50 border border-zinc-100 p-4 rounded-2xl active:scale-95 transition-all">
              <div className="text-zinc-400">
                {isSaving ? <span className="animate-spin text-xl">◌</span> : <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path></svg>}
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Save Contact</span>
            </button>
            <button onClick={handleShare} className="flex flex-col items-center justify-center space-y-2 bg-zinc-50 border border-zinc-100 p-4 rounded-2xl active:scale-95 transition-all">
              <div className="text-zinc-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 100-2.684 3 3 0 000 2.684zm0 12.684a3 3 0 100-2.684 3 3 0 000 2.684z"></path></svg>
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Share Card</span>
            </button>
          </div>
        </motion.div>
      </section>

      {/* 3️⃣ SERVICE GRID (Entry to SEO) */}
      <section className="px-6 mb-16">
        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400 mb-6 px-2">Expert Solutions</h2>
        <div className="grid grid-cols-2 gap-4">
          {SERVICES.map((s, i) => (
            <Link 
              key={s.id} 
              to={`/service/${s.slug}`} 
              className="bg-white border border-zinc-100 p-6 rounded-[2.5rem] flex flex-col items-center text-center shadow-sm active:scale-95 transition-all hover:border-emerald-200 hover:bg-emerald-50/50"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="font-extrabold text-sm text-zinc-900 leading-tight">{s.title.split(' ')[0]}</h3>
              <div className="mt-2 text-[9px] font-black uppercase text-emerald-600 tracking-widest opacity-60">Action →</div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4️⃣ TRUST BULLETS (Compact) */}
      <section className="px-10 mb-16">
        <div className="space-y-8">
          {TRUST_STATS.slice(0, 3).map((stat, i) => (
            <div key={i} className="flex items-center space-x-5">
              <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-xl shadow-sm">
                {stat.icon}
              </div>
              <div>
                <div className="text-lg font-black text-zinc-900 leading-none mb-1">{stat.value}</div>
                <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5️⃣ REVIEWS (Minimal) */}
      <section className="px-6">
        <div className="bg-zinc-900 rounded-[3rem] p-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl rotate-12">★</div>
          <h3 className="text-2xl font-black mb-2">Trusted Daily.</h3>
          <p className="text-zinc-400 text-xs leading-relaxed mb-8">Serving premium societies and villas across Bengaluru.</p>
          <div className="flex space-x-2">
            {[1,2,3,4,5].map(s => <span key={s} className="text-emerald-500">★</span>)}
          </div>
          <p className="mt-4 text-[11px] italic text-emerald-100/60 leading-relaxed">
            "Professional, fast, and exactly what we needed for our Whitefield villa. Darshan handles everything personally."
          </p>
        </div>
      </section>
    </div>
  );
};

export default VCard;
