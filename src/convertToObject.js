'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((rule) => rule.trim())
    .filter((rule) => rule)
    .reduce((acc, rule) => {
      const [key, value] = rule.split(':').map((part) => part.trim());

      if (key && value) {
        acc[key] = value;
      }

      return acc;
    }, {});
}

module.exports = convertToObject;
