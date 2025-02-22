'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (sourceString.length === 0) {
    return {};
  }

  const styleDeclarations = sourceString.trim().split(';');
  const cleanedStylePairs = styleDeclarations
    .map((pair) => pair.trim())
    .filter((style) => style !== '');

  const stylePairs = cleanedStylePairs.map((pair) => {
    return pair.trim().split(':');
  });
  const stylesObject = stylePairs.reduce((styles, style) => {
    styles[style[0].trim()] = style[1].trim();

    return styles;
  }, {});

  return stylesObject;
}

module.exports = convertToObject;
