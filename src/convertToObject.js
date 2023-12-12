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
  const parsed = {};

  sourceString.split(';').forEach(value => {
    const pair = value.trim().split(':');

    for (let i = 0; i < pair.length; i++) {
      pair[i] = String(pair[i].trim());
    }

    if (pair[0] !== '') {
      parsed[pair[0]] = pair[1];
    }
  });

  return parsed;
}

module.exports = convertToObject;
