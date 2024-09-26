'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  sourceString.split(';')
    .map(rule => rule.split(':'))
    .filter(pair => pair.length === 2)
    .forEach((pair) => {
      const key = pair[0].trim();
      const value = pair[1].trim();
      result[key] = value;
    });
  return result;
}

module.exports = convertToObject;
