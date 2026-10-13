import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FaqAccordion from '../components/FaqAccordion';

const INDUSTRIES_FAQS = [
  {
    question: "What safety standards does Chitai Soft follow for Oil & Gas automation?",
    answer: "For upstream wellheads, midstream pipelines, and downstream refineries, we engineer <strong>Safety Instrumented Systems (SIS)</strong>, Emergency Shutdown (ESD), and Fire &amp; Gas (F&amp;G) detection architectures strictly compliant with <strong>IEC 61508</strong> and <strong>IEC 61511</strong> international safety standards."
  },
  {
    question: "Can you integrate legacy power distribution equipment with IEC 61850 substation networks?",
    answer: "Yes. We configure multi-protocol communication gateways and SCADA front-ends that seamlessly bridge legacy RTUs, Modbus power meters, and modern <strong>IEC 61850 / DNP3</strong> substation networks with dual-redundant PLC architectures for 99.99% system uptime."
  },
  {
    question: "How does your automation optimize municipal water and wastewater treatment plants?",
    answer: "We automate chemical dosing, aeration blower speed control via VFDs, and remote lift station pump cycling based on ultrasonic level telemetry, cutting energy costs by up to 20% while preventing overflow incidents and ensuring continuous environmental compliance."
  }
];

export default function IndustriesPage() {
  const [activeTab, setActiveTab] = useState('oil-gas');

  const handleTabClick = (targetId) => {
    setActiveTab(targetId);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="industries-page">
      {/* Page Hero (Matches image8.png top) */}
      <section className="circuit-bg" style={{ padding: '70px 0 50px', color: '#ffffff' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="section-title white" style={{ fontSize: '3rem' }}>Industries We Serve</h1>
          <p className="section-lead white" style={{ margin: '0 auto' }}>
            From oil &amp; gas facilities to power generation plants, we engineer automation solutions built around the specific demands of your industry.
          </p>

          <div className="filter-tabs" style={{ justifyContent: 'center', marginTop: '30px' }}>
            <button
              className={`filter-tab ${activeTab === 'oil-gas' ? 'active' : ''}`}
              onClick={() => handleTabClick('oil-gas')}
            >
              Oil &amp; Gas
            </button>
            <button
              className={`filter-tab ${activeTab === 'power-energy' ? 'active' : ''}`}
              onClick={() => handleTabClick('power-energy')}
            >
              Power &amp; Energy
            </button>
            <button
              className={`filter-tab ${activeTab === 'water-wastewater' ? 'active' : ''}`}
              onClick={() => handleTabClick('water-wastewater')}
            >
              Water &amp; Wastewater
            </button>
          </div>
        </div>
      </section>

      {/* Moving Infinite Marquee Ticker */}
      <div className="marquee-strip">
        <div className="marquee-track">
          <div className="marquee-item"><span className="marquee-dot"></span> POWER GENERATION &bull; SCADA</div>
          <div className="marquee-item"><span className="marquee-dot"></span> OIL &amp; GAS WELLHEAD AUTOMATION</div>
          <div className="marquee-item"><span className="marquee-dot"></span> PIPELINE LEAK DETECTION</div>
          <div className="marquee-item"><span className="marquee-dot"></span> WATER &amp; WASTEWATER SCADA</div>
          <div className="marquee-item"><span className="marquee-dot"></span> SIL-2 / SIL-3 SAFETY SYSTEMS</div>
          <div className="marquee-item"><span className="marquee-dot"></span> INDUSTRIAL IOT TELEMETRY</div>
          {/* Duplicate for seamless loop */}
          <div className="marquee-item"><span className="marquee-dot"></span> POWER GENERATION &bull; SCADA</div>
          <div className="marquee-item"><span className="marquee-dot"></span> OIL &amp; GAS WELLHEAD AUTOMATION</div>
          <div className="marquee-item"><span className="marquee-dot"></span> PIPELINE LEAK DETECTION</div>
          <div className="marquee-item"><span className="marquee-dot"></span> WATER &amp; WASTEWATER SCADA</div>
          <div className="marquee-item"><span className="marquee-dot"></span> SIL-2 / SIL-3 SAFETY SYSTEMS</div>
          <div className="marquee-item"><span className="marquee-dot"></span> INDUSTRIAL IOT TELEMETRY</div>
        </div>
      </div>

      {/* Industry 1: Oil & Gas Operations */}
      <section id="oil-gas" className="section-padding">
        <div className="container">
          <div className="industry-detail-block" style={{ borderTop: 'none', paddingTop: 0 }}>
            <div className="industry-img-box">
              <img src="/assets/images/industry-oilgas.png" alt="Oil and Gas Field Automation Engineer" />
              <span className="industry-tag-float">Oil &amp; Gas</span>
            </div>

            <div>
              <h2 style={{ fontSize: '1.85rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '16px' }}>
                Reliable Automation for Oil &amp; Gas Operations
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '24px' }}>
                Oil and gas facilities operate in demanding environments where control system reliability is non-negotiable. We design and commission automation solutions for upstream, midstream, and downstream applications &mdash; with a focus on safety, uptime, and regulatory compliance.
              </p>

              <div className="industry-bullets-grid">
                <div className="industry-bullet-item">
                  <div className="bullet-header">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Pipeline Monitoring &amp; Control</span>
                  </div>
                  <p className="bullet-body">
                    SCADA-based pipeline supervision with flow measurement, leak detection, and remote valve actuation across distributed assets.
                  </p>
                </div>

                <div className="industry-bullet-item">
                  <div className="bullet-header">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Safety Instrumented Systems</span>
                  </div>
                  <p className="bullet-body">
                    SIL-rated safety logic design and implementation for emergency shutdown, fire and gas detection, and process protection.
                  </p>
                </div>

                <div className="industry-bullet-item">
                  <div className="bullet-header">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Wellhead &amp; Separator Automation</span>
                  </div>
                  <p className="bullet-body">
                    PLC control of wellhead equipment, separators, and metering skids &mdash; with remote monitoring and historian integration.
                  </p>
                </div>

                <div className="industry-bullet-item">
                  <div className="bullet-header">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Compressor &amp; Pump Control</span>
                  </div>
                  <p className="bullet-body">
                    Automated start/stop sequencing, surge protection, and condition monitoring for rotating equipment across the facility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry 2: Power Generation & Distribution */}
      <section id="power-energy" className="section-padding" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div className="industry-detail-block" style={{ borderBottom: 'none', paddingTop: 0, paddingBottom: 0 }}>
            <div className="industry-img-box">
              <img src="/assets/images/plc-control-panel-hd.jpg" alt="Power Generation SCADA System Cabinets" />
              <span className="industry-tag-float">Power &amp; Energy</span>
            </div>

            <div>
              <h2 style={{ fontSize: '1.85rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '16px' }}>
                Control Systems for Power Generation &amp; Distribution
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '24px' }}>
                Power generation and distribution assets require automation that is robust, redundant, and built to utility-grade standards. We deliver SCADA and control solutions for thermal, hydro, and substation applications &mdash; engineered for continuous operation.
              </p>

              <div className="industry-bullets-grid">
                <div className="industry-bullet-item">
                  <div className="bullet-header">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Turbine Control &amp; Protection</span>
                  </div>
                  <p className="bullet-body">
                    Control and protection systems for steam and gas turbines, generator sequencing, and grid synchronization.
                  </p>
                </div>

                <div className="industry-bullet-item">
                  <div className="bullet-header">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Substation Automation</span>
                  </div>
                  <p className="bullet-body">
                    IEC 61850-compliant substation automation, bay control, and protection relay communication architectures.
                  </p>
                </div>

                <div className="industry-bullet-item">
                  <div className="bullet-header">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Boiler &amp; Auxiliary Controls</span>
                  </div>
                  <p className="bullet-body">
                    Precision fuel-air ratio control, feedwater drum level regulation, and multi-tier interlocks for boiler safety.
                  </p>
                </div>

                <div className="industry-bullet-item">
                  <div className="bullet-header">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Redundant Controller Systems</span>
                  </div>
                  <p className="bullet-body">
                    Hot-standby redundant PLC CPU configurations guaranteeing seamless bump-less switchover during failover.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry 3: Water Treatment & Distribution */}
      <section id="water-wastewater" className="section-padding">
        <div className="container">
          <div className="industry-detail-block" style={{ borderBottom: 'none', paddingTop: 0, paddingBottom: 0 }}>
            <div className="industry-img-box">
              <img src="/assets/images/industry-water.png" alt="Water Treatment & Distribution SCADA Screens" />
              <span className="industry-tag-float">Water &amp; Wastewater</span>
            </div>

            <div>
              <h2 style={{ fontSize: '1.85rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '16px' }}>
                Automation for Water Treatment &amp; Distribution
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '24px' }}>
                Water utilities and industrial treatment plants rely on automation to maintain consistent quality, manage energy consumption, and meet environmental discharge standards. We deliver SCADA and PLC solutions for treatment, pumping, and distribution applications.
              </p>

              <div className="industry-bullets-grid">
                <div className="industry-bullet-item">
                  <div className="bullet-header">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Treatment Process Control</span>
                  </div>
                  <p className="bullet-body">
                    Automated dosing, filtration, and disinfection control with real-time quality monitoring and regulatory data logging.
                  </p>
                </div>

                <div className="industry-bullet-item">
                  <div className="bullet-header">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Pump Station Automation</span>
                  </div>
                  <p className="bullet-body">
                    Remote monitoring and control of booster and lift stations &mdash; with duty/standby sequencing, level control, and telemetry.
                  </p>
                </div>

                <div className="industry-bullet-item">
                  <div className="bullet-header">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>SCADA for Distribution Networks</span>
                  </div>
                  <p className="bullet-body">
                    Network-wide SCADA visibility across reservoirs, pressure zones, and distribution assets with alarm management.
                  </p>
                </div>

                <div className="industry-bullet-item">
                  <div className="bullet-header">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Energy Optimisation</span>
                  </div>
                  <p className="bullet-body">
                    Pump scheduling and variable speed drive integration to reduce energy consumption across the distribution network.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sector Engineering FAQs */}
      <FaqAccordion
        eyebrow="SECTOR EXPERTISE & STANDARDS"
        title="Industry Technical FAQs"
        lead="Direct insights into compliance, industrial protocols, and safety architectures across our focus verticals."
        items={INDUSTRIES_FAQS}
      />

      {/* Working in a Different Industry? Callout */}
      <section className="cta-banner-section circuit-bg">
        <div className="container">
          <div className="cta-banner-content">
            <h2 className="cta-banner-title">Working in a Different Industry?</h2>
            <p className="cta-banner-sub">
              We work across a wide range of process and discrete manufacturing sectors. Get in touch to discuss your specific automation requirements.
            </p>
            <Link to="/contact" className="btn btn-primary">Get in Touch &rarr;</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
