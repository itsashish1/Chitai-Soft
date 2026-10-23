import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CounterCard from '../components/CounterCard';
import DynamicTypewriter from '../components/DynamicTypewriter';
import { submitEnquiry } from '../services/emailService';

const partnerLogos = [
  { name: 'Schneider Electric', src: '/assets/images/logos/schneider.png', alt: 'Schneider Electric Modicon' },
  { name: 'Emerson', src: '/assets/images/logos/emerson.svg', alt: 'Emerson Process Systems' },
  { name: 'Phoenix Contact', src: '/assets/images/logos/phoenix.png', alt: 'Phoenix Contact' },
  { name: 'Delta Electronics', src: '/assets/images/logos/delta.png', alt: 'Delta Industrial Automation' },
  { name: 'Renu Electronics', src: '/assets/images/logos/renu.png', alt: 'Renu Electronics' },
  { name: 'Selec', src: '/assets/images/logos/selec.png', alt: 'Selec Controls' },
  { name: 'GE Vernova', src: '/assets/images/logos/ge-vernova.png', alt: 'GE Vernova Automation' },
];

const logoSequence = [...partnerLogos, ...partnerLogos];

const industryPartners = [
  {
    id: 'schneider',
    name: 'Schneider Electric',
    logo: '/assets/images/logos/schneider.png',
    desc: 'Energy Management & EcoStruxure',
    alt: 'Schneider Electric Energy Management'
  },
  {
    id: 'emerson',
    name: 'Emerson',
    logo: '/assets/images/logos/emerson.svg',
    desc: 'Process Systems & Movicon.NExT SCADA',
    alt: 'Emerson Process Systems & Solutions'
  },
  {
    id: 'phoenix-contact',
    name: 'Phoenix Contact',
    logo: '/assets/images/logos/phoenix.png',
    desc: 'Process Solutions & Industrial Cyber',
    alt: 'Phoenix Contact Process Solutions'
  },
  {
    id: 'delta',
    name: 'Delta',
    logo: '/assets/images/logos/delta.png',
    desc: 'Industrial Automation & Drives',
    alt: 'Delta Industrial Automation & Drives'
  },
  {
    id: 'renu',
    name: 'Renu Electronics',
    logo: '/assets/images/logos/renu.png',
    desc: 'Factory Automation & HMI Displays',
    alt: 'Renu Electronics Factory Automation & HMI'
  },
  {
    id: 'selec',
    name: 'Selec',
    logo: '/assets/images/logos/selec.png',
    desc: 'Factory Automation & Energy Meters',
    alt: 'Selec Controls Factory Automation'
  },
  {
    id: 'ge-vernova',
    name: 'GE Vernova',
    logo: '/assets/images/logos/ge-vernova.png',
    desc: 'Energy & Substation Automation',
    alt: 'GE Vernova Automation'
  }
];

