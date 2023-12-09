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
  const resultArray = [];

  sourceString.split(';')
    .map(i => i.split(':'))
    .map(i => i.map(k => {
      resultArray.push(k.trim());
    }));

  const b = resultArray.filter(i => i.length > 0);
  const resultObject = {};

  for (let i = 0; i < b.length; i += 2) {
    resultObject[b[i]] = b[(i + 1)];
  }

  return resultObject;
}

module.exports = convertToObject;
