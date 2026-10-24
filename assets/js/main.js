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

  // EmailJS Configuration (PRD Section 7.4)
  const EMAILJS_CONFIG = {
    publicKey: "ucKP_bITYsfk2_x5Q",
    serviceId: "service_u5zcasj",
    templateIdAdmin: "template_rz71c4b",
    templateIdClient: null
  };

  // Initialize EmailJS if public key is configured
  if (window.emailjs && EMAILJS_CONFIG.publicKey && EMAILJS_CONFIG.publicKey !== "YOUR_EMAILJS_PUBLIC_KEY") {
    try {
      emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
    } catch (err) {
      console.warn("EmailJS init note:", err);
    }
  }

  // Toast Notification Helper
  function showToast(message, type = 'success') {
    let toast = document.querySelector('.toast-notification');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast-notification';
      document.body.appendChild(toast);
    }
    toast.className = `toast-notification ${type} show`;
    toast.innerHTML = `
      <span style="font-weight: 700; font-size: 1.1rem; color: ${type === 'success' ? '#22c55e' : '#ef4444'};">${type === 'success' ? '✓' : '⚠'}</span>
      <span>${message}</span>
    `;
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }

  // 3. Enquiry Form Handling (Live EmailJS + Fallback Simulator)
  const enquiryForms = document.querySelectorAll('.enquiry-form');
  enquiryForms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerText : 'Submit';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerText = 'Transmitting Enquiry...';
      }

      // Collect form payload
      const formData = new FormData(form);
      const payload = {
        user_name: formData.get('user_name') || form.querySelector('[name="user_name"]')?.value || '',
        user_email: formData.get('user_email') || form.querySelector('[name="user_email"]')?.value || 'N/A',
        user_company: formData.get('user_company') || form.querySelector('[name="user_company"]')?.value || 'N/A',
        user_phone: formData.get('user_phone') || form.querySelector('[name="user_phone"]')?.value || '',
        service_interest: formData.get('service_interest') || form.querySelector('[name="service_interest"]')?.value || 'General Automation',
        project_brief: formData.get('project_brief') || form.querySelector('[name="project_brief"]')?.value || '',
        page_source: window.location.pathname.split('/').pop() || 'index.html',
        timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
      };

      const isLiveEmailConfigured = window.emailjs &&
        EMAILJS_CONFIG.publicKey &&
        EMAILJS_CONFIG.publicKey !== "YOUR_EMAILJS_PUBLIC_KEY";

      try {
        if (isLiveEmailConfigured) {
          // Send internal notification alert to Chitai Soft engineering team
          await emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateIdAdmin, payload);

          // If client provided email, send auto-reply confirmation
          if (payload.user_email && payload.user_email !== 'N/A') {
            await emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateIdClient, payload);
          }
        } else {
          // Graceful simulated network transit if keys not yet configured
          await new Promise(resolve => setTimeout(resolve, 800));
        }

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerText = 'Enquiry Sent Successfully ✓';
          submitBtn.style.backgroundColor = '#16a34a';
          submitBtn.style.borderColor = '#16a34a';
          submitBtn.style.color = '#ffffff';
        }

        showToast('Thank you! Your enquiry has been received. Our engineering team will respond within 24 hours.', 'success');
        form.reset();

        setTimeout(() => {
          if (submitBtn) {
            submitBtn.innerText = originalText;
            submitBtn.style.backgroundColor = '';
            submitBtn.style.borderColor = '';
            submitBtn.style.color = '';
          }
        }, 4000);

      } catch (err) {
        console.error("Enquiry Transmission Error:", err);
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerText = 'Transmission Failed - Retry';
          submitBtn.style.backgroundColor = '#dc2626';
          submitBtn.style.borderColor = '#dc2626';
          submitBtn.style.color = '#ffffff';
        }

        showToast('Unable to send enquiry automatically. Please email info@chitaisoftautomation.in directly.', 'error');

        setTimeout(() => {
          if (submitBtn) {
            submitBtn.innerText = originalText;
            submitBtn.style.backgroundColor = '';
            submitBtn.style.borderColor = '';
            submitBtn.style.color = '';
          }
        }, 4000);
      }
    });
  });

  // 4. Cool Animated Counter on Scroll (IntersectionObserver)
  const counterElements = document.querySelectorAll('.counter-val[data-target]');
  if (counterElements.length > 0) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseFloat(el.getAttribute('data-target'));
          const prefix = el.getAttribute('data-prefix') || '';
          const suffix = el.getAttribute('data-suffix') || '';
          const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
          const duration = 1800; // ms
          const startTime = performance.now();

          const updateCount = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // EaseOutQuad
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentVal = target * easeOut;

            el.innerText = `${prefix}${currentVal.toFixed(decimals)}${suffix}`;

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              el.innerText = `${prefix}${target.toFixed(decimals)}${suffix}`;
            }
          };

          requestAnimationFrame(updateCount);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.2 });

    counterElements.forEach(el => counterObserver.observe(el));
  }

  // 5. Interactive Sliding Showcase Controller
  const sliderTrack = document.querySelector('.slider-track');
  const slides = document.querySelectorAll('.slider-slide');
  const prevBtn = document.querySelector('.slider-arrow.prev');
  const nextBtn = document.querySelector('.slider-arrow.next');
  const dots = document.querySelectorAll('.slider-dot');

  if (sliderTrack && slides.length > 0) {
    let currentSlide = 0;
    const totalSlides = slides.length;
    let autoSlideInterval;

    const goToSlide = (index) => {
      currentSlide = (index + totalSlides) % totalSlides;
      sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentSlide);
      });
    };

    const nextSlide = () => goToSlide(currentSlide + 1);
    const prevSlide = () => goToSlide(currentSlide - 1);

    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => goToSlide(idx));
    });

    const startAutoSlide = () => {
      autoSlideInterval = setInterval(nextSlide, 5000);
    };

    const stopAutoSlide = () => {
      clearInterval(autoSlideInterval);
    };

    const sliderContainer = document.querySelector('.slider-container');
    if (sliderContainer) {
      sliderContainer.addEventListener('mouseenter', stopAutoSlide);
      sliderContainer.addEventListener('mouseleave', startAutoSlide);
    }

    startAutoSlide();
  }

  // 6. Scroll-Reveal Animation Observer
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));
  }
});


