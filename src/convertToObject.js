'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleDeclarations = sourceString.split(';');

  return styleDeclarations.reduce((cssStyles, currStyle) => {
    const parts = currStyle.split(':');

    if (parts.length !== 2) {
      return cssStyles;
    }

    const [name, value] = parts.map((part) => part.trim());

    cssStyles[name] = value;

    return cssStyles;
  }, {});
}

module.exports = convertToObject;
