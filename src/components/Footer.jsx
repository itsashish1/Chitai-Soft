import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          letterSpacing: '0.12em',
          color: '#93c5fd',
          paddingBottom: '24px',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          marginBottom: '40px',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <span>CHITAI SOFT AUTOMATION &mdash; INDIA</span>
          <span>REV 1.0</span>
        </div>

        <div className="footer-top-grid">
          <div className="footer-brand-info">
            <div className="logo-box" style={{ width: 'fit-content' }}>
              <img src="/assets/images/image13.png" alt="Chitai Soft Automation" />
            </div>
            <p className="footer-desc">
              Engineering-grade automation solutions for industrial operations. PLC, SCADA, and Industrial IoT systems built for precision, reliability, and uptime.
            </p>
            <div className="footer-contact-items">
              <div className="footer-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>India</span>
              </div>
              <div className="footer-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <span>+91 9021682318</span>
              </div>
              <div className="footer-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <span><a href="mailto:info@chitaisoftautomation.in" style={{ color: 'inherit' }}>info@chitaisoftautomation.in</a> / <a href="mailto:chitaisoft@gmail.com" style={{ color: 'inherit' }}>chitaisoft@gmail.com</a></span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">SERVICES</h4>
            <ul className="footer-links">
              <li><Link to="/services#plc-scada" className="footer-link">PLC &amp; SCADA Systems</Link></li>
              <li><Link to="/services#machine-monitoring" className="footer-link">Machine Monitoring &amp; OEE</Link></li>
              <li><Link to="/services#energy-monitoring" className="footer-link">Energy &amp; Power Analytics</Link></li>
              <li><Link to="/services#iiot" className="footer-link">Industrial IoT &amp; Industry 4.0</Link></li>
              <li><Link to="/services#brands" className="footer-link">Supported Brands (Emerson, Schneider...)</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">COMPANY</h4>
            <ul className="footer-links">
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/industries" className="footer-link">Industries</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
              <li><Link to="/contact" className="footer-link">Get a Quote</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div className="footer-bottom-inner">
            <div>&copy; 2026 Chitai Soft Automation. All rights reserved.</div>
            <div className="footer-motto">PRECISION &bull; RELIABILITY &bull; INNOVATION</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
