'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

  sourceString
    .split(';')
    .map((item) => item.trim())
    .filter((item) => item.length > 0)
    .map((item) => item.split(':').map((part) => part.trim()))
    .forEach(([key, value]) => {
      stylesObject[key] = value;
    });

  return stylesObject;
}

module.exports = convertToObject;
