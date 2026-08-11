'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((styles, declaration) => {
    if (!declaration.includes(':')) {
      return styles;
    }

    const colonIndex = declaration.indexOf(':');

    const key = declaration.slice(0, colonIndex).trim();
    const value = declaration.slice(colonIndex + 1).trim();

    if (key) {
      styles[key] = value;
    }

    return styles;
  }, {});
}

module.exports = convertToObject;
