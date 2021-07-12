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
  const arrStyle = sourceString.split(';')
    .map(pair => pair.split(':'));
  const result = {};

  for (const value of arrStyle) {
    for (let i = 0; i < value.length - 1; i++) {
      result[value[i].trim()] = value[i + 1].trim();
    }
  }

  return result;
}

module.exports = convertToObject;
