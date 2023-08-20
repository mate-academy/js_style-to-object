'use strict';
/* eslint max-len: ["error", { "ignoreComments": true }] */
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
  if (!sourceString) {
    return {};
  }

  const SEMICOLON = ';';
  const COLON = ':';

  const propsArray = sourceString
    .split(SEMICOLON)
    .filter(item => item.trim() !== '');

  const cssObject = propsArray.reduce((acc, item) => {
    const [key, value] = item.trim().split(COLON);

    acc[key.trim()] = value.trim();

    return acc;
  }, {});

  return cssObject;
}

module.exports = convertToObject;
