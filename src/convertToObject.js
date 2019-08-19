'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const caaArray = sourceString.split(';');
  const cssObject = {};

  for (let i = 0; i < caaArray.length - 1; i++) {
    const cssDeclaration = caaArray[i].trim().split(': ');
    cssObject[cssDeclaration[0]] = cssDeclaration[1];
  }

  return cssObject;
}

module.exports = convertToObject;
