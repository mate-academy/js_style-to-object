'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const params = sourceString.split(';');

  for (const param of params) {
    if (param.trim().length > 0) {
      const keyValue = param.split(':');

      result[keyValue[0].trim()] = keyValue[1].trim();
    }
  }

  return result;
}

module.exports = convertToObject;
