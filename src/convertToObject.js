'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with
 * *styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related
 * CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceDict = {};

  for (const source of sourceString.split(';')) {
    if (source.includes(':')) {
      const [property, value] = source.trim().split(':');

      sourceDict[property.trim()] = value.trim();
    }
  }

  return sourceDict;
}

module.exports = convertToObject;
