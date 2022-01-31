'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const formatedArray = sourceString.split(';')
    .map(properties => properties.split(':')
      .map(keyValue => keyValue.trim()))
    .filter(emptyElement => emptyElement.length > 1);

  return Object.fromEntries(formatedArray);
}

module.exports = convertToObject;
