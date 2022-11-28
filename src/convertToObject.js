'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayOfCouples = sourceString
    .split(';')
    .map(pair => pair.split(':'));

  const result = {};

  for (const couple of arrayOfCouples) {
    if (couple.length < 2) {
      continue;
    }

    const key = couple[0].trim();
    const value = couple[1].trim();

    result[key] = value;
  }

  return result;
}

module.exports = convertToObject;
