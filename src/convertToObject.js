'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};
  const strings = sourceString.split(';');

  strings.forEach((string) => {
    const [property, value] = string.split(':');

    if (property && value) {
      result[property.trim()] = value.trim();
    }
  });

  return result;
}

module.exports = convertToObject;
