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
  const pairs = sourceString.split(';');

  const objectFromString = pairs.reduce((obj, pair) => {
    const [key, value] = pair.split(':').map(item => item.trim());

    if (key && value) {
      obj[key] = value;
    }

    return obj;
  }, {});

  return objectFromString;
}
module.exports = convertToObject;
