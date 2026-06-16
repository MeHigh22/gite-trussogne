/**
 * Trussogne — JS front-end (sans dépendance).
 * Port du comportement React : nav drawer, état scrollé, widget de réservation,
 * galerie (filtres + lightbox), scroll-reveal.
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    initNav();
    initScrollState();
    initBooking();
    initGallery();
    initReveal();
    initFaq();
  });

  /* ─── 1. Nav drawer (porté de Nav.jsx:32-43) ──────────────────────── */
  function initNav() {
    var openBtn = document.getElementById('nav-open');
    var closeBtn = document.getElementById('nav-close');
    var overlay = document.getElementById('nav-overlay');
    var drawer = document.getElementById('nav-drawer');
    if (!openBtn || !drawer) return;

    var prevOverflow = '';

    function open() {
      document.body.classList.add('menu-open');
      prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      openBtn.setAttribute('aria-expanded', 'true');
      drawer.setAttribute('aria-hidden', 'false');
      overlay.setAttribute('aria-hidden', 'false');
      if (closeBtn) closeBtn.focus();
      document.addEventListener('keydown', onKey);
    }

    function close() {
      document.body.classList.remove('menu-open');
      document.body.style.overflow = prevOverflow;
      openBtn.setAttribute('aria-expanded', 'false');
      drawer.setAttribute('aria-hidden', 'true');
      overlay.setAttribute('aria-hidden', 'true');
      document.removeEventListener('keydown', onKey);
      openBtn.focus();
    }

    function onKey(e) {
      if (e.key === 'Escape') close();
    }

    openBtn.addEventListener('click', open);
    if (closeBtn) closeBtn.addEventListener('click', close);
    if (overlay) overlay.addEventListener('click', close);
    // Fermer après un clic sur un lien du menu.
    drawer.querySelectorAll('.trussogne-drawer__links a, .trussogne-drawer__cta').forEach(function (a) {
      a.addEventListener('click', close);
    });
  }

  /* ─── 2. État scrollé (porté des listeners scroll de chaque page) ──── */
  function initScrollState() {
    var nav = document.getElementById('site-nav');
    if (!nav) return;
    function onScroll() {
      var scrolled = window.scrollY > 60;
      nav.classList.toggle('scrolled', scrolled);
      document.body.classList.toggle('scrolled', scrolled);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ─── 3. Widget de réservation (porté de BookingWidget.jsx) ────────── */
  var MAX = 9;

  function fmtEllo(d) {
    var iso = d.toISOString().slice(0, 10).split('-');
    return iso[2] + '/' + iso[1] + '/' + iso[0];
  }

  // Port verbatim de buildEllohaUrl() — BookingWidget.jsx:32-47.
  function buildEllohaUrl(opts) {
    var arrival = opts.arrival, nights = opts.nights, adults = opts.adults, kids = opts.kids;
    var departure = new Date(arrival);
    departure.setDate(departure.getDate() + nights);
    var params = new URLSearchParams({
      idPublication: '854566e1-2fb8-485c-abbd-fbf732e92e88',
      idoi: 'fcd24dc1-911a-41a4-a5cd-c8588ad41007',
      TypeOi: '3',
      searchFirstAvailableDates: '1',
      dateFrom: fmtEllo(new Date(arrival)),
      dateTo: fmtEllo(departure),
      NbAdultes: adults,
      NbEnfants: kids,
      culture: 'fr-FR'
    });
    return 'https://reservation.elloha.com/?' + params.toString();
  }

  function initBooking() {
    var widgets = document.querySelectorAll('.booking-widget');
    if (!widgets.length) return;

    widgets.forEach(function (w) {
      var dateInput = w.querySelector('[data-field="arrival"]');
      var counters = {
        nights: { val: 2, min: 1, max: Infinity },
        adults: { val: 2, min: 1, max: MAX },
        kids: { val: 0, min: 0, max: MAX }
      };

      // Min = aujourd'hui.
      if (dateInput) {
        var today = new Date().toISOString().slice(0, 10);
        dateInput.min = today;
        if (!dateInput.value) dateInput.value = today;
      }

      function total() { return counters.adults.val + counters.kids.val; }

      function render() {
        Object.keys(counters).forEach(function (key) {
          var c = counters[key];
          var valEl = w.querySelector('[data-value="' + key + '"]');
          if (valEl) valEl.textContent = c.val;
          var minus = w.querySelector('[data-dec="' + key + '"]');
          var plus = w.querySelector('[data-inc="' + key + '"]');
          if (minus) minus.disabled = c.val <= c.min;
          if (plus) {
            // adultes/enfants : bloqués quand le total atteint MAX.
            var capByTotal = (key === 'adults' || key === 'kids') && total() >= MAX;
            plus.disabled = c.val >= c.max || capByTotal;
          }
        });
      }

      w.querySelectorAll('[data-dec]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var c = counters[btn.getAttribute('data-dec')];
          c.val = Math.max(c.min, c.val - 1);
          render();
        });
      });
      w.querySelectorAll('[data-inc]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var key = btn.getAttribute('data-inc');
          var c = counters[key];
          if ((key === 'adults' || key === 'kids') && total() >= MAX) return;
          if (c.val >= c.max) return;
          c.val += 1;
          render();
        });
      });

      var verifyBtn = w.querySelector('[data-action="verify"]');
      if (verifyBtn) {
        verifyBtn.addEventListener('click', function () {
          var url = buildEllohaUrl({
            arrival: dateInput ? dateInput.value : new Date().toISOString().slice(0, 10),
            nights: counters.nights.val,
            adults: counters.adults.val,
            kids: counters.kids.val
          });
          window.open(url, '_blank', 'noopener noreferrer');
        });
      }

      render();
    });
  }

  /* ─── 4. Galerie : filtres + lightbox (porté de Galerie.jsx) ───────── */
  function initGallery() {
    var grid = document.querySelector('.gallery-grid');
    if (!grid) return;

    var items = Array.prototype.slice.call(grid.querySelectorAll('.gallery-item'));
    var filterBtns = Array.prototype.slice.call(document.querySelectorAll('.gal-filter'));
    var countEl = document.querySelector('[data-gallery-count]');
    var current = 'all';

    function visibleItems() {
      return items.filter(function (it) {
        return current === 'all' || it.getAttribute('data-cat') === current;
      });
    }

    function applyFilter(cat) {
      current = cat;
      items.forEach(function (it) {
        var show = cat === 'all' || it.getAttribute('data-cat') === cat;
        it.style.display = show ? '' : 'none';
      });
      filterBtns.forEach(function (b) {
        b.classList.toggle('active', b.getAttribute('data-filter') === cat);
      });
      if (countEl) {
        var n = visibleItems().length;
        countEl.textContent = n + ' photo' + (n > 1 ? 's' : '');
      }
    }

    filterBtns.forEach(function (b) {
      b.addEventListener('click', function () {
        applyFilter(b.getAttribute('data-filter'));
      });
    });

    // ── Lightbox ──
    var lb = document.getElementById('lightbox');
    var lbImg = lb ? lb.querySelector('.lb-img') : null;
    var lbCaption = lb ? lb.querySelector('.lb-caption') : null;
    var lbCounter = lb ? lb.querySelector('.lb-counter') : null;
    var lbIndex = 0;

    function openLb(item) {
      var vis = visibleItems();
      lbIndex = vis.indexOf(item);
      if (lbIndex < 0) return;
      showLb();
      lb.classList.add('open');
      document.addEventListener('keydown', onLbKey);
    }

    function showLb() {
      var vis = visibleItems();
      var item = vis[lbIndex];
      if (!item) return;
      var img = item.querySelector('img');
      lbImg.src = item.getAttribute('data-full') || (img ? img.src : '');
      lbImg.alt = img ? img.alt : '';
      if (lbCaption) lbCaption.textContent = item.getAttribute('data-caption') || '';
      if (lbCounter) lbCounter.textContent = (lbIndex + 1) + ' / ' + vis.length;
    }

    function navLb(dir) {
      var vis = visibleItems();
      lbIndex += dir;
      if (lbIndex < 0) lbIndex = vis.length - 1;
      if (lbIndex >= vis.length) lbIndex = 0;
      showLb();
    }

    function closeLb() {
      if (!lb) return;
      lb.classList.remove('open');
      document.removeEventListener('keydown', onLbKey);
    }

    function onLbKey(e) {
      if (e.key === 'Escape') closeLb();
      if (e.key === 'ArrowRight') navLb(1);
      if (e.key === 'ArrowLeft') navLb(-1);
    }

    items.forEach(function (it) {
      it.addEventListener('click', function () { openLb(it); });
    });

    if (lb) {
      lb.addEventListener('click', function (e) {
        if (e.target === lb) closeLb();
      });
      var closeBtn = lb.querySelector('.lb-close');
      var prevBtn = lb.querySelector('.lb-prev');
      var nextBtn = lb.querySelector('.lb-next');
      if (closeBtn) closeBtn.addEventListener('click', function (e) { e.stopPropagation(); closeLb(); });
      if (prevBtn) prevBtn.addEventListener('click', function (e) { e.stopPropagation(); navLb(-1); });
      if (nextBtn) nextBtn.addEventListener('click', function (e) { e.stopPropagation(); navLb(1); });
    }

    applyFilter('all');
  }

  /* ─── 5. Scroll-reveal (CSS .reveal -> .in) ───────────────────────── */
  function initReveal() {
    var els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('in'); });
      return;
    }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { obs.observe(el); });
  }

  /* ─── 6. FAQ accordéon (porté de Contact.jsx FAQ) ─────────────────── */
  function initFaq() {
    var items = document.querySelectorAll('.faq-item');
    if (!items.length) return;

    function close(item) {
      var ans = item.querySelector('.faq-answer');
      var plus = item.querySelector('.faq-plus');
      var btn = item.querySelector('.faq-toggle');
      if (ans) { ans.style.maxHeight = '0'; ans.style.paddingBottom = '0'; }
      if (plus) {
        plus.style.transform = 'none';
        plus.style.background = 'transparent';
        plus.style.color = 'var(--ink)';
      }
      if (btn) btn.setAttribute('aria-expanded', 'false');
    }

    function open(item) {
      var ans = item.querySelector('.faq-answer');
      var plus = item.querySelector('.faq-plus');
      var btn = item.querySelector('.faq-toggle');
      if (ans) { ans.style.maxHeight = '200px'; }
      if (plus) {
        plus.style.transform = 'rotate(45deg)';
        plus.style.background = 'var(--green)';
        plus.style.color = 'var(--paper)';
      }
      if (btn) btn.setAttribute('aria-expanded', 'true');
    }

    items.forEach(function (item) {
      var btn = item.querySelector('.faq-toggle');
      if (!btn) return;
      btn.addEventListener('click', function () {
        var isOpen = btn.getAttribute('aria-expanded') === 'true';
        // Comme le React : un seul ouvert à la fois.
        items.forEach(close);
        if (!isOpen) open(item);
      });
    });
  }
})();
