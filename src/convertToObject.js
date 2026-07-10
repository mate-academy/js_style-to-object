'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const stylesObj = {};

  sourceString.split(';').forEach((element) => {
    const parts = element.split(':');

    if (parts.length === 2) {
      const key = parts[0].trim();
      const value = parts[1].trim();

      stylesObj[key] = value;
    }
  });

  return stylesObj;
}

module.exports = convertToObject;
