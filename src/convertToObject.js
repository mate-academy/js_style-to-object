'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS
 * properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleRegex = /([\w-]+)\s*:\s*([^;]+)/g;
  const styleObject = {};

  let match;

  while ((match = styleRegex.exec(sourceString)) !== null) {
    const property = match[1].trim();
    const value = match[2].trim();

    styleObject[property] = value;
  }

  return styleObject;
}

module.exports = convertToObject;
