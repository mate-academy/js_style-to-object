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
  const minCssPropertylength = 4;
  const result = sourceString
    .split(';')
    .filter(value => value.length > minCssPropertylength)
    .reduce((prev, value) => ({
      ...prev,
      [value.split(':')[0].trim()]: value.split(':')[1].trim(),
    }), {});

  return result;
}

module.exports = convertToObject;
