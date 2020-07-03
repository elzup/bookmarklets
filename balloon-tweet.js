// javascript:
(() => {
  let x = 0;
  const texts = $('.tweet')
    .find('.tweet-text')
    .map((t, v) => v.innerText);
  const colors = [
    '#ff7f7f',
    '#ff7fbf',
    '#ff7fff',
    '#bf7fff',
    '#7f7fff',
    '#7fbfff',
    '#7fffff',
    '#7fffbf',
    '#7fff7f',
    '#bfff7f',
    '#ffff7f',
    '#ffbf7f',
  ];
  const iid = setInterval(() => {
    const text = texts[Math.floor(Math.random() * texts.length)];
    const element = document.createElement('div');
    element.innerHTML = text;
    element.style.position = 'absolute';
    element.style.zIndex = 10000;
    element.style.background =
      colors[Math.floor(Math.random() * colors.length)];
    element.style.color = 'white';
    element.style.padding = '5px';
    element.style.borderRadius = '5px';
    element.style.top = window.innerHeight * Math.random() + 'px';
    element.style.left = window.innerWidth * Math.random() + 'px';
    document.body.appendChild(element);

    let t = 0;
    const sid2 = setInterval(() => {
      if (++t === 100) {
        window.clearInterval(sid2);
        document.body.removeChild(element);
      }
      element.style.transform = `rotate(${Math.abs((t % 16) - 8) - 4}deg)`;
    }, 100);
    if (++x === 100) {
      window.clearInterval(iid);
    }
  }, 1000);
})();
