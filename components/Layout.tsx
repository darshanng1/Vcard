
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
      {/* No persistent dock or header dividers here for a clean vCard flow */}
    </div>
  );
};

export default Layout;
