'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with resultStyles
 * (see an example in [resultStylesString.js](./resultStylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const resultStyle = {};
  const propertiesSplited = [];

  sourceString.split(';').filter(
    pair => pair.trim().length > 3
  ).forEach(
    fixedPair => propertiesSplited.push(fixedPair.split(':'))
  );

  propertiesSplited.filter(
    cssPair => cssPair[1] !== undefined
  ).forEach(
    validPair => (resultStyle[validPair[0].trim()] = validPair[1].trim())
  );

  return resultStyle;
}

module.exports = convertToObject;
