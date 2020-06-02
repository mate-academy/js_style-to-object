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
  const stylesArray = sourceString.split(/[;:]/)
    .map(element => element.trim()).filter(item => item.length > 0);
  const stylesObject = {};

  for (let i = 0; i < stylesArray.length; i += 2) {
    stylesObject[stylesArray[i]] = stylesArray[i + 1];
  }

  return stylesObject;
}

module.exports = convertToObject;
