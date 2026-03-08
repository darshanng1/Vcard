import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Videos from "./components/Videos";
import Layout from './components/Layout';
import VCard from './components/VCard';
import Booking from './components/Booking';
import ChatModule from './components/ChatModule';
import PdfModule from './components/PdfModule';
import UploadModule from './components/UploadModule';
import ServicePage from './components/ServicePage';

import { SERVICES } from './constants';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Layout />}>

          <Route path="/" element={<VCard />} />
          <Route path="/book" element={<Booking />} />
          <Route path="/chat" element={<ChatModule />} />
          <Route path="/rate-card" element={<PdfModule title="Rate Card" />} />
          <Route path="/invoice" element={<PdfModule title="Request Invoice" />} />
          <Route path="/upload" element={<UploadModule />} />
          <Route path="/videos" element={<Videos />} />
          {/* Redirect /blog → /blog/ */}
          <Route path="/blog" element={<Navigate to="/blog/" replace />} />

          {SERVICES.map((s) => (
            <Route
              key={s.id}
              path={`/service/${s.slug}`}
              element={<ServicePage service={s} />}
            />
          ))}

        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;