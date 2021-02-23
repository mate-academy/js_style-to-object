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

  const trimmedArray = sourceArray.map(word => String(word).trim());

  const arrayWithValues = trimmedArray.map(string => string.split(':'));

  const arrayWithoutEmptyValues = arrayWithValues.filter(
    value => value.length > 1
  );

  const properties = {};

  for (let i = 0; i < arrayWithoutEmptyValues.length; i++) {
    properties[String(arrayWithoutEmptyValues[i][0]).trim()]
    = String(arrayWithoutEmptyValues[i][1]).trim();
  }

  return properties;
}

module.exports = convertToObject;
