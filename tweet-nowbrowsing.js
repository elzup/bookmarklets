// Twitter 共有 Window を開く
// javascript:
(() => {
  const url = window.location.href;
  const encodedUrl = encodeURIComponent(url);
  const text = encodeURIComponent(`見てる - ${document.title}`);
  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${encodedUrl}&hashtags=NowBrowsing`;
  window.open(twitterShareUrl, '', 'width=550, height=420');
})();