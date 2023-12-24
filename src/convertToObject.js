'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';')
    .map(declaration => declaration.split(':').map(trim))
    .filter(([property, value]) => property && value)
    .reduce((stylesObject, [property, value]) => {
      stylesObject[property] = value;

      return stylesObject;
    }, {});
}

function trim(str) {
  return str.trim();
}

module.exports = convertToObject;
