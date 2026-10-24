import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FaqAccordion from '../components/FaqAccordion';
import DynamicTypewriter from '../components/DynamicTypewriter';

const TYPEWRITER_INDUSTRIES = ["Oil & Gas", "Power & Utilities", "Water Treatment", "Smart Factories", "Chemical Plants"];

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

const INDUSTRIES_DATA = [
  {
    id: 'oil-gas',
    category: 'oil-gas',
    title: 'Oil & Gas Operations',
    tag: 'UPSTREAM & MIDSTREAM',
    image: '/assets/images/industry-oilgas.png',
    shortDesc: 'SIL-rated safety instrumented systems, pipeline leak detection, and automated wellhead monitoring for harsh environments.',
    fullDesc: 'We engineer turnkey automation for upstream extraction, midstream pipeline transportation, and downstream refining. Our solutions focus on fail-safe process protection, regulatory compliance, and maximum operational availability in hazardous industrial zones.',
    features: [
      'Pipeline supervision with ultrasonic flow metering & remote valve actuation',
      'SIL-2 / SIL-3 Emergency Shutdown (ESD) & Fire & Gas (F&G) logic',
      'Automated wellhead control, separator monitoring, and custody metering skids',
      'Compressor & pump surge protection with automated start/stop sequencing'
    ],
    standards: 'IEC 61508 / 61511 SIL-2/SIL-3, ATEX / PESO Compliant',
    protocols: 'Modbus TCP, DNP3, Foundation Fieldbus, HART'
  },
  {
    id: 'power-energy',
    category: 'power-energy',
    title: 'Power Generation & Utilities',
    tag: 'UTILITY-GRADE REDUNDANCY',
    image: '/assets/images/power-control.png',
    shortDesc: 'Hot-standby redundant PLC architectures, steam/gas turbine protection, and IEC 61850 substation automation.',
    fullDesc: 'Utility-grade control and protection for thermal, hydro, and electrical substation installations. Redundant controller pairs guarantee bump-less switchover during failover, maintaining 99.99% grid and plant availability.',
    features: [
      'Steam & gas turbine governing, protection, and automatic grid synchronizing',
      'IEC 61850-compliant substation automation and bay control architectures',
      'Precision boiler fuel-air ratio control and 3-element drum level regulation',
      'Hot-standby dual redundant PLC CPUs guaranteeing bumpless transfer'
    ],
    standards: 'IEC 61850, IEEE C37.90 Substation Standard',
    protocols: 'IEC 60870-5-104, DNP3, Modbus RTU/TCP'
  },
  {
    id: 'water-wastewater',
    category: 'water-wastewater',
    title: 'Water & Wastewater Treatment',
    tag: 'MUNICIPAL & INDUSTRIAL',
    image: '/assets/images/industry-water.png',
    shortDesc: 'Automated chemical dosing, filtration sequencing, and wide-area SCADA telemetry for municipal pumping and ETP plants.',
    fullDesc: 'Intelligent automation for water treatment facilities, sewage networks, and industrial effluent treatment plants. Coordinates remote booster stations and optimizes aeration blower VFD speeds to reduce electrical costs by up to 20%.',
    features: [
      'Automated chemical dosing, flocculation, and backwash filtration control',
      'Remote booster & lift station pump cycling with ultrasonic level telemetry',
      'Wide-area SCADA visibility across reservoirs and district metering areas',
      'Aeration blower VFD modulation and energy consumption optimization'
    ],
    standards: 'CPHEEO Water Guidelines, CPCB Effluent Compliance',
    protocols: 'OPC-UA, Modbus TCP, Cellular MQTT Telemetry'
  },
  {
    id: 'automotive-discrete',
    category: 'manufacturing',
    title: 'Automotive & Discrete Manufacturing',
    tag: 'HIGH-SPEED PRODUCTION',
    image: '/assets/images/iiot-smart-factory-hd.jpg',
    shortDesc: 'Robotic cell interlocking, high-speed servo synchronization, and shift-by-shift live OEE productivity monitoring.',
    fullDesc: 'High-speed automation for automotive sub-assemblies, stamping presses, and packaging cells. Delivers millisecond-precision motion control, inline vision inspection, and shopfloor dashboards tracking piece counts and reject trends.',
    features: [
      'High-speed servo motion synchronization and conveyor line indexing',
      'Robotic cell safety interlocks, light curtains, and safety PLCs',
      'Inline optical vision inspection and automated reject separation',
      'Shopfloor production displays with live OEE and downtime root-cause analysis'
    ],
    standards: 'ISO 13849-1 Machine Safety Category 4 PLe, CE Mark',
    protocols: 'Profinet, Ethernet/IP, IO-Link'
  },
  {
    id: 'chemicals-pharma',
    category: 'process',
    title: 'Chemical & Process Industries',
    tag: 'BATCH & CONTINUOUS CONTROL',
    image: '/assets/images/scada-control-room-hd.jpg',
    shortDesc: 'ISA-88 batch recipe control, reactor cascade PID loops, and electronic batch records for statutory compliance.',
    fullDesc: 'Precision multi-variable process control for chemical manufacturing, polymer blending, and distillation units. Strict recipe automation, pressure-temperature interlocks, and historian logging ensure safe operation and repeatable quality.',
    features: [
      'ISA-88 modular batch automation and flexible recipe execution',
      'Cascade PID temperature & pressure loops for exothermic reactors',
      'Emergency nitrogen blanketing and automatic solvent dosing cutoffs',
      'Lossless process data archiving with electronic batch records'
    ],
    standards: 'ISA-88 Batch Standard, ATEX Zone 1/2 Certified',
    protocols: 'HART, Modbus TCP, Profibus-DP'
  },
  {
    id: 'food-beverage',
    category: 'manufacturing',
    title: 'Food, Dairy & Beverage Processing',
    tag: 'HYGIENIC AUTOMATION',
    image: '/assets/images/scada-control-room-hd.jpg',
    shortDesc: 'Automated CIP (Clean-in-Place) sequencing, thermal pasteurization logging, and sanitary valve manifold control.',
    fullDesc: 'Hygienic automation solutions for dairy, brewing, and packaged food operations. Automated clean-in-place cycles, temperature logging, and ingredient dosing minimize recipe errors, reduce water consumption, and guarantee food safety compliance.',
    features: [
      'Automated Clean-in-Place (CIP) wash sequencing with conductivity tracking',
      'Continuous thermal pasteurization temperature and flow validation',
      'Sanitary pneumatic valve manifold control and bulk silo level monitoring',
      'Automated shift sanitation and water consumption efficiency audits'
    ],
    standards: 'FSSAI Food Safety Standards, 3-A Sanitary Standards',
    protocols: 'Ethernet/IP, IO-Link, Modbus RTU'
  }
];

