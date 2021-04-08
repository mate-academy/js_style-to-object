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
  const splitStr = sourceString.split(';').filter(value => value.length > 5);

  for (const value of splitStr) {
    result[value.slice(0, value.indexOf(':')).trim()] = value
      .slice(value.indexOf(':') + 1, value.length).trim();
  }

  return result;
}

module.exports = convertToObject;
