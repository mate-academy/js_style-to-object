'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';') //
    .filter((rule) => rule.trim() !== '')
    .reduce((styles, rule) => {
      const parts = rule.split(':');
      const key = parts[0].trim();
      const value = parts[1].trim();

      styles[key] = value;

      return styles;
    }, {});
}

module.exports = convertToObject;
