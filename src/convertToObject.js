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
  const lines = sourceString.split(';');
  const convertedObject = {};

  lines.forEach((item) => {
    const line = item.split(':');
    const key = line[0].trim();
    const value = line[1];

    if (value) {
      convertedObject[key] = value.trim();
    }
  });

  return convertedObject;
}

module.exports = convertToObject;
