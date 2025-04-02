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
      const [property, value] = rule.split(':').map((item) => item.trim());

      if (property && value) {
        acc[property] = value;
      }

      return acc;
    }, {});
}

module.exports = convertToObject;
