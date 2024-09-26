'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArray = sourceString.split(';');
  const stylesObject = {};

  for (let i = 0; i < stylesArray.length - 1; i++) {
    const styleDeclaration = stylesArray[i].trim().split(': ');
    stylesObject[styleDeclaration[0]] = styleDeclaration[1];
  }

  return stylesObject;
}

module.exports = convertToObject;
