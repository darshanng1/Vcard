
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CONTACT_INFO, SERVICES } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-zinc-100 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg group-hover:rotate-12 transition-transform"></div>
            <span className={`font-black text-lg tracking-tighter ${!isScrolled && isHome ? 'text-white' : 'text-zinc-900'}`}>DNG HYGIENE.</span>
          </Link>
          <div className="flex items-center space-x-6">
             <Link to="/blog" className={`text-xs font-black uppercase tracking-widest ${!isScrolled && isHome ? 'text-zinc-300 hover:text-white' : 'text-zinc-500 hover:text-emerald-600'} transition-colors hidden md:block`}>Analysis</Link>
             <Link to="/book" className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${!isScrolled && isHome ? 'bg-emerald-600 text-white hover:bg-emerald-500' : 'bg-black text-white hover:bg-emerald-600'}`}>Request Audit</Link>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-0">
        {children}
      </main>

      <footer className="bg-zinc-950 text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-[100px] -ml-48 -mb-48"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-8">
                <div className="w-10 h-10 bg-emerald-600 rounded-xl"></div>
                <span className="font-black text-2xl tracking-tighter">DNG HYGIENE.</span>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
                The authority in technical pest management. Serving Bengaluru's high-rise apartments, corporate IT parks, and warehouses since 2012. Built on scientific accuracy and safety.
              </p>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase text-zinc-500 tracking-[0.3em] mb-8">Service Zones</h4>
              <ul className="space-y-4 text-xs font-bold text-zinc-400">
                <li className="hover:text-emerald-500 transition-colors cursor-default">Whitefield • Outer Ring Road</li>
                <li className="hover:text-emerald-500 transition-colors cursor-default">Electronic City • Sarjapur</li>
                <li className="hover:text-emerald-500 transition-colors cursor-default">Indiranagar • Koramangala</li>
                <li className="hover:text-emerald-500 transition-colors cursor-default">Hebbal • Manyata Tech Park</li>
              </ul>
            </div>
            <div>
               <h4 className="text-[10px] font-black uppercase text-zinc-500 tracking-[0.3em] mb-8">Direct Access</h4>
               <a href={`tel:${CONTACT_INFO.phone}`} className="block text-xl font-black mb-4 hover:text-emerald-500 transition-colors">{CONTACT_INFO.phone}</a>
               <a href={`mailto:${CONTACT_INFO.email}`} className="block text-zinc-500 hover:text-white transition-colors text-sm font-bold">specialist@darshanng.com</a>
            </div>
          </div>
          <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-zinc-600 text-[10px] font-black uppercase tracking-widest">&copy; {new Date().getFullYear()} Darshan N G Specialist • DNG Protection Systems</div>
            <div className="flex space-x-6">
              <Link to="/service/termite-treatment-bengaluru" className="text-zinc-700 hover:text-emerald-600 text-[10px] font-bold uppercase transition-colors">Termites</Link>
              <Link to="/service/bird-netting-bengaluru" className="text-zinc-700 hover:text-emerald-600 text-[10px] font-bold uppercase transition-colors">Bird Proofing</Link>
              <Link to="/service/cockroach-control-bengaluru" className="text-zinc-700 hover:text-emerald-600 text-[10px] font-bold uppercase transition-colors">Hygiene</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Call & WhatsApp Buttons (Mobile Only Sticky) */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-[200] flex space-x-2">
        <a href={`tel:${CONTACT_INFO.phone}`} className="flex-1 bg-emerald-600 text-white py-4 rounded-2xl font-black text-center shadow-2xl active:scale-95 transition-transform">Call Now</a>
        <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} className="flex-1 bg-black text-white py-4 rounded-2xl font-black text-center shadow-2xl active:scale-95 transition-transform flex items-center justify-center space-x-2">
          <span>WhatsApp</span>
        </a>
      </div>

      {/* Floating WhatsApp Bubble (Desktop) */}
      <a 
        href={`https://wa.me/${CONTACT_INFO.whatsapp}`} 
        className="hidden md:flex fixed bottom-10 right-10 z-[200] w-16 h-16 bg-emerald-600 text-white rounded-full items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
        <div className="absolute right-full mr-4 bg-white px-4 py-2 rounded-xl text-zinc-900 font-bold text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none">
          Questions? Talk to Darshan
        </div>
      </a>
    </div>
  );
};

export default Layout;
