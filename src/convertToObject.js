'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const arrs = sourceString.split(';');

  for (let i = 0; i < arrs.length; i++) {
    const ar = arrs[i].trim();

    if (ar === '') {
      continue;
    }

    const [key, value] = ar.split(':');

    result[key.trim()] = value.trim();
  }

  return result;
}

module.exports = convertToObject;
