'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
const convertToObject = (stylesString) => {
  return stylesString
    .split(';') // Розділяємо стилі за крапкою з комою
    .map((style) => style.trim()) // Видаляємо зайві пробіли
    .filter((style) => style.length) // Видаляємо порожні рядки
    .reduce((acc, style) => {
      const parts = style.split(':');
      const key = parts[0]?.trim();
      const value = parts[1]?.trim();

      if (key && value) {
        acc[key] = value;
      }

      return acc;
    }, {});
};

module.exports = convertToObject;

module.exports = convertToObject;
