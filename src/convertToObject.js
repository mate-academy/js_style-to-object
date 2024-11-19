'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((item) => item.trim())
    .filter(Boolean)
    .reduce((acc, rule) => {
      const [key, value] = rule.split(':').map((part) => part.trim());

      acc[key] = value;

      return acc;
    }, {});
}

module.exports = convertToObject;
