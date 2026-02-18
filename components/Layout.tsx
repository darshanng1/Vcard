import React from 'react';
import { useLocation } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isBooking = location.pathname === '/book';

  return (
    <div className="app-container flex flex-col min-h-screen relative overflow-hidden">
      <main className="flex-grow">
        {children}
      </main>

      {/* Global Scroll To Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed right-4 bottom-24 z-40 bg-slate-800 text-white w-12 h-12 rounded-full shadow-xl flex items-center justify-center"
        aria-label="Scroll to top"
      >
        ↑
      </button>

      {/* No persistent dock or header dividers here for a clean vCard flow */}
    </div>
  );
};

export default Layout;