export default function IndustriesPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Industries We Serve | Chitai Soft Automation";
  }, []);

  useEffect(() => {
    if (selectedIndustry) {
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setSelectedIndustry(null);
      };
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [selectedIndustry]);

  const filteredIndustries = activeFilter === 'all'
    ? INDUSTRIES_DATA
    : INDUSTRIES_DATA.filter(ind => ind.category === activeFilter);

  return (
    <div className="industries-page">
      {/* Page Hero */}
      <section className="circuit-bg" style={{ padding: '70px 0 45px', color: '#ffffff' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-eyebrow white" style={{ justifyContent: 'center' }}>SECTORS WE EMPOWER</div>
          <h1 className="section-title white" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', margin: '10px 0 16px' }}>
            Turnkey Automation for <DynamicTypewriter words={TYPEWRITER_INDUSTRIES} />
          </h1>
          <p className="section-lead white" style={{ margin: '0 auto 28px', maxWidth: '820px' }}>
            From oil &amp; gas facilities to utility power generation, we engineer robust automation architectures built around the demanding realities of your vertical.
          </p>

          {/* Filter Tabs */}
          <div className="filter-tabs" style={{ justifyContent: 'center' }}>
            <button
              className={`filter-tab ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              ALL VERTICALS
            </button>
            <button
              className={`filter-tab ${activeFilter === 'oil-gas' ? 'active' : ''}`}
              onClick={() => setActiveFilter('oil-gas')}
            >
              OIL &amp; GAS
            </button>
            <button
              className={`filter-tab ${activeFilter === 'power-energy' ? 'active' : ''}`}
              onClick={() => setActiveFilter('power-energy')}
            >
              POWER &amp; UTILITIES
            </button>
            <button
              className={`filter-tab ${activeFilter === 'water-wastewater' ? 'active' : ''}`}
              onClick={() => setActiveFilter('water-wastewater')}
            >
              WATER &amp; WASTEWATER
            </button>
            <button
              className={`filter-tab ${activeFilter === 'manufacturing' ? 'active' : ''}`}
              onClick={() => setActiveFilter('manufacturing')}
            >
              MANUFACTURING &amp; FOOD
            </button>
            <button
              className={`filter-tab ${activeFilter === 'process' ? 'active' : ''}`}
              onClick={() => setActiveFilter('process')}
            >
              CHEMICALS &amp; PROCESS
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

      {/* Compact Industry Cards Grid (2-Line Details + Learn More Modal) */}
      <section className="section-padding" style={{ backgroundColor: '#f8fafc' }} id="industries-grid-section">
        <div className="container">
          <div className="section-header-centered" style={{ marginBottom: '36px' }}>
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>FIELD-PROVEN EXPERTISE</div>
            <h2 className="section-title">Turnkey Industry Architectures</h2>
            <p className="section-lead" style={{ maxWidth: '760px', margin: '0 auto' }}>
              Explore how we tailor control logic, safety instrumentation, and communication networks to your industry standards.
            </p>
          </div>

          <div className="services-five-grid">
            {filteredIndustries.map((industry) => (
              <div className="corner-card service-preview-card" key={industry.id}>
                <div className="service-card-img-wrap">
                  <img src={industry.image} alt={industry.title} loading="lazy" />
                </div>
                <span className="tag-badge">{industry.tag}</span>
                <h3 className="feature-point-title" style={{ fontSize: '1.2rem', margin: '12px 0 8px' }}>
                  {industry.title}
                </h3>
                <p className="service-short-desc">
                  {industry.shortDesc}
                </p>
                <button
                  type="button"
                  id={`btn-learn-more-ind-${industry.id}`}
                  className="service-learn-more-btn"
                  onClick={() => setSelectedIndustry(industry)}
                  aria-label={`Learn more about ${industry.title}`}
                >
                  Learn More &rarr;
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Engineering FAQs */}
      <FaqAccordion
        eyebrow="SECTOR EXPERTISE &amp; STANDARDS"
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
              We engineer automation across a broad spectrum of process and discrete manufacturing plants across India. Get in touch to discuss your specific operational requirements.
            </p>
            <Link to="/contact" className="btn btn-primary">Discuss Your Requirements &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Industry Details Pop-up Modal */}
      {selectedIndustry && (
        <div
          className="service-modal-backdrop"
          onClick={() => setSelectedIndustry(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="industry-modal-title"
        >
          <div className="service-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="service-modal-close"
              onClick={() => setSelectedIndustry(null)}
              aria-label="Close details"
            >
              &times;
            </button>

            <div className="service-modal-image-wrap">
              <img src={selectedIndustry.image} alt={selectedIndustry.title} />
              <span className="service-modal-tag">{selectedIndustry.tag}</span>
            </div>

            <div className="service-modal-body">
              <h2 id="industry-modal-title" className="service-modal-title">
                {selectedIndustry.title}
              </h2>
              <p className="service-modal-lead">{selectedIndustry.fullDesc}</p>

              <div className="service-modal-features">
                <h4 className="service-modal-subheading">Key Sector Engineering Capabilities</h4>
                <ul className="service-modal-list">
                  {selectedIndustry.features.map((feature, idx) => (
                    <li key={idx}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="service-modal-specs">
                <div className="service-spec-box">
                  <span className="spec-label">Compliance &amp; Safety</span>
                  <span className="spec-val">{selectedIndustry.standards}</span>
                </div>
                <div className="service-spec-box">
                  <span className="spec-label">Fieldbus &amp; Protocols</span>
                  <span className="spec-val">{selectedIndustry.protocols}</span>
                </div>
              </div>

              <div className="service-modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    setSelectedIndustry(null);
                    navigate('/contact');
                  }}
                >
                  Discuss Plant Architecture &rarr;
                </button>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => setSelectedIndustry(null)}
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
