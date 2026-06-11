'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const obj = {};
  const lines = sourceString.split(';');

  for (let line of lines) {
    line = line.trim();

    if (!line || !line.includes(':')) {
      continue;
    }

    const colonIndex = line.lastIndexOf(':');
    const key = line.slice(0, colonIndex).trim();
    const value = line.slice(colonIndex + 1).trim();

    obj[key] = value;
  }

  return obj;
}

module.exports = convertToObject;
