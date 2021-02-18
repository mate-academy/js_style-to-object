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
  const conversionString = sourceString.split(';').map(item =>
    item.trim()).filter(item =>
    item.length > 0).join(',').split(':').map(item =>
    item.trim()).join(',').split(',');

  const result = {};

  for (let i = 0; i < conversionString.length; i += 2) {
    result[conversionString[i]] = conversionString[i + 1];
  };

  return result;
}

module.exports = convertToObject;
