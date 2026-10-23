import React from 'react';
import { Link } from 'react-router-dom';
import DynamicTypewriter from '../components/DynamicTypewriter';

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* Page Hero with Dynamic Typewriter (Automax inspired) */}
      <section className="circuit-bg" style={{ padding: '75px 0 55px', color: '#ffffff' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-eyebrow white" style={{ justifyContent: 'center' }}>
            &bull; WHO WE ARE
          </div>
          <h1 className="section-title white" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', margin: '12px 0 16px' }}>
            About <DynamicTypewriter words={["Chitai Soft", "Industrial Automation", "Control Engineering", "Smart Factories"]} />
          </h1>
          <p className="section-lead white" style={{ margin: '0 auto', maxWidth: '820px' }}>
            Leading the future of industrial automation with innovative control architectures, PLC/SCADA systems, and expert commissioning across India.
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

      {/* Meet Chitai Soft & Automax-Inspired Premium Video Showcase */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="automax-about-grid">
            {/* Left: Narrative & Milestone Metrics */}
            <div>
              <div className="section-eyebrow">&bull; OUR STORY</div>
              <h2 className="section-title" style={{ fontSize: '2.2rem', marginBottom: '18px' }}>
                Built on Engineering Expertise
              </h2>
              <div className="about-story-text">
                <p>
                  Chitai Soft Automation was founded with a single purpose &mdash; to bring dependable, well-engineered automation to Indian industry. We work with plant operators, project managers, and engineering teams across the country to design, commission, and support industrial control systems that perform.
                </p>
                <p>
                  Our team combines hands-on site experience with deep knowledge of PLC programming, SCADA development, and Industrial IoT &mdash; giving clients a single point of accountability from design through commissioning and beyond.
                </p>
              </div>

              {/* Automax-Style Stats Strip */}
              <div className="automax-stat-strip" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                <div className="automax-stat-item">
                  <div className="automax-stat-number">99.8%</div>
                  <div className="automax-stat-label">Plant Reliability</div>
                </div>
                <div className="automax-stat-item">
                  <div className="automax-stat-number">24 Hr</div>
                  <div className="automax-stat-label">Response SLA</div>
                </div>
              </div>
            </div>

            {/* Right: Automax-Inspired Cinematic Video Player Showcase with Floating Badges */}
            <div>
              <div className="automax-video-showcase">
                {/* Floating Top-Right Badge (24/7 Live Monitoring) */}
                <div className="floating-badge badge-top-right">
                  <span className="live-pulse-dot"></span>
                  <span>24/7 Automation Support</span>
                </div>

                {/* Floating Bottom-Left Badge (99.8% Uptime) */}
                <div className="floating-badge badge-bottom-left">
                  <span className="star-pulse-dot"></span>
                  <span>99.8% System Uptime</span>
                </div>

                {/* Video Player */}
                <video
                  className="automax-video-player"
                  src="/assets/videos/about-chitai-video.mp4"
                  poster="/assets/videos/about-video-poster.jpg"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  title="Chitai Soft Automation Brand Story"
                >
                  Your browser does not support HTML5 video.
                </video>

                {/* Bottom Gradient Caption Bar */}
                <div className="automax-video-bottom-bar">
                  <span className="automax-video-caption">
                    Chitai Soft Automation &bull; Brand Film
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Pillars */}
      <section className="section-padding" style={{ backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="section-header-centered" style={{ marginBottom: '36px' }}>
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>&bull; CORE VALUES</div>
            <h2 className="section-title">The Principles Behind Every Delivery</h2>
            <p className="section-lead" style={{ maxWidth: '680px', margin: '0 auto' }}>
              How we approach engineering, collaboration, and client relationships across India.
            </p>
          </div>

          <div className="about-pillars-grid">
            <div className="corner-card about-pillar-card">
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-main)' }}>Technical Rigour</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                Every system we deliver is designed to specification, tested thoroughly, and documented completely. No shortcuts.
              </p>
            </div>

            <div className="corner-card about-pillar-card">
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-main)' }}>Site-First Thinking</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                Our engineers have spent time on plant floors. We design for the realities of industrial environments, not just the drawing board.
              </p>
            </div>

            <div className="corner-card about-pillar-card">
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-main)' }}>Vendor Independence</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                We work across all major automation platforms and recommend what is right for your process &mdash; not what is convenient for us.
              </p>
            </div>

            <div className="corner-card about-pillar-card">
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-main)' }}>Long-Term Support</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                We build relationships, not just systems. Our clients know they can call us after commissioning and we will be there.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-header-centered" style={{ marginBottom: '30px' }}>
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>WHAT WE DO</div>
            <h2 className="section-title">Core Capabilities</h2>
          </div>

          <div className="capabilities-grid">
            <div className="capability-card corner-card">
              <span className="cap-num">01</span>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '10px', color: 'var(--text-main)' }}>
                PLC &amp; Control Systems
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                Design, programming, panel build, and commissioning of PLC-based control systems across process and discrete manufacturing.
              </p>
            </div>

            <div className="capability-card corner-card">
              <span className="cap-num">02</span>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '10px', color: 'var(--text-main)' }}>
                SCADA &amp; HMI Development
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                Custom operator interfaces and SCADA platforms engineered for clarity, reliability, and ease of maintenance.
              </p>
            </div>

            <div className="capability-card corner-card">
              <span className="cap-num">03</span>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '10px', color: 'var(--text-main)' }}>
                Industrial IoT
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                Edge computing, OEE analytics, and predictive maintenance solutions that connect existing plant assets to modern data platforms.
              </p>
            </div>

            <div className="capability-card corner-card">
              <span className="cap-num">04</span>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '10px', color: 'var(--text-main)' }}>
                Historian &amp; Data Integration
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                Process data historian setup and OPC-UA / Modbus integration to plant-level databases and reporting systems.
              </p>
            </div>

            <div className="capability-card corner-card">
              <span className="cap-num">05</span>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '10px', color: 'var(--text-main)' }}>
                Remote Diagnostics
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                Secure remote access infrastructure for off-site monitoring, fault diagnosis, and ongoing engineering support.
              </p>
            </div>

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

      {/* Let's Work Together CTA */}
      <section className="cta-banner-section circuit-bg">
        <div className="container">
          <div className="cta-banner-content">
            <h2 className="cta-banner-title">Let&apos;s Work Together</h2>
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
