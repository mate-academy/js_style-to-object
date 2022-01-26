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
  const styles = {};
  const properties = sourceString
    .split(';')
    .map(property => property.trim());

  properties.forEach(function(property) {
    if (property) {
      const propertyPair = property
        .split(':')
        .map(p => p.trim());

      styles[propertyPair[0]] = propertyPair[1];
    }
  });

  return styles;
}

module.exports = convertToObject;
