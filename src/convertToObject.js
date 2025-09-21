'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceObject = {};

  sourceString
    .split(';')
    .map((declaration) => declaration.trim())
    .forEach((declaration) => {
      const [cssProperty, cssValue] = declaration
        .split(':')
        .map((part) => part.trim());

      sourceObject[cssProperty] = cssValue;
    });

  return sourceObject;
}

module.exports = convertToObject;
