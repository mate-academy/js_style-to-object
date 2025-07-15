'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line && line.includes(':'))
    .forEach((line) => {
      const [keyPart, ...valueParts] = line.split(':');
      const key = keyPart.trim();
      const value = valueParts.join(':').trim();

      result[key] = value;
    });

  return result;
}

module.exports = convertToObject;
