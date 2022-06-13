'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObj = {};
  const stylesArray = sourceString
    .split(';')
    .map(element => element.trim().split(':'))
    .filter(arr => arr.length > 1);

  for (const style of stylesArray) {
    const key = style[0].trim();
    const value = style[1].trim();

    stylesObj[key] = value;
  }

  return stylesObj;
}

module.exports = convertToObject;
