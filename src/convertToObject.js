'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const convertingObject = {};

  sourceString.split(';').forEach((el) => {
    if (!el.trim()) {
      return; // пропускаємо пусті рядки
    }

    const [key, value] = el.split(':');

    convertingObject[key.trim()] = value.trim();
  });

  return convertingObject;
}

module.exports = convertToObject;
