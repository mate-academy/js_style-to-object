'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (typeof sourceString !== 'string') {
    return {};
  }

  return Object.fromEntries(
    sourceString
      .split(';')
      .map((str) => str.trim())
      .filter((str) => {
        if (str.length === 0) {
          return false;
        }

        const idx = str.indexOf(':');

        if (idx <= 0) {
          return false;
        }

        return str.slice(0, idx).trim().length > 0;
      })
      .map((item) => {
        const idx = item.indexOf(':');
        const key = item.slice(0, idx).trim();
        const value = item.slice(idx + 1).trim();

        return [key, value];
      }),
  );
}

module.exports = convertToObject;
