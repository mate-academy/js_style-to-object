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
  const properties = sourceString.split(';').map(x =>
    x.split(':')).flat().map(y => y.trim()).filter(z => z !== '');
  const result = {};

  for (let i = 0; i < properties.length; i += 2) {
    result[properties[i]] = properties[i + 1];
  }

  return result;
}

module.exports = convertToObject;
