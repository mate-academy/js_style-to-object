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
  const finalObject = {};

  sourceString.split(';')
    .map(x => x.trim())
    .filter(x => x.length > 1)
    .map(x => x.split(':'))
    .forEach(([key, value]) => {
      finalObject[key.trim()] = value.trim();
    });

  return finalObject;
}

module.exports = convertToObject;
