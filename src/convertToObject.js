'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((styles) => styles.split(':').map((rule) => rule.trim()))
    .filter(([key, val]) => key && val)
    .reduce((styles, [key, val]) => {
      styles[key] = val;

      return styles;
    }, {});
}

module.exports = convertToObject;
