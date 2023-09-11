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
  const sourceArr = sourceString.split(';')
    .map(property => property.trim())
    .filter(property => property !== '')
    .map(property => property.split(':'))
    .map(property => property.map(item => item.trim()));

  const resultObject = {};

  for (const ch of sourceArr) {
    resultObject[ch[0]] = ch[1];
  }

  return resultObject;
}

module.exports = convertToObject;
