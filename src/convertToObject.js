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
    .reduce((acc, el) => {
      const cleanLine = el.trim();

      if (cleanLine.includes(':')) {
        const [key, value] = cleanLine.split(':');

        if (key && value) {
          acc[key.trim()] = value.trim();
        }
      }

      return acc;
    }, {});
}

module.exports = convertToObject;
