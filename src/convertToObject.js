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
  const styles = {};

  const properties = sourceString
    .split(';')
    .map(property => (
      property
        .trimLeft()
        .split(':')
        .map(elementOfProperty => elementOfProperty.trim())
    ));

  for (let i = 0; i < properties.length; i++) {
    if (properties[i].length > 1) {
      styles[properties[i][0]] = properties[i][1];
    }
  }

  return styles;
}

module.exports = convertToObject;
