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
  const createPropObj = {};
  const splitKeyValue = sourceString.split(';');

  for (let i = 0; i < splitKeyValue.length; i++) {
    const styleCssProp = splitKeyValue[i].trim().split(': ');
    createPropObj[styleCssProp[0]] = styleCssProp[1];
  }

  return createPropObj;
}

module.exports = convertToObject;
