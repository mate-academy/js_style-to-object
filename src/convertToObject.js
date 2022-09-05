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
  const objCSS = {};

  const convert = sourceString
    .split(';\n')
    .filter((word) => word.length > 3)
    .map((word) => word.trim())
    .join('\n')
    .split(':')
    .map((word) => word.trim())
    .join(':')
    .split('\n')
    .map((word) => word.split(':'));

  for (const word of convert) {
    objCSS[word[0]] = word[1];
  }

  return objCSS;
}

module.exports = convertToObject;
