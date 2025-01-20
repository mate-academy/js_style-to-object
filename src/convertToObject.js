'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((line) => line.trim().includes(':'))
    .map((line) => line.trim())
    .reduce((result, line) => {
      const [key, ...valueParts] = line.split(':');
      const keyTrimmed = key.trim();
      const value = valueParts.join(':').trim();

      result[keyTrimmed] = value;

      return result;
    }, {});
}

module.exports = convertToObject;
