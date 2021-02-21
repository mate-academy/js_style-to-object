'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceArray = sourceString.split(';');

  const trimmedArray = sourceArray.map(word => (word + '').trim());

  const arrayWithValues = trimmedArray.map(string => string.split(':'));

  const arrayWithoutEmptyValues = arrayWithValues.filter(value =>
    value.length > 1);

  const property = {};

  function callback(array) {
    property[array[0].trim()] = array[1].trim();

    return property;
  }

  const result = arrayWithoutEmptyValues.map(callback)[0];

  return result;
}

module.exports = convertToObject;
