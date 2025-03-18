'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';') // Розбиваємо рядок на декларації
    .map((s) => s.trim()) // Очищаємо кожну декларацію від зайвих пробілів
    .filter(Boolean) // Фільтруємо порожні рядки
    .reduce((result, declaration) => {
      const [property, value] = declaration.split(':').map((s) => s.trim());

      if (property && value) {
        result[property] = value; // Додаємо пару property-value в об'єкт
      }

      return result; // Повертаємо оновлений об'єкт
    }, {});
}

module.exports = convertToObject;
