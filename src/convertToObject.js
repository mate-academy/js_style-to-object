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
  const splittingSource = sourceString.split('\n');
  const unvalidProperties = splittingSource
    .map(property => property.split(';'));
  const filteredProperties = unvalidProperties
    .filter(property => property[0].length > 3);
  const unionFiltered = filteredProperties
    .map(property => property.join('').split(':'));
  const validProperties = unionFiltered
    .map(value => [value[0].trim(), value[1].trim()]);

  const styles = {};

  for (let i = 0; i < validProperties.length; i++) {
    styles[validProperties[i][0]] = validProperties[i][1];
  }

  return styles;
}

module.exports = convertToObject;
