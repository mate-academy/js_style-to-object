'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const parts = sourceString.split(';');

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i].trim();

    if (part === '') {
      continue;
    }

    const index = part.indexOf(':');
    const key = part.slice(0, index).trim();
    const value = part.slice(index + 1).trim();

    if (key !== '' && value !== '') {
      result[key] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
