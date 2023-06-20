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

  return lines.reduce((convertedObject, line) => {
    const [key, value] = line.split(':');

    if (value) {
      convertedObject[key.trim()] = value.trim();
    }

    return convertedObject;
  }, {});
}

module.exports = convertToObject;
