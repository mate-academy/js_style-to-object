'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const entries = sourceString.split(';').map((entry) => entry.trim());
  const result = {};

  for (const entry of entries) {
    if (entry.length === 0) {
      continue;
    }

    const keyValue = entry.split(':').map((item) => item.trim());

    result[keyValue[0]] = keyValue[1];
  }

  return result;
}

module.exports = convertToObject;
