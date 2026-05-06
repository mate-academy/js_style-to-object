'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';') // розділяємо декларації
    .map((rule) => rule.trim()) // прибираємо зайві пробіли
    .filter((rule) => rule) // прибираємо порожні рядки
    .reduce((acc, rule) => {
      const [key, value] = rule.split(':');

      if (key && value) {
        acc[key.trim()] = value.trim();
      }

      return acc;
    }, {});
}

module.exports = convertToObject;
