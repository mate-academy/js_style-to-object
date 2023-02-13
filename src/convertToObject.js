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
  const arr = sourceString.split(';');

  return arr.reduce((object, value) => {
    const [key, val] = value.split(':');

    if (val) {
      object[key.trim()] = val.trim();
    }

    return object;
  }, {});
}

module.exports = convertToObject;
