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
  const convertedObject = {};

  const arr = sourceString
    .split(';')
    .filter(str => str.trim().length > 0)
    .map(prop => prop.split(':'));

  for (const [prop, value] of arr) {
    convertedObject[prop.trim()] = value.trim();
  }

  return convertedObject;
}

module.exports = convertToObject;
