// Form の パスワードを表示する
javascript: (() => {
  const elems = Array.from(document.querySelectorAll('[type=password]'));
  elems.forEach((e) => e.setAttribute('type', 'text'));
})();