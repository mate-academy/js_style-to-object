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

  function callback(array) {
    properties[array[0].trim()] = array[1].trim();

    return properties;
  }

  const styles = arrayWithoutEmptyValues.map(callback)
    .reduce((prev, current) => {
      return prev;
    });

  return styles;
}

module.exports = convertToObject;
