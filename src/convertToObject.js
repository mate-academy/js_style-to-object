'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return Object.fromEntries(
    sourceString
      .split(';')
      .map((rule) => rule.trim())
      .filter((rule) => rule.length > 0)
      .map((rule) => {
        const colonIndex = rule.indexOf(':');
        const propertyName = rule.slice(0, colonIndex).trim();
        const propertyValue = rule.slice(colonIndex + 1).trim();

        return [propertyName, propertyValue];
      }),
  );
}

module.exports = convertToObject;
