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
  const splitArr = sourceString.split(';').map(element => element.split(':'));
  const trimArr = splitArr.map(element => element.map(string => string.trim()));
  const filterArr = trimArr.filter(element => element.length > 1);
  const result = {};

  for (const element of filterArr) {
    result[`${element[0]}`] = element[1];
  }

  return result;

}

module.exports = convertToObject;
