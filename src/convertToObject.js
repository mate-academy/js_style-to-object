'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((styleString) => styleString.split(':').map((rule) => rule.trim()))
    .filter(([key, value]) => key && value)
    .reduce((styles, [key, value]) => {
      styles[key] = value;

      return styles;
    }, {});
}

module.exports = convertToObject;
