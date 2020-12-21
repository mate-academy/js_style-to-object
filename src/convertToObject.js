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
  const arr = sourceString.split(';')
    .map(property => property.trim())
    .filter(property => property.length > 0)
    .map(property => property.split(':'));

  return arr.reduce((total, property) => {
    return {
      ...total,
      [property[0].trim()]: property[1].trim(),
    };
  }, {});
}

module.exports = convertToObject;
