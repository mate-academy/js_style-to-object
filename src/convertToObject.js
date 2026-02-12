'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((rule) => rule.trim().length > 0)
    .reduce((styles, rule) => {
      const splitIndex = rule.indexOf(':');

      if (splitIndex !== -1) {
        const property = rule.slice(0, splitIndex).trim();
        const value = rule.slice(splitIndex + 1).trim();

        styles[property] = value;
      }

      return styles;
    }, {});
}

module.exports = convertToObject;
