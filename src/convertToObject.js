'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (sourceString.length === 0) {
    return {};
  }

  const result = {};
  const strings = sourceString.split(';').map((str) => str.trim());

  strings.forEach((string) => {
    const [key, ...values] = string.split(':');
    const value = values.join('').trim();
    const trimmedKey = key.trim();

    if (trimmedKey && value) {
      result[trimmedKey] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
