'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  return sourceString
    .split(';')
    .reduce((acc, declaration) => {
      const parts = declaration.split(':');
      const property = parts[0];
      const value = parts[1];

    if (property && value) {
      acc[property.trim()] = value.trim();
    }

    return acc;
  }, {});
}

module.exports = convertToObject;
