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
  const sourceOfStyles = sourceString
    .split(';')
    .map(param => param
      .split(':')
    );
  const result = {};

  for (const param of sourceOfStyles) {
    if (param[1]) {
      result[param[0].trim()] = param[1].trim();
    }
  }

  return result;
}

module.exports = convertToObject;
