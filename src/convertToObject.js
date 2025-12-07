'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splittedStyles = sourceString
    .split(';')
    .filter((style) => style.trim());

  const stylesMap = splittedStyles.reduce((acc, style) => {
    const [styleName, styleValue] = style.split(':').map((str) => str.trim());

    if (styleName && styleValue) {
      acc[styleName] = styleValue;
    }

    return acc;
  }, {});

  return stylesMap;
}

module.exports = convertToObject;
