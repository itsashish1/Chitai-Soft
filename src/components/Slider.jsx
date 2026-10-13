import React, { useState, useEffect, useRef } from 'react';

const SLIDES = [
  {
    id: 1,
    tag: '01 / SUPERVISORY CONTROL',
    title: 'SCADA & Centralized Plant Mimic Architecture',
    desc: 'High-availability supervisory control and data acquisition systems featuring multi-monitor operator stations, dynamic plant mimics, real-time alarm categorization, and historical trend logging.',
    image: '/assets/images/scada-control-room-hd.jpg',
    pills: ['Real-Time Mimics', 'Historian Integration', 'ISA 18.2 Alarm Mgmt'],
    btnText: 'Explore SCADA Systems →',
    btnTarget: '#plc-scada'
  },
  {
    id: 2,
    tag: '02 / HARDWARE FABRICATION',
    title: 'Custom PLC Control Panels & FAT/SAT Testing',
    desc: 'Precision-engineered control enclosures with neat DIN-rail wiring, multi-vendor PLC racks, VFD integrations, power protection, and rigorous Factory Acceptance Testing (FAT).',
    image: '/assets/images/plc-control-panel-hd.jpg',
    pills: ['IP55/IP65 Enclosures', 'VFD & Servo Drives', 'IEC 61439 Standards'],
    btnText: 'View Panel Capabilities →',
    btnTarget: '#plc-scada'
  },
  {
    id: 3,
    tag: '03 / INDUSTRY 4.0',
    title: 'Predictive Machine Monitoring & OEE Analytics',
    desc: 'Edge gateways and magnetic vibration/thermal sensors mounted directly to critical rotating assets. Track downtime reasons, benchmark shift productivity, and prevent sudden catastrophic motor failure.',
    image: '/assets/images/iiot-smart-factory-hd.jpg',
    pills: ['Vibration & Temp Telemetry', 'Real-Time OEE', 'SMS / WhatsApp Alerts'],
    btnText: 'View Machine Telemetry →',
    btnTarget: '#machine-monitoring'
  },
  {
    id: 4,
    tag: '04 / UTILITY INTELLIGENCE',
    title: 'Granular Energy Sub-Metering & Demand Control',
    desc: 'Feeder-level power meters tracking kWh, harmonics, reactive power, and peak contract demand. Avoid utility penalties and optimize Diesel Generator vs. Grid power scheduling.',
    image: '/assets/images/energy-submetering-hd.jpg',
    pills: ['Feeder-Wise Sub-Metering', 'Peak Demand Alerts', 'DG Fuel Optimization'],
    btnText: 'Explore Energy Solutions →',
    btnTarget: '#energy-monitoring'
  }
];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalSlides = SLIDES.length;

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      className="slider-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="slider-track"
        style={{ transform: `translateX(-${currentSlide * 100}%)`, transition: 'transform 0.5s ease-in-out' }}
      >
        {SLIDES.map((slide) => (
          <div className="slider-slide" key={slide.id}>
            <div className="slide-media">
              <img src={slide.image} alt={slide.title} loading="lazy" />
            </div>
            <div className="slide-content">
              <span className="slide-tag">{slide.tag}</span>
              <h3 className="slide-title">{slide.title}</h3>
              <p className="slide-desc">{slide.desc}</p>
              <div className="slide-highlights">
                {slide.pills.map((pill, i) => (
                  <span className="slide-pill" key={i}>{pill}</span>
                ))}
              </div>
              <div>
                <a
                  href={slide.btnTarget}
                  className="btn btn-primary"
                  style={{ padding: '10px 22px', fontSize: '0.88rem' }}
                >
                  {slide.btnText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button className="slider-arrow prev" aria-label="Previous Slide" onClick={prevSlide}>
        &larr;
      </button>
      <button className="slider-arrow next" aria-label="Next Slide" onClick={nextSlide}>
        &rarr;
      </button>

      {/* Dots */}
      <div className="slider-dots">
        {SLIDES.map((_, idx) => (
          <div
            key={idx}
            className={`slider-dot ${idx === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(idx)}
          />
        ))}
      </div>
    </div>
  );
}
