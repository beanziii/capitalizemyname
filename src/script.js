'use strict';

const input = document.querySelector('.input');
const output = document.querySelector('.output');

const capitalizeName = function (name) {
  const lower = name.toLowerCase();
  const splitNames = lower.split(' ');
  const namesUpperCase = [];

  for (const n of splitNames) {
    namesUpperCase.push(n.replace(n[0], n[0].toUpperCase()));
  }

  return namesUpperCase.join(' ');
};

input.addEventListener('keyup', function () {
  let inputValue = input.value;
  output.textContent = capitalizeName(inputValue);
});
