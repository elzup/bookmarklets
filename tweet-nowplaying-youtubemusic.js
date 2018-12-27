// YouTube Music から再生中の曲を共有する
javascript: (() => {
  const songTitle = document.title;
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(`♫['w'] < ${songTitle}`);
  const hashtags = 'NowPlaying';
  const params = { url, text, hashtags };
  const query = Object.entries(params)
    .map(kv => kv.join('='))
    .join('&');
  const shareUrl = `https://twitter.com/intent/tweet?` + query;
  window.open(shareUrl, '', 'width=550, height=420');
})();