const serviceCards = [
  {
    id: 'control-panel-design',
    title: 'Control Panel Design',
    tag: 'ELECTRICAL & POWER CONTROL',
    image: '/assets/images/control-panel-custom.jpg',
    shortDesc: 'Custom engineering, fabrication, and wiring of CPRI-compliant PLC, VFD, and MCC automation control panels built for continuous 24/7 industrial performance.',
    fullDesc: 'End-to-end design, fabrication, and on-site testing of low-voltage automation control panels, motor control centers (MCC), and power distribution panels engineered to IEC 61439 and IP55/IP65 standards.',
    features: [
      'CPRI-compliant switchgear, busbar sizing, and thermal load balancing',
      'Precision EPLAN / AutoCAD electrical schematics with complete I/O loop diagrams',
      'Integrated safety relays, emergency stop circuits, and surge protection (SPD)',
      'Comprehensive FAT (Factory Acceptance Testing) and wire-by-wire continuity validation'
    ],
    platforms: 'Rittal, Schneider Electric, L&T, ABB, Delta Enclosures',
    standards: 'IEC 61439-1/2, IP55/IP65 Ingress Protection, CE & UL 508A compliant practices'
  },
  {
    id: 'plc-programming',
    title: 'PLC Programming',
    tag: 'AUTOMATION LOGIC & INTERLOCKS',
    image: '/assets/images/plc-programming-hd.jpg',
    shortDesc: 'Structured multi-platform PLC programming with fail-safe interlocks, PID loop tuning, and high-speed motion control for continuous process lines.',
    fullDesc: 'Vendor-agnostic PLC logic development implementing IEC 61131-3 standardized Ladder Diagram (LD), Function Block Diagram (FBD), and Structured Text (ST) for complex plant machinery and batch processes.',
    features: [
      'Modular code architecture with standard faceplates and reusable function blocks',
      'High-speed servo/stepper motion synchronization and multi-axis VFD control',
      'Precision analog process control with self-tuning PID algorithms (Temperature, Pressure, Flow)',
      'Non-intrusive retrofit logic updates with zero production disruption'
    ],
    platforms: 'Emerson, Schneider Modicon, Phoenix Contact',
    standards: 'IEC 61131-3, ISA-88 Batch Control, SIL-2/SIL-3 Functional Safety'
  },
  {
    id: 'scada-designing',
    title: 'SCADA Designing',
    tag: 'CENTRALIZED SUPERVISORY CONTROL',
    image: '/assets/images/scada/movicon-next-wastewater-treatment.jpg',
    shortDesc: 'Real-time supervisory control dashboards with live animated plant mimics, historical trending, and automated alarms for plant-wide visibility.',
    fullDesc: 'Architecting high-availability SCADA control systems delivering mission-critical telemetry, multi-monitor control room visualizations, and enterprise SQL/Historian logging for power plants and process industries.',
    features: [
      'High-performance graphic interface design following ISA-101 standards',
      'Millisecond alarm prioritization, automated SMS/Email fault escalation, and audit trails',
      'Secure multi-protocol drivers: Modbus TCP/RTU, OPC-UA/DA, IEC 60870-5-104, DNP3',
      'Real-time historian database logging with automated production shift reports'
    ],
    platforms: 'Progea Movicon.NExT, Cimplicity',
    standards: 'ISA-101 HMI/SCADA Design, 21 CFR Part 11 Electronic Records, NERC CIP Cybersecurity'
  },
  {
    id: 'hmi-designing',
    title: 'HMI Designing',
    tag: 'INTUITIVE OPERATOR INTERFACE',
    image: '/assets/images/hmi-design-hd.jpg',
    shortDesc: 'Ergonomic touchscreen interfaces featuring intuitive equipment controls, real-time recipe management, and one-touch diagnostic troubleshooting.',
    fullDesc: 'Custom development of ruggedized shop-floor touch panel HMIs that empower operators with fast, error-free machine operation, interactive graphical diagnostics, and multi-level password security.',
    features: [
      'High-contrast daylight readable screens designed for industrial plant floors',
      'Batch recipe management, parameter staging, and multi-language operator displays',
      'Direct hardware I/O diagnostic screens for rapid fault localization without laptops',
      'Dual Ethernet / RS-485 serial communication with instant PLC synchronization'
    ],
    platforms: 'Delta, Schneider, Emerson QP+, Renu',
    standards: 'ISA-101 Ergonomic Guidelines, IP66 Front Bezel Protection, IEC 60068 Environmental Testing'
  },
  {
    id: 'industrial-iot-40',
    title: 'Industrial IoT 4.0',
    tag: 'SMART FACTORY & CLOUD ANALYTICS',
    image: '/assets/images/iiot-smart-factory-hd.jpg',
    shortDesc: 'Bridge physical machinery to cloud dashboards with smart edge gateways, automated OEE analytics, and predictive maintenance telemetry.',
    fullDesc: 'Deploying enterprise Industry 4.0 IoT architectures that capture live telemetry from brownfield and greenfield machines to calculate real-time OEE, detect anomalies, and stream data securely to ERP/Cloud systems.',
    features: [
      'Zero rip-and-replace edge gateway integration via Modbus, MQTT Sparkplug B, and OPC-UA',
      'Automated Overall Equipment Effectiveness (OEE), scrap rate, and downtime tracking',
      'Vibration, thermal, and electrical power monitoring for predictive breakdown alerts',
      'Cloud dashboard integration (AWS IoT, Azure IoT Central, Local On-Premises Servers)'
    ],
    platforms: 'Advantech, Moxa, Raspberry Pi Industrial, Teltonika Gateways, Node-RED, AWS/Azure IoT',
    standards: 'MQTT 5.0 / Sparkplug B, OPC Unified Architecture (IEC 62541), ISA-95 Cloud Integration'
  }
];

