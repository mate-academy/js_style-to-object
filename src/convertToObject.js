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
  const properties = sourceString.split(';').map(
    element => element.split(':')).filter(
    property => property.length !== 1);

  const style = properties.reduce((previousProperty, currentProperty) => ({
    ...previousProperty,
    [currentProperty[0].trim()]: currentProperty[1].trim(),
  }), {});

  return style;
}

module.exports = convertToObject;
