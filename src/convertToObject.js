'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an example in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const formattedString = sourceString
    .split(';')
    .map((string) => string.trim())
    .filter((string) => string);

  return formattedString.reduce((accumulator, string) => {
    const properties = string.split(':');
    const [ key, value ] = properties;

    return {
      ...accumulator, [key.trim()]: value.trim(),
    };
  }, {});
}

module.exports = convertToObject;
