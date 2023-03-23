'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssStyles = {};

  sourceString
    .split('\n')
    .filter(prop => prop.trim().length > 2)
    .forEach(prop => {
      const keyVal = prop.split(':');

      cssStyles[keyVal[0].trim()] = keyVal[1].slice(0, -1).trim();
    });

  return cssStyles;
}

module.exports = convertToObject;
