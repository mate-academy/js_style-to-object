'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssProperties = {};

  if (!sourceString.trim()) {
    return cssProperties;
  }

  sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line.includes(':'))
    .forEach((line) => {
      const [key, value] = line.split(':').map((part) => part.trim());

      if (key) {
        cssProperties[key] = value;
      }
    });

  return cssProperties;
}

module.exports = convertToObject;
