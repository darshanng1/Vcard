
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import VCard from './components/VCard';
import Booking from './components/Booking';
import ChatModule from './components/ChatModule';
import PdfModule from './components/PdfModule';
import UploadModule from './components/UploadModule';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<VCard />} />
          <Route path="/book" element={<Booking />} />
          <Route path="/chat" element={<ChatModule />} />
          <Route path="/rate-card" element={<PdfModule title="Rate Card" />} />
          <Route path="/invoice" element={<PdfModule title="Request Invoice" />} />
          <Route path="/upload" element={<UploadModule />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
