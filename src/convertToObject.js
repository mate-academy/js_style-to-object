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
  const styleString = sourceString.split(';');

  const resultObject = styleString.reduce((result, style) => {
    const parts = style.split(':');
    const trimmedParts = parts.map(part => part.trim());
    const [property, value] = trimmedParts;

    if (property && value) {
      result[property] = value;
    }

    return result;
  }, {});

  return resultObject;
}

module.exports = convertToObject;
