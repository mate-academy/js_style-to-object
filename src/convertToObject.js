'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line.includes(':'))
    .reduce((acc, line) => {
      const [key, value] = line.split(':');

      if (key && value !== undefined) {
        acc[key.trim()] = value.trim();
      }

      return acc;
    }, {});

  return styleObject;
}

module.exports = convertToObject;
