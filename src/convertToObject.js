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
  const styles = sourceString.split(';')
    .map(string => string.trim()).filter(string => string);
  const result = {};
  let key;
  let value;

  for (const style of styles) {
    [key, value] = style.split(':').map(part => part.trim());

    result[key] = value;
  }

  return result;
}

module.exports = convertToObject;
