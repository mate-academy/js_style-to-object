'use strict';

'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString || !sourceString.trim()) {
    return {};
  }

  return sourceString
    .split(';')
    .map((declaration) => declaration.trim())
    .filter((declaration) => declaration)
    .reduce((acc, declaration) => {
      const colonIndex = declaration.indexOf(':');

      if (colonIndex !== -1) {
        const property = declaration.substring(0, colonIndex).trim();
        const value = declaration.substring(colonIndex + 1).trim();

        acc[property] = value;
      }

      return acc;
    }, {});
}

module.exports = convertToObject;
