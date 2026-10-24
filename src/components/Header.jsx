import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navItems = [
    { to: '/', label: 'Home', num: '01', desc: 'Precision Automation & IoT' },
    { to: '/services', label: 'Services', num: '02', desc: 'PLC, SCADA, Panels & IIoT' },
    { to: '/industries', label: 'Industries', num: '03', desc: 'Power, Water, Energy & Manufacturing' },
    { to: '/about', label: 'About', num: '04', desc: 'Our Engineering Expertise' },
    { to: '/contact', label: 'Contact', num: '05', desc: 'Get in Touch with Engineers' },
  ];

  return (
    <header className="site-header" ref={headerRef}>
      <div className="container header-container">
        <Link to="/" className="header-brand" onClick={() => setIsOpen(false)}>
          <div className="logo-box">
            <img src="/assets/images/image13.png" alt="Chitai Soft Automation Logo" />
          </div>
          <div className="brand-text">
            <span className="brand-title">Chitai Soft</span>
            <span className="brand-sub">Automation</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-menu">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-cta">
          <Link to="/contact" className="btn-quote">Get a Quote</Link>
        </div>

        {/* Unique Animated Morphing Hamburger Button */}
        <button
          className={`unique-hamburger-btn ${isOpen ? 'active' : ''}`}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="hamburger-bar bar-top"></span>
          <span className="hamburger-bar bar-mid"></span>
          <span className="hamburger-bar bar-bot"></span>
        </button>
      </div>

      {/* Unique Fullscreen / Slide-Over Glassmorphism Mobile Drawer */}
      <div
        className={`mobile-drawer-backdrop ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(false)}
        aria-hidden={!isOpen}
      />

      <div className={`mobile-nav-drawer ${isOpen ? 'open' : ''}`} aria-hidden={!isOpen}>
        <div className="drawer-top-bar">
          <div className="drawer-status-badge">
            <span className="live-pulse-dot"></span>
            <span>SYSTEM READY &bull; PAN-INDIA</span>
          </div>
          <button
            className="drawer-close-icon-btn"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>

        <div className="drawer-scroll-content">
          <div className="drawer-nav-section">
            <div className="drawer-section-label">// NAVIGATION MENU</div>
            <ul className="drawer-nav-list">
              {navItems.map((item, index) => (
                <li
                  key={item.to}
                  className="drawer-nav-item"
                  style={{ animationDelay: `${(index + 1) * 70}ms` }}
                >
                  <NavLink
                    to={item.to}
                    className={({ isActive }) => `drawer-nav-link ${isActive ? 'active' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="drawer-item-num">{item.num}</span>
                    <div className="drawer-item-info">
                      <span className="drawer-item-title">{item.label}</span>
                      <span className="drawer-item-desc">{item.desc}</span>
                    </div>
                    <span className="drawer-item-chevron">&rarr;</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="drawer-action-wrap">
            <Link
              to="/contact"
              className="btn btn-primary drawer-consult-btn"
              onClick={() => setIsOpen(false)}
            >
              Request a Consultation &rarr;
            </Link>
          </div>

          <div className="drawer-footer-card">
            <div className="drawer-footer-title">DIRECT CONTACT</div>
            <a href="tel:+919021682318" className="drawer-contact-row">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>+91 9021682318</span>
            </a>
            <a href="mailto:chitaisoft@gmail.com" className="drawer-contact-row">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>chitaisoft@gmail.com</span>
            </a>
            <a href="mailto:info@chitaisoftautomation.in" className="drawer-contact-row">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>info@chitaisoftautomation.in</span>
            </a>
            <div className="drawer-contact-row drawer-location-tag">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>Lucknow, Uttar Pradesh, India</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
