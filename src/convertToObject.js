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
  const objectResult = {};

  for (const rule of sourceString.split(';')) {
    const [key, value] = rule.split(':');

    if (value) {
      objectResult[key.trim()] = value.trim();
    }
  }

  return objectResult;
}

module.exports = convertToObject;
