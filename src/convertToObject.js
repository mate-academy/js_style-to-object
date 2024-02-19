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
  const cleanString = sourceString.replace(/\/\*.*?\*\//g, '');
  const matches = cleanString.match(/([\w-]+)\s*:\s*([^;]+)/g);

  if (matches) {
    matches.forEach(match => {
      const parts = match.split(':').map(part => part.trim());
      const key = parts[0];
      const value = parts[1];

      styleObject[key] = value;
    });
  }

  return styleObject;
}

module.exports = convertToObject;
