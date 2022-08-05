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
  // write your code here
  const stylesToArr = sourceString.split(';');
  const stylesToArrArr = stylesToArr.map(item => item.split(':'))
    .filter(el => el.length !== 1);
  const result = {};

  stylesToArrArr.forEach(property => {
    result[property[0].trim()] = property[1].trim();
  });

  return result;
}

module.exports = convertToObject;
