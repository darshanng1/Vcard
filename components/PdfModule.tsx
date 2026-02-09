
import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../constants';

const PdfModule: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="h-full flex flex-col bg-zinc-950 items-center justify-center p-12 text-center text-white">
      <div className="relative mb-12">
        <div className="absolute -inset-4 bg-emerald-500/20 rounded-[3rem] blur-2xl opacity-40 breathe-glow"></div>
        <div className="relative w-24 h-24 glass rounded-[2.5rem] flex items-center justify-center text-emerald-500 border-white/5">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
        </div>
      </div>

      <div className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-500 mb-4">Secured Document</div>
      <h1 className="text-heading text-4xl font-black mb-6 tracking-tighter">{title}</h1>
      
      <p className="text-zinc-500 text-xs leading-relaxed mb-16 max-w-[240px] font-bold uppercase tracking-widest">
        This resource is restricted to {COMPANY_INFO.shortName} stakeholders. Authorization required.
      </p>
      
      <button className="w-full bg-white text-black py-6 rounded-full font-black text-xs uppercase tracking-widest shadow-2xl mb-8 active:scale-95 transition-transform">
        Authenticate & Download
      </button>
      
      <Link to="/" className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-700 hover:text-emerald-500 transition-colors">
        Return to Dashboard
      </Link>
    </div>
  );
};

export default PdfModule;
