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
    .filter((rule) => rule.length > 0)
    .reduce((acc, rule) => {
      const [property, value] = rule.split(':');

      if (property && value) {
        const key = property.trim();
        const val = value.trim();

        acc[key] = val;
      }

      return acc;
    }, {});
}

module.exports = convertToObject;
