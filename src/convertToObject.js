'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an example in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const arrayOfKeys = sourceString.split(';').map((item) => {
    return item
      .slice(item.lastIndexOf('\n') + 1, item.indexOf(':'))
      .trim();
  }).filter(item => item.length > 0);

  const arrayOfValues = sourceString.split(';').map((item) => {
    return item
      .slice(item.indexOf(':') + 1)
      .trim();
  }).filter(item => item.length > 0);

  arrayOfKeys.forEach((element, index) => {
    result[element] = arrayOfValues[index];
  });

  return result;
}

module.exports = convertToObject;
