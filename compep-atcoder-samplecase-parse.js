// AtCoder の問題ページから compep のテストケースを生成する
//  userscript の方がいいかもしれない
// javascript:
(() => {
  const codes = [].map.call(
    document.querySelectorAll('.div-sample-copy'),
    (e) => e.nextSibling.innerHTML
  );
  const n = 2;
  const len = Math.round(codes.length / n, 10);
  const ret = [];
  for (let i = 0; i < len / 2; i++) {
    ret.push(codes.slice(i * n, i * n + n));
  }
  const text = ret
    .map((e) => {
      return e.join('----\n');
    })
    .join('====\n');
  document.write('<pre>' + text + '</pre>');
})();
