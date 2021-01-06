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
  const styles = sourceString.split(';')
    .map(style => style.split(':'));

  const result = {};

  for (const [key, value] of styles) {
    if (key && value) {
      result[key.trim()] = value.trim();
    }
  }

  return result;
}

module.exports = convertToObject;
