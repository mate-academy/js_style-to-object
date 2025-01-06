'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const parts = sourceString.split(';');

  parts.forEach((part) => {
    const indexPosition = part.indexOf(':');

    if (indexPosition === -1) {
      return;
    }

    const key = part.slice(0, indexPosition).trim();
    const value = part.slice(indexPosition + 1).trim();

    if (key && value) {
      result[key] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
