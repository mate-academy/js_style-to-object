'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const style = sourceString
    .split(';')
    .filter((s) => s.trim().length)
    .map((s) => s.split(':'))
    .reduce((acc, item) => {
      const key = item[0].trim();
      const value = item[1].trim();

      acc[key] = value;

      return acc;
    }, {});

  return style;
}

module.exports = convertToObject;
