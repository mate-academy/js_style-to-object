'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(/;\s*/g) // Розділяємо рядок на окремі CSS-правила за допомогою ";"
    .filter(Boolean) // Видаляємо порожні елементи
    .map((rule) => rule.split(/:\s*/))
    .filter((pair) => pair.length === 2)
    .reduce((result, [key, value]) => {
      result[key.trim()] = value.trim(); // Видаляємо зайві пробіли

      return result;
    }, {});
}

module.exports = convertToObject;
