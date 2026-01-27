'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};
  const lines = sourceString.split(';');

  for (let line of lines) {
    line = line.trim();

    if (line === '' || !line.includes(':')) {
      continue;
    }

    const colonIndex = line.indexOf(':');

    const key = line.slice(0, colonIndex).replace(/\s+/g, '').trim();

    const value = line.slice(colonIndex + 1).trim();

    if (key === '') {
      continue;
    }

    result[key] = value;
  }

  return result;
}

module.exports = convertToObject;
