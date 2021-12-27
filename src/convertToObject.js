'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  // write your code here
  const convertedObject = sourceString
    .split(';')
    .filter(property => property.length > 4)
    .reduce(function(CSSObject, property) {
      const propPair = property.split(':');

      CSSObject[propPair[0].trim()] = propPair[1].trim();

      return CSSObject;
    }, {});

  return convertedObject;
}

module.exports = convertToObject;
