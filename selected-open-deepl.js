javascript: (() => {
  const keyword = window.getSelection && window.getSelection();
  if (!`${keyword}`) return window.alert('no text selected.');

  const url = `https://www.deepl.com/translator#en/ja/${keyword}`;
  window.open(url);
})();
