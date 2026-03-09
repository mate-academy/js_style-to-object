'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(cssString) {
  const result = {};

  const lines = cssString.split(';');

  for (const line of lines) {
    const trimmedLine = line.trim();

    if (!trimmedLine) {
      continue;
    }

    const colonIndex = trimmedLine.indexOf(':');

    if (colonIndex !== -1) {
      const key = trimmedLine.slice(0, colonIndex).trim();
      const value = trimmedLine.slice(colonIndex + 1).trim();

      result[key] = value;
    }
  }

  return result;
}
module.exports = convertToObject;
