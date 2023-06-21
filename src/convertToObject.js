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
  const resultObject = {};
  const properties = sourceString
    .split(';')
    .filter(property => property.trim().length > 0)
    .map((row) => row.split(':'));

  for (const [row, value] of properties) {
    resultObject[row.trim()] = value.trim();
  }

  return resultObject;
};

module.exports = convertToObject;
