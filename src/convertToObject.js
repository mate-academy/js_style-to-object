'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = sourceString
    .split(';')
    .filter((style) => style.includes(':'))
    .reduce((prev, style) => {
      const [key, value] = style.split(':');

      if (key && value) {
        prev[key.trim()] = value.trim();
      }

      return prev;
    }, {});

  return obj;
}

module.exports = convertToObject;
