'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const stylesAsObject = {};
  const stylesAsArray = sourceString.split(';')
    .map(element => element.trim())
    .filter(element => element.length !== 0)
    .map(element => element.split(':').map(item => item.trim()));

  for (const style of stylesAsArray) {
    stylesAsObject[style[0]] = style[1];
  }

  return stylesAsObject;
}

module.exports = convertToObject;
