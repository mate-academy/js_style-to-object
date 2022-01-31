'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
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
