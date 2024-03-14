'use strict';

const SEMICOLON = ';';
const COLON = ':';
const TRIM_COLON_REGEX = new RegExp('\\s*:\\s*', 'g');

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
    .split(SEMICOLON)
    .map(item => item.trim().replace(TRIM_COLON_REGEX, COLON))
    .filter(value => value)
    .reduce((result, current) => {
      const [prop, value] = current.split(COLON);

      return {
        ...result,
        [prop]: value,
      };
    }, {});
}

module.exports = convertToObject;
