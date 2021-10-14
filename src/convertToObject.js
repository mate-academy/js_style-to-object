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
  const stringArr = sourceString.split(';');

  const properties = stringArr.filter(property => property.includes(':'));

  const result = properties.reduce((prev, property) => {
    return {
      ...prev,
      [property.split(':')[0].trim()]: property.split(':')[1].trim(),
    };
  }, {});

  return result;
}

module.exports = convertToObject;
