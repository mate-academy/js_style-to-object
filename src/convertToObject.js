'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const properties = sourceString.split(';');
  const propertiesWithoutSymbol = properties.map(
    string => string.replace(/\n/g, '').trim());
  const withoutEmptyProperties = propertiesWithoutSymbol.filter(
    string => string.length > 1);
  const convertedProperties = withoutEmptyProperties.map(
    string => string.split(':'));
  const trimmedProperties = convertedProperties.map(
    string => string.map(
      element => element.trim()));

  return Object.fromEntries(trimmedProperties);
}

module.exports = convertToObject;
