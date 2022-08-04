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
  return sourceString
    .split('\n')
    .map(row => row.split(':'))
    .filter(values => values.length > 1)
    .reduce((object, [ prop, value ]) => {
      object[prop.trim()] = value.trim().slice(0, -1).trim();

      return object;
    }, {});
}

module.exports = convertToObject;
