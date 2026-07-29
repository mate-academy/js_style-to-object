'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitArg = sourceString.split(';').filter((item) => item.trim());

  const result = {};

  for (const i of splitArg) {
    const [key, value] = i.split(':');

    result[key.trim()] = value.trim();
  }

  return result;
}

module.exports = convertToObject;
