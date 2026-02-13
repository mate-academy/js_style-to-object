'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((styleObject, rule) => {
    const cleanRule = rule.trim();

    if (cleanRule === '') {
      return styleObject;
    }

    const firstColonIndex = cleanRule.indexOf(':');

    if (firstColonIndex === -1) {
      return styleObject;
    }

    const property = cleanRule.slice(0, firstColonIndex).trim();
    const value = cleanRule.slice(firstColonIndex + 1).trim();

    if (property) {
      styleObject[property] = value;
    }

    return styleObject;
  }, {});
}

module.exports = convertToObject;
