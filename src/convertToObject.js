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
  const cssProperties = {};
  const itemString = sourceString.split(';');
  const keyAndValues = itemString.map(keyValue => keyValue.split(':'));
  const keyAndValuesDefinite = keyAndValues.filter(keyValue =>
    keyValue[0] !== undefined && keyValue[1] !== undefined);

  keyAndValuesDefinite.forEach(keyValue => {
    const property = keyValue[0].trim();
    const value = keyValue[1].trim();

    cssProperties[property] = value;
  });

  return cssProperties;
}

module.exports = convertToObject;
