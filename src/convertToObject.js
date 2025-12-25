'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .trim()
    .split(';')
    .reduce((mas, el) => {
      const cleanLine = el.trim();

      if (cleanLine.length > 4) {
        const [key, value] = cleanLine.split(':');

        if (key && value) {
          mas[key.trim()] = value.trim();
        }
      }

      return mas;
    }, {});
}

module.exports = convertToObject;
