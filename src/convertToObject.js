'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')                   // розділяємо на окремі декларації
    .map(item => item.trim())     // прибираємо зайві пробіли
    .filter(item => item)         // видаляємо порожні рядки
    .reduce((acc, declaration) => {
      const [property, ...valueParts] = declaration.split(':');

      if (!property || valueParts.length === 0) {
        return acc;
      }

      const key = property.trim();                 // назва властивості
      const value = valueParts.join(':').trim();   // значення

      acc[key] = value;

      return acc;
    }, {});
}

module.exports = convertToObject;
