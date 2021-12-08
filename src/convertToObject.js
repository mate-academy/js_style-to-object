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
  const css = {};

  const propertiesAndValues = [];

  sourceString
    .split(';')
    .forEach(prop => propertiesAndValues.push(prop.split(':')));

  propertiesAndValues.forEach(function(property) {
    if (property.length === 2) {
      const propName = property[0].trim();
      const propValue = property[1].trim();

      css[propName] = propValue;
    }
  });

  return css;
}

module.exports = convertToObject;
