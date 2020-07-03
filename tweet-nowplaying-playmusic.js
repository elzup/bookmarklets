// PlayMusic から共有
javascript: (() => {
  const song = document.querySelector('#currently-playing-title').innerHTML;
  const artist = document.querySelector('#player-artist').innerHTML;
  const album = document.querySelector('.player-album').innerHTML;
  const text = encodeURIComponent(
    'Now playing on Google Play Music: ' +
    song +
    ' - ' +
    artist +
    ' in ' +
    album
  );
  window.open(
    'https://twitter.com/intent/tweet?text=' + text + '&hashtags=NowPlaying',
    '',
    'width=550, height=420'
  );
})();