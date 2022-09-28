'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const resultObj = {};

  sourceString.split(';')
    .map(el => el.split(':'))
    .filter(el => el[0] && el[1])
    .forEach(el => {
      resultObj[el[0].trim()] = el[1].trim();
    });

  return resultObj;
}

module.exports = convertToObject;
