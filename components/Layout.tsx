
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CONTACT_INFO, SERVICES } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col selection:bg-emerald-100 selection:text-emerald-900">
      <main className="flex-grow">
        {children}
      </main>

      {/* Premium Footer - SEO Hub */}
      <footer className="bg-zinc-50 border-t border-zinc-200 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h4 className="text-lg font-bold text-zinc-900 mb-4">Direct Specialist Coordination</h4>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
                Dealing with a technician directly ensures clear communication, faster execution, and better results than large corporate agencies.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-zinc-900 mb-4">Bengaluru Service Hub</h4>
              <div className="flex flex-wrap gap-2">
                {SERVICES.map(s => (
                  <Link 
                    key={s.id} 
                    to={`/service/${s.slug}`} 
                    className="bg-white text-zinc-600 hover:text-emerald-600 text-xs border border-zinc-200 rounded-full px-4 py-2 transition-all hover:border-emerald-200 shadow-sm"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-zinc-200 text-center">
            <div className="text-zinc-400 text-[10px] uppercase font-bold tracking-widest mb-4">
              &copy; {new Date().getFullYear()} {CONTACT_INFO.name}. All Rights Reserved.
            </div>
            <div className="text-zinc-300 text-[9px] max-w-md mx-auto leading-relaxed">
              Professional pest control and bird netting services available in Whitefield, Indiranagar, Koramangala, Jayanagar, and all across Bengaluru.
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Quick Contact - Appears on Service Pages / Scroll */}
      {!isHome && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-2 z-50 w-full max-w-[90%] md:max-w-xs">
          <a 
            href={`tel:${CONTACT_INFO.phone}`}
            className="flex-1 flex items-center justify-center space-x-2 bg-emerald-600 text-white px-6 py-4 rounded-full shadow-2xl font-bold transition-transform active:scale-95"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            <span>Call Now</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default Layout;
