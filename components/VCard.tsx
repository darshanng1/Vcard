
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, COMPANY_INFO, SERVICES, TRUST_STATS } from '../constants';

const VCard: React.FC = () => {
  const [isSaving, setIsSaving] = useState(false);

  const handleSaveContact = () => {
    setIsSaving(true);
    setTimeout(() => {
      const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${CONTACT_INFO.name}\nORG:${COMPANY_INFO.name}\nTITLE:${CONTACT_INFO.role}\nTEL;TYPE=CELL:${CONTACT_INFO.phone}\nEMAIL:${CONTACT_INFO.email}\nADR;TYPE=WORK:;;Dooravani Nagar;Bengaluru;Karnataka;560016;India\nURL:https://${COMPANY_INFO.website}\nEND:VCARD`;
      const blob = new Blob([vcard], { type: 'text/vcard' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `Darshan_NG_SIPC.vcf`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsSaving(false);
    }, 800);
  };

  return (
    <div className="pb-40">
      {/* 🎬 CINEMATIC HERO SECTION */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-8 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-b from-emerald-600/5 to-transparent z-0"
        />
        
        {/* Floating Identity Card */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-full flex flex-col items-center"
        >
          <div className="relative group mb-10">
            <div className="absolute -inset-1 bg-emerald-500 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <motion.div 
              whileHover={{ rotateY: 10, rotateX: 10 }}
              className="relative w-32 h-32 rounded-[2.5rem] glass p-2 flex items-center justify-center border-white/10"
            >
              <img 
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${CONTACT_INFO.name}&backgroundColor=059669`} 
                alt={CONTACT_INFO.name} 
                className="w-full h-full rounded-[2.2rem] object-cover grayscale brightness-110"
              />
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <div className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-500 mb-3 glow-text">Secure India Group</div>
            <h1 className="text-heading text-5xl font-black text-white tracking-tighter mb-4">
              {CONTACT_INFO.name}
            </h1>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-xs font-bold uppercase tracking-widest">
              {CONTACT_INFO.role}
            </div>
            
            <p className="mt-8 text-zinc-500 text-sm font-medium leading-relaxed max-w-xs mx-auto">
              {CONTACT_INFO.bio}
            </p>
          </motion.div>
          
          <div className="mt-12 flex items-center space-x-4">
             <button 
               onClick={handleSaveContact}
               className="px-8 py-3 bg-white text-zinc-950 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all shadow-xl"
             >
               {isSaving ? "Syncing..." : "Add to Contacts"}
             </button>
             <a 
               href={`mailto:${CONTACT_INFO.email}`}
               className="w-10 h-10 glass-light rounded-full flex items-center justify-center text-white border-white/10 hover:bg-emerald-600 transition-colors"
             >
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
             </a>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-zinc-700"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </motion.div>
      </section>

      {/* 🧱 PROFESSIONAL CAPABILITIES */}
      <section className="px-8 mb-24">
        <h2 className="text-heading text-3xl font-black text-white mb-2">Capabilities.</h2>
        <p className="text-zinc-500 text-sm font-medium mb-10 tracking-tight">Industrial-grade environmental safety solutions.</p>
        
        <div className="grid grid-cols-1 gap-6">
          {SERVICES.map((service, i) => (
            <Link 
              key={service.id} 
              to={`/service/${service.slug}`}
              className="group relative glass rounded-[2rem] p-8 border-white/5 hover:border-emerald-500/30 transition-all duration-500 block"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 text-7xl group-hover:opacity-10 transition-opacity">
                {service.icon}
              </div>
              <div className="relative z-10">
                <div className="text-xs font-black uppercase text-emerald-500 tracking-[0.3em] mb-4">Division {i + 1}</div>
                <h3 className="text-heading text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">{service.title}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed max-w-[80%]">{service.description}</p>
                
                <div className="mt-8 flex items-center text-[10px] font-black uppercase tracking-widest text-white/40 group-hover:text-emerald-500 transition-colors">
                  Analyze Protocol <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 🏆 AUTHORITY & SCALE */}
      <section className="px-8 mb-24">
        <div className="glass rounded-[3rem] p-10 border-emerald-500/10">
          <h2 className="text-heading text-2xl font-black text-white mb-10 text-center">Scale of Impact.</h2>
          <div className="grid grid-cols-2 gap-y-12 gap-x-8">
            {TRUST_STATS.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="text-3xl mb-3 filter grayscale brightness-150">{stat.icon}</div>
                <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-[9px] font-black uppercase tracking-widest text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🤖 CHAT / CALENDAR UI (Simulation) */}
      <section className="px-8">
        <div className="bg-zinc-950 rounded-[3rem] p-10 border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 to-transparent"></div>
          <h3 className="text-heading text-xl font-black text-white mb-4">Request Consultation.</h3>
          <p className="text-zinc-500 text-xs leading-relaxed mb-10">Direct access to corporate solutions and site audit scheduling.</p>
          
          <div className="space-y-4">
             <Link to="/book" className="flex items-center justify-between w-full bg-white/5 border border-white/5 p-5 rounded-2xl hover:bg-emerald-600 transition-all group">
               <span className="text-xs font-bold text-white group-hover:text-white">Schedule Site Visit</span>
               <svg className="w-5 h-5 text-emerald-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
             </Link>
             <a href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Emergency%20Response%20Requested`} className="flex items-center justify-between w-full bg-white/5 border border-white/5 p-5 rounded-2xl hover:bg-red-600 transition-all group">
               <span className="text-xs font-bold text-white group-hover:text-white">Emergency Response</span>
               <svg className="w-5 h-5 text-red-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
             </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VCard;
