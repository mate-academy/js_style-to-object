'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  return sourceString
    .split(';')
    .filter((declaration) => declaration.trim())
    .reduce((acc, declaration) => {
      const [cssProperty, cssValue] = declaration.split(':');

      if (cssProperty && cssValue) {
        acc[cssProperty.trim()] = cssValue.trim();
      }

      return acc;
    }, {});
}

module.exports = convertToObject;
