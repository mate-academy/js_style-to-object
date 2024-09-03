'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};

  sourceString
    .split(/\s*;\s*/)
    .map((item) => item.split(':'))
    .filter((item) => item.length >= 2)
    .map((item) => {
      const key = item[0].trim();
      const value = item[1].trim();

      styleObject[key] = value;
    });

  return styleObject;
}

module.exports = convertToObject;
