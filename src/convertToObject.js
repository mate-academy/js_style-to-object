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
  const arrayFromString = sourceString.split(';');
  const arrayOfPairs = arrayFromString.map(item => item.trim().split(': '));
  const noEmptyArray = arrayOfPairs.filter(array => array.length > 1);
  const objectFromArray = Object.assign(...noEmptyArray.map(
    ([key, value]) => ({ [key]: value })
  ));

  return objectFromArray;
}

module.exports = convertToObject;
