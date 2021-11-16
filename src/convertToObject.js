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
  const arr = sourceString.split(';').filter(str => str.length > 5)
    .map(str => str.split(':'));

  return arr.reduce((obj, [key, value]) => ({
    ...obj, [key.trim()]: value.trim(),
  }), {});
}

module.exports = convertToObject;
