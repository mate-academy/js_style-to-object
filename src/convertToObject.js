'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  return stylesString
    .split(';') // розбиваємо на окремі декларації
    .map((declaration) => declaration.trim()) // прибираємо зайві пробіли
    .filter(Boolean) // фільтруємо порожні строки
    .map((declaration) => declaration.split(':')) // розділяємо ключ та значення
    .filter((parts) => parts.length >= 2) // ігноруємо некоректні рядки
    .reduce((styles, [property, ...valueParts]) => {
      const key = property.trim();

      const value = valueParts.join(':').trim();

      styles[key] = value;

      return styles;
    }, {});
}

module.exports = convertToObject;
