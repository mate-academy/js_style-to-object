'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};
  const result = sourceString.split(';');

  for (const i of result) {
    const parts = i.split(':');

    if (parts.length === 2) {
      obj[parts[0].trim()] = parts[1].trim();
    }
  }

  return obj;
}

module.exports = convertToObject;
