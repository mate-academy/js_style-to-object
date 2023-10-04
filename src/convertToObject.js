'use strict';

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
  const sourceArr = sourceString.split(';');
  const result = {};

  for (let i = 0; i < sourceArr.length; i++) {
    const elem = sourceArr[i].split(':');

    if (elem[0] !== undefined && elem[1] !== undefined) {
      result[elem[0].trim()] = elem[1].trim();
    }
  }

  return result;
}

module.exports = convertToObject;
