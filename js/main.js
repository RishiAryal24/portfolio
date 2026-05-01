/* ============================================================
   RISHI ARYAL PORTFOLIO — SHARED JAVASCRIPT
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Navbar scroll effect ──────────────────────────────────
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 40);
    scrollTopBtn?.classList.toggle('visible', window.scrollY > 400);
  });

  // ── Active nav link (based on current page) ───────────────
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href').split('/').pop();
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ── Mobile hamburger menu ─────────────────────────────────
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  toggle?.addEventListener('click', () => {
    toggle.classList.toggle('open');
    navLinks?.classList.toggle('open');
  });
  // Close menu on link click
  navLinks?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      toggle?.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  // ── AOS init ─────────────────────────────────────────────
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 700, once: true, offset: 60 });
  }

  // ── Scroll to top ─────────────────────────────────────────
  const scrollTopBtn = document.getElementById('scroll-top');
  scrollTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ── Animated counters ─────────────────────────────────────
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const countObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-count'));
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';
        const isDecimal = String(target).includes('.');
        let start = 0;
        const duration = 1800;
        const step = timestamp => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = eased * target;
          el.textContent = prefix + (isDecimal ? current.toFixed(1) : Math.floor(current)) + suffix;
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        countObserver.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(c => countObserver.observe(c));
  }

  // ── Animated skill bars ───────────────────────────────────
  const skillFills = document.querySelectorAll('.skill-fill[data-width]');
  if (skillFills.length) {
    const skillObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const bar = entry.target;
        bar.style.width = bar.getAttribute('data-width');
        skillObserver.unobserve(bar);
      });
    }, { threshold: 0.4 });
    skillFills.forEach(bar => skillObserver.observe(bar));
  }

  // ── Filter buttons ────────────────────────────────────────
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.closest('.filter-bar') || btn.parentElement;
      group.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      const target = document.querySelector(btn.getAttribute('data-target') || '.filterable-grid');
      if (!target) return;
      target.querySelectorAll('[data-category]').forEach(item => {
        const cat = item.getAttribute('data-category');
        const show = filter === 'all' || cat.toLowerCase().includes(filter.toLowerCase());
        item.style.display = show ? '' : 'none';
      });
    });
  });

  // ── Search ────────────────────────────────────────────────
  const searchInput = document.getElementById('blog-search');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase();
      document.querySelectorAll('.blog-card').forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(query) ? '' : 'none';
      });
    });
  }

  // ── Project Modal ─────────────────────────────────────────
  const modalOverlay = document.getElementById('project-modal');
  if (modalOverlay) {
    document.querySelectorAll('[data-modal]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-modal');
        const data = window.projectData?.[id];
        if (!data) return;
        document.getElementById('modal-title').textContent = data.title;
        document.getElementById('modal-client').textContent = data.client;
        document.getElementById('modal-value').textContent = data.value || '—';
        document.getElementById('modal-desc').textContent = data.desc;
        document.getElementById('modal-tags').innerHTML = data.tags.map(t => `<span class="badge">${t}</span>`).join('');
        modalOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    });
    document.querySelector('.modal-close')?.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
    function closeModal() {
      modalOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  // ── Typed.js hero ─────────────────────────────────────────
  if (typeof Typed !== 'undefined' && document.getElementById('typed-output')) {
    new Typed('#typed-output', {
      strings: [
        'Senior Software Project Manager',
        'Agile & Scrum Expert (CSM)',
        'DevOps Practitioner',
        'MIS / EMIS / eCMS Specialist',
        'Python & Data Analytics Pro',
      ],
      typeSpeed: 48,
      backSpeed: 28,
      backDelay: 2000,
      loop: true,
    });
  }

});
