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

  const properties = sourceString.split(';');

  const trimmedProperties = properties.map(property => property.trimLeft());

  const valuesOfProperties = trimmedProperties.map(string => string.split(':'));

  const values = valuesOfProperties.map(property => property.map(
    elementOfProperty => elementOfProperty.trim()
  ));

  for (let i = 0; i < values.length; i++) {
    if (values[i].length > 1) {
      styles[values[i][0]] = values[i][1];
    }
  }

  return styles;
}

module.exports = convertToObject;
