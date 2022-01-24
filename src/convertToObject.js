'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * Функція приймає рядок зі стилями
 * і повертає об'єкт, де властивості CSS є ключами
 * і значення — це значення пов'язаних властивостей CSS
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const preResult = sourceString.split(';').map(elem => elem.split(':'));
  const result = {};

  for (const key of preResult) {
    if (key.length > 1) {
      result[key[0].trim()] = key[1].trim();
    }
  }

  return result;
}

module.exports = convertToObject;
