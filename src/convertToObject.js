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
  const properties = sourceString.split(';');

  return properties.reduce((prev, curr) => {
    const currArr = curr.split(':');

    let key = currArr[0];
    let value = currArr[1];

    if (!key || !value) {
      return prev;
    }

    key = key.trim();
    value = value.trim();
    prev[key] = value;

    return prev;
  }, {});
}

module.exports = convertToObject;
