'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  if (!sourceString) {
    return {};
  }

  return sourceString
    .split(';')
    .map((item) => item.trim())
    .filter((item) => item)
    .reduce((acc, item) => {
      const [property, value] = item.split(':').map((items) => items.trim());

      acc[property] = value;

      return acc;
    }, {});
}

module.exports = convertToObject;
