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

  const str = sourceString
    .split(';')
    .map((item) => item.trim())
    .filter((item) => item.length > 1)
    .map((item) => item.replace(';', ''))
    .filter((item) => item.includes(':'))
    .reduce((acc, line) => {
      const parts = line.split(':');
      const rawKey = parts[0];
      const rawValue = parts[1];
      const key = rawKey.trim();
      const value = rawValue.trim();

      acc[key] = value;

      return acc;
    }, {});

  return str;
}

module.exports = convertToObject;
