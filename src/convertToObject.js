'use strict';

/**
 * Реалізувати функцію convertToObject:
 *
 * Функція отримує рядок зі стилями
 * (див. приклад у [stylesString.js](./stylesString.js))
 * і повертає об'єкт, де властивості CSS є ключами
 * а значеннями - значення пов'язаних властивостей
 * CSS (див. приклад у [тестовому файлі](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArray = sourceString.split(/\s*;\s*/);
  const stylesObject = {};

  for (let i = 0; i < stylesArray.length; i++) {
    const pair = stylesArray[i].split(/\s*:\s*/);

    if (pair.length === 2) {
      const key = pair[0].trim();
      const value = pair[1].trim();

      stylesObject[key] = value;
    }
  }

  return stylesObject;
}

module.exports = convertToObject;
