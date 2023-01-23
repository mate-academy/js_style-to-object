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
  const arrayWithoutSpaces = [];

  sourceString
    .replace(/\n/g, '')
    .split(';')
    .forEach(element => arrayWithoutSpaces.push(element.trim()));

  const clearArray = [];

  arrayWithoutSpaces
    .filter(elem => elem.length > 0)
    .forEach(element => clearArray.push(element.trim().split(':')));

  const result = {};

  for (const item of clearArray) {
    result[item[0].trim()] = item[1].trim();
  }

  return result;
}

module.exports = convertToObject;
