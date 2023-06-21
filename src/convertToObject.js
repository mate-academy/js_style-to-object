'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const array = sourceString.split(';').filter(item => item !== '');

  const obj = array.reduce((result, item) => {
    const [key, value] = item.split(':');

    if (key && value) {
      const trimmedKey = key.trim();
      const trimmedValue = value.trim();

      result[trimmedKey] = trimmedValue;
    }

    return result;
  }, {});

  return obj;
}

module.exports = convertToObject;
