'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesPairs = sourceString.split(';');
  const stylesArray = stylesPairs.map((pair) => {
    return pair
      .trim()
      .split(':')
      .map((part) => part.trim());
  });

  const stylesObject = {};

  stylesArray.forEach(([key, value]) => {
    stylesObject[key] = value;
  });

  return stylesObject;
}

module.exports = convertToObject;
