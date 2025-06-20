'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const keysAndValuesArr = sourceString.split(';');

  keysAndValuesArr.forEach((declaration) => {
    const trimmedArr = declaration.trim();

    const [key, value] = trimmedArr.split(':');

    if (key && value) {
      result[key.trim()] = value.trim();
    }
  });

  return result;
}

module.exports = convertToObject;
