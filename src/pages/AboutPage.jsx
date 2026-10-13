import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* Page Hero (Matches image10.png top) */}
      <section className="circuit-bg" style={{ padding: '70px 0 50px', color: '#ffffff' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="section-title white" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>About Chitai Soft Automation</h1>
          <p className="section-lead white" style={{ margin: '0 auto', maxWidth: '800px' }}>
            An automation engineering company delivering reliable industrial control systems across India.
          </p>
        </div>
      </section>

      {/* Moving Infinite Marquee Ticker */}
      <div className="marquee-strip">
        <div className="marquee-track">
          <div className="marquee-item"><span className="marquee-dot"></span> RELIABLE &bull; INNOVATIVE &bull; CUSTOMIZED</div>
          <div className="marquee-item"><span className="marquee-dot"></span> PAN-INDIA COMMISSIONING COVERAGE</div>
          <div className="marquee-item"><span className="marquee-dot"></span> 24-HOUR TECHNICAL SLA RESPONSE</div>
          <div className="marquee-item"><span className="marquee-dot"></span> VENDOR-INDEPENDENT ENGINEERING</div>
          <div className="marquee-item"><span className="marquee-dot"></span> EMERSON &bull; SCHNEIDER &bull; DELTA &bull; RENU</div>
          {/* Duplicate for loop */}
          <div className="marquee-item"><span className="marquee-dot"></span> RELIABLE &bull; INNOVATIVE &bull; CUSTOMIZED</div>
          <div className="marquee-item"><span className="marquee-dot"></span> PAN-INDIA COMMISSIONING COVERAGE</div>
          <div className="marquee-item"><span className="marquee-dot"></span> 24-HOUR TECHNICAL SLA RESPONSE</div>
          <div className="marquee-item"><span className="marquee-dot"></span> VENDOR-INDEPENDENT ENGINEERING</div>
          <div className="marquee-item"><span className="marquee-dot"></span> EMERSON &bull; SCHNEIDER &bull; DELTA &bull; RENU</div>
        </div>
      </div>

      {/* Our Story & 4 Pillars (Matches image10.png middle) */}
      <section className="section-padding">
        <div className="container">
          <div className="about-hero-grid">
            {/* Left: Narrative */}
            <div>
              <div className="section-eyebrow">OUR STORY</div>
              <h2 className="section-title">Built on Engineering Expertise</h2>
              <div className="about-story-text">
                <p>
                  Chitai Soft Automation was founded with a single purpose &mdash; to bring dependable, well-engineered automation to Indian industry. We work with plant operators, project managers, and engineering teams across the country to design, commission, and support industrial control systems that perform.
                </p>
                <p>
                  From our early projects in power generation to our current work across oil &amp; gas, water treatment, and process industries, we have built a reputation for technical rigour and straightforward delivery. We do not over-promise. We scope carefully, engineer thoroughly, and stand behind our work.
                </p>
                <p>
                  Our team combines hands-on site experience with deep knowledge of PLC programming, SCADA development, and Industrial IoT &mdash; giving clients a single point of accountability from design through commissioning and beyond.
                </p>
                <div style={{ borderRadius: '10px', overflow: 'hidden', marginTop: '24px', border: '1px solid #cbd5e1', boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}>
                  <img src="/assets/images/scada-control-room-hd.jpg" alt="Chitai Soft Automation Engineering Team & Control Room" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                </div>
              </div>
            </div>

            {/* Right: 4 Pillar Cards */}
            <div className="about-pillars-grid">
              <div className="corner-card about-pillar-card">
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-main)' }}>Technical Rigour</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  Every system we deliver is designed to specification, tested thoroughly, and documented completely. No shortcuts.
                </p>
              </div>

              <div className="corner-card about-pillar-card">
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-main)' }}>Site-First Thinking</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  Our engineers have spent time on plant floors. We design for the realities of industrial environments, not just the drawing board.
                </p>
              </div>

              <div className="corner-card about-pillar-card">
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-main)' }}>Vendor Independence</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  We work across all major automation platforms and recommend what is right for your process &mdash; not what is convenient for us.
                </p>
              </div>

              <div className="corner-card about-pillar-card">
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-main)' }}>Long-Term Support</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  We build relationships, not just systems. Our clients know they can call us after commissioning and we will be there.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities (Matches image11.png top) */}
      <section className="section-padding" style={{ backgroundColor: '#f8fafc', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header-centered" style={{ marginBottom: '30px' }}>
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>WHAT WE DO</div>
            <h2 className="section-title">Core Capabilities</h2>
          </div>

          <div className="capabilities-grid">
            {/* 01 */}
            <div className="capability-card corner-card">
              <span className="cap-num">01</span>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '10px', color: 'var(--text-main)' }}>
                PLC &amp; Control Systems
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                Design, programming, panel build, and commissioning of PLC-based control systems across process and discrete manufacturing.
              </p>
            </div>

            {/* 02 */}
            <div className="capability-card corner-card">
              <span className="cap-num">02</span>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '10px', color: 'var(--text-main)' }}>
                SCADA &amp; HMI Development
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                Custom operator interfaces and SCADA platforms engineered for clarity, reliability, and ease of maintenance.
              </p>
            </div>

            {/* 03 */}
            <div className="capability-card corner-card">
              <span className="cap-num">03</span>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '10px', color: 'var(--text-main)' }}>
                Industrial IoT
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                Edge computing, OEE analytics, and predictive maintenance solutions that connect existing plant assets to modern data platforms.
              </p>
            </div>

            {/* 04 */}
            <div className="capability-card corner-card">
              <span className="cap-num">04</span>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '10px', color: 'var(--text-main)' }}>
                Historian &amp; Data Integration
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                Process data historian setup and OPC-UA / Modbus integration to plant-level databases and reporting systems.
              </p>
            </div>

            {/* 05 */}
            <div className="capability-card corner-card">
              <span className="cap-num">05</span>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '10px', color: 'var(--text-main)' }}>
                Remote Diagnostics
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                Secure remote access infrastructure for off-site monitoring, fault diagnosis, and ongoing engineering support.
              </p>
            </div>

            {/* 06 */}
            <div className="capability-card corner-card">
              <span className="cap-num">06</span>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '10px', color: 'var(--text-main)' }}>
                Project Engineering
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                End-to-end project management from functional design specification through FAT, SAT, handover, and ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Work Together CTA (Matches image11.png bottom) */}
      <section className="cta-banner-section circuit-bg">
        <div className="container">
          <div className="cta-banner-content">
            <h2 className="cta-banner-title">Let's Work Together</h2>
            <p className="cta-banner-sub">
              Whether you have a detailed specification or are still scoping your project, we are happy to have a technical conversation.
            </p>
            <Link to="/contact" className="btn btn-primary">Get In Touch &rarr;</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
