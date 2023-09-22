'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS
 * properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';') // split into style property and value pairs
    .map(style => style.trim()) // removes whitespaces around
    .filter(style => style.length > 1) // skip empty strings
    .map(style => style.split(':')) // ctr arrays with property and its value
    .reduce((stylesObject, [property, value]) => {
      stylesObject[property.trim()] = value.trim();

      return stylesObject;
    }, {}); // creates an object {property: value, ...}
}

module.exports = convertToObject;
