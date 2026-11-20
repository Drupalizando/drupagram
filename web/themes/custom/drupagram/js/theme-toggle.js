(function (Drupal, once) {
  'use strict';

  var KEY = 'drupagram-theme';

  function stored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function store(value) {
    try { localStorage.setItem(KEY, value); } catch (e) { /* storage blocked: the choice just lasts for this page */ }
  }
  function systemDark() {
    return !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  }
  function current() {
    var s = stored();
    return s === 'dark' || s === 'light' ? s : (systemDark() ? 'dark' : 'light');
  }
  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.querySelectorAll('[data-theme-toggle]').forEach(function (button) {
      button.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
    });
  }

  // Runs in <head> (library header: true) so the right theme is set before first paint.
  apply(current());

  // Until the visitor picks a theme, follow the system when it changes (e.g. automatic dark at sunset).
  if (window.matchMedia) {
    var query = window.matchMedia('(prefers-color-scheme: dark)');
    var follow = function () { if (!stored()) { apply(current()); } };
    if (query.addEventListener) { query.addEventListener('change', follow); } else if (query.addListener) { query.addListener(follow); }
  }

  Drupal.behaviors.drupagramThemeToggle = {
    attach: function (context) {
      once('drupagram-theme-toggle', '[data-theme-toggle]', context).forEach(function (button) {
        button.setAttribute('aria-pressed', document.documentElement.getAttribute('data-theme') === 'dark' ? 'true' : 'false');
        button.addEventListener('click', function () {
          var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
          apply(next);
          store(next);
        });
      });
    }
  };
})(Drupal, once);
