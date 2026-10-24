import React, { useState, useEffect } from 'react';
import { submitEnquiry } from '../services/emailService';
import DynamicTypewriter from '../components/DynamicTypewriter';

const TYPEWRITER_CONTACT_WORDS = ["Turnkey Automation", "PLC Commissioning", "SCADA Architecture", "IoT Telemetry", "Panel Fabrication"];

export default function ContactPage({ onShowToast }) {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_company: '',
    user_phone: '',
    service_interest: '',
    project_brief: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Contact Us & Project Inquiry | Chitai Soft Automation";
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await submitEnquiry({
        ...formData,
        page_source: 'Contact Page'
      });
      setSubmitting(false);
      setSubmitted(true);
      onShowToast('Thank you! Your enquiry has been received. Our engineering team will review and respond within 24 hours.', 'success');
      setFormData({
        user_name: '',
        user_email: '',
        user_company: '',
        user_phone: '',
        service_interest: '',
        project_brief: ''
      });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      console.error(err);
      setSubmitting(false);
      onShowToast('Unable to send enquiry automatically. Please email chitaisoft@gmail.com directly.', 'error');
    }
  };

  return (
    <div className="contact-page">
      {/* Page Hero (Matches image12.png top) */}
      <section className="circuit-bg" style={{ padding: '70px 0 50px', color: '#ffffff' }}>
        <div className="container">
          <div className="section-eyebrow white">CONTACT</div>
          <h1 className="section-title white" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)' }}>
            Connect for <DynamicTypewriter words={TYPEWRITER_CONTACT_WORDS} />
          </h1>
          <p className="section-lead white">
            Tell us about your automation requirements. Our engineers will review your project and respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Layout Grid (Matches image12.png) */}
      <section className="section-padding">
        <div className="container">
          <div className="contact-layout-grid">
            {/* Left: Contact Details Cards Stack */}
            <div className="contact-cards-stack">
              <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>
                Contact Details
              </h2>

              <div className="contact-info-card">
                <div className="contact-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <div className="contact-label">SERVICE COVERAGE</div>
                  <div className="contact-val">
                    Chitai Soft Automation<br />
                    Lucknow, Uttar Pradesh<br />
                    Pan-India Service &amp; Support
                  </div>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <div className="contact-label">PHONE</div>
                  <div className="contact-val">
                    <a href="tel:+919021682318" style={{ color: 'var(--primary-blue)' }}>+91 9021682318</a>
                  </div>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <div className="contact-label">EMAIL</div>
                  <div className="contact-val">
                    <a href="mailto:chitaisoft@gmail.com" style={{ color: 'var(--primary-blue)', display: 'block', fontWeight: 600 }}>chitaisoft@gmail.com</a>
                    <a href="mailto:info@chitaisoftautomation.in" style={{ color: 'var(--primary-blue)', display: 'block', fontWeight: 600, marginTop: '4px' }}>info@chitaisoftautomation.in</a>
                  </div>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <div>
                  <div className="contact-label">WORKING HOURS</div>
                  <div className="contact-val">
                    Mon &ndash; Sat, 9:00 AM &ndash; 6:00 PM IST
                  </div>
                </div>
              </div>

              {/* Blue Response Time SLA Card */}
              <div className="sla-card-blue corner-card">
                <div className="contact-label">RESPONSE TIME</div>
                <div className="sla-big-title">Within 24 hrs</div>
                <p className="sla-desc">
                  Our engineers review every enquiry and respond with a tailored assessment.
                </p>
              </div>
            </div>

            {/* Right: Send an Enquiry Form Card (Corner Brackets) */}
            <div className="enquiry-form-card corner-card">
              <h2 className="form-title">Send an Enquiry</h2>
              <form className="enquiry-form" id="contact-enquiry-form" onSubmit={handleSubmit}>
                <div className="form-group-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-fullname">FULL NAME *</label>
                    <input
                      className="form-input"
                      id="contact-fullname"
                      name="user_name"
                      type="text"
                      placeholder="Your name"
                      required
                      value={formData.user_name}
                      onChange={e => setFormData({ ...formData, user_name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-email">EMAIL *</label>
                    <input
                      className="form-input"
                      id="contact-email"
                      name="user_email"
                      type="email"
                      placeholder="you@company.com"
                      required
                      value={formData.user_email}
                      onChange={e => setFormData({ ...formData, user_email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-company">COMPANY</label>
                    <input
                      className="form-input"
                      id="contact-company"
                      name="user_company"
                      type="text"
                      placeholder="Your company"
                      value={formData.user_company}
                      onChange={e => setFormData({ ...formData, user_company: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-phone">PHONE NUMBER *</label>
                    <input
                      className="form-input"
                      id="contact-phone"
                      name="user_phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      required
                      pattern="[0-9+\s\-]{10,15}"
                      minLength={10}
                      title="Please enter a valid 10-digit phone number"
                      value={formData.user_phone}
                      onChange={e => setFormData({ ...formData, user_phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-service">SERVICE OF INTEREST</label>
                  <select
                    className="form-select"
                    id="contact-service"
                    name="service_interest"
                    value={formData.service_interest}
                    onChange={e => setFormData({ ...formData, service_interest: e.target.value })}
                  >
                    <option value="">Select a service...</option>
                    <option value="plc-scada">PLC &amp; SCADA Systems</option>
                    <option value="iiot">Industrial IoT &amp; Smart Manufacturing</option>
                    <option value="control-panels">Control Panel Design &amp; Build</option>
                    <option value="emerson">Emerson PACSystems PLCs</option>
                    <option value="schneider">Schneider Electric Modicon / EcoStruxure</option>
                    <option value="delta">Delta PLC &amp; VFD Automation</option>
                    <option value="renu">Renu Electronics HMI / Gateways</option>
                    <option value="other">Other Industrial Automation Requirements</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-brief">PROJECT BRIEF *</label>
                  <textarea
                    className="form-textarea"
                    id="contact-brief"
                    name="project_brief"
                    style={{ minHeight: '120px' }}
                    placeholder="Describe your automation requirements, current setup, and any specific challenges..."
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
                    marginTop: '10px',
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
