'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((cssRule) => cssRule.trim())
    .filter((trimmedRule) => trimmedRule !== '')
    .reduce((cssObject, trimmedRule) => {
      const ruleParts = trimmedRule.split(':');

      if (ruleParts.length !== 2) {
        return cssObject;
      }

      const property = ruleParts[0].trim();
      const value = ruleParts[1].trim();

      if (property && value) {
        cssObject[property] = value;
      }

      return cssObject;
    }, {});
}

module.exports = convertToObject;
