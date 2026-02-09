
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CONTACT_INFO, SERVICES } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isBooking = location.pathname === '/book';

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header / Nav */}
      <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isHome ? 'bg-transparent' : 'bg-white/80 backdrop-blur-md border-b border-zinc-100'}`}>
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-xl"></div>
            <span className={`font-black text-lg tracking-tighter ${isHome ? 'text-white' : 'text-zinc-900'}`}>DNG Protection.</span>
          </Link>
          <div className="flex items-center space-x-6">
             <Link to="/blog" className={`text-sm font-bold ${isHome ? 'text-zinc-300 hover:text-white' : 'text-zinc-500 hover:text-emerald-600'} transition-colors hidden md:block`}>Authority</Link>
             {!isBooking && (
               <Link to="/book" className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${isHome ? 'bg-emerald-500 text-zinc-950 hover:bg-emerald-400' : 'bg-zinc-900 text-white hover:bg-black'}`}>Book Inspection</Link>
             )}
          </div>
        </div>
      </header>

      <main className="flex-grow pt-0">
        {children}
      </main>

      <footer className="bg-zinc-950 text-white py-24 px-6 rounded-t-[5rem]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
            <div>
              <div className="flex items-center space-x-2 mb-8">
                <div className="w-8 h-8 bg-emerald-600 rounded-xl"></div>
                <span className="font-black text-2xl tracking-tighter text-white">DNG Protection.</span>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                Scientific pest elimination and high-rise bird netting for Bengaluru. Built on accountability and technical excellence.
              </p>
            </div>
            <div>
              <h4 className="text-zinc-200 font-black uppercase text-[10px] tracking-[0.3em] mb-8">Solutions</h4>
              <div className="grid grid-cols-1 gap-4">
                {SERVICES.map(s => (
                  <Link key={s.id} to={`/service/${s.slug}`} className="text-zinc-400 hover:text-emerald-500 font-bold text-sm transition-colors">{s.title}</Link>
                ))}
              </div>
            </div>
            <div>
               <h4 className="text-zinc-200 font-black uppercase text-[10px] tracking-[0.3em] mb-8">Direct Access</h4>
               <a href={`tel:${CONTACT_INFO.phone}`} className="block text-2xl font-black mb-4 hover:text-emerald-500 transition-colors">{CONTACT_INFO.phone}</a>
               <a href={`mailto:${CONTACT_INFO.email}`} className="block text-zinc-500 hover:text-white transition-colors">specialist@darshanng.com</a>
            </div>
          </div>
          <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-zinc-600 text-[10px] font-black uppercase tracking-widest">&copy; {new Date().getFullYear()} Darshan N G Specialist</div>
            <div className="text-zinc-700 text-[10px] font-bold">Whitefield • Indiranagar • Koramangala • Jayanagar • Bengaluru</div>
          </div>
        </div>
      </footer>

      {/* Floating Action Mobile */}
      {!isBooking && (
        <div className="md:hidden fixed bottom-10 left-6 right-6 z-50">
          <Link to="/book" className="flex items-center justify-center space-x-3 bg-emerald-600 text-white p-5 rounded-3xl shadow-2xl shadow-emerald-600/30 font-black text-lg active:scale-95 transition-transform">
            <span>Book Expert Inspection</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
