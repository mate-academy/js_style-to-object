'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const lines = sourceString.trim().split(';');
  const result = {};

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line === '') {
      continue;
    }

    const separatorIndex = line.indexOf(':');

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim();

    result[key] = value;
  }

  return result;
}

module.exports = convertToObject;
