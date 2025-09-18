'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (typeof sourceString !== 'string') {
    return {};
  }

  return sourceString
    .split(';')
    .map((rule) => rule.trim())
    .filter(Boolean)
    .reduce((styles, rule) => {
      const i = rule.indexOf(':');

      if (i === -1) {
        return styles;
      }

      const property = rule.slice(0, i).trim();
      const value = rule.slice(i + 1).trim();

      if (!property) {
        return styles;
      }

      styles[property] = value;

      return styles;
    }, {});
}

module.exports = convertToObject;
