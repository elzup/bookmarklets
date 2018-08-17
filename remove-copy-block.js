javascript: (() => {
  const unbinder = (e) => {
    try {
      e.oncopy = null;
      e.onmousedown = null;
      e.oncontextmenu = null;
      e.onselectstart = null;
      e.style.webkitUserSelect = 'auto';
    } catch (a) {}
    try {
      $(e).unbind('contextmenu');
    } catch (a) {}
  };
  unbinder(document);
  for (e of document.getElementsByTagName('*')) {
    unbinder(e);
  }
})();
