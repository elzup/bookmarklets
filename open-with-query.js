// javascript:
javascript: (() => {
  const q = location.search
    .substr(1)
    .split('&')
    .reduce((p, c) => {
      const [k, v] = c.split('=');
      return Object.assign(p, { [k]: decodeURIComponent(v) });
    }, {});
  const keywords = q.q.replace('+', ' ');
  const url = '//twitter.com/search?q=' + encodeURIComponent(keywords);
  location.href = url;
})();
