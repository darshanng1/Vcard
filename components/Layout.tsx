
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CONTACT_INFO, SERVICES } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow">
        {children}
      </main>

      {/* Persistent Footer - SEO Hub */}
      <footer className="bg-white border-t border-gray-200 mt-auto py-8 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-4">Expert Services in Bengaluru</p>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {SERVICES.map(s => (
              <Link 
                key={s.id} 
                to={`/service/${s.slug}`} 
                className="text-gray-600 hover:text-blue-600 text-sm border border-gray-200 rounded-full px-4 py-1.5 transition-colors"
              >
                {s.title}
              </Link>
            ))}
          </div>
          <div className="text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} {CONTACT_INFO.name}. Direct Technician Service.
          </div>
        </div>
      </footer>

      {/* Sticky Quick Action - Mobile Only */}
      {!isHome && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-3 md:hidden z-50">
          <a 
            href={`tel:${CONTACT_INFO.phone}`}
            className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg font-bold"
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
