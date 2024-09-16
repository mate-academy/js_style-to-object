'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssArray = sourceString.split(';');
  const cssObject = {};

  for (let i = 0; i < cssArray.length - 1; i++) {
    const cssDeclaration = cssArray[i].trim().split(': ');
    cssObject[cssDeclaration[0]] = cssDeclaration[1];
  }

  return cssObject;
}

module.exports = convertToObject;
