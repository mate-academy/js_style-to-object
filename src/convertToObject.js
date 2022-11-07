'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrSourceString = sourceString.split(';');
  const keyValue = arrSourceString.map(value =>
    value.trim().split(':').map(key => key.trim())
  );

  const newStr = {};

  keyValue.forEach(value => {
    if (value.length > 1) {
      newStr[value[0]] = value[1];
    }
  });

  return newStr;
}

module.exports = convertToObject;
