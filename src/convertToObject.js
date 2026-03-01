'use strict';

/**
 * @param {string} stylesString
 * @returns {Object}
 */
function convertToObject(stylesString) {
  return stylesString
    .split(';') // 1. Розбиваємо рядок на окремі правила за символом ";"
    .reduce((acc, declaration) => {
      // 2. Шукаємо першу двокрапку, щоб відділити ключ від значення
      const colonIndex = declaration.indexOf(':');

      // Якщо двокрапки немає (наприклад, порожній рядок між "; ;"), пропускаємо
      if (colonIndex === -1) {
        return acc;
      }

      // 3. Витягуємо ключ і значення, прибираючи зайві пробіли з обох боків
      const key = declaration.slice(0, colonIndex).trim();
      const value = declaration.slice(colonIndex + 1).trim();

      // 4. Додаємо до об'єкта, якщо ключ не порожній
      if (key) {
        acc[key] = value;
      }

      return acc;
    }, {});
}

module.exports = convertToObject;
