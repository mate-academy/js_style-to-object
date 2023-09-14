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
  const NEW_LINE = '\n';
  const EMPTY_LINE = '';
  const SEMICOLON = ';';
  const COLON = ':';

  const properties = sourceString.split(NEW_LINE);
  const result = {};

  for (const i in properties) {
    properties[i] = properties[i].trim();

    if (properties[i] !== EMPTY_LINE && properties[i] !== SEMICOLON) {
      const temp = properties[i].split(COLON);

      result[temp[0].trim()] = temp[1].substring(0, temp[1].length - 1).trim();
    }
  }

  return result;
}

module.exports = convertToObject;
