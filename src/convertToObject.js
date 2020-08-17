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
  const strings = sourceString.split(';');

  for (const properties of strings) {
    const item = properties.split(':');

    if (/\w/.test(item[0])) {
      result[item[0].trim()] = item[1].trim();
    }
  }

  return result;
}

module.exports = convertToObject;
