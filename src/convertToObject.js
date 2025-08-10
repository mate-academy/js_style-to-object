'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylePairs = sourceString
    .split(';')
    .map((el) => el.trim())
    .filter(Boolean)
    .filter((el) => el.includes(':'))
    .map((el) => {
      const index = el.indexOf(':');
      const key = el.slice(0, index).trim();
      const val = el.slice(index + 1).trim();

      return [key, val];
    });

  return Object.fromEntries(stylePairs);
}

module.exports = convertToObject;
