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
  const result = {};

  const paramArray = sourceString.split(';');

  for (const param of paramArray) {
    const key = param.split(':')[0];
    const val = param.split(':')[1];

    if (val !== undefined) {
      result[key.trim()] = val.trim();
    };
  };

  return result;
}

module.exports = convertToObject;
