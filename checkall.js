// Checkbox すべてトグルする
javascript: (() => {
  const inputs = Array.from(document.querySelectorAll('input[type=checkbox]'));
  if (inputs.length === 0) return;

  const checked = !inputs[0].checked;

  for (const input of inputs) {
    input.checked = checked;
  }
})();
