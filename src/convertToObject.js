'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * Функція приймає рядок зі стилями
 * (див. приклад у [stylesString.js](./stylesString.js))
 * і повертає об'єкт, ключами якого є властивості CSS
 * і значення — це значення пов'язаних властивостей CSS
 * (див. приклад у [тестовому файлі](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const massiv = sourceString.split(';');
  const result = {};

  massiv.forEach(item => {
    const values = item.split(':');

    if (values.length === 2) {
      result[values[0].trim()] = values[1].trim();
    }
  });

  return result;
}

module.exports = convertToObject;
