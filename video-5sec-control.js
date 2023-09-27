// 動画の5秒進める、戻るをキーボードで操作する
// javascript:
(() => {
  document.addEventListener('keydown', (event) => {
    const controls = {
      ArrowRight: 5,
      ArrowLeft: -5,
    };
    const change = controls[event.key];
    if (change === undefined) return;
    Array.from(document.getElementsByTagName('video'))
      .filter((v) => !v.paused)
      .forEach((v) => (v.currentTime += change));
  });
})();
