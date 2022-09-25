'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js]
 * (./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';')
    .map(property => property.trim().split(':'))
    .map(property => property.map(part => part.trim()))
    .filter(property => property.length > 1)
    .reduce(callback, {});
}

function callback(accumulator, property) {
  const styleName = property[0];
  const styleValue = property[1];

  return {
    ...accumulator,
    [styleName]: styleValue,
  };
}

module.exports = convertToObject;
