import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CounterCard from '../components/CounterCard';
import { submitEnquiry } from '../services/emailService';

export default function HomePage({ onShowToast }) {
  const [formData, setFormData] = useState({
    user_name: '',
    user_company: '',
    user_phone: '',
    project_brief: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await submitEnquiry({
        ...formData,
        service_interest: 'Home Consultation Enquiry',
        page_source: 'Home Page'
      });
      setSubmitting(false);
      setSubmitted(true);
      onShowToast('Thank you! Your enquiry has been received. Our engineering team will respond within 24 hours.', 'success');
      setFormData({ user_name: '', user_company: '', user_phone: '', project_brief: '' });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      console.error(err);
      setSubmitting(false);
      onShowToast('Unable to send enquiry automatically. Please email info@chitaisoftautomation.in directly.', 'error');
    }
  };

  return (
    <div className="home-page">
      {/* Hero Section (Matches image1.png) */}
      <section className="hero-section circuit-bg">
        <div className="container">
          <div className="hero-content">
            {/* Live Telemetry Radar Pill */}
            <div className="live-telemetry-pill">
              <div className="radar-dot-wrapper">
                <div className="radar-ring"></div>
                <div className="radar-dot"></div>
              </div>
              <span>SYSTEM ONLINE &bull; REAL-TIME INDUSTRIAL AUTOMATION &amp; IOT</span>
            </div>

            <div className="hero-eyebrow">
              INDUSTRIAL AUTOMATION &bull; PAN-INDIA SOLUTIONS
            </div>
            <h1 className="hero-title">
              Precision Automation.<br />Intelligent Control.
            </h1>
            <p className="hero-subtitle">
              PLC &amp; SCADA systems and Industrial IoT solutions engineered for power generation, process industries, and manufacturing across India and beyond.
            </p>
            <div className="hero-actions">
              <a href="#enquiry-section" className="btn btn-primary">Request a Consultation &rarr;</a>
              <Link to="/services" className="btn btn-secondary">View Services</Link>
            </div>

            {/* Live Counters Grid */}
            <div className="live-counter-grid" style={{ marginTop: '40px', textAlign: 'left' }}>
              <CounterCard
                target="30"
                prefix="↓ "
                suffix="%"
                label="Unplanned Downtime"
                sub="Automated alerts & condition monitoring"
              />
              <CounterCard
                target="15"
                prefix="↑ "
                suffix="%"
                label="OEE Efficiency"
                sub="Shift-by-shift live production analytics"
              />
              <CounterCard
                target="99.8"
                suffix="%"
                decimals={1}
                label="Plant Reliability"
                sub="Fault-tolerant PLC & SCADA architectures"
              />
              <CounterCard
                target="0"
                label="Rip-And-Replace"
                sub="Non-intrusive retrofit with existing machines"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions Banner */}
      <div className="value-strip">
        <div className="container">
          <div className="value-strip-inner">
            <div className="value-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Reliable
            </div>
            <div className="value-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Innovative
            </div>
            <div className="value-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Customized Solutions
            </div>
          </div>
        </div>
      </div>

      {/* Moving Infinite Marquee Ticker */}
      <div className="marquee-strip">
        <div className="marquee-track">
          <div className="marquee-item"><span className="marquee-dot"></span> EMERSON DELTAV &amp; PACSYSTEMS</div>
          <div className="marquee-item"><span className="marquee-dot"></span> SCHNEIDER ELECTRIC MODICON</div>
          <div className="marquee-item"><span className="marquee-dot"></span> DELTA DVP &amp; DOP HMI</div>
          <div className="marquee-item"><span className="marquee-dot"></span> RENU FLEXIPANELS</div>
          <div className="marquee-item"><span className="marquee-dot"></span> MODBUS TCP &amp; RTU</div>
          <div className="marquee-item"><span className="marquee-dot"></span> OPC-UA / DA HISTORIAN</div>
          <div className="marquee-item"><span className="marquee-dot"></span> MQTT SPARKPLUG B</div>
          <div className="marquee-item"><span className="marquee-dot"></span> OEE &amp; DOWNTIME TELEMETRY</div>
          <div className="marquee-item"><span className="marquee-dot"></span> ZERO RIP-AND-REPLACE RETROFIT</div>
          {/* Duplicate items for seamless continuous loop */}
          <div className="marquee-item"><span className="marquee-dot"></span> EMERSON DELTAV &amp; PACSYSTEMS</div>
          <div className="marquee-item"><span className="marquee-dot"></span> SCHNEIDER ELECTRIC MODICON</div>
          <div className="marquee-item"><span className="marquee-dot"></span> DELTA DVP &amp; DOP HMI</div>
          <div className="marquee-item"><span className="marquee-dot"></span> RENU FLEXIPANELS</div>
          <div className="marquee-item"><span className="marquee-dot"></span> MODBUS TCP &amp; RTU</div>
          <div className="marquee-item"><span className="marquee-dot"></span> OPC-UA / DA HISTORIAN</div>
          <div className="marquee-item"><span className="marquee-dot"></span> MQTT SPARKPLUG B</div>
          <div className="marquee-item"><span className="marquee-dot"></span> OEE &amp; DOWNTIME TELEMETRY</div>
          <div className="marquee-item"><span className="marquee-dot"></span> ZERO RIP-AND-REPLACE RETROFIT</div>
        </div>
      </div>

      {/* End-to-End Automation Engineering (Matches image2.png) */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header-centered">
            <h2 className="section-title">End-to-End Automation Engineering</h2>
            <p className="section-lead">
              From control architecture to live plant integration &mdash; we deliver systems that run.
            </p>
          </div>

          <div className="grid-2">
            {/* Card 1: PLC & SCADA Systems */}
            <div className="corner-card">
              <div style={{ borderRadius: '8px', overflow: 'hidden', height: '180px', marginBottom: '16px', border: '1px solid #cbd5e1' }}>
                <img src="/assets/images/scada-control-room-hd.jpg" alt="SCADA Control Architecture" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span className="tag-badge">CONTROL ARCHITECTURE</span>
              <h3 className="feature-point-title" style={{ fontSize: '1.35rem', marginBottom: '12px' }}>PLC &amp; SCADA Systems</h3>
              <p className="feature-point-desc" style={{ marginBottom: '20px' }}>
                Full-cycle PLC programming, panel design, and SCADA implementation. We work across Siemens, Allen-Bradley, Emerson, Schneider, Delta, and Mitsubishi platforms &mdash; from I/O mapping and ladder logic to HMI development and historian integration.
              </p>
              <ul className="bullet-list">
                <li className="bullet-item">
                  <span className="icon">&bull;</span>
                  <span>Multi-vendor PLC support</span>
                </li>
                <li className="bullet-item">
                  <span className="icon">&bull;</span>
                  <span>Real-time SCADA dashboards</span>
                </li>
                <li className="bullet-item">
                  <span className="icon">&bull;</span>
                  <span>Alarm management &amp; historian</span>
                </li>
                <li className="bullet-item">
                  <span className="icon">&bull;</span>
                  <span>Remote access &amp; diagnostics</span>
                </li>
              </ul>
              <Link to="/services#plc-scada" className="link-arrow">Learn More &rarr;</Link>
            </div>

            {/* Card 2: Industrial IoT & Smart Manufacturing */}
            <div className="corner-card">
              <div style={{ borderRadius: '8px', overflow: 'hidden', height: '180px', marginBottom: '16px', border: '1px solid #cbd5e1' }}>
                <img src="/assets/images/iiot-smart-factory-hd.jpg" alt="Industrial IoT & Smart Factory Sensors" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span className="tag-badge">INDUSTRY 4.0</span>
              <h3 className="feature-point-title" style={{ fontSize: '1.35rem', marginBottom: '12px' }}>Industrial IoT &amp; Smart Manufacturing</h3>
              <p className="feature-point-desc" style={{ marginBottom: '20px' }}>
                Connect your plant floor to the cloud. We deploy edge gateways, sensor networks, and analytics dashboards that give plant managers live OEE data, predictive maintenance alerts, and production KPIs &mdash; without replacing existing equipment.
              </p>
              <ul className="bullet-list">
                <li className="bullet-item">
                  <span className="icon">&bull;</span>
                  <span>Edge computing &amp; gateway setup</span>
                </li>
                <li className="bullet-item">
                  <span className="icon">&bull;</span>
                  <span>OEE &amp; downtime analytics</span>
                </li>
                <li className="bullet-item">
                  <span className="icon">&bull;</span>
                  <span>Predictive maintenance alerts</span>
                </li>
                <li className="bullet-item">
                  <span className="icon">&bull;</span>
                  <span>ERP/MES integration</span>
                </li>
              </ul>
              <Link to="/services#iiot" className="link-arrow">Learn More &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served (Matches image3.png) */}
      <section className="section-padding" style={{ backgroundColor: '#f8fafc', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ marginBottom: '36px' }}>
            <div className="section-eyebrow">
              <span>&diamond; INDUSTRIES SERVED</span>
            </div>
            <h2 className="section-title">Built for Power &amp; Oil and Gas. Ready for More.</h2>
          </div>

          {/* Primary Vertical Large Card */}
          <div className="primary-vertical-card">
            <div className="vertical-image">
              <img src="/assets/images/plc-control-panel-hd.jpg" alt="Industrial Power & Oil and Gas Control Panel Systems" />
            </div>
            <div className="vertical-content">
              <span className="tag-badge">PRIMARY VERTICAL</span>
              <h3 className="section-title" style={{ fontSize: '1.6rem', marginBottom: '12px' }}>Power &amp; Oil and Gas</h3>
              <p className="section-lead" style={{ fontSize: '0.95rem', marginBottom: '24px' }}>
                Automation in power generation and oil &amp; gas demands zero-tolerance reliability, functional safety compliance, and real-time visibility across critical assets. We engineer control systems that meet IEC 61511 and IEC 61508 standards while maximising plant availability and operational safety.
              </p>

              <div className="feature-point">
                <div className="feature-point-title">Turbine &amp; Generator Control</div>
                <div className="feature-point-desc">
                  Automated control sequences for turbines, generators, and auxiliary systems &mdash; precise, safe, and fully logged for compliance.
                </div>
              </div>

              <div className="feature-point">
                <div className="feature-point-title">Pipeline &amp; Process Automation</div>
                <div className="feature-point-desc">
                  End-to-end pipeline monitoring and control with leak detection, pressure management, and emergency shutdown integration.
                </div>
              </div>

              <div className="feature-point">
                <div className="feature-point-title">Safety Instrumented Systems (SIS)</div>
                <div className="feature-point-desc">
                  IEC 61511-compliant SIS design and integration &mdash; protecting personnel, assets, and the environment across critical process loops.
                </div>
              </div>
            </div>
          </div>

          {/* Sub Industry Small Cards */}
          <div className="sub-industry-cards">
            <div className="sub-industry-card">
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '8px' }}>Chemical Processing</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                Safe, reliable control systems for continuous and batch chemical processes.
              </p>
            </div>
            <div className="sub-industry-card">
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '8px' }}>Packaging &amp; Logistics</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                High-speed line automation, vision inspection, and warehouse management integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Automate Your Plant? / Send an Enquiry (Matches image4.png) */}
      <section id="enquiry-section" className="cta-enquiry-section circuit-bg">
        <div className="container">
          <div className="enquiry-grid">
            {/* Left: Info & Photo */}
            <div className="enquiry-info-box">
              <div>
                <div className="section-eyebrow white">GET IN TOUCH</div>
                <h2 className="section-title white">Ready to Automate Your Plant?</h2>
                <p className="section-lead white" style={{ marginTop: '14px' }}>
                  Tell us about your process. Our engineers will assess your requirements and propose the right automation architecture.
                </p>
              </div>

              <div className="sla-badge">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>Typical response within 24 hours.</span>
              </div>

              <div className="enquiry-preview-img">
                <img src="/assets/images/scada-control-room-hd.jpg" alt="Automation Engineers Operating SCADA Operations Room" />
              </div>
            </div>

            {/* Right: Enquiry Form Card */}
            <div className="enquiry-form-card corner-card">
              <h3 className="form-title">Send an Enquiry</h3>
              <form className="enquiry-form" id="home-enquiry-form" onSubmit={handleSubmit}>
                <div className="form-group-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="home-fullname">FULL NAME *</label>
                    <input
                      className="form-input"
                      id="home-fullname"
                      name="user_name"
                      type="text"
                      placeholder="Your name"
                      required
                      value={formData.user_name}
                      onChange={e => setFormData({ ...formData, user_name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="home-company">COMPANY</label>
                    <input
                      className="form-input"
                      id="home-company"
                      name="user_company"
                      type="text"
                      placeholder="Your company"
                      value={formData.user_company}
                      onChange={e => setFormData({ ...formData, user_company: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="home-phone">PHONE NUMBER *</label>
                  <input
                    className="form-input"
                    id="home-phone"
                    name="user_phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    required
                    value={formData.user_phone}
                    onChange={e => setFormData({ ...formData, user_phone: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="home-project">PROJECT BRIEF *</label>
                  <textarea
                    className="form-textarea"
                    id="home-project"
                    name="project_brief"
                    placeholder="Describe your automation requirements, plant process, or brand preference..."
                    required
                    value={formData.project_brief}
                    onChange={e => setFormData({ ...formData, project_brief: e.target.value })}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-solid-blue"
                  style={{
                    width: '100%',
                    marginTop: '8px',
                    backgroundColor: submitted ? '#16a34a' : '',
                    borderColor: submitted ? '#16a34a' : ''
                  }}
                  disabled={submitting}
                >
                  {submitting ? 'Transmitting Enquiry...' : submitted ? 'Enquiry Sent Successfully ✓' : 'Submit Enquiry →'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
