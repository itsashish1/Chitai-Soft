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


