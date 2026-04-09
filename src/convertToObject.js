'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const declarations = sourceString.split(';').map((item) => item.trim());
  const declarationPairs = declarations.map((item) => item.split(':'));

  const stylesObject = {};

  declarationPairs.forEach((pair) => {
    if (pair.length > 1) {
      const key = pair[0].trim();
      const value = pair[1].trim();

      stylesObject[key] = value;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
