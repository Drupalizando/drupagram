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
  }

  // Runs in <head> (library header: true) so the right theme is set before first paint.
  apply(current());

  Drupal.behaviors.drupagramThemeToggle = {
    attach: function (context) {
      once('drupagram-theme-toggle', '[data-theme-toggle]', context).forEach(function (button) {
        function sync() {
          button.setAttribute('aria-pressed', document.documentElement.getAttribute('data-theme') === 'dark' ? 'true' : 'false');
        }
        sync();
        button.addEventListener('click', function () {
          var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
          apply(next);
          store(next);
          sync();
        });
      });
    }
  };
})(Drupal, once);
