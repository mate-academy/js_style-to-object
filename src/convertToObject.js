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
  const stylesObject = {};
  let result = sourceString.split(';');

  result = result.map(str => str.trim()
    .split(':')
    .map(unit => unit.trim()));

  result = result.filter(str => str.length > 1);

  for (const item of result) {
    stylesObject[item[0]] = item[1];
  }

  return stylesObject;
}

module.exports = convertToObject;
