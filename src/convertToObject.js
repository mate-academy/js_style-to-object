'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .trim()
    .split(';')
    .filter(Boolean)
    .reduce((acc, rule) => {
      const [property, value] = rule.split(':').map((part) => part.trim());

      return { ...acc, [property]: value };
    }, {});
}

module.exports = convertToObject;
