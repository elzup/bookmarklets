javascript: (() => {
  document.querySelectorAll('.post').forEach((e) => {
    const resNum = e.getElementsByClassName('number')[0].innerText;
    const mes = e.getElementsByClassName('message')[0];

    const match = mes.innerText
      .split('\n')
      .map((line) => /^.*\d+( .+\/.+){6}$/.exec(line))
      .filter(Boolean);
    if (!match || !match[0] || !match[0][0]) return;

    const table = document.createElement('table');
    table.setAttribute('border', '1');
    const tr = document.createElement('tr');

    const meta = ['5c' + 'h', '-' + resNum];
    meta.concat(match[0][0].split(/ |\//g)).forEach((c) => {
      const td = document.createElement('td');
      td.appendChild(document.createTextNode(c));
      tr.appendChild(td);
    });
    table.appendChild(tr);
    mes.appendChild(table);
  });
})();