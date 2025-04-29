'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString.split(';').forEach((item) => {
    const line = item.trim();

    if (line.length === 0) {
      return;
    }

    const colonIndex = line.indexOf(':');

    if (colonIndex === -1) {
      return;
    }

    const key = line.slice(0, colonIndex).trim();
    const value = line.slice(colonIndex + 1).trim();

    result[key] = value;
  });

  return result;
}

module.exports = convertToObject;
