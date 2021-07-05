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
  const result = {};
  const properties = sourceString.split(';').map(element =>
    element.split(':')).filter(
    property => property.length !== 1);

  properties.map(currentProperty => (
    result[currentProperty[0].trim()] = currentProperty[1].trim()));

  return result;
}

module.exports = convertToObject;
