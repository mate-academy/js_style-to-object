'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssStyles = {};
  let keysWithValues = [];

  keysWithValues = sourceString.split(';').map(item =>
    item.slice(item.lastIndexOf('\n') + 1)
  ).filter(item =>
    item.indexOf(':') !== -1
  );

  for (const item of keysWithValues) {
    const colonIndex = item.indexOf(':');
    const key = item.slice(0, colonIndex).trim();
    const value = item.slice(colonIndex + 1).trim();

    cssStyles[key] = value;
  }

  return cssStyles;
}

module.exports = convertToObject;
