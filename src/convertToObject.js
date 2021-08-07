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
  return sourceString.split(';')
    .map(field => field.trim())
    .filter(field => field.length)
    .map(field => field.split(':').map(stylePart => stylePart.trim()))
    .reduce((styleObject, property) => {
      return Object.assign(styleObject, { [property[0]]: property[1] });
    }, {});
}

module.exports = convertToObject;
