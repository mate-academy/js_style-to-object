'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssKeysAndValues = sourceString
    .split(';')
    .filter((item) => item.trim().length)
    .reduce((prev, item) => {
      const index = item.indexOf(':');

      return {
        ...prev,
        [item.slice(0, index).trim()]: item.slice(index + 1).trim(),
      };
    }, {});

  return cssKeysAndValues;
}

module.exports = convertToObject;
