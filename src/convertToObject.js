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
  const cssProperties = {};

  const lines = sourceString.split(';');
  const filteredLines = lines.filter(el => el.trim() !== '');

  for (const css of filteredLines) {
    const [code, value] = css.split(':');

    cssProperties[code.trim()] = value.trim();
  }

  return cssProperties;
}

module.exports = convertToObject;
