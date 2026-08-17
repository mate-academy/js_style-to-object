'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(styles) {
  const parts = styles.split(';');
  const result = {};

  for (const part of parts) {
    if (part.trim() === '') {
      continue;
    }

    const line = part.split(':');
    const [key, value] = line;
    const cleanKey = key.trim();
    const cleanValue = value.trim();

    result[cleanKey] = cleanValue;
  }

  return result;
}

module.exports = convertToObject;
