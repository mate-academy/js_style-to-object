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
  // write your code here
  return sourceString
    .split(';')
    .map(x => x.trim().replace('/"/', ''))
    .filter(x => x.length > 0)
    .map(x =>
      x.split(':').map(y => y.trim())
    )
    .reduce(
      (accumulator, [key, value]) => {
        return {
          ...accumulator,
          [key]: value,
        };
      },
      {}
    );
}

module.exports = convertToObject;

// .map(([key, value]) => ({ [key]: value }))
