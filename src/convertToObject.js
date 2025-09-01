'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssDeclarations = {};

  sourceString.split(';').forEach((element) => {
    if (!element.trim()) {
      return;
    }

    const [key, value] = element.split(':');

    if (!key || !value) {
      return;
    }
    cssDeclarations[key.trim()] = value.trim();
  });

  return cssDeclarations;
}

module.exports = convertToObject;
