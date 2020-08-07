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
  const result = {};

  const properties = sourceString.replace(/ +/g, ' ')
    .split('\n').join('').split(';').join().split(':').join().split(',');

  for (const i in properties) {
    properties[i] = properties[i].trim();
  }

  for (let i = 0; i < properties.length; i += 2) {
    if (properties[i]) {
      result[properties[i]] = properties[i + 1];
    }
  }
  delete result['\'\''];

  return result;
}

module.exports = convertToObject;
