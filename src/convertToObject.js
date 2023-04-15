/* eslint-disable max-len */
'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceObj = {};
  const sourceArr = sourceString.split(';')
    .map(v => v.split(':'))
    .map(v => v.map(x => x.trim()))
    .filter(x => x.length === 2);

  for (const prop of sourceArr) {
    sourceObj[prop[0]] = prop[1];
  }

  return sourceObj;
}

module.exports = convertToObject;
