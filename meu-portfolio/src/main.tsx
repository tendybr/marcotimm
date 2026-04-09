import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import TermsOfService from './pages/TermsOfService.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy.tsx';
import CookiePolicy from './pages/CookiePolicy.tsx';
import Legal from './pages/Legal.tsx';
import './index.css';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}
