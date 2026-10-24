import React, { useState, useRef } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Toast from './components/Toast';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import IndustriesPage from './pages/IndustriesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const toastTimerRef = useRef(null);

  const showToast = (message, type = 'success') => {
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    setToast({ show: true, message, type });
    toastTimerRef.current = setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }));
    }, 4500);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="site-wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage onShowToast={showToast} />} />
            <Route path="/index.html" element={<Navigate to="/" replace />} />

            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services.html" element={<ServicesPage />} />

            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/industries.html" element={<IndustriesPage />} />

            <Route path="/about" element={<AboutPage />} />
            <Route path="/about.html" element={<AboutPage />} />

            <Route path="/contact" element={<ContactPage onShowToast={showToast} />} />
            <Route path="/contact.html" element={<ContactPage onShowToast={showToast} />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <Toast toast={toast} />
      </div>
    </BrowserRouter>
  );
}
