'use strict';

/**
 * @param {string} sourceString
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};

  // розділяємо CSS на правила по ;
  const rules = sourceString.split(';');

  rules.forEach((rule) => {
    // обрізаємо зайві пробіли, таби та переводи рядків
    const cleaned = rule
      .replace(/^[\s\t\r\n]+/, '')
      .replace(/[\s\t\r\n]+$/, '');

    if (!cleaned) {
      return;
    }

    const [key, ...rest] = cleaned.split(':');

    if (!rest.length) {
      return;
    }

    // значення: обрізаємо лише зовнішні пробіли, \t, \r, \n
    const value = rest
      .join(':')
      .replace(/^[ \t\r\n]+/, '')
      .replace(/[ \t\r\n]+$/, '');

    styleObject[key.trim()] = value;
  });

  return styleObject;
}

module.exports = convertToObject;
