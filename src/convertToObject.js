'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * np (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const properties = {};

  sourceString
    .split(';')
    .map(prop => prop.split(':').map(item => item.trim()))
    .filter(item => item.length === 2)
    .forEach(property => {
      properties[property[0]] = property[1];
    });

  return properties;
}

module.exports = convertToObject;
