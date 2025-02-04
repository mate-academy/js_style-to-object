'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(/;\s*/)

    .map((rule) => rule.trim())
    .filter((rule) => rule.length)
    .reduce((acc, rule) => {
      const [property, value] = rule.split(/:\s*/);

      if (property && value !== undefined) {
        acc[property.trim()] = value.trim();
      }

      return acc;
    }, {});
}

module.exports = convertToObject;
