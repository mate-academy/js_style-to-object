'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line)
    .reduce((acc, line) => {
      const [property, value] = line.split(':').map((part) => part.trim());

      if (property && value) {
        acc[property] = value;
      }

      return acc;
    }, {});
}

module.exports = convertToObject;
