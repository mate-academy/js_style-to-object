'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const sources = sourceString
    .split(';')
    .map((s) => s.trim())
    .filter((s) => s.length);

  for (const source of sources) {
    const colonIndex = source.indexOf(':');
    const property = source.slice(0, colonIndex).trim();
    const value = source.slice(colonIndex + 1).trim();

    result[property] = value;
  }

  return result;
}

module.exports = convertToObject;
