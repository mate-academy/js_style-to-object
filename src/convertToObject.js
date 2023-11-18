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
  const styleObject = {};

  // Regular expression to match CSS property-value pairs
  const styleRegex = /([\w-]+)\s*:\s*([^;]+);/g;

  let match;

  while ((match = styleRegex.exec(sourceString)) !== null) {
    const [, property, value] = match;

    styleObject[property.trim()] = value.trim();
  }

  return styleObject;
}

module.exports = convertToObject;
