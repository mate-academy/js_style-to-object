'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an example
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const finalObject = {};

  sourceString.split(';')
    .map(properties => properties.trim())
    .filter(properties => properties.length > 1)
    .map(properties => properties.split(':'))
    .forEach(([property, value]) => {
      finalObject[property.trim()] = value.trim();
    });

  return finalObject;
}

module.exports = convertToObject;
