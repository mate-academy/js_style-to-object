'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an
 * example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related
 * CSS properties (see an exampl in [test file]
 * (./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssObject = {};
  const makeArray = sourceString.replace(/(\n|\r)/gm, '')
    .split(':').map(item => item.trim()).join(':').split(';')
    .map(item => item.trim()).filter(item => item !== '');

  for (const item of makeArray) {
    const index = item.indexOf(':');

    cssObject[item.slice(0, index)] = item.slice(index + 1);
  }

  return cssObject;
}

module.exports = convertToObject;
