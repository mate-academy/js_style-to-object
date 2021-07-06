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
  const properties = sourceString
    .split(';')
    .map(property => property.split(':'))
    .filter(property => property.length > 1);

  const addProperty = (objects, property) => {
    return {
      ...objects,
      [property[0].trim()]: property[1].trim(),
    };
  };

  const cssProperties = properties.reduce(addProperty, {});

  return cssProperties;
}
module.exports = convertToObject;
