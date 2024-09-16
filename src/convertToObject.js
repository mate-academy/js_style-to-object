'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};
  const stylesArray = sourceString.replace(/\n\s+|;\n$/g, '').split(';');

  for (let i = 0; i < stylesArray.length; i++) {
    stylesArray[i] = stylesArray[i].split(': ');
    stylesObject[stylesArray[i][0]] = stylesArray[i][1];
  }

  return stylesObject;
}

module.exports = convertToObject;
