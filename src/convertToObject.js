'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssDeclarations = sourceString.trim().split(';');

  const cssProperties = cssDeclarations.reduce((cssRules, style) => {
    const trimmedStyle = style.trim();

    if (trimmedStyle) {
      const [property, value] = trimmedStyle.split(':');

      cssRules[property.trim()] = value.trim();
    }

    return cssRules;
  }, {});

  return cssProperties;
}

module.exports = convertToObject;
