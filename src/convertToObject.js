'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = sourceString
    .split(';')
    .map((rule) => rule.trim())
    .filter((rule) => rule.includes(':'))
    .reduce((styles, rule) => {
      const colonIndex = rule.indexOf(':');
      const property = rule.slice(0, colonIndex).trim();
      const value = rule.slice(colonIndex + 1).trim();

      if (property && value) {
        styles[property] = value;
      }

      return styles;
    }, {});

  return stylesObject;
}

module.exports = convertToObject;
