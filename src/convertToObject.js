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
  const splitByWord = sourceString.split(';')
    .map(string => string.trim())
    .map(property => property.split(':'));

  const withoutEmptyString = splitByWord.filter(
    miniArray => miniArray.length === 2);

  const trimStrings = withoutEmptyString.map(
    miniArray => miniArray.map(string => string.trim()));

  const result = {};

  trimStrings.map(miniArray => pushingToObject(result, miniArray));

  return result;
}

function pushingToObject(obj, array) {
  obj[array[0]] = array[1];
}

module.exports = convertToObject;
