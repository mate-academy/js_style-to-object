'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

  const declarations = sourceString.split(';');

  declarations.forEach((part) => {
    const trimmed = part.trim();

    if (!trimmed) {
      return;
    }

    const colonIndex = trimmed.indexOf(':');

    if (colonIndex === -1) {
      return;
    }

    const cssProperty = trimmed.slice(0, colonIndex).trim();
    const cssValue = trimmed.slice(colonIndex + 1).trim();

    if (!cssProperty || !cssValue) {
      return;
    }

    stylesObject[cssProperty] = cssValue;
  });

  return stylesObject;
}

module.exports = convertToObject;
