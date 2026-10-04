/**
 * Chitai Soft Automation - Main Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isExpanded = navMenu.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('open');
      }
    });
  }

  // 2. Interactive Filter Tabs (Services / Industries)
  const filterTabs = document.querySelectorAll('.filter-tab');
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const parent = tab.closest('.filter-tabs');
      if (parent) {
        parent.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const targetId = tab.getAttribute('data-target');
        if (targetId) {
          const targetSection = document.getElementById(targetId);
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    });
  });

  // 3. Enquiry Form Handling
  const enquiryForms = document.querySelectorAll('.enquiry-form');
  enquiryForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerText : 'Submit';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerText = 'Transmitting Enquiry...';
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerText = 'Enquiry Sent Successfully ✓';
          submitBtn.style.backgroundColor = '#16a34a';
          submitBtn.style.borderColor = '#16a34a';
          submitBtn.style.color = '#ffffff';
        }

        alert('Thank you for contacting Chitai Soft Automation! Our engineering team will review your requirements and respond within 24 hours.');
        form.reset();

        setTimeout(() => {
          if (submitBtn) {
            submitBtn.innerText = originalText;
            submitBtn.style.backgroundColor = '';
            submitBtn.style.borderColor = '';
            submitBtn.style.color = '';
          }
        }, 4000);
      }, 1000);
    });
  });
});
