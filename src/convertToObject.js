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
    .filter(property => property.length === 2);
  const addProperty = (styles, [key, value]) => {
    return {
      ...styles,
      [key.trim()]: value.trim(),
    };
  };

  return properties.reduce(addProperty, {});
}

module.exports = convertToObject;
