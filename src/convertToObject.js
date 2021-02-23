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
  const sourceValues = sourceString.split(';');

  const trimmedSourceValues = sourceValues.map(word => String(word).trim());

  const values = trimmedSourceValues.map(string => string.split(':'));

  const definedValues = values.filter(
    value => value.length > 1
  );

  const properties = {};

  for (let i = 0; i < definedValues.length; i++) {
    properties[definedValues[i][0].trim()]
    = definedValues[i][1].trim();
  }

  return properties;
}

module.exports = convertToObject;
