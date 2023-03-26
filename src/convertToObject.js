'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 *  [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylePairs = sourceString.trim().split(';');
  const styleObject = {};

  for (const pair of stylePairs) {
    if (pair.trim() === '') {
      continue;
    }

    const [key, value] = pair.split(':');

    styleObject[key.trim()] = value.trim();
  }

  return styleObject;
}

module.exports = convertToObject;