export default function HomePage({ onShowToast }) {
  const [formData, setFormData] = useState({
    user_name: '',
    user_company: '',
    user_phone: '',
    project_brief: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

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
      onShowToast('Unable to send enquiry automatically. Please email chitaisoft@gmail.com directly.', 'error');
    }
  };

  return (
    <div className="home-page">
      {/* Hero Section (Matches image1.png) */}
      <section className="hero-section circuit-bg">
        <div className="container">
          <div className="hero-content">
            <div className="hero-eyebrow">
              INDUSTRIAL AUTOMATION &bull; PAN-INDIA SOLUTIONS
            </div>
            <h1 className="hero-title">
              Precision Automation<br />
              <DynamicTypewriter words={["Intelligent Control", "Industrial IoT", "Real-Time SCADA", "Zero Downtime", "High-Speed PLC"]} />
            </h1>
            <p className="hero-subtitle">
              PLC &amp; SCADA systems and Industrial IoT solutions engineered for power generation, process industries, and manufacturing across India and beyond.
            </p>
            <div className="hero-actions">
              <a href="#enquiry-section" className="btn btn-primary">Request a Consultation &rarr;</a>
              <Link to="/services" className="btn btn-secondary">View Services</Link>
            </div>

            {/* Live Counters Grid */}
            <div className="live-counter-grid" style={{ marginTop: '40px', marginBottom: '0', textAlign: 'left' }}>
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

      {/* Moving Infinite Logo Marquee Strip */}
      <div className="marquee-strip partner-marquee-strip" role="region" aria-label="Supported Automation Platforms and OEM Partners">
        <div className="marquee-track">
          {logoSequence.map((logo, index) => (
            <div className="partner-logo-badge" key={`logo-a-${index}`} title={logo.name}>
              <img src={logo.src} alt={logo.alt} className="partner-logo-img" loading="lazy" />
            </div>
          ))}
          {/* Duplicate set for seamless continuous -50% loop */}
          {logoSequence.map((logo, index) => (
            <div className="partner-logo-badge" key={`logo-b-${index}`} title={logo.name} aria-hidden="true">
              <img src={logo.src} alt={logo.alt} className="partner-logo-img" loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {/* End-to-End Automation Engineering (5 Services Cards) */}
      <section className="section-padding" id="automation-services">
        <div className="container">
          <div className="section-header-centered">
            <h2 className="section-title">End-to-End Automation Engineering</h2>
            <p className="section-lead">
              From control architecture to live plant integration &mdash; we deliver systems that run.
            </p>
          </div>

          <div className="services-five-grid">
            {serviceCards.map((service) => (
              <div className="corner-card service-preview-card" key={service.id}>
                <div className="service-card-img-wrap">
                  <img src={service.image} alt={service.title} loading="lazy" />
                </div>
                <span className="tag-badge">{service.tag}</span>
                <h3 className="feature-point-title" style={{ fontSize: '1.25rem', margin: '12px 0 8px' }}>
                  {service.title}
                </h3>
                <p className="service-short-desc">
                  {service.shortDesc}
                </p>
                <button
                  type="button"
                  className="service-learn-more-btn"
                  onClick={() => setSelectedService(service)}
                >
                  Learn More &rarr;
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Pop-up Modal (Blurred Background) */}
      {selectedService && (
        <div
          className="service-modal-backdrop"
          onClick={() => setSelectedService(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-service-title"
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
              <h2 id="modal-service-title" className="service-modal-title">
                {selectedService.title}
              </h2>
              <p className="service-modal-lead">{selectedService.fullDesc}</p>

              <div className="service-modal-features">
                <h4 className="service-modal-subheading">Key Engineering Capabilities</h4>
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
                    const formEl = document.querySelector('.enquiry-card') || document.querySelector('form');
                    if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
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

      {/* Movicon.NExT SCADA & Real-Time Mimic Telemetry Showcase */}
      <section className="movicon-showcase-section" id="scada-showcase">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto' }}>
            <h2 className="section-title white" style={{ marginBottom: '14px' }}>
              Real-World Process Automation &amp; 3D Telemetry
            </h2>
            <p className="section-lead white" style={{ margin: '0 auto 12px', fontSize: '1.05rem', lineHeight: '1.6' }}>
              SCADA systems provide real-time process monitoring, equipment status, alarm notifications, historical trends, and reports &mdash; all from one user-friendly dashboard.
            </p>
            <p className="section-lead white" style={{ margin: '0 auto', fontSize: '0.98rem', opacity: 0.9, lineHeight: '1.6' }}>
              From water treatment plants to industrial processes, we help you monitor operations, improve visibility, and make better decisions.
            </p>
          </div>

          <div className="movicon-cards-grid" style={{ maxWidth: '800px', margin: '42px auto 0', gridTemplateColumns: '1fr' }}>
            {/* Wastewater Treatment SCADA */}
            <div className="movicon-card">
              <div className="movicon-img-wrap">
                <img
                  src="/assets/images/scada/movicon-next-wastewater-treatment.jpg"
                  alt="Movicon.NExT Wastewater Treatment Plant SCADA & Multi-Channel Flow Telemetry"
                  loading="lazy"
                />
                <span className="movicon-screen-badge">3D PLANT MIMIC &amp; TRENDS</span>
                <span className="movicon-status-badge">
                  <span className="live-pulse-dot"></span> LIVE TELEMETRY
                </span>
              </div>
              <div className="movicon-body">
                <span className="movicon-tag">MUNICIPAL &amp; INDUSTRIAL WASTEWATER</span>
                <h3 className="movicon-title">Wastewater Treatment SCADA</h3>
                <ul className="wastewater-scada-bullets" style={{ listStyle: 'none', padding: 0, margin: '20px 0', display: 'flex', flexDirection: 'column', gap: '11px' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#e2e8f0', fontSize: '0.94rem', lineHeight: 1.55 }}>
                    <span style={{ color: '#38bdf8', fontWeight: 'bold' }}>&bull;</span>
                    <span><strong style={{ color: '#ffffff' }}>Live Plant Monitoring:</strong> View plant status and process readings in real time.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#e2e8f0', fontSize: '0.94rem', lineHeight: 1.55 }}>
                    <span style={{ color: '#38bdf8', fontWeight: 'bold' }}>&bull;</span>
                    <span><strong style={{ color: '#ffffff' }}>Flow Monitoring:</strong> Track inlet, process, and outlet water flow.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#e2e8f0', fontSize: '0.94rem', lineHeight: 1.55 }}>
                    <span style={{ color: '#38bdf8', fontWeight: 'bold' }}>&bull;</span>
                    <span><strong style={{ color: '#ffffff' }}>Water Quality Monitoring:</strong> Monitor pH and other supported water quality parameters.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#e2e8f0', fontSize: '0.94rem', lineHeight: 1.55 }}>
                    <span style={{ color: '#38bdf8', fontWeight: 'bold' }}>&bull;</span>
                    <span><strong style={{ color: '#ffffff' }}>Trends &amp; Reports:</strong> View historical data and analyze plant performance.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#e2e8f0', fontSize: '0.94rem', lineHeight: 1.55 }}>
                    <span style={{ color: '#38bdf8', fontWeight: 'bold' }}>&bull;</span>
                    <span><strong style={{ color: '#ffffff' }}>Alarm Notifications:</strong> Get alerts for abnormal readings and equipment issues.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#e2e8f0', fontSize: '0.94rem', lineHeight: 1.55 }}>
                    <span style={{ color: '#38bdf8', fontWeight: 'bold' }}>&bull;</span>
                    <span><strong style={{ color: '#ffffff' }}>Plant Overview:</strong> View important plant equipment and process information on one screen.</span>
                  </li>
                </ul>
                <div className="movicon-meta-strip">
                  <span>Platform: Progea Movicon.NExT™</span>
                  <span>Protocol: OPC-UA &amp; Modbus TCP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Partner Logo Cards (White Background) */}
      <section className="trusted-partners-section" id="partners-section">
        <div className="container">
          <p className="partners-subtext-heading">
            We collaborate with the world&apos;s leading technology companies to deliver cutting-edge automation solutions
          </p>

          <div className="partners-cards-grid">
            {industryPartners.map((partner) => (
              <div className="partner-card-light" key={partner.id}>
                <div className="partner-card-logo-box">
                  <img
                    src={partner.logo}
                    alt={partner.alt}
                    className="partner-card-logo-img"
                    loading="lazy"
                  />
                </div>
                <h3 className="partner-card-name">{partner.name}</h3>
                <p className="partner-card-desc">{partner.desc}</p>
              </div>
            ))}
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
                <h2 className="section-title white">
                  Ready to Automate Your <DynamicTypewriter words={["Plant", "Production Lines", "Control Architecture", "Substations"]} />?
                </h2>
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
