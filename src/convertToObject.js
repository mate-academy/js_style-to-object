'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related
 * CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let result = sourceString;

  result = result.split(';');

  result = result.map(str => str.trim()
    .split(':')
    .map(unit => unit.trim()));

  result = result.filter(str => str.length > 1);

  const obj = {};

  for (const item of result) {
    obj[item[0]] = item[1];
  }

  return obj;
}

module.exports = convertToObject;
