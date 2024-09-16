'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceArrFrom = sourceString.split(';');
  const stylesObject = {};
  for (let i = 0; i < sourceArrFrom.length; i++) {
    const stylesObjectFields = sourceArrFrom[i].trim().split(': ');
    stylesObject[stylesObjectFields[0]] = stylesObjectFields[1];
  }

  return stylesObject;
}

module.exports = convertToObject;
