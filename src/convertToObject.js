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
  const sourceArray = sourceString.split(';');
  const object = sourceArray.reduce((prev, item) => {
    const separatePoint = item.indexOf(':');
    const key = item.slice(0, separatePoint).trim();
    const value = item.slice(separatePoint + 1).trim();

    prev[key] = value;

    return prev;
  }, {});

  delete object[''];

  return object;
}

module.exports = convertToObject;
