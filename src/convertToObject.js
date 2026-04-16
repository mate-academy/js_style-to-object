'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((rule) => rule.indexOf(':') !== -1)
    .reduce((stylesMap, rule) => {
      const colonIndex = rule.indexOf(':');
      const property = rule.slice(0, colonIndex).trim();
      const value = rule.slice(colonIndex + 1).trim();

      if (!property) {
        return stylesMap;
      }

      return { ...stylesMap, [property]: value };
    }, {});
}

module.exports = convertToObject;
