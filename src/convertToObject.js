'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((row) => row.trim())
    .filter((row) => row.includes(':'))
    .reduce((acc, row) => {
      const [key, ...valueParts] = row.split(':');

      const property = key.trim();
      const value = valueParts.join(':').trim();

      acc[property] = value;

      return acc;
    }, {});
}

module.exports = convertToObject;
