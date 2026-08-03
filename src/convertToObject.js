'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((styles, declaration) => {
    const separatorIndex = declaration.indexOf(':');

    if (separatorIndex === -1) {
      return styles;
    }

    const property = declaration.slice(0, separatorIndex).trim();
    const value = declaration.slice(separatorIndex + 1).trim();

    if (property) {
      styles[property] = value;
    }

    return styles;
  }, {});
}

module.exports = convertToObject;
