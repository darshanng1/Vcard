
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ServiceInfo } from '../types';
import { CONTACT_INFO } from '../constants';

interface Props {
  service: ServiceInfo;
}

const ServicePage: React.FC<Props> = ({ service }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [service]);

  return (
    <article className="pb-32 bg-white">
      {/* Mini Nav */}
      <nav className="p-6">
        <Link to="/" className="inline-flex items-center text-zinc-400 font-bold text-sm group">
          <svg className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"></path></svg>
          Home Profile
        </Link>
      </nav>

      {/* SEO Content */}
      <header className="px-6 mb-12">
        <div className="text-6xl mb-6">{service.icon}</div>
        <h1 className="text-4xl font-black text-zinc-900 leading-tight mb-4 tracking-tighter">
          {service.title} <span className="text-emerald-600 block">in Bengaluru.</span>
        </h1>
        <p className="text-lg text-zinc-500 leading-relaxed font-medium">
          {service.description}
        </p>
      </header>

      <div className="px-6 space-y-12">
        <section>
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400 mb-4">The Challenge</h2>
          <p className="text-zinc-600 leading-relaxed font-medium italic border-l-4 border-emerald-500 pl-6 py-2">
            {service.problem}
          </p>
        </section>

        <section className="bg-zinc-50 p-8 rounded-[3rem] border border-zinc-100">
          <h2 className="text-xl font-black text-zinc-900 mb-4">Scientific Inspection</h2>
          <p className="text-zinc-600 leading-relaxed text-sm">
            {service.inspection}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-black text-zinc-900 mb-4">Execution Protocol</h2>
          <p className="text-zinc-600 leading-relaxed text-sm mb-6">
            {service.method}
          </p>
          <div className="bg-emerald-50 p-6 rounded-3xl text-emerald-800 text-xs font-bold flex items-start space-x-3">
            <span className="text-xl">🌿</span>
            <span>{service.safety}</span>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-black text-zinc-900 mb-6">Expert FAQs</h2>
          <div className="space-y-6">
            {service.faqs.map((faq, i) => (
              <div key={i}>
                <h3 className="font-black text-zinc-900 text-sm mb-2">{faq.question}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Local Booking CTA */}
        <section className="pt-10">
          <Link to="/book" className="block bg-zinc-900 text-white p-6 rounded-[2.5rem] text-center font-black text-lg active:scale-95 transition-all shadow-xl">
            Book Site Audit
          </Link>
          <p className="text-center text-[10px] text-zinc-400 font-bold mt-4 uppercase tracking-widest">
            Darshan coordinates all dispatches directly.
          </p>
        </section>
      </div>
    </article>
  );
};

export default ServicePage;
