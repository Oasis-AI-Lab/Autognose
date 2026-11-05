/* ════════════════════════════════════════════════════════════════
   AUTOGNOSE · PORTAL BEHAVIOUR
   Injects the shared navigation and footer, drives the motion system,
   and powers the interactive system-overview diagram.
   No dependencies. Respects prefers-reduced-motion.
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  document.documentElement.classList.add('js');

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var root = document.body.getAttribute('data-root') || '';
  var page = document.body.getAttribute('data-page') || '';

  /* ── shared navigation ─────────────────────────────────────── */
  var LINKS = [
    ['overview', 'Overview', root || './'],
    ['research', 'Research', root + 'research/'],
    ['architecture', 'Architecture', root + 'architecture/'],
    ['documentation', 'Documentation', root + 'documentation/'],
    ['development', 'Development', root + 'development/'],
    ['about', 'About', root + 'about/']
  ];
  var nav = document.createElement('header');
  nav.className = 'nav';
  nav.innerHTML =
    '<div class="nav-in">' +
      '<a class="brand" href="' + (root || './') + '">Autognose <em>·</em> 自知</a>' +
      '<nav class="nav-links" aria-label="Primary">' +
        LINKS.map(function (l) {
          return '<a href="' + l[2] + '"' + (l[0] === page ? ' aria-current="page"' : '') + '>' + l[1] + '</a>';
        }).join('') +
        '<a class="ext" href="https://github.com/Oasis-AI-Lab/Autognose" target="_blank" rel="noopener">GitHub</a>' +
      '</nav>' +
      '<button class="nav-toggle" aria-expanded="false" aria-controls="mm">Menu</button>' +
    '</div>';
  var mm = document.createElement('div');
  mm.className = 'mobile-menu';
  mm.id = 'mm';
  mm.innerHTML =
    LINKS.map(function (l) {
      return '<a href="' + l[2] + '"' + (l[0] === page ? ' aria-current="page"' : '') + '>' + l[1] + '</a>';
    }).join('') +
    '<a class="ext" href="https://github.com/Oasis-AI-Lab/Autognose" target="_blank" rel="noopener">GitHub ↗</a>' +
    '<p class="mm-meta">Self-aware knowledge layer · MIT · no code yet</p>';
  document.body.prepend(mm, nav);

  var toggle = nav.querySelector('.nav-toggle');
  toggle.addEventListener('click', function () {
    var open = mm.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    toggle.textContent = open ? 'Close' : 'Menu';
  });
  mm.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { mm.classList.remove('open'); toggle.textContent = 'Menu'; }
  });
  var onScroll = function () { nav.classList.toggle('scrolled', scrollY > 24); };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* ── shared footer ─────────────────────────────────────────── */
  var footer = document.createElement('footer');
  footer.innerHTML =
    '<div class="wrap"><div class="foot-grid">' +
      '<div class="foot-brand">' +
        '<div class="fb-mark">Autognose <em>自知</em></div>' +
        '<p>A self-aware knowledge layer for RAG and agents. Know what you know. Know what you don\'t. Act accordingly.</p>' +
        '<p class="mono" style="font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:var(--faint);margin-top:16px">Research &amp; documentation only · no code yet</p>' +
      '</div>' +
      '<div class="foot-col"><h4>Navigate</h4><ul>' +
        LINKS.map(function (l) { return '<li><a href="' + l[2] + '">' + l[1] + '</a></li>'; }).join('') +
      '</ul></div>' +
      '<div class="foot-col"><h4>Documents</h4><ul>' +
        '<li><a class="ext" href="https://github.com/Oasis-AI-Lab/Autognose/blob/main/docs/DEVELOPMENT_SCOPE.md">Development scope</a></li>' +
        '<li><a class="ext" href="https://github.com/Oasis-AI-Lab/Autognose/blob/main/docs/EXPERIMENT_PLAN.md">Experiment plan</a></li>' +
        '<li><a class="ext" href="https://github.com/Oasis-AI-Lab/Autognose/blob/main/docs/CLAIM_REGISTER.md">Claim register</a></li>' +
        '<li><a href="' + root + 'report/">v0.1 survey</a></li>' +
      '</ul></div>' +
      '<div class="foot-col"><h4>Organization</h4><ul>' +
        '<li><a class="ext" href="https://github.com/Oasis-AI-Lab" target="_blank" rel="noopener">Oasis AI Lab</a></li>' +
        '<li><a class="ext" href="https://github.com/Oasis-AI-Lab/Autognose" target="_blank" rel="noopener">Repository</a></li>' +
        '<li><a class="ext" href="https://github.com/Oasis-AI-Lab/Autognose/issues" target="_blank" rel="noopener">Issues</a></li>' +
        '<li><span class="mono" style="font-size:11px;color:var(--dim)">MIT License</span></li>' +
      '</ul></div>' +
    '</div></div>' +
    '<div class="foot-base"><span>© 2026 CeaserZhao · Oasis AI Lab</span><span>Autognose 自知 — open core, MIT</span></div>';
  document.body.appendChild(footer);

  /* ── hero: progressive type reveal ─────────────────────────── */
  var hero = document.querySelector('.hero');
  if (hero && !reduceMotion) {
    hero.querySelectorAll('[data-kinetic]').forEach(function (el) {
      var words = el.textContent.trim().split(/\s+/);
      el.textContent = '';
      words.forEach(function (w, i) {
        var s = document.createElement('span');
        s.className = 'w'; s.textContent = w;
        s.style.transitionDelay = (0.1 + i * 0.06) + 's';
        el.appendChild(s);
        el.appendChild(document.createTextNode(' '));
      });
    });
    requestAnimationFrame(function () { requestAnimationFrame(function () { hero.classList.add('loaded'); }); });
  } else if (hero) { hero.classList.add('loaded'); }

  /* ── hero symbol: line construction from centre ────────────── */
  var sym = document.querySelector('.hero-symbol svg g');
  if (sym) {
    var NS = 'http://www.w3.org/2000/svg';
    var vb = (document.querySelector('.hero-symbol svg').getAttribute('viewBox') || '0 0 1200 800').split(/\s+/).map(Number);
    var cx = vb[0] + vb[2] / 2, cy = vb[1] + vb[3] / 2;
    var rays = [[-.9, 1.4], [-.4, 1.0], [.05, 1.7], [.5, 1.1], [.95, 1.5], [-.65, 2.0], [.3, 2.3], [-.15, 2.6]];
    rays.forEach(function (r, i) {
      var a = r[0], len = Math.min(vb[2], vb[3]) * 0.5 * r[1] * 0.9;
      var l = document.createElementNS(NS, 'line');
      l.setAttribute('x1', cx + Math.cos(a) * 60); l.setAttribute('y1', cy + Math.sin(a) * 40);
      l.setAttribute('x2', cx + Math.cos(a) * len); l.setAttribute('y2', cy + Math.sin(a) * len * 0.72);
      var d = Math.hypot(l.getAttribute('x2') - l.getAttribute('x1'), l.getAttribute('y2') - l.getAttribute('y1'));
      if (!reduceMotion) {
        l.style.strokeDasharray = d; l.style.strokeDashoffset = d;
        l.style.transitionDelay = (0.3 + i * 0.1) + 's';
        requestAnimationFrame(function () { requestAnimationFrame(function () { l.style.strokeDashoffset = 0; }); });
      }
      sym.appendChild(l);
      if (i % 2 === 0) {
        var c = document.createElementNS(NS, 'circle');
        c.setAttribute('cx', cx + Math.cos(a) * len * 0.8); c.setAttribute('cy', cy + Math.sin(a) * len * 0.58);
        c.setAttribute('r', 2.5); c.style.opacity = .8;
        sym.appendChild(c);
      }
    });
  }

  /* ── scroll reveals ────────────────────────────────────────── */
  var revealEls = document.querySelectorAll('.rv,.rv-l,.rv-r,.rule');
  if (!reduceMotion && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: .15, rootMargin: '0px 0px -6% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ── diagram: edge drawing + node exploration ──────────────── */
  var netSvg = document.querySelector('.net');
  if (netSvg) {
    var edges = netSvg.querySelectorAll('[data-edge]');
    var drawEdges = function () {
      edges.forEach(function (p, i) {
        if (reduceMotion) return;
        var len = p.getTotalLength();
        p.style.strokeDasharray = len; p.style.strokeDashoffset = len;
        p.getBoundingClientRect();
        p.style.transition = 'stroke-dashoffset .9s cubic-bezier(.16,1,.3,1) ' + (i * 0.12) + 's';
        p.style.strokeDashoffset = 0;
      });
    };
    if (reduceMotion || !('IntersectionObserver' in window)) { /* leave static */ }
    else {
      var eio = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { drawEdges(); eio.unobserve(netSvg); } });
      }, { threshold: .3 });
      eio.observe(netSvg);
    }

    var detail = document.querySelector('.detail');
    var nodes = netSvg.querySelectorAll('[data-node]');
    var show = function (g) {
      nodes.forEach(function (n) { n.classList.toggle('active', n === g); });
      if (!detail) return;
      var d = g.getAttribute('data-node');
      var data = JSON.parse(document.getElementById('node-data').textContent)[d];
      if (!data) return;
      detail.innerHTML =
        '<p class="dt-tag">' + data.status + '</p><h3>' + data.title + '</h3><p>' + data.body + '</p>';
    };
    nodes.forEach(function (g) {
      g.setAttribute('tabindex', '0');
      g.setAttribute('role', 'button');
      g.setAttribute('aria-label', g.querySelector('text') ? g.querySelector('text').textContent : 'node');
      g.addEventListener('click', function () { show(g); });
      g.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); show(g); }
      });
    });
  }

  /* ── timeline progress line ────────────────────────────────── */
  var tl = document.querySelector('.timeline');
  var bar = document.querySelector('.tl-progress');
  if (tl && bar && !reduceMotion) {
    var upd = function () {
      var r = tl.getBoundingClientRect();
      var passed = Math.min(Math.max(innerHeight * 0.62 - r.top, 0), r.height);
      bar.style.height = passed + 'px';
    };
    addEventListener('scroll', upd, { passive: true });
    addEventListener('resize', upd);
    upd();
  }
})();
