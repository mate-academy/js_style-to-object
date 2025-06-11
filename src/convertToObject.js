'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const lines = sourceString.split(';');

  for (const line of lines) {
    const trimmedLine = line.trim();

    if (trimmedLine.length === 0) {
      continue;
    }

    const [key, ...valueParts] = trimmedLine.split(':');

    if (!key || valueParts.length === 0) {
      continue;
    }

    const value = valueParts.join(':').trim();

    result[key.trim()] = value;
  }

  return result;
}

module.exports = convertToObject;
