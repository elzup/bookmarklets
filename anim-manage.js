// link を target="_blank" にする

javascript: (() => {
  const getContents = () => Array.from($('.c-card').parent()).map((e) => $(e));
  // const isEmpty = (v) => v.length > 0;
  const sizeSelector = '.c-dot-list .c-dot-list--item:nth-of-type(1) .text';
  const isOver = ($e) => $e.find(sizeSelector).text() > '32';
  const nears = ['東京', '千葉', '埼玉'];
  const postSelector = '.c-dot-list .c-dot-list--item:nth-of-type(2) .text';
  const isFar = ($e) =>
    !nears.includes($e.find(postSelector).text().substr(0, 2));
  const isHide = ($e) => $e.find('.c-card--allhide').length > 0;
  const remove = ($e) => $e.remove();

  getContents().filter(isHide).forEach(remove);
  getContents().filter(isOver).forEach(remove);
  getContents().filter(isFar).forEach(remove);
})();
