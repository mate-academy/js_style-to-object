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
  const parts = sourceString
    .split(';')
    .map(el => el.trim()
      .split(':'))
    .filter(arr => arr.length === 2)
    .reduce((object, val,) => {
      return {
        ...object, [val[0].trim()]: val[1].trim(),
      };
    }, {});

  return parts;
}

module.exports = convertToObject;
