
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { COMPANY_INFO, SERVICES } from '../constants';
import logo from "../assets/images/SIPCLogo.jpg";



const PdfModule: React.FC<{ title: string }> = ({ title }) => {
  // We'll simulate the "pages" of the PDF as a rich vertical scroll
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 overflow-y-auto no-scrollbar pb-32">
      <div className="absolute inset-0 texture-structural opacity-10 pointer-events-none fixed" />

      {/* 🧭 NAVIGATION */}
      <nav className="p-6 sticky top-0 bg-slate-950/80 backdrop-blur-xl z-50 flex items-center justify-between border-b border-white/5 shadow-lg">
        <Link to="/" className="inline-flex items-center text-slate-500 font-black text-[10px] uppercase tracking-[0.4em] hover:text-emerald-500 transition-colors">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M15 19l-7-7 7-7"></path></svg>
          Back
        </Link>
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500">Company Profile</span>
      </nav>

      {/* 📜 CONTENT */}
      <div className="max-w-[500px] mx-auto px-10 pt-16 space-y-24 relative z-10">

        {/* PAGE 1: HERO */}
        <section className="text-center py-10">
          <div className="w-40 h-40 mx-auto p-4 bg-white rounded-full shadow-2xl mb-12 flex items-center justify-center">
           <img src={logo} alt="SIPC Logo" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-heading text-4xl font-black text-white leading-tight mb-4 tracking-tighter">
            {COMPANY_INFO.name}
          </h1>
          <p className="text-emerald-500 font-black uppercase tracking-[0.3em] text-xs">The Pest Doctor</p>
        </section>

        {/* DOWNLOAD BUTTON (Primary Action) */}
        <section className="bg-emerald-600/10 border border-emerald-500/20 p-8 rounded-3xl text-center">
          <p className="text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-6">Full Document Available</p>
        <button
  onClick={() => {
    window.open("/SIPC_Company_Profile.pdf", "_blank");
  }}
  className="block w-full bg-emerald-600 text-white py-5 rounded-2xl text-center font-black text-xs uppercase tracking-widest shadow-xl active:scale-95 transition-all"
>
  Download PDF Profile
</button>


        </section>

        {/* ABOUT US */}
        <section className="space-y-8">
          <h2 className="text-[11px] font-black uppercase tracking-[0.5em] text-zinc-600 border-b border-white/5 pb-4">Our Legacy</h2>
          <div className="space-y-6">
            <p className="text-slate-400 text-sm leading-relaxed font-bold italic">
              Established in {COMPANY_INFO.established} to bridge gaps in Pest Management services.
            </p>
            <p className="text-slate-500 text-xs leading-relaxed">
              Equipped with superior technology, genuine commodities, and professional manpower to mark up to international standards.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
               {COMPANY_INFO.accreditations.map(acc => (
                 <div key={acc} className="glass py-4 px-6 rounded-xl border border-white/5 text-center">
                   <span className="text-[10px] font-black text-emerald-500 tracking-widest">{acc}</span>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="grid grid-cols-1 gap-10">
          <div className="glass p-10 rounded-[2.5rem] border-white/5">
            <h3 className="text-emerald-500 text-[10px] font-black uppercase tracking-widest mb-6">Our Mission</h3>
            <p className="text-slate-400 text-xs leading-relaxed font-bold">{COMPANY_INFO.mission}</p>
          </div>
          <div className="glass p-10 rounded-[2.5rem] border-white/5">
            <h3 className="text-emerald-500 text-[10px] font-black uppercase tracking-widest mb-6">Our Vision</h3>
            <p className="text-slate-400 text-xs leading-relaxed font-bold">{COMPANY_INFO.vision}</p>
          </div>
        </section>

        {/* IPM ERDM PROGRAM */}
        <section className="space-y-12">
           <h2 className="text-[11px] font-black uppercase tracking-[0.5em] text-zinc-600 border-b border-white/5 pb-4 text-center">Integrated Pest Management</h2>
           <div className="flex flex-col items-center">
              <div className="w-64 h-64 rounded-full border-4 border-emerald-500/20 flex items-center justify-center relative p-4">
                 <div className="text-center">
                    <p className="text-white font-black text-[14px] leading-tight mb-2">ERDM<br/>Principles</p>
                    <div className="w-10 h-1 bg-emerald-500 mx-auto" />
                 </div>
                 {/* Visual markers for the circle */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-600 text-white text-[9px] font-black px-4 py-2 rounded-full shadow-lg">ELIMINATION</div>
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-blue-600 text-white text-[9px] font-black px-4 py-2 rounded-full shadow-lg">REDUCTION</div>
                 <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-600 text-white text-[9px] font-black px-4 py-2 rounded-full shadow-lg">DESTROYING</div>
                 <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-green-600 text-white text-[9px] font-black px-4 py-2 rounded-full shadow-lg">MONITORING</div>
              </div>
           </div>
           <p className="text-slate-500 text-xs text-center px-6 leading-relaxed">
             A collaborative responsibility between clients and SIPC to ensure sustainable pest-free environments.
           </p>
        </section>

        {/* PRESENCE MAP */}
        <section className="space-y-8">
           <h2 className="text-[11px] font-black uppercase tracking-[0.5em] text-zinc-600 border-b border-white/5 pb-4">Our Presence</h2>
           <div className="glass rounded-3xl p-8 border-white/5">
              <div className="grid grid-cols-3 gap-y-4 gap-x-2">
                 {COMPANY_INFO.presence.map(city => (
                   <div key={city} className="flex items-center space-x-2">
                     <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                     <span className="text-[9px] font-bold text-slate-400 tracking-tight">{city}</span>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* INDUSTRIES SERVED */}
        <section className="space-y-8">
           <h2 className="text-[11px] font-black uppercase tracking-[0.5em] text-zinc-600 border-b border-white/5 pb-4">Industries We Serve</h2>
           <div className="flex flex-wrap gap-2">
              {COMPANY_INFO.industries.map(ind => (
                <span key={ind} className="bg-slate-900 border border-white/5 px-4 py-2 rounded-full text-[9px] font-black text-slate-500 uppercase tracking-widest">
                   {ind}
                </span>
              ))}
           </div>
        </section>

        {/* FACILITY MANAGEMENT */}
        <section className="space-y-8">
           <h2 className="text-[11px] font-black uppercase tracking-[0.5em] text-zinc-600 border-b border-white/5 pb-4">Facility Management</h2>
           <ul className="space-y-3">
              {[
                "Housekeeping Services",
                "Landscaping & Gardening",
                "Catering Services",
                "Electrical & Plumbing",
                "Manpower Supply",
                "Facade Glass Cleaning"
              ].map((service, i) => (
                <li key={i} className="flex items-center space-x-4 glass p-4 rounded-xl border-white/5">
                   <span className="text-emerald-500">✔</span>
                   <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{service}</span>
                </li>
              ))}
           </ul>
        </section>

        {/* FOOTER ACTION */}
        <section className="py-20 text-center">
           <p className="text-slate-600 text-[10px] font-black uppercase tracking-widest mb-8">Ready to secure your premises?</p>
           <Link to="/book" className="bg-white text-black px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest shadow-2xl active:scale-95 transition-transform">
              Book Site Survey
           </Link>
        </section>

      </div>
    </div>
  );
};

export default PdfModule;
