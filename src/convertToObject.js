'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const entries = sourceString
    .split(';')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const index = line.indexOf(':');

      if (index === -1) {
        return null;
      }

      const key = line.slice(0, index).trim();
      const value = line.slice(index + 1).trim();

      return [key, value];
    })
    .filter(Boolean)
    .filter(([key, value]) => key && value);

  const obj = entries.reduce((acc, [key, value]) => {
    acc[key] = value;

    return acc;
  }, {});

  return obj;
}

module.exports = convertToObject;
