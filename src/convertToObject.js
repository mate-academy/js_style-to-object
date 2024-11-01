'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};

  sourceString
    .split(';')
    .filter((item) => item.includes(':'))
    .forEach((item) => {
      const colonIndex = item.indexOf(':');
      const property = item.slice(0, colonIndex).trim();
      const value = item.slice(colonIndex + 1).trim();

      styleObject[property] = value;
    });

  return styleObject;
}

module.exports = convertToObject;
