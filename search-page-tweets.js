// ページについてのツイートを Yahoo!リアルタイムツイート検索で調べる
// javascript:
(() => {
  const currentUrl = window.location.href;
  const encodedCurrentUrl = encodeURI(currentUrl);
  const twitterSearchUrl =
    'https://search.yahoo.co.jp/realtime/search?ei=UTF-8&fr=rts_top&aq=-1&oq=&ts=4&p=' +
    encodedCurrentUrl;
  window.open(twitterSearchUrl);
})();