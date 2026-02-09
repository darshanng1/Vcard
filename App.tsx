
import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import VCard from './components/VCard';
import ServicePage from './components/ServicePage';
import Layout from './components/Layout';
import { SERVICES } from './constants';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<VCard />} />
          {SERVICES.map((service) => (
            <Route 
              key={service.id} 
              path={`/service/${service.slug}`} 
              element={<ServicePage service={service} />} 
            />
          ))}
          <Route path="*" element={
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
              <h2 className="text-2xl font-bold text-gray-800">Page Not Found</h2>
              <p className="text-gray-600 mt-2">The page you're looking for doesn't exist.</p>
              <Link to="/" className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full font-semibold">
                Back to Profile
              </Link>
            </div>
          } />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
