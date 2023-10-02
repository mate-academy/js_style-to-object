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
  const arr = sourceString.split('\n');
  const clearSpaces = arr.map((item) => item.trim());
  const clearSmallItems = clearSpaces.filter((item) => item.length > 1);
  const clearSemicolons = clearSmallItems.map((item) => item.slice(0, -1));
  const pairs = clearSemicolons.map((item) => item.split(':'));
  const trimPairs = pairs.map((item) => [item[0].trim(), item[1].trim()]);
  const object = {};

  trimPairs.forEach((item) => (object[item[0]] = item[1]));

  return object;
}

module.exports = convertToObject;
