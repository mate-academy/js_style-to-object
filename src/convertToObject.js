'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const declarations = sourceString.split(';');

  const styleObject = declarations.reduce((styleMap, declaration) => {
    const colonIndex = declaration.indexOf(':');

    if (colonIndex === -1) {
      return styleMap;
    }

    const key = declaration.slice(0, colonIndex).trim();
    const value = declaration.slice(colonIndex + 1).trim();

    if (key && value) {
      styleMap[key] = value;
    }

    return styleMap;
  }, {});

  return styleObject;
}

module.exports = convertToObject;
