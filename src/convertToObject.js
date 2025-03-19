'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  return stylesString
    .split(';') // Розбиваємо рядок на окремі оголошення
    .map((line) => line.trim()) // Видаляємо зайві пробіли
    .filter((line) => line.includes(':')) // Відкидаємо порожні рядки
    .reduce((acc, declaration) => {
      const [property, value] = declaration.split(':');

      acc[property.trim()] = value.trim();

      return acc;
    }, {});
}

module.exports = convertToObject;
