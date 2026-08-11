'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};

  const declarations = sourceString.split(';');

  for (const declaration of declarations) {
    if (!declaration.includes(':')) {
      continue;
    }

    const colonIndex = declaration.indexOf(':');
    const key = declaration.slice(0, colonIndex).trim();
    const value = declaration.slice(colonIndex + 1).trim();

    if (key) {
      styles[key] = value;
    }
  }

  return styles;
}

module.exports = convertToObject;
