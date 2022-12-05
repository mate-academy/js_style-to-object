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
  return sourceString.split(';').map(pair =>
    pair.split(':').map(tok => tok.trim()).filter(tok => tok.length !== 0))
    .filter(pair => pair.length !== 0)
    .reduce((prev, [property, value]) => ({
      ...prev, [property]: value,
    }), {});
}

module.exports = convertToObject;
