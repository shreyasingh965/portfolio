/**
 * SHREYA PORTFOLIO · FOUNDATION SCRIPT
 * Continuous World Controller & Waypoint Navigation
 * ----------------------------------------------------------------------------
 * Integrates cleanly with pristine scrollcraft.js runtime without engine edits.
 */

(function () {
  'use strict';

  // 1. Mount Scrollcraft Engine on Document Body
  if (window.ScrollCraft && typeof window.ScrollCraft.mount === 'function') {
    window.ScrollCraft.mount(document.body);
  }

  // 2. Continuous World Spacer Safeguard (worldflight.md §7b)
  // Ensures spacer height is correctly measured after window & webfonts settle.
  function relayout() {
    window.dispatchEvent(new Event('resize'));
  }
  window.addEventListener('load', relayout);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(relayout);
  }

  // 3. Waypoint Definitions & Scroll Track Offsets (vh units)
  // Maps semantic IDs to target scroll positions along the continuous track
  var WAYPOINT_TARGETS = {
    hero: 0,
    about: 1.8,
    skills: 3.5,
    projects: 5.4,
    flagship: 9.4,
    experience: 11.6,
    contact: 12.6
  };

  var WAYPOINT_LABELS = [
    '01 // ORIGIN',
    '02 // PERSPECTIVE',
    '03 // SYSTEMS',
    '04 // LINEUP',
    '05 // THRESHOLD',
    '06 // THE PEAK',
    '07 // TERMINAL'
  ];

  var WAYPOINT_STATUS = [
    'SPATIAL CONTINUITY',
    'ARCHITECTURAL ETHOS',
    'SYSTEM MATRIX',
    'PRODUCTION LINEUP',
    'SILENCE // RECALIBRATING',
    'STRATA DECONSTRUCTION',
    'RESOLUTION & CONTACT'
  ];

  // 4. Telemetry HUD & Nav State Updates
  var sectorEl = document.getElementById('telemetry-sector');
  var statusEl = document.getElementById('telemetry-status');
  var navLinks = document.querySelectorAll('.site-nav__link');

  window.addEventListener('sc:waypoint', function (e) {
    var idx = e.detail.index;
    if (idx < 0 || idx >= WAYPOINT_LABELS.length) return;

    if (sectorEl) sectorEl.textContent = WAYPOINT_LABELS[idx];
    if (statusEl) statusEl.textContent = WAYPOINT_STATUS[idx];

    // Update active nav link state
    var activeId = 'hero';
    if (idx === 1) activeId = 'about';
    else if (idx === 2) activeId = 'skills';
    else if (idx === 3) activeId = 'projects';
    else if (idx === 4 || idx === 5) activeId = 'projects'; // Lineup / Flagship peak
    else if (idx === 6) {
      var scProgress = (window.scrollY || window.pageYOffset) / Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      activeId = scProgress > 0.92 ? 'contact' : 'experience';
    }

    for (var i = 0; i < navLinks.length; i++) {
      var link = navLinks[i];
      var target = link.getAttribute('data-nav-target');
      link.setAttribute('aria-current', target === activeId ? 'true' : 'false');
    }
  });

  // 5. Recruiter Fast-Scanning Anchor Interceptor
  // Intercepts nav clicks to smoothly scroll the continuous-world spacer track
  document.addEventListener('click', function (e) {
    var anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;

    var hash = anchor.getAttribute('href').slice(1);
    if (!hash) return;

    if (WAYPOINT_TARGETS.hasOwnProperty(hash)) {
      e.preventDefault();
      var targetVh = WAYPOINT_TARGETS[hash];
      var targetPx = Math.round(targetVh * window.innerHeight);
      window.scrollTo({
        top: targetPx,
        behavior: 'smooth'
      });
      // Set URL hash for bookmarking without immediate browser jump
      if (history.pushState) {
        history.pushState(null, null, '#' + hash);
      }
    }
  });

  // 6. Signature Move: 3D Architecture Exploder (Beat 5 Peak)
  // Coordinates the 3-stratum spatial deconstruction, peak reveal, and controlled reassembly
  (function initArchitectureExploder() {
    var exploderEl = document.getElementById('flagship-exploder');
    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

    if (!exploderEl) return;

    if (prefersReduced.matches) {
      exploderEl.style.setProperty('--exploder-y', '0px');
      exploderEl.style.setProperty('--exploder-z', '0px');
      exploderEl.style.setProperty('--exploder-rot-x', '0deg');
      exploderEl.style.setProperty('--exploder-rot-y', '0deg');
      return;
    }

    var targetRotX = 0;
    var targetRotY = 0;
    var currentRotX = 0;
    var currentRotY = 0;
    var currentExpansion = 0;

    // Pointer response: restrained desktop interactive depth
    if (finePointer.matches) {
      window.addEventListener('pointermove', function (e) {
        if (window.innerWidth <= 768) {
          targetRotX = 0;
          targetRotY = 0;
          return;
        }
        var nx = (e.clientX / window.innerWidth - 0.5) * 2;
        var ny = (e.clientY / window.innerHeight - 0.5) * 2;
        targetRotX = Math.max(-1, Math.min(1, ny)) * -3.0; // Max 3deg pitch
        targetRotY = Math.max(-1, Math.min(1, nx)) * 4.0;  // Max 4deg yaw
      }, { passive: true });

      window.addEventListener('mouseleave', function () {
        targetRotX = 0;
        targetRotY = 0;
      });

      window.addEventListener('blur', function () {
        targetRotX = 0;
        targetRotY = 0;
      });
    }

    function updateExploder() {
      if (prefersReduced.matches) return;

      // Read current segment & segment progress published on :root by ScrollCraft runtime
      var seg = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--sc-seg') || '0', 10);
      var segp = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--sc-segp') || '0');

      // Architectural Peak Progression:
      // 1. Assembled architecture at entry (expansion = 0)
      // 2. Initial separation & increasing spatial depth (segp 0 -> 0.45)
      // 3. Maximum separation / single engineered peak reveal (segp 0.45 -> 0.65)
      // 4. Controlled reassembly (segp 0.65 -> 1.0)
      // 5. Calm resolution (seg !== 5)
      var targetExpansion = 0;

      if (seg === 5) {
        if (segp < 0.45) {
          var t = Math.max(0, Math.min(1, segp / 0.45));
          targetExpansion = Math.sin(t * Math.PI * 0.5);
        } else if (segp <= 0.65) {
          targetExpansion = 1.0; // Sustained peak moment
        } else {
          var t2 = Math.max(0, Math.min(1, (segp - 0.65) / 0.35));
          targetExpansion = Math.cos(t2 * Math.PI * 0.5);
        }
      } else {
        targetExpansion = 0;
      }

      // Smooth lerp for continuous spatial transitions
      currentExpansion += (targetExpansion - currentExpansion) * 0.12;

      if (finePointer.matches && window.innerWidth > 768 && seg === 5) {
        currentRotX += (targetRotX - currentRotX) * 0.08;
        currentRotY += (targetRotY - currentRotY) * 0.08;
      } else {
        currentRotX += (0 - currentRotX) * 0.08;
        currentRotY += (0 - currentRotY) * 0.08;
      }

      var isMobile = window.innerWidth <= 768;
      var maxY = isMobile ? 45 : 90;
      var maxZ = isMobile ? 60 : 160;

      var yOffset = currentExpansion * maxY;
      var zOffset = currentExpansion * maxZ;

      exploderEl.style.setProperty('--exploder-y', yOffset.toFixed(1) + 'px');
      exploderEl.style.setProperty('--exploder-z', zOffset.toFixed(1) + 'px');
      exploderEl.style.setProperty('--exploder-p', currentExpansion.toFixed(4));
      exploderEl.style.setProperty('--exploder-rot-x', currentRotX.toFixed(2) + 'deg');
      exploderEl.style.setProperty('--exploder-rot-y', currentRotY.toFixed(2) + 'deg');

      requestAnimationFrame(updateExploder);
    }

    requestAnimationFrame(updateExploder);
  })();

  // 7. Dynamic Copyright Year Display
  var yearEl = document.getElementById('year-display');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // 8. 3D Hero Spatial Depth & Pointer Controller (Step 16)
  // Coordinates the 5-plane depth stack and restrained pointer response
  (function initHeroDepth() {
    var heroStage = document.getElementById('hero-stage');
    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

    if (!heroStage) return;

    if (prefersReduced.matches) {
      document.documentElement.style.setProperty('--hero-p', '0');
      document.documentElement.style.setProperty('--hero-mx', '0');
      document.documentElement.style.setProperty('--hero-my', '0');
      document.documentElement.style.setProperty('--hero-rot-x', '0deg');
      document.documentElement.style.setProperty('--hero-rot-y', '0deg');
      return;
    }

    var targetMx = 0;
    var targetMy = 0;
    var currentMx = 0;
    var currentMy = 0;
    var currentP = 0;

    // Pointer response: strictly gated to desktop with fine pointer
    if (finePointer.matches) {
      window.addEventListener('pointermove', function (e) {
        if (window.innerWidth <= 768) {
          targetMx = 0;
          targetMy = 0;
          return;
        }
        var nx = (e.clientX / window.innerWidth - 0.5) * 2;
        var ny = (e.clientY / window.innerHeight - 0.5) * 2;
        targetMx = Math.max(-1, Math.min(1, nx));
        targetMy = Math.max(-1, Math.min(1, ny));
      }, { passive: true });

      window.addEventListener('mouseleave', function () {
        targetMx = 0;
        targetMy = 0;
      });

      window.addEventListener('blur', function () {
        targetMx = 0;
        targetMy = 0;
      });
    }

    // Smooth continuous update loop for hero depth & pointer motion
    function updateHero() {
      if (prefersReduced.matches) return;

      // Read current segment & segment progress published by ScrollCraft engine
      var seg = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--sc-seg') || '0', 10);
      var segp = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--sc-segp') || '0');

      var targetP = 0;
      if (seg === 0) {
        targetP = Math.max(0, Math.min(1, segp));
      } else {
        // Once past waypoint 0, hero is fully transitioned out
        targetP = 1;
      }

      // Smooth lerp for scroll and pointer
      currentP += (targetP - currentP) * 0.15;
      if (finePointer.matches && window.innerWidth > 768) {
        currentMx += (targetMx - currentMx) * 0.08;
        currentMy += (targetMy - currentMy) * 0.08;
      } else {
        currentMx = 0;
        currentMy = 0;
      }

      var rotX = currentMy * -3.5;
      var rotY = currentMx * 4.5;

      document.documentElement.style.setProperty('--hero-p', currentP.toFixed(4));
      document.documentElement.style.setProperty('--hero-mx', currentMx.toFixed(4));
      document.documentElement.style.setProperty('--hero-my', currentMy.toFixed(4));
      document.documentElement.style.setProperty('--hero-rot-x', rotX.toFixed(2) + 'deg');
      document.documentElement.style.setProperty('--hero-rot-y', rotY.toFixed(2) + 'deg');

      requestAnimationFrame(updateHero);
    }

    requestAnimationFrame(updateHero);
  })();

  // 9. Interactive Desktop Card Physics (Subtle Pointer Tilt)
  (function initCardTilt() {
    var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!finePointer.matches || prefersReduced.matches) return;

    var cards = document.querySelectorAll('.project-card, .matrix-card, .credential-card');
    cards.forEach(function (card) {
      card.addEventListener('pointermove', function (e) {
        if (window.innerWidth <= 768) return;
        var rect = card.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width - 0.5;
        var y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.setProperty('--card-tilt-x', (y * -3.5).toFixed(2) + 'deg');
        card.style.setProperty('--card-tilt-y', (x * 3.5).toFixed(2) + 'deg');
      }, { passive: true });

      card.addEventListener('pointerleave', function () {
        card.style.setProperty('--card-tilt-x', '0deg');
        card.style.setProperty('--card-tilt-y', '0deg');
      });
    });
  })();

})();

