'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 *   (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const resultObjeckt = {};
  const curentString = sourceString
    .split('\n')
    .join('');

  curentString
    .split(';')
    .map(element => element
      .split(':'))
    .forEach(element => {
      if (element.length === 2) {
        resultObjeckt[element[0].toString().trim()]
        = element[1].toString().trim();
      }
    });

  return resultObjeckt;
}

module.exports = convertToObject;
