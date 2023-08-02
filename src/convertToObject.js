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
  const styleObj = {};

  sourceString.split(';').forEach((prop) => {
    const [key, value] = prop.split(':');

    if (value !== undefined) {
      styleObj[key.trim()] = value.trim();
    }
  });

  return styleObj;
}

module.exports = convertToObject;
