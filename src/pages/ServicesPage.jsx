import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Slider from '../components/Slider';
import FaqAccordion from '../components/FaqAccordion';
import DynamicTypewriter from '../components/DynamicTypewriter';

const TYPEWRITER_SERVICES = ["PLC & SCADA", "Machine Monitoring", "Industrial IoT", "Power Management"];

const SERVICES_FAQS = [
  {
    question: "Which PLC and SCADA platforms does Chitai Soft Automation support?",
    answer: "Chitai Soft Automation specializes in multi-vendor integration across four major OEM platforms: <strong>Emerson</strong> (PACSystems RX3i PLCs), <strong>Schneider Electric</strong> (Modicon M221/M241/M251/M580, EcoStruxure), <strong>Delta Electronics</strong> (DVP Series PLCs, DOP HMIs, VFDs), and <strong>Renu Electronics</strong> (FlexiPanels HMI+PLC combo units, protocol gateways)."
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

const SERVICES_DATA = [
  {
    id: 'plc-control',
    category: 'plc-scada',
    title: 'PLC Programming & Panel Engineering',
    tag: 'CONTROL ARCHITECTURE',
    image: '/assets/images/plc-control-panel-hd.jpg',
    shortDesc: 'Full-cycle PLC programming, CPRI-compliant panel design, and redundant I/O architectures across all major OEM platforms.',
    fullDesc: 'We engineer turnkey PLC automation and electrical control panels for continuous process lines and discrete manufacturing. From functional design specifications (FDS) to on-site commissioning, our systems deliver 99.8% uptime with fault-tolerant redundancy.',
    features: [
      'Multi-vendor ladder logic, structured text & function block diagrams (IEC 61131-3)',
      'Custom CPRI-compliant control panel fabrication, wiring, and busbar design',
      'Hot-standby redundant controller pairs with bumpless failover transfer',
      'Thorough Factory Acceptance Testing (FAT) & Site Acceptance Testing (SAT)'
    ],
    platforms: 'Emerson PACSystems, Schneider Modicon, Delta DVP, Renu FlexiPanels',
    standards: 'IEC 61131-3, ISO 9001:2015, CE / UL Panel Compliance'
  },
  {
    id: 'scada-hmi',
    category: 'plc-scada',
    title: 'SCADA Systems & Centralized HMI',
    tag: 'SUPERVISORY CONTROL',
    image: '/assets/images/scada-control-room-hd.jpg',
    shortDesc: 'Custom supervisory control platforms with live animated mimics, multi-station consoles, dynamic trends, and alarm escalation.',
    fullDesc: 'Custom SCADA platforms and ergonomic touchscreen HMIs that provide operators and plant managers complete process visibility. Built with high-availability server pairs, role-based security, historical logging, and ISA-18.2 compliant alarm management.',
    features: [
      'Dynamic real-time graphic mimics and interactive single-line diagrams',
      'ISA-18.2 alarm rationalization, categorization, and audio-visual annunciators',
      'High-speed historical data trending, recipe management, and batch reports',
      'Secure multi-tier role-based access control with comprehensive audit trails'
    ],
    platforms: 'Wonderware, Ignition, EcoStruxure Geo SCADA, Delta DOP-100',
    standards: 'ISA-101 HMI Design, ISA-18.2 Alarm Management'
  },
  {
    id: 'machine-monitoring',
    category: 'machine-monitoring',
    title: 'Machine Monitoring & OEE Analytics',
    tag: 'SHOPFLOOR VISIBILITY',
    image: '/assets/images/iiot-smart-factory-hd.jpg',
    shortDesc: 'Automated machine status logging, vibration/temperature condition monitoring, and live shift OEE efficiency tracking.',
    fullDesc: 'Plug-and-play shopfloor visibility without replacing existing machines. Magnetic wireless tri-axial vibration and thermal sensors continuously monitor rotating assets, streaming telemetry to compute real-time OEE (Availability, Performance, Quality) and log MTTR/MTBF.',
    features: [
      'Automatic machine state logging (Running, Idle, Breakdown, Setup)',
      'Shift-by-shift live OEE dashboards with micro-stoppage detection',
      'Tri-axial vibration frequency spectra & thermal anomaly alerts',
      'Instant breakdown notification dispatch via SMS, WhatsApp & Email'
    ],
    platforms: 'Industrial Edge Gateways, Wireless Vibration Sensors, Web Dashboards',
    standards: 'ISO 20816 Vibration Severity, Lean Manufacturing Six-Sigma'
  },
  {
    id: 'energy-monitoring',
    category: 'energy-monitoring',
    title: 'Energy & Power Management Systems',
    tag: 'POWER OPTIMIZATION',
    image: '/assets/images/energy-submetering-hd.jpg',
    shortDesc: 'Substation metering, load curve analytics, and automated power factor correction to eliminate utility penalty charges.',
    fullDesc: 'Comprehensive electrical power monitoring and load analytics across plant transformers, feeders, and heavy motor loads. Automates power factor correction capacitor staging and alerts engineers to peak demand spikes to reduce industrial tariff bills.',
    features: [
      'Multi-function digital meter networking via RS-485 Modbus & Ethernet/IP',
      'Real-time kW, kVA, power factor, and harmonic distortion (THD) tracking',
      'Automated APFC capacitor bank staging maintaining target 0.99 PF',
      'Specific Energy Consumption (SEC per production unit) reporting'
    ],
    platforms: 'Schneider PowerLogic, Selec Multifunction Meters, RS-485 Gateways',
    standards: 'IEEE 519 Harmonics, ISO 50001 Energy Management'
  },
  {
    id: 'iiot-smart',
    category: 'iiot',
    title: 'Industrial IoT & Edge Computing',
    tag: 'INDUSTRY 4.0 RETROFIT',
    image: '/assets/images/iiot-smart-factory-hd.jpg',
    shortDesc: 'Non-intrusive edge gateways tapping into existing PLCs to stream real-time production telemetry to enterprise dashboards.',
    fullDesc: 'Retrofit modern Industry 4.0 connectivity onto existing production assets with zero machine downtime. Edge computers collect data via OPC-UA, MQTT, and Modbus TCP, performing local anomaly filtering before transmitting encrypted telemetry to cloud or local servers.',
    features: [
      'Zero-downtime non-intrusive retrofit onto legacy PLC controllers',
      'Edge protocol translation across OPC-UA, MQTT, Ethernet/IP, and Modbus',
      'Encrypted TLS 1.3 telemetry pipelines with offline data store-and-forward',
      'Custom web & mobile dashboards with production KPI visualization'
    ],
    platforms: 'AWS IoT Core, Microsoft Azure IoT, Raspberry Pi CM4 / Siemens IOT2050',
    standards: 'IEC 62443 Industrial Cybersecurity, OPC Foundation Certified'
  },
  {
    id: 'historian-data',
    category: 'plc-scada',
    title: 'Process Historian & ERP/MES Integration',
    tag: 'DATA ARCHITECTURE',
    image: '/assets/images/scada-control-room-hd.jpg',
    shortDesc: 'High-speed process parameter archiving, batch traceability, and seamless data exchange with plant-level ERP systems.',
    fullDesc: 'Enterprise process data historians engineered for high-frequency millisecond sampling and lossless data compression. Bridges the shopfloor OT layer to IT enterprise systems (SAP, Oracle, MES) for complete regulatory audit compliance and production reporting.',
    features: [
      'Millisecond time-series sampling with swinging-door compression algorithms',
      'Electronic batch records (EBR) and recipe traceability logging',
      'Bidirectional MES/ERP handshake for work order execution & dispatch',
      'Automated shift summary PDF and Excel reports emailed to management'
    ],
    platforms: 'SQL Historian, InfluxDB, FactoryTalk Historian, InTouch Historian',
    standards: 'ISA-95 Enterprise-Control Integration, 21 CFR Part 11 Compliant'
  }
];

export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.title = "Services & Supported Platforms | Chitai Soft Automation";
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    if (location.hash) {
      const hashClean = location.hash.replace('#', '');
      if (['plc-scada', 'machine-monitoring', 'energy-monitoring', 'iiot'].includes(hashClean)) {
        setActiveFilter(hashClean);
      }
      setTimeout(() => {
        const targetEl = document.getElementById(hashClean);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.hash]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedService(null);
    };
    if (selectedService) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedService]);

  const filteredServices = activeFilter === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(service => service.category === activeFilter);

  return (
    <div className="services-page">
      {/* Page Hero */}
      <section className="circuit-bg" style={{ padding: '70px 0 45px', color: '#ffffff' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-eyebrow white" style={{ justifyContent: 'center' }}>WHAT WE DO</div>
          <h1 className="section-title white" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', margin: '10px 0 16px' }}>
            Engineering Services in <DynamicTypewriter words={TYPEWRITER_SERVICES} />
          </h1>
          <p className="section-lead white" style={{ margin: '0 auto 28px', maxWidth: '820px' }}>
            End-to-end automation engineering &mdash; from control architecture design through commissioning, integration, and ongoing support.
          </p>

          {/* Interactive Filter Tabs */}
          <div className="filter-tabs" style={{ justifyContent: 'center' }}>
            <button
              className={`filter-tab ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              ALL SERVICES
            </button>
            <button
              className={`filter-tab ${activeFilter === 'plc-scada' ? 'active' : ''}`}
              onClick={() => setActiveFilter('plc-scada')}
            >
              PLC &amp; SCADA
            </button>
            <button
              className={`filter-tab ${activeFilter === 'machine-monitoring' ? 'active' : ''}`}
              onClick={() => setActiveFilter('machine-monitoring')}
            >
              MACHINE MONITORING
            </button>
            <button
              className={`filter-tab ${activeFilter === 'energy-monitoring' ? 'active' : ''}`}
              onClick={() => setActiveFilter('energy-monitoring')}
            >
              ENERGY &amp; POWER
            </button>
            <button
              className={`filter-tab ${activeFilter === 'iiot' ? 'active' : ''}`}
              onClick={() => setActiveFilter('iiot')}
            >
              INDUSTRIAL IOT
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
                <span>&#9670; LIVE SOLUTION SHOWCASE</span>
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

      {/* Compact Engineering Services Grid (2-Line Details + Learn More Modal) */}
      <section className="section-padding" style={{ backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }} id="services-grid-section">
        <div className="container">
          <div className="section-header-centered" style={{ marginBottom: '36px' }}>
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>ENGINEERING EXCELLENCE</div>
            <h2 className="section-title">Specialized Automation Solutions</h2>
            <p className="section-lead" style={{ maxWidth: '760px', margin: '0 auto' }}>
              Click &quot;Learn More&quot; on any service card below to inspect full technical capabilities, hardware platforms, and compliance specifications.
            </p>
          </div>

          <div className="services-five-grid">
            {filteredServices.map((service) => (
              <div
                className="corner-card service-preview-card"
                id={service.id === 'plc-control' ? 'plc-scada' : (service.id === 'iiot-smart' ? 'iiot' : service.id)}
                key={service.id}
              >
                <div className="service-card-img-wrap">
                  <img src={service.image} alt={service.title} loading="lazy" />
                </div>
                <span className="tag-badge">{service.tag}</span>
                <h3 className="feature-point-title" style={{ fontSize: '1.2rem', margin: '12px 0 8px' }}>
                  {service.title}
                </h3>
                <p className="service-short-desc">
                  {service.shortDesc}
                </p>
                <button
                  type="button"
                  id={`btn-learn-more-${service.id}`}
                  className="service-learn-more-btn"
                  onClick={() => setSelectedService(service)}
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More &rarr;
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Multi-Vendor Hardware Brands */}
      <section className="brands-section" id="brands" style={{ padding: '65px 0' }}>
        <div className="container">
          <div className="section-header-centered" style={{ marginBottom: '32px' }}>
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>MULTI-VENDOR PLATFORMS</div>
            <h2 className="section-title">Supported Automation Platforms</h2>
            <p className="section-lead" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Certified engineering expertise across leading global industrial automation platforms:
            </p>
          </div>

          <div className="grid-4">
            <div className="brand-card corner-card">
              <div style={{ height: '46px', display: 'flex', alignItems: 'center', marginBottom: '14px' }}>
                <img src="/assets/images/logos/emerson.svg" alt="Emerson Automation" style={{ maxHeight: '34px', maxWidth: '140px', objectFit: 'contain' }} />
              </div>
              <div>
                <div className="brand-badge">EMERSON</div>
                <p className="brand-platforms">
                  PACSystems RX3i PLCs and industrial control solutions.
                </p>
              </div>
              <div className="brand-pill-tags">
                <span className="brand-pill">PACSystems</span>
                <span className="brand-pill">RX3i PLC</span>
                <span className="brand-pill">Emerson Logic</span>
              </div>
            </div>

            <div className="brand-card corner-card">
              <div style={{ height: '46px', display: 'flex', alignItems: 'center', marginBottom: '14px' }}>
                <img src="/assets/images/logos/renu.png" alt="Renu Electronics" style={{ maxHeight: '34px', maxWidth: '140px', objectFit: 'contain' }} />
              </div>
              <div>
                <div className="brand-badge">RENU</div>
                <p className="brand-platforms">
                  FlexiPanels HMI+PLC combo units, industrial operator interfaces, and protocol converter gateways.
                </p>
              </div>
              <div className="brand-pill-tags">
                <span className="brand-pill">FlexiPanels</span>
                <span className="brand-pill">Gateways</span>
                <span className="brand-pill">Touch HMIs</span>
              </div>
            </div>

            <div className="brand-card corner-card">
              <div style={{ height: '46px', display: 'flex', alignItems: 'center', marginBottom: '14px' }}>
                <img src="/assets/images/logos/delta.png" alt="Delta Electronics" style={{ maxHeight: '34px', maxWidth: '140px', objectFit: 'contain' }} />
              </div>
              <div>
                <div className="brand-badge">DELTA</div>
                <p className="brand-platforms">
                  Delta DVP Series PLCs, DOP Touchscreens, and Variable Frequency Drives (VFDs) for rapid execution.
                </p>
              </div>
              <div className="brand-pill-tags">
                <span className="brand-pill">DVP PLC</span>
                <span className="brand-pill">DOP HMI</span>
                <span className="brand-pill">VFD / Servo</span>
              </div>
            </div>

            <div className="brand-card corner-card">
              <div style={{ height: '46px', display: 'flex', alignItems: 'center', marginBottom: '14px' }}>
                <img src="/assets/images/logos/schneider.png" alt="Schneider Electric" style={{ maxHeight: '34px', maxWidth: '140px', objectFit: 'contain' }} />
              </div>
              <div>
                <div className="brand-badge">SCHNEIDER</div>
                <p className="brand-platforms">
                  Modicon M221/M241/M251/M580 PLCs, EcoStruxure architecture, and Magelis operator displays.
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

      {/* 4-Step Delivery Process */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="section-header-centered" style={{ marginBottom: '36px' }}>
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>PROVEN METHODOLOGY</div>
            <h2 className="section-title">Our Project Delivery Process</h2>
            <p className="section-lead" style={{ maxWidth: '680px', margin: '0 auto' }}>
              From initial technical scoping to final plant commissioning and lifecycle support.
            </p>
          </div>

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
      </section>

      {/* Technical FAQs */}
      <FaqAccordion
        eyebrow="ENGINEERING CLARIFICATIONS"
        title="Services Technical FAQs"
        lead="Straightforward answers regarding our engineering protocols, hardware platforms, and integration methods."
        items={SERVICES_FAQS}
      />

      {/* Let's Work Together CTA */}
      <section className="cta-banner-section circuit-bg">
        <div className="container">
          <div className="cta-banner-content">
            <h2 className="cta-banner-title">Need a Custom Automation Architecture?</h2>
            <p className="cta-banner-sub">
              Discuss your process control, panel fabrication, or IoT telemetry requirements directly with our senior engineers.
            </p>
            <Link to="/contact" className="btn btn-primary">Schedule a Consultation &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Service Details Modal Popup */}
      {selectedService && (
        <div
          className="service-modal-backdrop"
          onClick={() => setSelectedService(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="services-modal-title"
        >
          <div className="service-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="service-modal-close"
              onClick={() => setSelectedService(null)}
              aria-label="Close details"
            >
              &times;
            </button>

            <div className="service-modal-image-wrap">
              <img src={selectedService.image} alt={selectedService.title} />
              <span className="service-modal-tag">{selectedService.tag}</span>
            </div>

            <div className="service-modal-body">
              <h2 id="services-modal-title" className="service-modal-title">
                {selectedService.title}
              </h2>
              <p className="service-modal-lead">{selectedService.fullDesc}</p>

              <div className="service-modal-features">
                <h4 className="service-modal-subheading">Key Technical Capabilities</h4>
                <ul className="service-modal-list">
                  {selectedService.features.map((feature, idx) => (
                    <li key={idx}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="service-modal-specs" style={{ gridTemplateColumns: '1fr' }}>
                <div className="service-spec-box">
                  <span className="spec-label">Platforms &amp; Hardware</span>
                  <span className="spec-val">{selectedService.platforms}</span>
                </div>
              </div>

              <div className="service-modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    setSelectedService(null);
                    navigate('/contact');
                  }}
                >
                  Consult with an Engineer &rarr;
                </button>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => setSelectedService(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
