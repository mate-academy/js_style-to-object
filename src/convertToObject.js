'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssObject = {};

  sourceString
    .split(';')
    .map((cssKeyValuePair) => {
      return cssKeyValuePair
        .replaceAll('\n', '')
        .split(':')
        .map((propOrValue) => propOrValue.trim());
    })
    .filter((cssPropValue) => cssPropValue.length === 2)
    .map((cssPropValue) => {
      const formattedLongCssValue = cssPropValue[1].replaceAll(',', ',\n');

      return [cssPropValue[0], formattedLongCssValue];
    })
    .forEach((cssKeyValuePair) => {
      cssObject[cssKeyValuePair[0]] = cssKeyValuePair[1];
    });

  return cssObject;
}

module.exports = convertToObject;
