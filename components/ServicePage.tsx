
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
    <article className="max-w-4xl mx-auto px-6 pt-16 pb-32">
      {/* Navigation */}
      <nav className="mb-12">
        <Link 
          to="/" 
          className="group inline-flex items-center text-zinc-500 font-bold hover:text-emerald-600 transition-colors"
        >
          <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center mr-3 group-hover:bg-emerald-50 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          </div>
          Back to Specialist Profile
        </Link>
      </nav>

      {/* Header */}
      <header className="mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl mb-6 drop-shadow-sm"
        >
          {service.icon}
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold text-zinc-900 leading-[1.1] mb-6 tracking-tight"
        >
          {service.title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-zinc-500 leading-relaxed font-medium max-w-2xl"
        >
          {service.description}
        </motion.p>
      </header>

      {/* Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-16">
          <section>
            <h2 className="text-2xl font-extrabold text-zinc-900 mb-6 flex items-center">
              <span className="w-1.5 h-6 bg-emerald-500 rounded-full mr-3"></span>
              The Problem
            </h2>
            <p className="text-zinc-600 leading-relaxed text-lg italic border-l-4 border-zinc-100 pl-6 py-2">
              {service.problem}
            </p>
          </section>

          <section className="bg-zinc-50 p-10 rounded-[3rem] border border-zinc-100">
            <h2 className="text-2xl font-extrabold text-zinc-900 mb-6">Expert Inspection</h2>
            <p className="text-zinc-600 leading-relaxed text-lg">
              {service.inspection}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-zinc-900 mb-6 flex items-center">
              <span className="w-1.5 h-6 bg-emerald-500 rounded-full mr-3"></span>
              Treatment Method
            </h2>
            <p className="text-zinc-600 leading-relaxed text-lg mb-8">
              {service.method}
            </p>
            <div className="bg-emerald-50 p-8 rounded-[2.5rem] border border-emerald-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 text-emerald-600 text-6xl">🌿</div>
              <h3 className="font-extrabold text-emerald-900 text-lg mb-3">Safety First Assurance</h3>
              <p className="text-emerald-800 leading-relaxed">{service.safety}</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-zinc-900 mb-8">Professional FAQ</h2>
            <div className="space-y-8">
              {service.faqs.map((faq, i) => (
                <div key={i} className="group">
                  <h3 className="font-bold text-zinc-900 text-xl mb-3 flex items-start">
                    <span className="text-emerald-500 mr-2">Q.</span> {faq.question}
                  </h3>
                  <p className="text-zinc-500 leading-relaxed pl-7"> {faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar / Sticky Elements */}
        <aside className="lg:col-span-1">
          <div className="sticky top-12 space-y-8">
            <div className="bg-white p-8 rounded-[2.5rem] premium-shadow border border-zinc-50">
              <h3 className="font-bold text-zinc-900 mb-6">Applications</h3>
              <div className="space-y-3">
                {service.applications.map((app, i) => (
                  <div key={i} className="flex items-center space-x-3 text-zinc-600 font-semibold bg-zinc-50 p-4 rounded-2xl">
                    <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                    <span>{app}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-600 p-8 rounded-[2.5rem] text-white shadow-2xl shadow-emerald-200">
              <h3 className="text-2xl font-bold mb-4">Direct Help</h3>
              <p className="text-emerald-100 text-sm leading-relaxed mb-8">
                Skip the call center. Talk directly to the execution expert in Bengaluru.
              </p>
              <div className="space-y-3">
                <a 
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="w-full flex items-center justify-center space-x-2 bg-white text-emerald-700 p-4 rounded-2xl font-extrabold hover:bg-emerald-50 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  <span>Call Technician</span>
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
};

export default ServicePage;
