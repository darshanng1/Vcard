import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ServiceInfo } from '../types';

/* ✅ IMPORT IMAGES */
import bird1 from "../assets/images/blog/bird1.jpg";
import bird2 from "../assets/images/blog/bird2.jpg";
import bird3 from "../assets/images/blog/bird3.jpg";
import bird4 from "../assets/images/blog/bird4.jpg";

interface Props {
  service: ServiceInfo;
}

const ServicePage: React.FC<Props> = ({ service }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [service]);

  const isBirdNetting = service.slug === "bird-netting-bangalore";

  return (
    <article className="pb-40 bg-slate-950 text-slate-200 min-h-screen overflow-y-auto no-scrollbar relative">
      <div className="absolute inset-0 texture-structural opacity-10 pointer-events-none" />

      {/* 🧭 NAVIGATION */}
      <nav className="p-6 sticky top-0 bg-slate-950/80 backdrop-blur-xl z-50 flex items-center justify-between border-b border-white/5 shadow-lg">
        <Link to="/" className="inline-flex items-center text-slate-500 font-black text-[10px] uppercase tracking-[0.4em] hover:text-emerald-500 transition-colors">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M15 19l-7-7 7-7"></path>
          </svg>
          Back
        </Link>
      </nav>

      {/* 📜 HEADER */}
      <header className="px-10 pt-24 mb-20 relative z-10 text-center">
        <div className="text-9xl mb-12 drop-shadow-[0_0_50px_rgba(16,185,129,0.3)]">
          {service.icon}
        </div>
        <h1 className="text-heading text-5xl font-black text-white leading-tight mb-8 tracking-tighter">
          {service.title}
        </h1>
        <p className="text-lg text-slate-500 leading-relaxed font-medium px-4 max-w-sm mx-auto">
          {service.description}
        </p>
      </header>

      <div className="px-10 space-y-24 max-w-[500px] mx-auto relative z-10">

        {/* 🖼️ INSTALLATION GALLERY (ONLY FOR BIRD NETTING PAGE) */}
        {isBirdNetting && (
          <section>
            <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-zinc-700 mb-8 border-b border-white/5 pb-4">
              Installation Gallery
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <img src={bird1} alt="Balcony Bird Net Installation Bangalore" className="rounded-2xl shadow-lg w-full object-cover" />
              <img src={bird2} alt="Pigeon Net Service Bangalore Apartment" className="rounded-2xl shadow-lg w-full object-cover" />
              <img src={bird3} alt="High Rise Bird Net Installation Bengaluru" className="rounded-2xl shadow-lg w-full object-cover" />
              <img src={bird4} alt="Professional Balcony Net Installation Bangalore" className="rounded-2xl shadow-lg w-full object-cover" />
            </div>
          </section>
        )}

        {/* PROBLEM ANALYSIS */}
        <section className="industrial-border pl-8 border-emerald-500/20">
          <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-zinc-700 mb-10 border-b border-white/5 pb-4">
            The Problem
          </h2>
          <div className="space-y-8">
            <p className="text-slate-400 leading-relaxed text-md font-medium">
              {service.problem}
            </p>
            <div className="glass p-8 rounded-[2rem] border-emerald-500/10">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-4 flex items-center">
                <span className="w-4 h-4 mr-2">🔎</span> Observations
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed italic">
                {service.inspection}
              </p>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="industrial-border pl-8 border-emerald-500/20">
          <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-zinc-700 mb-10 border-b border-white/5 pb-4">
            Our Approach
          </h2>
          <div className="space-y-12">
            <p className="text-slate-400 leading-relaxed text-md font-medium">
              {service.method}
            </p>

            <div className="grid grid-cols-2 gap-3">
              {service.applications.map((app, i) => (
                <div key={i} className="glass p-5 rounded-2xl border border-white/5 flex items-center space-x-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 leading-none">
                    {app}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-slate-900 border border-emerald-500/10 p-10 rounded-[2.5rem] text-slate-400 text-[11px] font-bold uppercase tracking-widest flex items-start space-x-6">
              <span className="text-3xl opacity-40">🛡️</span>
              <span className="leading-relaxed">{service.safety}</span>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="industrial-border pl-8 border-emerald-500/20">
          <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-zinc-700 mb-12 border-b border-white/5 pb-4">
            Common Questions
          </h2>
          <div className="space-y-12">
            {service.faqs.map((faq, i) => (
              <div key={i} className="border-b border-white/5 pb-10 last:border-none">
                <h3 className="font-black text-white text-[12px] uppercase tracking-widest mb-6 leading-relaxed">
                  {faq.question}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="pt-20 pb-40">
          <Link
            to="/book"
            className="block w-full bg-emerald-600 text-white py-7 rounded-[2rem] text-center font-black text-[12px] uppercase tracking-[0.5em] active:scale-95 transition-all shadow-2xl hover:bg-emerald-500"
          >
            Book Inspection
          </Link>
        </section>

      </div>
    </article>
  );
};

export default ServicePage;