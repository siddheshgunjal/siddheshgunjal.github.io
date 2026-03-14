(function() {
  'use strict';

  // ============================================================
  //  Theme Toggle (Dark default, persisted in localStorage)
  // ============================================================
  var THEME_KEY = 'portfolio-theme';

  function getPreferredTheme() {
    var stored = localStorage.getItem(THEME_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
    return 'dark';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
  }

  // Apply theme immediately (before DOM ready) to prevent flash
  applyTheme(getPreferredTheme());

  // ============================================================
  //  DOM Ready — Bind Toggle
  // ============================================================
  document.addEventListener('DOMContentLoaded', function() {
    var toggle = document.getElementById('theme-toggle');
    if (toggle) {
      toggle.addEventListener('click', function(e) {
        e.preventDefault();
        var current = document.documentElement.getAttribute('data-theme') || 'dark';
        applyTheme(current === 'dark' ? 'light' : 'dark');
      });
    }
  });
})();
