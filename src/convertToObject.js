'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (
 * see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArray = sourceString.split('\n').map((item) => item.trim());
  const stylesObject = {};

  for (const styleLine of stylesArray) {
    if (!styleLine) {
      continue;
    };

    const [property, valueWithSemicolon] = styleLine.split(':').map(
      item => item.trim());

    if (property && valueWithSemicolon) {
      const value = valueWithSemicolon.replace(/;$/, '').trim();

      stylesObject[property] = value;
    }
  }

  return stylesObject;
}

module.exports = convertToObject;
