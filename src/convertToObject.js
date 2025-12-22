'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
'use strict';

function convertToObject(stylesString) {
  const result = {};

  if (!stylesString) {
    return result;
  }

  stylesString
    .split(';')
    .forEach(rule => {
      const trimmedRule = rule.trim();

      if (!trimmedRule || !trimmedRule.includes(':')) {
        return;
      }

      const colonIndex = trimmedRule.indexOf(':');

      const key = trimmedRule.slice(0, colonIndex).trim();
      const value = trimmedRule.slice(colonIndex + 1).trim();

      if (key && value) {
        result[key] = value;
      }
    });

  return result;
}

module.exports = convertToObject;
