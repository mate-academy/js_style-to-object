'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};

  const allLines = sourceString
    .split(';')
    .map((part) => part.trim())
    .filter(Boolean);

  for (const line of allLines) {
    const colonIndex = line.indexOf(':');
    const property = line.slice(0, colonIndex).trim();
    const value = line.slice(colonIndex + 1).trim();

    result[property] = value;
  }

  return result;
}

module.exports = convertToObject;
