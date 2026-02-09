
import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../constants';

const PdfModule: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="h-full flex flex-col bg-zinc-950 items-center justify-center p-8 text-center">
      <div className="w-20 h-20 bg-emerald-600/20 rounded-[2rem] flex items-center justify-center text-emerald-500 mb-8 border border-emerald-500/20">
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
      </div>
      <h1 className="text-heading text-3xl font-black text-white mb-4">{title}</h1>
      <p className="text-zinc-500 text-sm mb-12 max-w-xs">
        The requested document is restricted for authorized clients. Submit your request for an encrypted download link.
      </p>
      
      <button className="w-full bg-white text-zinc-950 py-5 rounded-full font-black text-xs uppercase tracking-widest shadow-xl mb-4">
        Request Access
      </button>
      
      <Link to="/" className="text-zinc-600 font-black text-[10px] uppercase tracking-[0.4em] hover:text-emerald-500 transition-colors">
        Cancel Request
      </Link>
    </div>
  );
};

export default PdfModule;
