'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
// function convertToObject(sourceString) {
//   // write your code here
// }
function convertToObject(sourceString) {
  const stylesObject = {};

  // Очищаємо зайві пробіли, розбиваємо на окремі стилі та проходимо по кожному
  sourceString
    .split(';') // розбиваємо за кожним оголошенням стилю
    .map((style) => style.trim()) // очищаємо пробіли
    .filter((style) => style.length > 0) // фільтруємо порожні рядки
    .forEach((style) => {
      // Витягуємо властивість і значення
      const [property, value] = style.split(':').map((item) => item.trim());

      // Додаємо до об'єкта
      if (property && value) {
        stylesObject[property] = value;
      }
    });

  return stylesObject;
}

module.exports = convertToObject;
