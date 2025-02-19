'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code her
  return sourceString
    .split(';')
    .map((str) => str.trim())
    .filter(Boolean)
    .reduce((acc, str) => {
      const [key, value] = str.split(':').map((sub) => sub.trim());

      if (key && value !== undefined) {
        acc[key] = value;
      }

      return acc;
    }, {});
}

module.exports = convertToObject;
