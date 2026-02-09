
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, SERVICES, TRUST_STATS, CLIENT_CATEGORIES } from '../constants';

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
    <div className="bg-white">
      {/* 1️⃣ HERO SECTION */}
      <section className="relative h-[90vh] min-h-[600px] flex flex-col justify-end bg-pest-hero overflow-hidden">
        <div className="absolute inset-0 hero-overlay z-0"></div>
        <div className="max-w-4xl mx-auto px-6 pb-24 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center space-x-2 bg-emerald-600/20 border border-emerald-500/30 text-emerald-100 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest"
          >
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
            <span>Est. 2012 • Bengaluru Wide Service</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white leading-[1] mb-4 tracking-tighter"
          >
            {CONTACT_INFO.name}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-emerald-400 text-lg md:text-2xl font-bold uppercase tracking-widest mb-10"
          >
            {CONTACT_INFO.role}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href={`tel:${CONTACT_INFO.phone}`} className="flex-1 flex items-center justify-center space-x-3 bg-emerald-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-emerald-500 transition-all shadow-2xl shadow-emerald-600/20 active:scale-95">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 005.47 5.47l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
              <span>Call Now</span>
            </a>
            <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} className="flex-1 flex items-center justify-center space-x-3 bg-black text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-zinc-800 transition-all active:scale-95 shadow-xl">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              <span>WhatsApp</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2️⃣ QUICK ACTION BAR */}
      <section className="px-6 -mt-10 relative z-20 mb-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass rounded-3xl p-6 md:p-8 flex flex-wrap justify-center gap-4 md:gap-8 premium-shadow"
        >
          <button onClick={handleSaveContact} className="flex flex-col items-center group">
            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-2 group-hover:bg-emerald-600 group-hover:text-white transition-all">
              {isSaving ? <span className="animate-spin text-xl">◌</span> : <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path></svg>}
            </div>
            <span className="text-[10px] font-black uppercase text-zinc-400 group-hover:text-emerald-600">Save Card</span>
          </button>
          
          <a href={`mailto:${CONTACT_INFO.email}`} className="flex flex-col items-center group">
            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-2 group-hover:bg-emerald-600 group-hover:text-white transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <span className="text-[10px] font-black uppercase text-zinc-400 group-hover:text-emerald-600">Email Us</span>
          </a>

          <Link to="/book" className="flex flex-col items-center group">
            <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center mb-2 text-white hover:bg-black transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            </div>
            <span className="text-[10px] font-black uppercase text-emerald-600 group-hover:text-black">Book Audit</span>
          </Link>

          <a href={`https://www.google.com/maps/search/?api=1&query=Bengaluru`} target="_blank" className="flex flex-col items-center group">
            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-2 group-hover:bg-emerald-600 group-hover:text-white transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </div>
            <span className="text-[10px] font-black uppercase text-zinc-400 group-hover:text-emerald-600">Location</span>
          </a>
        </motion.div>
      </section>

      {/* 3️⃣ SERVICES SECTION */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div className="max-w-md">
            <h2 className="text-4xl font-black text-zinc-900 leading-tight mb-4">Elite Pest Management Solutions.</h2>
            <p className="text-zinc-500 font-medium">Surgical elimination of pests using the latest hygiene protocols.</p>
          </div>
          <Link to="/book" className="text-sm font-black uppercase text-emerald-600 tracking-widest border-b-2 border-emerald-100 hover:border-emerald-600 pb-1 transition-all">View All Protocols →</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div 
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white p-8 rounded-3xl border border-zinc-100 hover:border-emerald-600 hover:bg-emerald-50/50 transition-all duration-300 premium-shadow h-full flex flex-col"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500">{s.icon}</div>
              <h3 className="text-xl font-extrabold text-zinc-900 leading-tight mb-4">{s.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed flex-grow">{s.description}</p>
              <Link to={`/service/${s.slug}`} className="mt-8 inline-flex items-center text-[10px] font-black uppercase text-emerald-600 tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                Explore Solution <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4️⃣ WHY CHOOSE US */}
      <section className="bg-zinc-950 py-32 px-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-[100px]"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-8">Engineering a <span className="text-emerald-500">Pest-Free</span> Environment.</h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-12">
                We don't just spray; we solve. Our Integrated Pest Management (IPM) system focuses on structural integrity, hygiene, and scientific elimination.
              </p>
              <div className="grid grid-cols-2 gap-8">
                {TRUST_STATS.map((stat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className="text-3xl">{stat.icon}</div>
                    <div>
                      <div className="text-2xl font-black text-white">{stat.value}</div>
                      <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 bg-emerald-600 rounded-3xl overflow-hidden relative group">
                  <img src="https://images.unsplash.com/photo-1590212151175-e58edd96185b?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"/>
                  <div className="absolute inset-0 bg-emerald-600/20"></div>
                </div>
                <div className="h-64 bg-zinc-900 rounded-3xl p-8 flex flex-col justify-end">
                  <div className="text-emerald-500 font-black text-xs mb-2">HYGIENE FIRST</div>
                  <div className="text-white font-bold leading-tight">Advanced Food Safety Protocols</div>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="h-64 bg-zinc-800 rounded-3xl p-8 flex flex-col justify-end">
                  <div className="text-emerald-500 font-black text-xs mb-2">BENGALURU PRIDE</div>
                  <div className="text-white font-bold leading-tight">Servicing 50+ IT Parks Locally</div>
                </div>
                <div className="h-48 bg-white rounded-3xl overflow-hidden grayscale">
                   <img src="https://images.unsplash.com/photo-1517502474097-f9b30659dadb?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6️⃣ PROOF / CLIENT TYPES */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-[10px] font-black uppercase text-emerald-600 tracking-[0.4em] mb-4">Authority Proof</h2>
          <h3 className="text-3xl font-black text-zinc-900 mb-16">Industries We Secure Daily</h3>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60">
            {CLIENT_CATEGORIES.map((cat, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{cat.icon}</div>
                <span className="text-sm font-black text-zinc-900">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7️⃣ POWER CTA SECTION */}
      <section className="px-6 pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-emerald-600 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-emerald-200"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] relative z-10">Stop the Infestation.<br/>Book Your Audit.</h2>
          <p className="text-emerald-100 text-lg md:text-xl mb-12 max-w-xl mx-auto relative z-10">
            Immediate response within 30 minutes for all Bengaluru zones. Let the specialist handle it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link to="/book" className="bg-black text-white px-12 py-6 rounded-2xl font-black text-lg hover:bg-zinc-900 transition-all shadow-2xl">Book Expert Inspection</Link>
            <a href={`tel:${CONTACT_INFO.phone}`} className="bg-white text-emerald-700 px-12 py-6 rounded-2xl font-black text-lg hover:bg-emerald-50 transition-all">Call Specialist Now</a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default VCard;
