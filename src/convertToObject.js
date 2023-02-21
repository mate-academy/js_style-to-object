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
  const newObject = {};

  sourceString.split(';')
    .map(element => element.trim())
    .filter(element => element.length > 0)
    .map(element => element.split(':')
      .map(part => part.trim()))
    .map(element => (newObject[element[0]] = element[1]));

  return newObject;
};

module.exports = convertToObject;
