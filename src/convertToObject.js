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
  const splitedProperty = sourceString.split(';');

  const filteredProperties = splitedProperty.map(
    item => item.split(':')).filter(
    item => item.length === 2);

  const cssProperties = filteredProperties.reduce(
    (prev, [key, value]) => ({
      ...prev,
      [key.trim()]: value.trim(),
    }), {});

  return cssProperties;
}

module.exports = convertToObject;
