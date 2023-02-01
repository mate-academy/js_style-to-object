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
  const object = sourceString.split(';').reduce((acc, item) => {
    const separator = item.indexOf(':');
    const key = item.slice(0, separator).trim();
    const value = item.slice(separator + 1).trim();

    acc[key] = value;

    return acc;
  }, {});

  delete object[''];

  return object;
}

module.exports = convertToObject;
