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

  const allProperties = sourceString.split(';');

  const trimmedProperties = allProperties.map(element => element.trim());

  const propertiesWithoutSpaces = trimmedProperties.filter(
    element => element !== ''
  );

  const property = propertiesWithoutSpaces.map(element => element.split(':'));

  const trimmedvalues = property.map(element => element[1].trim());

  const trimmedkeys = property.map(element => element[0].trim());

  for (let i = 0; i < trimmedvalues.length; i++) {
    styles[trimmedkeys[i]] = trimmedvalues[i];
  }

  return styles;
}

module.exports = convertToObject;
