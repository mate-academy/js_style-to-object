'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  return sourceString
    .split(';') // розбиваємо по деклараціях
    .map((rule) => rule.trim()) // прибираємо зайві пробіли
    .filter((rule) => rule) // прибираємо пусті рядки
    .reduce((stylesObject, rule) => {
      const [property, value] = rule.split(':').map((part) => part.trim());

      if (property && value) {
        stylesObject[property] = value;
      }

      return stylesObject;
    }, {});
}

module.exports = convertToObject;
