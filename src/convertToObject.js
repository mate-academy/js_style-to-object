'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};
  const totalStylesArray = sourceString.split(';');
  const clearedStylesArray = totalStylesArray
    .map((style) => style.trim())
    .filter((style) => style !== '');

  clearedStylesArray.forEach((style) => {
    const [cssName, cssValue] = style.split(':');

    if (cssName && cssValue) {
      const trimmedCssName = cssName.trim();
      const trimmedCssValue = cssValue.trim();

      stylesObject[trimmedCssName] = trimmedCssValue;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
