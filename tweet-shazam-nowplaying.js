// Shazam から Twitter 共有 Window を開く
javascript: (() => {
  const songTitle = document.title.replace(' | Shazam', '');
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(`♫['w'] < ${songTitle}`);
  const hashtags = 'NowPlaying';
  const params = {
    url,
    text,
    hashtags,
  };
  const query = Object.entries(params)
    .map((kv) => kv.join('='))
    .join('&');
  const shareUrl = `https://twitter.com/intent/tweet?` + query;
  window.open(shareUrl, '', 'width=550, height=420');
})();