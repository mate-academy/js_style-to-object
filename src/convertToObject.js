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
  const pairs = sourceString.split(';').map(pair => pair.trim());
  const expectedObj = pairs.reduce((item, pair) => {
    if (pair) {
      const [key, value] = pair.split(':');

      item[key.trim()] = value.trim();
    }

    return item;
  }, {});

  return expectedObj;
}

module.exports = convertToObject;
