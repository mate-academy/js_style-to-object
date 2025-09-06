'use strict';

/**
 * @param {string} sourceString
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  if (!sourceString) {
    return result;
  }

  // Розбиваємо за ';' і обробляємо кожну декларацію окремо
  for (let chunk of String(sourceString).split(';')) {
    if (!chunk) {
      continue;
    }

    chunk = chunk.trim(); // прибираємо зайві пробіли навколо

    if (!chunk) {
      continue;
    }

    const colon = chunk.indexOf(':'); // шукаємо першу двокрапку

    if (colon === -1) {
      continue;
    } // не декларація — пропускаємо

    const prop = chunk.slice(0, colon).trim();

    if (!prop) {
      continue;
    }

    // Значення обрізаємо по краях, але внутрішні пробіли/переноси зберігаємо
    const value = chunk.slice(colon + 1).trim();

    if (!value && value !== '') {
      continue;
    }

    result[prop] = value;
  }

  return result;
}

module.exports = convertToObject;
