'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  return sourceString.split(';').reduce((acc, declaration) => {
    const item = declaration.trim();

    if (item.length > 0) {
      const colonIndex = item.indexOf(':');
      const key = item.slice(0, colonIndex).trim();
      const value = item.slice(colonIndex + 1).trim();

      acc[key] = value;
    }

    return acc;
  }, {});
}

module.exports = convertToObject;
