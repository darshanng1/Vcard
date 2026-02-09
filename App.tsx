
import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import VCard from './components/VCard';
import ServicePage from './components/ServicePage';
import Layout from './components/Layout';
import Booking from './components/Booking';
import Blog from './components/Blog';
import { SERVICES } from './constants';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<VCard />} />
          <Route path="/book" element={<Booking />} />
          <Route path="/blog" element={<Blog />} />
          {SERVICES.map((service) => (
            <Route 
              key={service.id} 
              path={`/service/${service.slug}`} 
              element={<ServicePage service={service} />} 
            />
          ))}
          <Route path="*" element={
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6 bg-white">
              <h2 className="text-3xl font-extrabold text-zinc-900">Resource Not Found</h2>
              <p className="text-zinc-500 mt-2 max-w-xs">The specific service or page you are looking for has been moved or updated.</p>
              <Link to="/" className="mt-8 px-10 py-4 bg-emerald-600 text-white rounded-full font-bold shadow-xl shadow-emerald-200">
                Return to Safety
              </Link>
            </div>
          } />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
