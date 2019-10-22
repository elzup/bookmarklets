// Crayon のツールバーを消す
javascript: (function() {
  Array.from(document.querySelectorAll('.crayon-toolbar')).forEach(e =>
    e.remove()
  );
})();
