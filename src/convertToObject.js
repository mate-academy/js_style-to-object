'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((styleObject, declaration) => {
    const colonIndex = declaration.indexOf(':');

    if (colonIndex === -1) {
      return styleObject;
    }

    const key = declaration.slice(0, colonIndex).trim();
    const value = declaration.slice(colonIndex + 1).trim();

    if (!key || !value) {
      return styleObject;
    }

    return { ...styleObject, [key]: value };
  }, {});
}

module.exports = convertToObject;
