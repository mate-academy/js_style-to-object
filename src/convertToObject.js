'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  return sourceString
    .split(';')
    .map((rule) => rule.trim())
    .filter((rule) => rule)
    .reduce((acc, rule) => {
      const [property, value] = rule.split(':');

      if (property && value) {
        acc[property.trim()] = value.trim();
      }

      return acc;
    }, {});
}

module.exports = convertToObject;
