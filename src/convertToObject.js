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
  return sourceString
    .split(';')
    .filter(field => field.trim().length)
    .map(keyValue => keyValue.split(':').map(prop => prop.trim()))
    .reduce((object, property) => {
      return Object.assign(object, { [property[0]]: property[1] });
    }, {});
}

module.exports = convertToObject;
