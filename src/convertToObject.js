'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(styleString) {
  const declarations = styleString
    .split(';')
    .map((rule) => rule.trim())
    .filter((rule) => rule.length > 0);

  const pairs = declarations
    .map((rule) => {
      const colonIndex = rule.indexOf(':');

      if (colonIndex === -1) {
        return null;
      }

      const propety = rule.slice(0, colonIndex).trim();
      const value = rule.slice(colonIndex + 1).trim();

      if (!propety) {
        return null;
      }

      return [propety, value];
    })
    .filter((pair) => pair !== null);

  return Object.fromEntries(pairs);
}

module.exports = convertToObject;
