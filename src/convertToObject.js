'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  return sourceString.split(';').reduce((acc, rec) => {
    const entries = rec.split(':');

    if (entries.length === 2) {
      const key = entries[0].trim();
      const value = entries[1].trim();

      return {
        ...acc, [key]: value,
      };
    } else {
      return {
        ...acc,
      };
    }
  }, {});
}

module.exports = convertToObject;
