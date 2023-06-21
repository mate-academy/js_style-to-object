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
  return sourceString
    .split(';')
    .map(element => trimStr(element))
    .filter((word) => word !== '')
    .reduce((styles, stringPart) => {
      const [key, value] = stringPart
        .split(':')
        .map((part) => trimStr(part));

      styles[key] = value;

      return styles;
    }, {}); ;
}

function trimStr(string) {
  return string.trim();
}

module.exports = convertToObject;
