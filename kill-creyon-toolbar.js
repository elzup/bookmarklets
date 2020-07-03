// Crayon のツールバーを消す
javascript: (() => {
  Array.from(document.querySelectorAll('.crayon-toolbar')).forEach(e =>
    e.remove()
  );
})();