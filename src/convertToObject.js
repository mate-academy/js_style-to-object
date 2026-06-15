'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((rule) => rule.trim())
    .reduce((styles, rule) => {
      const [property, value] = rule.split(':').map((part) => part.trim());

      styles[property] = value;

      return styles;
    }, {});
}

module.exports = convertToObject;
