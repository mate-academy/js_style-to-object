'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const stylesCssToObj = sourceString
    .split(';')
    .filter((style) => style.trim().length > 0)
    .reduce((acc, style) => {
      const [styleProperty, stylePropertyValue] = style.split(':');

      acc[styleProperty.trim()] = stylePropertyValue.trim();

      return acc;
    }, {});

  return stylesCssToObj;
}

module.exports = convertToObject;
