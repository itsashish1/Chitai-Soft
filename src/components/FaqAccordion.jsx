import React from 'react';

export default function FaqAccordion({ eyebrow, title, lead, items }) {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-alt)', borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 48px' }}>
          {eyebrow && <div className="section-eyebrow">{eyebrow}</div>}
          {title && <h2 className="section-title">{title}</h2>}
          {lead && <p className="section-lead">{lead}</p>}
        </div>

        <div className="faq-accordion-grid">
          {items.map((item, idx) => (
            <details className="faq-card corner-card" key={idx}>
              <summary>
                <span>{item.question}</span>
                <span className="faq-icon-toggle">+</span>
              </summary>
              <div className="faq-content" dangerouslySetInnerHTML={{ __html: item.answer }} />
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
