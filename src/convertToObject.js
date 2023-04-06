'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js]
 * (./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const toDoArray = sourceString.split(';');
  const convertedObject = {};

  toDoArray
    .map(item => item.trim())
    .filter(value => value !== '').map(element => element.split(':'))
    .map(function(value) {
      convertedObject[value[0].trim()] = value[1].trim();
    });

  return convertedObject;
}

module.exports = convertToObject;
