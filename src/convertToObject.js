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
  const splitPairs = sourceString.split(';');

  const objectPairs = {};

  splitPairs.forEach(pairs => {
    const [property, value] = pairs.split(':').map(item => item.trim());

    if (property && value) {
      objectPairs[property] = value;
    }
  });

  return objectPairs;
}

module.exports = convertToObject;
