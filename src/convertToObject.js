'use strict';

/**
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
