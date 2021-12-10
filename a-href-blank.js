// link を target="_blank" にする
javascript: (() => {
  const elems = Array.from(document.querySelectorAll('a'));

  for (const a of elems) a.setAttribute('target', '_blank');
})();
