
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ServiceInfo } from '../types';
import { CONTACT_INFO, COMPANY_INFO } from '../constants';

interface Props {
  service: ServiceInfo;
}

const ServicePage: React.FC<Props> = ({ service }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [service]);

  return (
    <article className="pb-40 bg-zinc-950 text-white min-h-screen">
      {/* Cinematic Nav */}
      <nav className="p-8">
        <Link to="/" className="inline-flex items-center text-zinc-500 font-black text-[9px] uppercase tracking-[0.4em] group hover:text-emerald-500 transition-colors">
          <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"></path></svg>
          SIPC Dashboard
        </Link>
      </nav>

      {/* Corporate Technical Content */}
      <header className="px-8 mb-16">
        <div className="text-7xl mb-10 filter grayscale brightness-150">{service.icon}</div>
        <div className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-500 mb-4 glow-text">Protocol Analysis</div>
        <h1 className="text-heading text-4xl font-black text-white leading-tight mb-6 tracking-tighter">
          {service.title}.
        </h1>
        <p className="text-lg text-zinc-400 leading-relaxed font-medium">
          {service.description}
        </p>
      </header>

      <div className="px-8 space-y-16">
        <section>
          <h2 className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-600 mb-6">Industrial Conflict</h2>
          <p className="text-zinc-400 leading-relaxed font-medium italic border-l-2 border-emerald-500 pl-8 py-2">
            {service.problem}
          </p>
        </section>

        <section className="glass p-10 rounded-[3rem] border-white/5">
          <h2 className="text-heading text-xl font-black text-white mb-6">Precision Audit</h2>
          <p className="text-zinc-500 leading-relaxed text-xs">
            {service.inspection}
          </p>
        </section>

        <section>
          <h2 className="text-heading text-xl font-black text-white mb-6">Strategic Execution</h2>
          <p className="text-zinc-500 leading-relaxed text-xs mb-8">
            {service.method}
          </p>
          <div className="bg-emerald-600/10 border border-emerald-600/20 p-8 rounded-[2.5rem] text-emerald-100 text-[10px] font-bold uppercase tracking-widest flex items-start space-x-4">
            <span className="text-2xl filter grayscale brightness-150">🌿</span>
            <span className="leading-relaxed">{service.safety}</span>
          </div>
        </section>

        <section>
          <h2 className="text-heading text-xl font-black text-white mb-8">Accountability FAQ</h2>
          <div className="space-y-10">
            {service.faqs.map((faq, i) => (
              <div key={i} className="border-b border-white/5 pb-8">
                <h3 className="font-black text-white text-[11px] uppercase tracking-widest mb-4">{faq.question}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Corporate CTA */}
        <section className="pt-12">
          <Link to="/book" className="block w-full bg-white text-zinc-950 p-6 rounded-full text-center font-black text-xs uppercase tracking-[0.2em] active:scale-95 transition-all shadow-2xl">
            Authorize Site Audit
          </Link>
          <p className="text-center text-[9px] text-zinc-600 font-black mt-6 uppercase tracking-[0.3em]">
            Senior Business Development Oversight Guaranteed.
          </p>
        </section>
      </div>
    </article>
  );
};

export default ServicePage;
