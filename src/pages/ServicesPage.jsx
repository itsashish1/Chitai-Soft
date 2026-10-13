import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from '../components/Slider';
import FaqAccordion from '../components/FaqAccordion';

const SERVICES_FAQS = [
  {
    question: "Which PLC and SCADA platforms does Chitai Soft Automation support?",
    answer: "Chitai Soft Automation specializes in multi-vendor integration across four major OEM platforms: <strong>Emerson</strong> (DeltaV DCS, Ovation, PACSystems), <strong>Schneider Electric</strong> (Modicon M221/M241/M251/M580, EcoStruxure), <strong>Delta Electronics</strong> (DVP Series PLCs, DOP HMIs, VFDs), and <strong>Renu Electronics</strong> (FlexiPanels HMI+PLC combo units, protocol gateways)."
  },
  {
    question: "How do you integrate Industrial IoT with legacy PLCs without rip-and-replace?",
    answer: "We deploy an edge-first, non-intrusive architecture using industrial IoT edge gateways. These gateways tap directly into existing machine PLCs via standard industrial protocols (OPC-UA, Modbus TCP/RTU, Ethernet/IP) without interrupting production control logic, extracting real-time OEE, downtime, and energy telemetry."
  },
  {
    question: "What is Chitai Soft's guaranteed response SLA for technical inquiries?",
    answer: "We guarantee an initial engineering response within <strong>24 hours</strong>. For active plant commissioning and remote diagnostics, secure VPN tunnels allow our engineers to inspect telemetry, analyze logic, and resolve faults rapidly off-site."
  },
  {
    question: "Do you deliver complete control panel fabrication with FAT and SAT testing?",
    answer: "Yes, our panel engineering spans CAD electrical drafting, component assembly, thorough <strong>Factory Acceptance Testing (FAT)</strong>, and on-site <strong>Site Acceptance Testing (SAT)</strong> with complete documentation and schematics across India."
  }
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('plc-scada');

  const handleTabClick = (targetId) => {
    setActiveTab(targetId);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="services-page">
      {/* Page Hero (Matches image5.png top) */}
      <section class="circuit-bg" style={{ padding: '70px 0 50px', color: '#ffffff' }}>
        <div className="container">
          <div className="section-eyebrow white">WHAT WE DO</div>
          <h1 className="section-title white" style={{ fontSize: '3rem' }}>Our Services &amp; Supported Systems</h1>
          <p className="section-lead white">
            End-to-end automation engineering &mdash; from control architecture design through commissioning, integration, and ongoing support.
          </p>

          {/* Service Filter Tabs (Interactive) */}
          <div className="filter-tabs">
            <button
              className={`filter-tab ${activeTab === 'plc-scada' ? 'active' : ''}`}
              onClick={() => handleTabClick('plc-scada')}
            >
              PLC &amp; SCADA
            </button>
            <button
              className={`filter-tab ${activeTab === 'machine-monitoring' ? 'active' : ''}`}
              onClick={() => handleTabClick('machine-monitoring')}
            >
              MACHINE MONITORING
            </button>
            <button
              className={`filter-tab ${activeTab === 'energy-monitoring' ? 'active' : ''}`}
              onClick={() => handleTabClick('energy-monitoring')}
            >
              ENERGY &amp; POWER
            </button>
            <button
              className={`filter-tab ${activeTab === 'brands' ? 'active' : ''}`}
              onClick={() => handleTabClick('brands')}
            >
              SUPPORTED BRANDS
            </button>
            <button
              className={`filter-tab ${activeTab === 'iiot' ? 'active' : ''}`}
              onClick={() => handleTabClick('iiot')}
            >
              INDUSTRIAL IOT
            </button>
            <button
              className={`filter-tab ${activeTab === 'how-it-works' ? 'active' : ''}`}
              onClick={() => handleTabClick('how-it-works')}
            >
              HOW IT WORKS
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Sliding Showcase Section */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff', paddingBottom: '30px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div className="section-eyebrow">
                <span>&diamond; LIVE SOLUTION SHOWCASE</span>
              </div>
              <h2 className="section-title" style={{ fontSize: '1.8rem', margin: '4px 0' }}>Core Engineering Capabilities in Action</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                Swipe or click below to examine our turnkey architectures across plants nationwide.
              </p>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--text-muted)', background: '#e2e8f0', padding: '6px 14px', borderRadius: '999px' }}>
              &bull; AUTO-SLIDING ACTIVE &bull; HOVER TO PAUSE
            </div>
          </div>

          <Slider />
        </div>
      </section>

      {/* Section 1: PLC & SCADA Systems (Matches image5.png middle) */}
      <section id="plc-scada" className="section-padding">
        <div className="container">
          <div style={{ marginBottom: '36px' }}>
            <div className="section-eyebrow">
              <span>&diamond; CONTROL ARCHITECTURE</span>
            </div>
            <h2 className="section-title">PLC &amp; SCADA Systems</h2>
            <p className="section-lead">
              We design, programme, and commission PLC-based control systems and SCADA platforms for industrial plants. Our engineers work across all major automation vendors &mdash; delivering systems that are reliable, maintainable, and built to your process requirements.
            </p>
          </div>

          {/* Visual Engineering Showcase Grid */}
          <div className="service-visual-grid">
            <div className="service-img-frame">
              <img src="/assets/images/scada-control-room-hd.jpg" alt="High-Tech SCADA Control Room Operator Station" loading="lazy" />
              <div className="img-badge-overlay">&bull; LIVE SCADA MIMIC &bull; MULTI-STATION CENTRAL CONSOLE</div>
            </div>
            <div className="corner-card" style={{ marginBottom: 0 }}>
              <span className="step-badge" style={{ background: 'var(--primary-navy)' }}>ENGINEERING EXCELLENCE</span>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--primary-navy)', margin: '8px 0 12px' }}>Multi-Vendor Architecture &amp; High-Availability Control</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px' }}>
                Whether upgrading legacy DCS systems or commissioning greenfield PLC infrastructure, we engineer redundant controller pairs, distributed I/O topologies, and high-speed industrial Ethernet networks that maintain continuous 24/7 process stability.
              </p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <span className="pipeline-tag">IEC 61131-3 Standard</span>
                <span className="pipeline-tag">Redundant Ethernet/IP</span>
                <span className="pipeline-tag">FAT / SAT Testing</span>
              </div>
            </div>
          </div>

          <div className="grid-2">
            <div className="corner-card">
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px', color: 'var(--text-main)' }}>
                PLC Programming &amp; Panel Design
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Full-cycle PLC development across multiple platforms and vendors. We handle I/O mapping, ladder logic, function block diagrams, and structured text &mdash; alongside control panel design, wiring, and factory acceptance testing.
              </p>
            </div>

            <div className="corner-card">
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px', color: 'var(--text-main)' }}>
                SCADA Development &amp; HMI
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Custom SCADA applications and operator interfaces that give your team clear, actionable visibility &mdash; with real-time process graphics, alarm management, trend displays, and role-based access control.
              </p>
            </div>

            <div className="corner-card">
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px', color: 'var(--text-main)' }}>
                Historian &amp; Data Integration
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Process data historian setup and integration with plant-level databases. We configure OPC-UA and Modbus communication layers so your operational data flows reliably to where it is needed.
              </p>
            </div>

            <div className="corner-card">
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px', color: 'var(--text-main)' }}>
                Remote Access &amp; Diagnostics
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Secure remote access infrastructure for off-site monitoring and fault diagnosis. Reduce call-out costs and mean-time-to-repair with always-on visibility into your control systems.
              </p>
            </div>
          </div>

          {/* Delivery Process */}
          <div className="process-section" style={{ marginTop: '50px' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)' }}>Our Delivery Process</h4>
            <div className="process-grid">
              <div className="process-step">
                <div className="step-header">
                  <span className="step-num">01</span>
                  <span className="step-title">Requirements &amp; Architecture</span>
                </div>
                <p className="step-desc">
                  We review your process, define control philosophy, and architect the optimal hardware/software configuration.
                </p>
              </div>

              <div className="process-step">
                <div className="step-header">
                  <span className="step-num">02</span>
                  <span className="step-title">Development &amp; Testing</span>
                </div>
                <p className="step-desc">
                  PLC programmes and SCADA screens are built, configured, and simulated thoroughly in our engineering lab (FAT).
                </p>
              </div>

              <div className="process-step">
                <div className="step-header">
                  <span className="step-num">03</span>
                  <span className="step-title">Installation &amp; Commissioning</span>
                </div>
                <p className="step-desc">
                  Our engineers install, wire, and commission on-site to ensure seamless integration and validation (SAT).
                </p>
              </div>

              <div className="process-step">
                <div className="step-header">
                  <span className="step-num">04</span>
                  <span className="step-title">Handover &amp; Support</span>
                </div>
                <p className="step-desc">
                  Full documentation, operator training, and post-commissioning support to maintain peak operational uptime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANDATORY PRODUCTS / BRANDS SECTION: Emerson, Renu, Delta, Schneider */}
      <section id="brands" className="brands-section">
        <div className="container">
          <div style={{ marginBottom: '36px' }}>
            <div className="section-eyebrow">
              <span>&diamond; MULTI-VENDOR AUTOMATION PLATFORMS</span>
            </div>
            <h2 className="section-title">Supported Brands &amp; Hardware Expertise</h2>
            <p className="section-lead">
              We provide vendor-independent engineering across industry-leading automation brands, delivering tailored integration for your preferred hardware ecosystem:
            </p>
          </div>

          <div className="grid-4">
            {/* Emerson */}
            <div className="brand-card corner-card">
              <div>
                <div className="brand-badge">EMERSON</div>
                <p className="brand-platforms">
                  Complete engineering for DeltaV DCS, Ovation control systems, PACSystems RX3i PLCs, and Rosemount instrumentation.
                </p>
              </div>
              <div className="brand-pill-tags">
                <span className="brand-pill">DeltaV</span>
                <span className="brand-pill">PACSystems</span>
                <span className="brand-pill">Ovation</span>
              </div>
            </div>

            {/* Renu */}
            <div className="brand-card corner-card">
              <div>
                <div className="brand-badge">RENU</div>
                <p className="brand-platforms">
                  Deployment of Renu Electronics FlexiPanels HMI+PLC units, industrial operator interfaces, and protocol converter gateways.
                </p>
              </div>
              <div className="brand-pill-tags">
                <span className="brand-pill">FlexiPanels</span>
                <span className="brand-pill">Gateways</span>
                <span className="brand-pill">Touch HMIs</span>
              </div>
            </div>

            {/* Delta */}
            <div className="brand-card corner-card">
              <div>
                <div className="brand-badge">DELTA</div>
                <p className="brand-platforms">
                  Cost-effective, high-speed automation using Delta DVP Series PLCs, DOP Touchscreens, and Variable Frequency Drives (VFDs).
                </p>
              </div>
              <div className="brand-pill-tags">
                <span className="brand-pill">DVP PLC</span>
                <span className="brand-pill">DOP HMI</span>
                <span className="brand-pill">VFD / Servo</span>
              </div>
            </div>

            {/* Schneider */}
            <div className="brand-card corner-card">
              <div>
                <div className="brand-badge">SCHNEIDER</div>
                <p className="brand-platforms">
                  Certified expertise on Schneider Electric Modicon M221/M241/M251/M580 PLCs, EcoStruxure architecture, and Magelis HMIs.
                </p>
              </div>
              <div className="brand-pill-tags">
                <span className="brand-pill">Modicon</span>
                <span className="brand-pill">EcoStruxure</span>
                <span className="brand-pill">Altivar VFD</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Industrial IoT & Smart Manufacturing */}
      <section id="iiot" className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ marginBottom: '36px' }}>
            <div className="section-eyebrow">
              <span>&diamond; INDUSTRY 4.0</span>
            </div>
            <h2 className="section-title">Industrial IoT &amp; Smart Manufacturing</h2>
            <p className="section-lead">
              Connect your plant floor to the cloud without replacing existing equipment. We deploy edge computing infrastructure, sensor networks, and analytics platforms that give plant managers live OEE data, predictive maintenance alerts, and production KPIs &mdash; turning raw machine data into decisions.
            </p>
          </div>

          <div className="grid-3">
            <div className="corner-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '12px', color: 'var(--text-main)' }}>
                Edge Computing &amp; Gateway Deployment
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Industrial edge gateways installed at machine level to collect, pre-process, and securely transmit data from PLCs, sensors, and legacy equipment. We handle protocol translation (OPC-UA, MQTT, Modbus) and ensure data integrity from source to cloud.
              </p>
            </div>

            <div className="corner-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '12px', color: 'var(--text-main)' }}>
                OEE &amp; Production Analytics
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Real-time Overall Equipment Effectiveness dashboards that track availability, performance, and quality across your production lines. Identify your biggest losses, benchmark shifts, and drive continuous improvement with data your team can trust.
              </p>
            </div>

            <div className="corner-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '12px', color: 'var(--text-main)' }}>
                Predictive Maintenance
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Vibration, temperature, and current-signature monitoring on critical rotating assets &mdash; motors, pumps, compressors. Machine-learning models flag anomalies before they become failures, reducing unplanned downtime and extending asset life.
              </p>
            </div>
          </div>

          {/* Metrics Card */}
          <div className="metrics-card">
            <div className="metric-col">
              <div className="metric-number">&darr; 30%</div>
              <div className="metric-title">UNPLANNED DOWNTIME</div>
              <p className="metric-desc">
                Typical reduction in unplanned stoppages within 6 months of predictive maintenance deployment.
              </p>
            </div>

            <div className="metric-col">
              <div className="metric-number">&uarr; 15%</div>
              <div className="metric-title">OEE IMPROVEMENT</div>
              <p className="metric-desc">
                Average OEE gain reported by customers after implementing real-time production analytics.
              </p>
            </div>

            <div className="metric-col">
              <div className="metric-number">0</div>
              <div className="metric-title">RIP-AND-REPLACE</div>
              <p className="metric-desc">
                Our edge-first approach connects to existing PLCs and sensors &mdash; no capital equipment replacement required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Machine Monitoring System */}
      <section id="machine-monitoring" className="section-padding" style={{ backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ marginBottom: '36px' }}>
            <div className="section-eyebrow">
              <span>&diamond; SHOP FLOOR VISIBILITY &bull; MACHINE MONITORING</span>
            </div>
            <h2 className="section-title">Industrial Machine Monitoring &amp; OEE Analytics</h2>
            <p className="section-lead">
              Gain 100% operational visibility over plant machinery without expensive machine replacements. Track live status, analyze shift performance, and diagnose root causes of downtime in real time.
            </p>
          </div>

          <div className="service-visual-grid">
            <div className="service-img-frame">
              <img src="/assets/images/iiot-smart-factory-hd.jpg" alt="Smart Factory Edge Gateway and Wireless Vibration Sensors" loading="lazy" />
              <div className="img-badge-overlay">&bull; EDGE GATEWAY &bull; VIBRATION &amp; THERMAL TELEMETRY</div>
            </div>
            <div className="corner-card" style={{ marginBottom: 0 }}>
              <span className="step-badge" style={{ background: '#16a34a' }}>PLUG &amp; PLAY RETROFIT</span>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--primary-navy)', margin: '8px 0 12px' }}>Wireless Sensor Integration on Rotating Assets</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px' }}>
                Our magnetic mount tri-axial vibration and surface temperature sensors deploy in minutes on critical plant motors, pumps, and gearboxes. They continuously stream FFT frequency spectra to edge gateways, detecting early-stage bearing flaking and misalignment before costly catastrophic seizure occurs.
              </p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <span className="pipeline-tag">Tri-Axial Vibration</span>
                <span className="pipeline-tag">Thermal Warning Alerts</span>
                <span className="pipeline-tag">Zero Machine Downtime Setup</span>
              </div>
            </div>
          </div>

          <div className="grid-2">
            <div className="corner-card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)' }}>
                  Real-Time Machine Status &amp; Downtime Tracking
                </h3>
                <span className="step-badge" style={{ background: '#0284c7' }}>LIVE TELEMETRY</span>
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px' }}>
                Continuous monitoring of machine states (Running, Idle, Breakdown, Tool Change, Setup). Automatically classifies stoppage reasons and logs MTTR (Mean Time to Repair) and MTBF (Mean Time Between Failures).
              </p>
              <ul className="feature-checklist">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Instant alerts via SMS/WhatsApp/Email on unplanned machine stoppages</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Color-coded shopfloor visual dashboards for operators and plant heads</span>
                </li>
              </ul>
            </div>

            <div className="corner-card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)' }}>
                  OEE &amp; Shift Production Analytics
                </h3>
                <span className="step-badge" style={{ background: '#16a34a' }}>KPI ENGINE</span>
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px' }}>
                Accurately calculate Overall Equipment Effectiveness across Availability, Performance, and Quality. Identify micro-stoppages, speed loss, and reject counts shift-by-shift.
              </p>
              <ul className="feature-checklist">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Target vs. Actual piece production counters with cycle time analysis</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Automated PDF/Excel end-of-shift productivity reports sent directly to management</span>
                </li>
              </ul>
            </div>

            <div className="corner-card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)' }}>
                  Condition Monitoring &amp; Predictive Maintenance
                </h3>
                <span className="step-badge" style={{ background: '#d97706' }}>PREDICTIVE AI</span>
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px' }}>
                Continuous vibration, surface temperature, and motor current signature analysis (MCSA) for critical motors, blowers, gearboxes, and pumps.
              </p>
              <ul className="feature-checklist">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Detect bearing degradation, cavitation, and misalignment weeks before breakdown</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Dynamic threshold rules that adjust based on operating load and RPM</span>
                </li>
              </ul>
            </div>

            <div className="corner-card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)' }}>
                  Non-Intrusive Legacy Machine Retrofitting
                </h3>
                <span className="step-badge" style={{ background: 'var(--primary-navy)' }}>RETROFIT</span>
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px' }}>
                Connect older machines that lack modern networking. We deploy external CTs, proximity sensors, optical counters, and edge converters without altering warranty or machine wiring.
              </p>
              <ul className="feature-checklist">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Zero disruption to existing plant production schedules during setup</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Compatible with CNC machines, hydraulic presses, injection molding, and packaging lines</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Smart Energy Monitoring & Power Management */}
      <section id="energy-monitoring" className="section-padding" style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ marginBottom: '36px' }}>
            <div className="section-eyebrow">
              <span>&diamond; UTILITY &amp; RESOURCE EFFICIENCY</span>
            </div>
            <h2 className="section-title">Smart Energy Monitoring &amp; Power Analytics</h2>
            <p className="section-lead">
              Cut factory utility bills and prevent power quality penalties. Our sub-metering and IoT power management system tracks electrical loads from main incomers down to individual feeder panels and high-horsepower motors.
            </p>
          </div>

          <div className="service-visual-grid">
            <div className="service-img-frame">
              <img src="/assets/images/energy-submetering-hd.jpg" alt="Industrial Power Distribution Sub-metering Cabinet with Digital Meters" loading="lazy" />
              <div className="img-badge-overlay">&bull; FEEDER SUB-METERING &bull; KWH &amp; POWER FACTOR ANALYTICS</div>
            </div>
            <div className="corner-card" style={{ marginBottom: 0 }}>
              <span className="step-badge" style={{ background: '#e11d48' }}>DEMAND INTELLIGENCE</span>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--primary-navy)', margin: '8px 0 12px' }}>Comprehensive Circuit-Level Power Telemetry</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px' }}>
                Replace manual logbooks with sub-second digital energy telemetry across high-power circuits. Continuously audit energy wastage, monitor power factor to avoid utility penalties, and benchmark energy consumption per metric ton of manufactured product.
              </p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <span className="pipeline-tag">Active &amp; Reactive kWh</span>
                <span className="pipeline-tag">Contract Demand Alarms</span>
                <span className="pipeline-tag">Power Factor Penalty Protection</span>
              </div>
            </div>
          </div>

          <div className="grid-2">
            <div className="corner-card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)' }}>
                  Circuit-Level Sub-Metering &amp; Feeder Analytics
                </h3>
                <span className="step-badge" style={{ background: '#0284c7' }}>SUB-METERING</span>
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px' }}>
                Granular multi-parameter metering across 3-phase circuits: Active (kWh), Reactive (kVARh), Voltage, Current, Total Harmonic Distortion (THD), and Power Factor (PF).
              </p>
              <ul className="feature-checklist">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Allocate specific energy costs to individual production batches or departments</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Detect power unbalance, loose neutral connections, and harmonic heating</span>
                </li>
              </ul>
            </div>

            <div className="corner-card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)' }}>
                  Peak Demand Control &amp; Penalty Prevention
                </h3>
                <span className="step-badge" style={{ background: '#e11d48' }}>DEMAND CONTROL</span>
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px' }}>
                Automated tracking of 15-minute sliding window kVA demand. Receive proactive warnings before exceeding sanctioned contract demand to prevent massive utility surcharges.
              </p>
              <ul className="feature-checklist">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Configurable automated load-shedding for non-critical auxiliary equipment</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>TOD (Time of Day) tariff analysis to schedule heavy loads during off-peak hours</span>
                </li>
              </ul>
            </div>

            <div className="corner-card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)' }}>
                  DG Set Fuel &amp; Solar Hybrid Telemetry
                </h3>
                <span className="step-badge" style={{ background: '#16a34a' }}>DG &bull; SOLAR</span>
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px' }}>
                Monitor diesel generator run-hours, fuel level telemetry, specific fuel consumption (SFC in liters/kWh), battery voltage, and solar PV inverter generation in one unified dashboard.
              </p>
              <ul className="feature-checklist">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Detect sudden fuel drop anomalies and pilferage instantly</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Grid vs. DG vs. Solar source optimization to minimize diesel expenditure</span>
                </li>
              </ul>
            </div>

            <div className="corner-card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)' }}>
                  Water, Air &amp; Compressor Energy Optimization
                </h3>
                <span className="step-badge" style={{ background: '#0284c7' }}>UTILITIES</span>
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px' }}>
                Compressed air and water pumping represent up to 40% of plant power consumption. Track air compressor load/unload ratios, CFM output, and pump flow vs. kW consumed.
              </p>
              <ul className="feature-checklist">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Identify compressed air leaks and artificial demand losses during non-production hours</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Smart duty/standby pump scheduling driven by tank levels and dynamic head pressure</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Technical Architecture Flow ("How It Works") */}
      <section id="how-it-works" className="section-padding" style={{ backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="pipeline-header">
            <div className="section-eyebrow">
              <span>&diamond; INTEGRATION ARCHITECTURE</span>
            </div>
            <h2 className="section-title">How It Works: Shop Floor to Cloud</h2>
            <p className="section-lead" style={{ margin: '0 auto' }}>
              A proven, deterministic 4-stage pipeline that bridges operational technology (OT) with executive management dashboards without altering your core PLC safety logic.
            </p>
          </div>

          <div className="pipeline-flow">
            {/* Stage 1 */}
            <div className="pipeline-step">
              <span className="step-badge">STAGE 01</span>
              <h3 className="pipeline-step-title">Field Devices &amp; Sensors</h3>
              <p className="pipeline-step-desc">
                Raw signals captured from PLCs, temperature probes, vibration sensors, multi-function power meters, and I/O modules.
              </p>
              <div className="pipeline-tags">
                <span className="pipeline-tag">4-20mA</span>
                <span className="pipeline-tag">RS-485</span>
                <span className="pipeline-tag">CTs &amp; PTs</span>
                <span className="pipeline-tag">Thermocouples</span>
              </div>
            </div>

            {/* Stage 2 */}
            <div className="pipeline-step">
              <span className="step-badge">STAGE 02</span>
              <h3 className="pipeline-step-title">Industrial Edge Gateways</h3>
              <p className="pipeline-step-desc">
                DIN-rail mount edge computers poll data locally, perform protocol normalization, filter noise, and buffer data offline if network drops.
              </p>
              <div className="pipeline-tags">
                <span className="pipeline-tag">Modbus RTU/TCP</span>
                <span className="pipeline-tag">OPC-UA</span>
                <span className="pipeline-tag">Edge Filtering</span>
                <span className="pipeline-tag">SSL Encryption</span>
              </div>
            </div>

            {/* Stage 3 */}
            <div className="pipeline-step">
              <span className="step-badge">STAGE 03</span>
              <h3 className="pipeline-step-title">Secure Telemetry Transport</h3>
              <p className="pipeline-step-desc">
                Payloads compressed into lightweight MQTT Sparkplug B packets and pushed over plant Ethernet, Wi-Fi, or cellular 4G/5G failover.
              </p>
              <div className="pipeline-tags">
                <span className="pipeline-tag">MQTT Sparkplug B</span>
                <span className="pipeline-tag">TLS 1.3</span>
                <span className="pipeline-tag">Cellular / Wi-Fi</span>
                <span className="pipeline-tag">Zero Cloud Lag</span>
              </div>
            </div>

            {/* Stage 4 */}
            <div className="pipeline-step">
              <span className="step-badge">STAGE 04</span>
              <h3 className="pipeline-step-title">Cloud &amp; Mobile Dashboards</h3>
              <p className="pipeline-step-desc">
                Role-based web/mobile dashboards for operators, engineers, and plant managers &mdash; with automated shift reports and alert dispatch.
              </p>
              <div className="pipeline-tags">
                <span className="pipeline-tag">Live OEE</span>
                <span className="pipeline-tag">Downtime Logs</span>
                <span className="pipeline-tag">SMS / WhatsApp</span>
                <span className="pipeline-tag">Closed-Loop Controls</span>
              </div>
            </div>
          </div>

          {/* Quick Plant Audit Consultation Banner */}
          <div className="audit-cta-card">
            <div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', letterSpacing: '0.1em', color: '#38bdf8', textTransform: 'uppercase' }}>FREE PLANT FEASIBILITY STUDY</span>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, margin: '8px 0 12px', color: '#ffffff' }}>Ready to Stop Plant Downtime &amp; Optimize Energy Costs?</h3>
              <p style={{ fontSize: '0.95rem', color: '#cbd5e1', maxWidth: '680px', lineHeight: 1.5 }}>
                Our senior automation engineers conduct on-site or remote architecture evaluations to assess machine connectivity, sensor requirements, and payback timeline within 24 hours.
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <Link to="/contact" className="btn btn-primary" style={{ background: '#00b4d8', color: '#07234e', fontWeight: 700, border: 'none', padding: '14px 28px', boxShadow: '0 4px 20px rgba(0, 180, 216, 0.4)' }}>
                Book a Technical Consultation &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technical FAQs Section (GEO & Google AI Search Optimization) */}
      <FaqAccordion
        eyebrow="FREQUENTLY ASKED QUESTIONS"
        title="Automation Engineering & Platform FAQs"
        lead="Direct, authoritative answers regarding our OEM integrations, IIoT deployments, and turnaround SLAs."
        items={SERVICES_FAQS}
      />

      {/* Discuss Your Automation Project CTA (Matches image7.png) */}
      <section className="cta-banner-section circuit-bg">
        <div className="container">
          <div className="cta-banner-content">
            <h2 className="cta-banner-title">Discuss Your Automation Project</h2>
            <p className="cta-banner-sub">
              Whether you need a new control system from scratch or want to add IoT visibility to an existing plant, our engineers are ready to help.
            </p>
            <Link to="/contact" className="btn btn-primary">Request a Consultation &rarr;</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
