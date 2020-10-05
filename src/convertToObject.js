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
  // write your code here
  const formattedSource = sourceString.split(';')
    .map(property => {
      return property.trim().split(':');
    })
    .filter(element => element.length === 2)
    .map(element => element.map(property => property.trim()));

  return formattedSource.reduce((prev, property) => {
    return {
      ...prev,
      [property[0]]: property[1],
    };
  }, {});
}

module.exports = convertToObject;
