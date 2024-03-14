'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const stylesObject = {};
  const stylesArray = sourceString.split(';');

  stylesArray.forEach((style) => {
    const stylePair = style.split(':');

    if (stylePair.length === 2) {
      const key = stylePair[0].trim();
      const value = stylePair[1].trim();

      stylesObject[key] = value;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
