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
  const sourceArrFrom = sourceString.split(';');
  const stylesObject = {};
  for (let i = 0; i < sourceArrFrom.length; i++) {
    const stylesObjectFields = sourceArrFrom[i].trim().split(': ');
    stylesObject[stylesObjectFields[0]] = stylesObjectFields[1];
  }

  return stylesObject;
}

module.exports = convertToObject;
