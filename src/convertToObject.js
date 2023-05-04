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
  const stylePairs = sourceString.match(/([^:;]+)\s*:\s*([^;]*);?/g);
  const styleObject = {};

  for (const pair of stylePairs) {
    const [property, value] = pair.split(':');
    const trimmedProperty = property.trim();
    const trimmedValue = value.replace(/;/g, '').trim();

    styleObject[trimmedProperty] = trimmedValue;
  }

  return styleObject;
}

module.exports = convertToObject;
