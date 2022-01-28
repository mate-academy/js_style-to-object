'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sringWithoutTrim = sourceString.split(';')
    .map(el => el.split(':').map(prop => prop.trim()))
    .filter(element => element.length > 1);

  const result = Object.fromEntries(sringWithoutTrim);

  return result;
}

module.exports = convertToObject;
