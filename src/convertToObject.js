'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  if (!sourceString.length) {
    return result;
  }

  sourceString
    .split(';')
    .map((str) => str.trim())
    .filter((str) => str.length)
    .map((str) => str.split(':').map((subst) => subst.trim()))
    .forEach(([key, value]) => (result[key] = value));

  return result;
}

module.exports = convertToObject;
