'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 *
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const getPropWithValuesTrimmed = sourceString
    .split(';')
    .filter(propString => propString.includes(':'))
    .map(propString => propString.split(':')
      .map(item => item.trim()));

  return getPropWithValuesTrimmed.reduce((accum, item) =>
    ({
      ...accum,
      [item[0]]: item[1],
    }), {});
}

module.exports = convertToObject;
