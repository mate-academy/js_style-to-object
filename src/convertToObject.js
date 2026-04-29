'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitString = sourceString.split(';');
  const styleObject = {};

  splitString
    .filter((line) => line.trim() && line.includes(':'))
    .forEach((each) => {
      const parts = each.split(':');
      const key = parts[0].trim();
      const value = parts[1].trim();

      styleObject[key] = value;
    });

  return styleObject;
}

module.exports = convertToObject;
